
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://i.ibb.co/f2j96d5/Untitled-design-removebg-preview-1.png" alt="Untitled-design-removebg-preview-1" border="0">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![Stargazers](https://img.shields.io/github/stars/deluminators/Realate)](https://github.com//deluminators/Realate/stargazers)
[![Issues](https://img.shields.io/github/issues/deluminators/Realate)](https://github.com/deluminators/Realate/issues)
[![Contributors](https://img.shields.io/github/contributors/deluminators/Realate)](https://img.shields.io/github/contributors/deluminators/Realate)
[![Forks](https://img.shields.io/github/forks/deluminators/Realate)](https://github.com//deluminators/Realate/network/members)
[![Pull Request](https://img.shields.io/github/issues-pr/deluminators/Realate)](https://github.com/deluminators/Realate/pulls)
[![Contributors](https://img.shields.io/github/contributors/deluminators/Realate)](https://img.shields.io/github/contributors/deluminators/Realate)
[![Top Language](https://img.shields.io/github/languages/top/deluminators/Realate)](https://github.com/deluminators/Realate)


<h5 align="center"><i>real-estate data prediction & analysis</i>
</h5>
A robust application providing support for predicting and detecting land quality & cover, its optimal usage for building flats or property, its generative model and optimal paths to electric/water/sewage reserve.

# Features

- **Land Cover** : Real estate agents find it difficult to predict and determine the land quality and optimal cover.
- **External supplies** : Finding optimized path for external supplies like electricity, water or sewage reserves.
- **Optimal usage** : [COMING SOON] Optimal usage of land for predicting the maximum number of flats and bunglows possible to fit into a chosen plot.
- **Generating usages** : [UNDER EXPERIMENATION] To generate usages of the plot based on demands by the real estate agents and clients.

# Implementation

1. For classifying the land cover and usage the Resnet50 Architecture along with OpenCV's CVT Threshold.
2. For finding the land cover, semantic segmenation of Land is performed on aerial images for masking the image to suitable classes.
3. For finding the optimal and best route between two points in an aerial image we use the Djikstra Algorithm in the road segmented image of the satellite imagery with an added algorithm which ignores the region with black pixels and finds the best path among the white pixels.
4. We plan to use Generative Adverserial Networks for generating best plot plan of the chosen area for giving a complete finish plan to the real-estate agents.


### Future Plan

- Add GANs generated blueprints for construction on land site
- Dynamic Pricing model for predicting real time price predictions based on demand and availability.
- Implementing bridge with nearby sources for particular usages of tools.
- Implementing better Semantic Segmentation models for better optimal usage functionality.
- Implementing real-time deployment with added security.
- Usage of A-Star or better algorithms in finding the best optimal path between the source and reserves.
<br>

# Installation & Setup

**Running the Machine Learning server**
Go to root of the project, run

```
cd ml
```

```
pip install -r requirements.txt
```

```
python app.py
```

A Flask app will be running on port 8000.  

**Running the back-end server**  
Go to root of the project, run

```
cd backend
```

```
npm install
```

```
npm start
```

Server will be running on localhost on port 5000  
  
  

**Running the front-end server**
Go to root of the project, run

```
cd client
```

```
npm install
```

```
npm start
```

A react app will be running on your browser on port 3000.
Visit http://127.0.0.1:3000/ in your browser to access the application



## Contributions

Contributing rules are mentioned in <a href="https://github.com/deluminators/Realate/blob/main/CONTRIBUTING.md">CONTRIBUTING.md</a> file.  
For existing bugs and adding more features open a issue [here](https://github.com/deluminators/Matix/issues)


## Discussions

Pitch new ideas, suggestions and contribute in developing the project! Participate in the discussions [here](https://github.com/deluminators/Realate/discussions)

## Project Maintainers

<table>
<tr>
<td align="center"><a href="https://github.com/sanjibansg"><img src="https://avatars.githubusercontent.com/u/40017007?v=4" width=150px height=150px /></a></br> <h4>Sanjiban Sengupta</h4>
<a href="https://www.linkedin.com/in/sanjiban-sengupta/"><img src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG15.png" width=32px height=32px></a><a href="https://github.com/sanjibansg" style="padding:7px;"><img src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png" width=32 height=32></a></td>

<td align="center"><a href="https://github.com/07souravkunda"><img src="https://media-exp1.licdn.com/dms/image/C5103AQHQLzOcQVoErg/profile-displayphoto-shrink_800_800/0/1583347930281?e=1638403200&v=beta&t=AoRRg1Q6RYqhcDZoLnbilz479MJnYPho8MM5TOWicFI" width=150px height=150px /></a></br> <h4>Sourav Kunda</h4>
<a href="https://www.linkedin.com/in/souravkunda/"><img src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG15.png" width=32px height=32px></a><a href="https://github.com/07souravkunda" style="padding:7px;"><img src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png" width=32 height=32></a></td>

<td align="center"><a href="https://github.com/SanchiMittal"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQEXvY2-Ko4f0Q/profile-displayphoto-shrink_800_800/0/1617735487447?e=1638403200&v=beta&t=atAYpGSuMXen2uA0DckxewJHxoQk1ksVWITqTGCM11s" width=150px height=150px /></a></br> <h4>Sanchi Mittal</h4>
<a href="https://www.linkedin.com/in/sanchi-mittal/"><img src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG15.png" width=32px height=32px></a><a href="https://github.com/SanchiMittal" style="padding:7px;"><img src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png" width=32 height=32></a></td>

</tr>
</table>

## License

MIT
