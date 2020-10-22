import React, { useState } from 'react';
import Styles from './UploadImage.module.css';

const UploadImage = (props) => {
    const [image,setImage] = useState();
  const  onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
              console.log(e.target.result)
            setImage(e.target.result);
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }
    return <div style={{width:'100%',minHeight:'100vh'}}>
        <div className={Styles.imageContainer}>
            {image?<img src={image} style={{width:'100%',height:'100%'}} />:<h3>Choosen image will appear here!</h3>}
        </div>
        <input type='file' onChange={ onImageChange} />
    </div>
}

export default UploadImage;