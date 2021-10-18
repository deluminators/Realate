import { Button } from 'antd';
import React,{useState,useRef} from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'

const SelectData = (props) => {
    const [crop,setCrop] = useState({
        unit: '%',
        width: 30,
        aspect: 16 / 9,
      });
    const [src,setSrc] = useState('http://localhost:5000/api/v1/images/1l5klenwkglzc8id-Capture.PNG')
    const [croppedImageUrl,setCroppedImaeUrl] = useState();
    const [imageRef,setImageRef] = useState();
    const fileUrl = useRef();
    const [blob,setBlob] = useState();
   
    const getCroppedImg = (image, crop, fileName) => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
    
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
    
        return new Promise((resolve, reject) => {
          canvas.toBlob(blob => {
            if (!blob) {
              //reject(new Error('Canvas is empty'));
              console.error('Canvas is empty');
              return;
            }
            blob.name = fileName;
            window.URL.revokeObjectURL(fileUrl.current);
            fileUrl.current = window.URL.createObjectURL(blob);
            setBlob(blob);
            resolve(fileUrl.current);
          }, 'image/jpeg');
        });
      }
   const onImageLoaded = image => {
       image.crossOrigin = 'Anonymous'
        setImageRef(image);
      };
    const onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // setState({ crop: percentCrop });
        setCrop(crop);
      };
      const onCropComplete = crop => {
        makeClientCrop(crop);
      };
      const makeClientCrop = async (crop) => {
        if (imageRef && crop.width && crop.height) {
          const croppedImageUrl = await getCroppedImg(
           imageRef,
            crop,
            'newFile.jpeg'
          );
          setCroppedImaeUrl(croppedImageUrl)
        }
      }

    return <div style={{minHeight:'100vh'}}>
          {src && (
          <ReactCrop
            src={src}
            crop={crop}
            ruleOfThirds
            onImageLoaded={onImageLoaded}
            onComplete={onCropComplete}
            onChange={onCropChange}
            style={{width:'60%'}}
          />
        )}
        {blob && <Button onClick={() => {props.handler(blob)}} style={{backgroundColor:'green',marginLeft:'20px',transform:'translate(0,-50%)'}}>Select</Button>}
        <div>
         {croppedImageUrl && (
          <img crossOrigin="anonymous" alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
        )}
        
        </div>
    </div>
}

export default SelectData;