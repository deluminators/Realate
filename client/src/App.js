import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import { Button, Box, TextField } from '@material-ui/core';

import Config from './assets/config';
import UploadImage from './UploadImage/UploadImage';
import Chart from './Chart/Chart';

const OptimizedForm = ({ clickHandler }) => {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endX, setEndX] = useState(0);
  const [endY, setEndY] = useState(0);
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
      style={{ margin: '40px' }}
    >
      <div
        style={{ marginTop: '20px', marginBottom: '20px' }}
      >
        <TextField
          required
          id='outlined-required'
          label='Start-X'
          type='number'
          onChange={(e) => {
            setStartX(e.target.value);
          }}
        />
        <TextField
          id='outlined-disabled'
          label='Start-Y'
          type='number'
          onChange={(e) => {
            setStartY(e.target.value);
          }}
        />
      </div>
      <div
        style={{ marginTop: '20px', marginBottom: '20px' }}
      >
        <TextField
          required
          id='outlined-required'
          label='End-X'
          type='number'
          onChange={(e) => {
            setEndX(e.target.value);
          }}
        />
        <TextField
          id='outlined-disabled'
          label='End-Y'
          type='number'
          onChange={(e) => {
            setEndY(e.target.value);
          }}
        />
      </div>
      <Button
        onClick={() =>
          clickHandler({ startX, startY, endX, endY })
        }
      >
        Predict Path
      </Button>
    </Box>
  );
};

function App() {
  const [imageName, setImageName] = useState();
  const [data, setData] = useState();
  const [url, setUrl] = useState();
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
      setData(res.data.data);
      setImageName(res.data.imageName);
      // nextTab();
    } catch (er) {
      console.log(er);
      // alert(er.response.data.message);
    }
  };
  const clickHandler = async ({
    startX,
    startY,
    endX,
    endY,
  }) => {
    try {
      const resp = await axios.post(
        'http://localhost:3000/api/v1/predict',
        {
          url: imageName,
          start: [startX, startY],
          end: [endX, endY],
        }
      );
      console.log(resp.data);
      if (!resp.data) {
        alert('No path found');
      }
      setUrl(resp.data);
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <div className='App'>
      <UploadImage handler={uploadFile} />
      {data && (
        <>
          <Chart data={data} />
          <OptimizedForm clickHandler={clickHandler} />
          {url && (
            <img
              src={`http://localhost:3000/api/v1/resources/optimized_path.jpg`}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
