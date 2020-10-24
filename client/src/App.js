import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LocaleProvider from 'antd/lib/locale-provider';
import {Tabs,Button} from 'antd';
import 'antd/dist/antd.css';
import enUS from 'antd/lib/locale-provider/en_US';
import UploadImage from './components/UploadImage/UploadImage';
import ShowPlatoData from './components/ShowPlatoData/ShowPlatoData';
import Form from './components/Form/Form';
import FinalResult from './components/FinalResult/FinalResult';
import Config from './assets/config';
import axios from 'axios';
import SelectData from './components/SelectData/SelectData';
import Result from './components/Result/FinalResult';
import Home from './components/HomePage/HomePage';

const TabPane = Tabs.TabPane;

function App() {
  console.log(__dirname);
  const [activeTab,setActiveTab] = useState('0');
  const [data,setData] = useState({
    'img1.jpg':[require('./assets/output/img1_1.png'),require('./assets/output/img1_2.png'),require('./assets/output/img1_3.jpg'),require('./assets/output/img1_5.png')],
    'img2.jpg':[require('./assets/output/img2_1.jpg'),require('./assets/output/img2_2.jpg'),require('./assets/output/img2_3.jpg'),require('./assets/output/img2_5.jpg')],
    'img3.jpg':[require('./assets/output/img3_1.jpg'),require('./assets/output/img3_2.jpg'),require('./assets/output/img3_3.jpg'),require('./assets/output/img3_5.jpg')]
  });
  const [imageName,setImageName] = useState();

  const nextTab = () => {setActiveTab(pre => { return (((pre*1) + 1) % 6)+""})}
  const OperationsSlot = {
    right: <Button style={{backgroundColor:'#323c4d',color:'whitesmoke'}} onClick={nextTab}>Continue</Button>,
  };
  console.log(activeTab)
  const uploadFile =async (file) => {
    const eventForm = new FormData();
    setImageName(file.name);
    console.log(file.name)
    eventForm.append("file",file);
    try{
      const res = await axios.post(`${Config.LINK}/resources`,eventForm);
      console.log(res.data)
      // setData(res.data.resource)
      nextTab();
    }catch(er){
      console.log(er);
      // alert(er.response.data.message);
    }
  } 
  const selectFile = async (blob) => {
    const newImage = new File([blob],blob.name,{type:blob.type});
    const fd = new FormData();
    fd.append('file',newImage);
    const res = await axios.post(`${Config.LINK}/select/${data._id}`,fd);
  }
  return (
    <>
    {/* <Home /> */}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
          Real-time  Real-estate data prediction
      </header>
      
      <LocaleProvider locale={enUS}>
      <Tabs tabBarExtraContent={OperationsSlot} animated activeKey={activeTab} tabBarStyle={{paddingLeft:'10px',backgroundColor:'#252930',color:'#252930',marginBottom:0,paddingBottom:'5px',paddingRight:'10px',height:'40px'}}>
      <TabPane className='tabStyle' tab="Welcome" key="0"><Home /></TabPane>
          <TabPane className='tabStyle' tab="Home" key="1"><UploadImage handler={uploadFile} /></TabPane>
          <TabPane className='tabStyle' tab="Plato Detection" key="2"><ShowPlatoData data={data} imageName={imageName}/></TabPane>
          {/* <TabPane className='tabStyle' tab="Select Data" key="3"><SelectData handler={selectFile} /></TabPane> */}
          <TabPane className='tabStyle' tab="Additional Data" key="3"><Form /></TabPane>
          <TabPane className='tabStyle' tab="Result" key="4"><FinalResult data={data} imageName={imageName} /></TabPane>
          <TabPane className='tabStyle' tab="Path Optimizer" key="5"><Result data={data} imageName={imageName} /></TabPane>
        </Tabs>
      </LocaleProvider>
    </div></>
  );
}

export default App;
