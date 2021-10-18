import React from 'react';
import Particles from 'react-particles-js';


const Home = () => {
  
    return  <><Particles  params={{
	    "particles": {
	        "number": {
	            "value": 90
	        },
	        "size": {
                "value": 5,
                // "random": true,
                // "anim": {
	            //     "speed": 4,
	            //     "size_min": 0.3
                // }
	        },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
            },
            links: {
                "color":'#1890ff',
                distance: 150,
                enable: true,
                opacity: 1,
                width: 1
              },
            color:'#61DBFB'
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
                },
                onclick:{
                    enable:true,
                    mode:''
                }
	        }
        },
        
	}} />
    <div className='HomeHeader' style={{position:'fixed',backgroundColor:'transparent',top:'150px',left:'50%',translate:'-20px'}}>
    <h1 style={{color:'white',fontSize: 'calc(10px + 2vmin)',textAlign:'center'}}>Welcome to <span style={{fontSize:'28px',color:'#e66e74'}}>Realate</span> a Real-time Real-estate data prediction tool</h1>
    <h1 style={{color:'white',fontSize: 'calc(10px + 2vmin)',textAlign:'center'}}>Powered By <span style={{color:'#db984b'}}>Machine Learning</span> and <span style={{color:'#4b6adb'}}>AI</span></h1>
    <img src={require('../../assets/image.jpg')} style={{width:'50%',opacity:0.6}}></img>
    </div>
    </>
}

export default Home;
