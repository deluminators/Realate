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

const TabPane = Tabs.TabPane;

function App() {

  const [activeTab,setActiveTab] = useState('0');
  const OperationsSlot = {
    right: <Button style={{backgroundColor:'#323c4d',color:'whitesmoke'}} onClick={() => {setActiveTab(pre => { return (((pre*1) + 1) % 4)+""})}}>Continue</Button>,
  };
  console.log(activeTab)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Real-time  Real-estate data prediction
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
      <LocaleProvider locale={enUS}>
      <Tabs tabBarExtraContent={OperationsSlot} animated activeKey={activeTab} tabBarStyle={{paddingLeft:'10px',backgroundColor:'#252930',color:'white',marginBottom:0,paddingBottom:'5px',paddingRight:'10px'}}>
          <TabPane style={{backgroundColor:'#3f4652'}} tab="Home" key="0"><UploadImage /></TabPane>
          <TabPane style={{backgroundColor:'#3f4652'}} tab="Plato Detection" key="1"><ShowPlatoData /></TabPane>
          <TabPane style={{backgroundColor:'#3f4652'}} tab="Additional Data" key="2"><Form /></TabPane>
          <TabPane style={{backgroundColor:'#3f4652'}} tab="Result" key="3"><FinalResult /></TabPane>
        </Tabs>
      </LocaleProvider>
    </div>
  );
}

export default App;
