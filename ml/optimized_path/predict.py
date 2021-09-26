import torch
import matplotlib.pyplot as plt
import numpy as np
import cv2

import imageio
from scipy.sparse.dok import dok_matrix
from scipy.sparse.csgraph import dijkstra
import itertools

from wrapt_timeout_decorator import *


MODEL_PATH = 'optimized_path/experimentation/model.pth'

def preprocess(image, size):
    if size:
        image = cv2.resize(image, size)
    image = image / 255
    mu = np.array([0.485, 0.456, 0.406])
    sigma = np.array([0.229, 0.224, 0.225])
    image = (image - mu) / sigma
    image = image.transpose(2, 0, 1).astype('float32')
    return image


def indexing(image,x,y):
    return x * image.shape[1] + y


def find_coordinates(image,index):
    return  index // image.shape[1], index % image.shape[1]

@timeout(7)
def find_optimized_path(path,start,end):
    image = imageio.imread(path)
    image = image[:, :, 0] + image[:, :, 1] + image[:, :, 2]
    adjacency = dok_matrix((image.shape[0] * image.shape[1], image.shape[0] * image.shape[1]), dtype=bool)

    directions = list(itertools.product([0, 1, -1], [0, 1, -1]))
    for i in range(1, image.shape[0] - 1):
        for j in range(1, image.shape[1] - 1):
            if not image[i, j]:
                continue

            for y_diff, x_diff in directions:
                if image[i + y_diff, j + x_diff]:
                    adjacency[indexing(image,j, i),
                          indexing(image,j + x_diff, i + y_diff)] = True

    start = indexing(image,start[0],start[1])
    end = indexing(image,end[0],end[1])
    _,predecessors = dijkstra(adjacency, directed=False, indices=[start], unweighted=True,return_predecessors=True)
    pixel_index = end
    pixels_path = []
    while pixel_index != start:
        pixels_path.append(pixel_index)
        pixel_index = predecessors[0, pixel_index]
    for pixel_index in pixels_path:
        i, j = find_coordinates(image,pixel_index)
        image[i, j, 0] = image[i, j, 1] = 0
    plt.imshow(image,cmap=plt.cm.gray)
    plt.savefig('optimized_path.png', bbox_inches='tight', pad_inches=0)
    return True



def predict(path,start,end):
    model = torch.load(MODEL_PATH,map_location=torch.device('cpu'))
    image = cv2.imread(path, cv2.IMREAD_COLOR)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image = preprocess(image, (320,320))
    x_tensor = torch.from_numpy(image).unsqueeze(0).to('cpu')
    pr_mask = model.predict(x_tensor).cpu()
    pr_mask = pr_mask.squeeze().numpy().round().astype(np.uint8)
    plt.axis('off')
    plt.imshow(pr_mask[1], interpolation='nearest', cmap=plt.cm.gray)
    plt.savefig('mask.png', bbox_inches='tight', pad_inches=0)
    try:
        find_optimized_path('mask.png',start,end)
        return 'optimized_path.jpg'
    except:
        return False
