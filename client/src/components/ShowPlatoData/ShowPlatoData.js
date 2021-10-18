import Axios from 'axios';
import React,{useState,useEffect} from 'react';
import Config from '../../assets/config';
import Spinner from '../Spinner/Spinner';

const ShowPlatoData = (props) => {
    const [loading,setLoading] = useState(true)
    const [text, setText] = useState('');
    const [image,setImage] = useState();
    const x = [
      'Checking the data for plato, water bodies, forest etc....',
      'Converting data to visual mode...',
    ];
    const get = async () => {
      // const resp =await Axios.get(`${Config.LINK}/resource/${props.data._id}`);
      // console.log(resp);
      setImage(props.data[props.imageName][0]);
    }
    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 8000);
      let i = 0;
      let j = 0;
      const interval = setInterval(() => {
        if (i > x[j].length - 1) {
          setText('');
          i = 0;
          j++;
        }
  
        if (j > x.length - 1) {
          clearInterval(interval);
          setText('Getting output data...');
        } else {
          setText((pre) => pre + x[j][i]);
          i++;
        }
      }, 80);
      if(props.data) get();
      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }, [props.data]);

return <div style={{width:'100%',minHeight:'100vh',color:'white',fontSize:18}}>{loading?<>{text}<Spinner /></>:<img style={{width:'200px',height:'200px'}} src={image}></img>}</div>
}

export default ShowPlatoData;