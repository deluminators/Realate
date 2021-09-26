import pandas as pd
from scipy.stats import percentileofscore
from PIL import Image
import torch
from torchvision import transforms
from torch.autograd import Variable

model_path = "land_cover/experimentation/model.pt"

transform = transforms.Compose([transforms.Resize(224),
                                transforms.ToTensor()
                                ])

classes = {
    0: 'AnnualCrop',
    1: 'Forest',
    2: 'HerbaceousVegetation',
    3: 'Highway',
    4: 'Industrial',
    5: 'Pasture',
    6: 'PermanentCrop',
    7: 'Residential',
    8: 'River',
    9: 'SeaLake'
    }


def predict(path):
    model = torch.jit.load(model_path,map_location='cpu')
    model.eval()
    img = Image.open(path)
    img_tensor = transform(img)
    img_tensor = img_tensor.unsqueeze(0)
    img_tensor = Variable(img_tensor)
    output = model(img_tensor).data.numpy()[0]
    output_sorted =  sorted(output)
    score = pd.Series(output)
    percentiles = score.apply(lambda x: percentileofscore(output_sorted, x))
    percentiles = percentiles.to_dict()
    percentiles = dict(zip(list(classes.values()), list(percentiles.values())))
    return percentiles
