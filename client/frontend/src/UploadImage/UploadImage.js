import React, { useState } from 'react';
import Styles from './UploadImage.module.css';
// import Config from '../../assets/config';
import { Button } from '@material-ui/core';

const UploadImage = (props) => {
  const [image, setImage] = useState();
  const [file, setFile] = useState();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      let reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <div
        style={{
          color: 'white',
          fontSize: 'calc(10px + 2vmin)',
        }}
      >
        Upload aerial view of the land
      </div>
      <div className={Styles.imageContainer}>
        {image ? (
          <img
            src={image}
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className={Styles.contain}>
            <h3>Choosen image will appear here!</h3>
          </div>
        )}
      </div>
      <input
        style={{ color: 'wheat' }}
        type='file'
        onChange={onImageChange}
      />
      <Button
        style={{ backgroundColor: '#61DBFB' }}
        title='submit'
        onClick={() => props.handler(file)}
      >
        Upload
      </Button>
    </div>
  );
};

export default UploadImage;
