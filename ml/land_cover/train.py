from git.repo.base import Repo

import torch
import torch.nn as nn
import torchvision.models as models
from torchvision import datasets,transforms

class Model(nn.Module):
    def __init__(self,NUM_CLASSES):
        super().__init__()
        self.network = models.wide_resnet50_2(pretrained=True)
        n_inputs = self.network.fc.in_features
        self.network.fc = nn.Sequential(
                              nn.Linear(n_inputs, 256),
                              nn.ReLU(),
                              nn.Dropout(0.5),
                              nn.Linear(256, NUM_CLASSES),
                              nn.LogSoftmax(dim=1)
                                )
    def forward(self, xb):
        return self.network(xb)

    def freeze(self):
        for param in self.network.parameters():
            param.require_grad=False
        for param in self.network.fc.parameters():
            param.require_grad=True
    def unfreeze(self):
        for param in self.network.parameters():
            param.require_grad=True

def train():
    Repo.clone_from("https://github.com/pauldamsa/Eurosat-Project.git", "images")
    transform = transforms.Compose([transforms.Resize(size=(224,224)),
                                 transforms.CenterCrop(224),
                                 transforms.ToTensor()])
    dataset = datasets.ImageFolder('./images/images', transform=transform)
    dataloader = torch.utils.data.DataLoader(dataset, batch_size=32, shuffle=True)
    model = Model(10)
    criterion = nn.MSELoss()
    optimizer = torch.optim.SGD(model.parameters(),lr=0.01)

    for epoch in range(500):
        running_loss = 0.0
        for i, data in enumerate(dataloader, 0):
            inputs, labels = data
            optimizer.zero_grad()

            outputs = model(inputs)
            loss = criterion(outputs, labels)
            loss.backward()
            optimizer.step()

            running_loss += loss.item()
            if i % 2000 == 1999:    # print every 2000 mini-batches
                print('[%d, %5d] loss: %.3f' % (epoch + 1, i + 1, running_loss / 2000))
                running_loss = 0.0
    model.eval()
    m = torch.jit.script(model)
    torch.jit.save(m,'model.pt')



if __name__ == "__main__":
    train()
