import cv2
import gdal
import numpy as np

def find_water_body(destinationFile, input, format):
  inpuDataset = gdal.Open(input)

  driver = gdal.GetDriverByName(format)

  outputDataset = driver.CreateCopy(destinationFile, inpuDataset, 0)

  inpuDataset = None
  outputDataset = None

  img = cv2.imread(destinationFile, cv2.IMREAD_LOAD_GDAL & cv2.IMREAD_GRAYSCALE)

  th, processedPic = cv2.threshold(img, 65, 255, cv2.THRESH_BINARY)

  processedPic = cv2.cvtColor(processedPic, cv2.COLOR_BGR2RGB)

  cv2.imwrite(destinationFile, processedPic)
  return (processedPic)


def get_largest_rect(processedPic, originalPic):
  a = cv2.cvtColor(processedPic, cv2.COLOR_RGB2GRAY)// 255
  ones = np.ones(a.shape)
  a = abs(a-ones)

  nrows, ncols = a.shape 
  skip = 1
  area_max = (0, [])

  w = np.zeros(dtype=int, shape=a.shape)
  h = np.zeros(dtype=int, shape=a.shape)
  for r in range(nrows):
      for c in range(ncols):
          if a[r][c] == skip:
              continue
          if r == 0:
              h[r][c] = 1
          else:
              h[r][c] = h[r-1][c]+1
          if c == 0:
              w[r][c] = 1
          else:
              w[r][c] = w[r][c-1]+1
          minw = w[r][c]
          for dh in range(h[r][c]):
              minw = min(minw, w[r-dh][c])
              area = (dh+1)*minw
              if area > area_max[0]:
                  area_max = (area, [(r-dh, c-minw+1, r, c)])
  area, t= area_max # area not needed as of now
  y1, x1, y2, x2 = t[0]
  b = originalPic.copy()
  rect_im = cv2.rectangle(b, (x1, y1), (x2, y2), (255,0,0), 5)
  return rect_im

# print('area', area_max[0])
# for t in area_max[1]:
#     print('Cell 1:({}, {}) and Cell 2:({}, {})'.format(*t))
# print(area_max[1])
