<h1 align = "center" >Realate </h1>
 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![Stargazers](https://img.shields.io/github/stars/deluminators/Realate)](https://github.com//deluminators/Realate/stargazers)
[![Issues](https://img.shields.io/github/issues/deluminators/Realate)](https://github.com/deluminators/Realate/issues)
[![Contributors](https://img.shields.io/github/contributors/deluminators/Realate)](https://img.shields.io/github/contributors/deluminators/Realate)
[![Forks](https://img.shields.io/github/forks/deluminators/Realate)](https://github.com//deluminators/Realate/network/members)
[![Pull Request](https://img.shields.io/github/issues-pr/deluminators/Realate)](https://github.com/deluminators/Realate/pulls)
[![Contributors](https://img.shields.io/github/contributors/deluminators/Realate)](https://img.shields.io/github/contributors/deluminators/Realate)
[![Top Language](https://img.shields.io/github/languages/top/deluminators/Realate)](https://github.com/deluminators/Realate)




##### _real-time real-estate data prediction & analysis_

A robust application providing support for predicting and detecting land quality & cover, its optimal usage for building flats or property, its generative model and optimal paths to electric/water/sewage reserve.

# Features

- **Land Cover** : Real estate agents find it difficult to predict and determine the land quality and optimal cover.
- **Optimal usage** : Optimal usage of land for predicting the maximum number of flats and bunglows possible to fit into a chosen plot.
- **External supplies** : Finding optimized path for external supplies like electricity, water or sewage reserves.
- **Generating usages** : To generate usages of the plot based on demands by the real estate agents and clients.

# Implementation

1. For finding the land cover and usage we plan to use the Resnet50 Architecture and for finding the water bodies nearby we use the CVT Threshold feature of the OpenCV Library.
2. For optimal usage of land for predicting the maximum number of flats and bunglows, we are at finding the road segmented image to find usable area, and then recursively try to fit rectangles on the usable area to maximise the number of flats, bunglows and duplexes.
3. For finding the optimal and best route between two points in an aerial image we aim to use the Djikstra Algorithm in the road segmented image of the satellite imagery with an added algorithm which ignores the region with black pixels and finds the best path among the white pixels.
4. We plan to use Generative Adverserial Networks for generating best plot plan of the chosen area for giving a complete finish plan to the real-estate agents.

### Ideation

[Link to Pitch Deck](https://github.com/deluminators/Realate/blob/main/Realate_PitchDeck.pdf)

### Tech-Stack

Realate uses a number of open source projects:

- [React](https://reactjs.org/) - for front-end UI
- [node.js](https://nodejs.org/) - evented I/O for the backend
- [Express](https://expressjs.com/) - fast node.js network app framework
- [MongoDB](https://www.mongodb.com/) - a NoSQL database program
- [Mongoose](https://mongoosejs.com/) - ODM library for data modelling
- [TensorFlow](https://www.tensorflow.org/) - symbolic math library for machine learning applications
- [PyTorch](https://pytorch.org/) - Another powerful library for deep learning usage
- [OpenCV](https://opencv.org/) - for computer vision purposes
- [TFjs](https://www.tensorflow.org/js) - for deploying TF ML models in web
- [ONNX](https://onnx.ai/) - for integrating PyTorch models into web

### Future Plan

- Add GANs generated blueprints for construction on land site
- Dynamic Pricing model for predicting real time price predictions based on demand and availability.
- Implementing bridge with nearby sources for particular usages of tools.
- Implementing better Road Segmentation models for better optimal usage functionality.
- Implementing real-time deployment with added security.
- Usage of A-Star or better algorithms in finding the best optimal path between the source and reserves.

### Demos

- [Demo 1](https://github.com/deluminators/Realate/blob/main/land_utils/demo1.ipynb)

## Prerequisties

**For backend and web app**

- node and npm installed

## Installation & Setup

A step by step series of examples that tell you how to get a development env running

**To start the server**
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

**To start the web app**
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

## Contributions

Contributing rules are mentioned in <a href="https://github.com/deluminators/Realate/blob/main/CONTRIBUTING.md">CONTRIBUTING.md</a> file.  
For existing bugs and adding more features open a issue [here](https://github.com/deluminators/Matix/issues)

## Open-source Programs

- ### Script Winter of Code(SWoC)

  <div style="display: flex; align-items: center; justify-content: space-between;">
  <p style="width: 55%;">
  <strong>Script Winter of Code</strong> is an open-source program envisioned by the <strong>Script Foundation</strong>. It aims to bring students into the world of open source development and see the power of unified problem-solving in real time.</p>

  <img src="https://media-exp1.licdn.com/dms/image/C560BAQGh8hr-FgbrHw/company-logo_200_200/0/1602422883512?e=2159024400&v=beta&t=s8IX2pN1J2v5SRRbgzVNzxnQ2rWeeMq2Xb__BYW60qE" style="margin: 0px auto 4% auto;" >
  </div>

- ### DevScript Winter of Code(DWoC)
  <div style="display: flex; align-items: center; justify-content: space-between;">
  <p style="width: 55%;"><strong>Winter of Code</strong> is an open-source program envisioned by <strong>DevScript</strong> that helps understand the paradigm of Open Source contribution. It aims to bring students into the world of open source development and see the power of unified problem solving in real time.
  </p>
  <img src="https://github.com/Tejas1510/Athavani/blob/master/assets/Images/devscriptcode.png?raw=true" height=150 style="margin: 0 auto;">
  </div>

## Discussions

Pitch new ideas, suggestions and contribute in developing the project! Participate in the discussions [here](https://github.com/deluminators/Realate/discussions)

## License

MIT
