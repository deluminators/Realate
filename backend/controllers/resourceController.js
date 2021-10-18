const Resource = require('../models/resourceModel');
const catchAsync = require('../utils/catchAsync');

exports.createResource = catchAsync(async (req, res, next) => {
  //   console.log(req.body);
  console.log(req.file);
  const resource = await Resource.create({
    // title: req.body.title,
    // desc: req.body.desc,
    // admin: req.body.admin,
    // video: req.body.video,
    link: req.file.path.replace('\\', '/'),
  });
  res.status(200).json({
    status: 'success',
    resource,
  });
});

exports.plato = catchAsync(async (req,res,next) => {
  console.log(req.params.id);

  // console.log(data);
  // some function
  await Resource.findByIdAndUpdate(req.params.id,{plato:'/images/1l5klenwkglzc8id-Capture.PNG'})
    let data =await Resource.findById(req.params.id);
  res.status(200).json({
    status:'success',
    resource:data
  })
})
