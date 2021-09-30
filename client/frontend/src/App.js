import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import { Input } from '@material-ui/core';

import Config from './assets/config';
import UploadImage from './UploadImage/UploadImage';

function App() {
  const [imageName, setImageName] = useState();
  const uploadFile = async (file) => {
    const eventForm = new FormData();
    setImageName(file.name);
    console.log(file.name);
    eventForm.append('file', file);
    try {
      const res = await axios.post(
        `${Config.LINK}/resources`,
        eventForm
      );
      console.log(res.data);
      // setData(res.data.resource)
      // nextTab();
    } catch (er) {
      console.log(er);
      // alert(er.response.data.message);
    }
  };
  return (
    <div className='App'>
      <UploadImage handler={uploadFile} />
      <Input type='file' onChange={uploadFile} />
    </div>
  );
}

export default App;
