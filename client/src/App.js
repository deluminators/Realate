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

const TabPane = Tabs.TabPane;

function App() {

  const [activeTab,setActiveTab] = useState('0');
  const [data,setData] = useState();
  const nextTab = () => {setActiveTab(pre => { return (((pre*1) + 1) % 5)+""})}
  const OperationsSlot = {
    right: <Button style={{backgroundColor:'#323c4d',color:'whitesmoke'}} onClick={nextTab}>Continue</Button>,
  };
  console.log(activeTab)
  const uploadFile =async (file) => {
    const eventForm = new FormData();
    eventForm.append("file",file);
    try{
      const res = await axios.post(`${Config.LINK}/resources`,eventForm);
      console.log(res.data)
      setData(res.data.resource)
      nextTab();
    }catch(er){
      console.log(er);
      // alert(er.response.data.message);
    }
  } 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
          Real-time  Real-estate data prediction
      
     
      </header>
      <LocaleProvider locale={enUS}>
      <Tabs tabBarExtraContent={OperationsSlot} animated activeKey={activeTab} tabBarStyle={{paddingLeft:'10px',backgroundColor:'#252930',color:'#252930',marginBottom:0,paddingBottom:'5px',paddingRight:'10px'}}>
          <TabPane className='tabStyle' tab="Home" key="0"><UploadImage handler={uploadFile} /></TabPane>
          <TabPane className='tabStyle' tab="Plato Detection" key="1"><ShowPlatoData data={data} /></TabPane>
          <TabPane className='tabStyle' tab="Select Data" key="2"><SelectData /></TabPane>
          <TabPane className='tabStyle' tab="Additional Data" key="3"><Form /></TabPane>
          <TabPane className='tabStyle' tab="Result" key="4"><FinalResult /></TabPane>
        </Tabs>
      </LocaleProvider>
    </div>
  );
}

export default App;
