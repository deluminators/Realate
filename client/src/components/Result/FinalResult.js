import React,{useState,useEffect} from 'react';
import Spinner from '../Spinner/Spinner';

const FinalResult = (props) => {
 
      const [loading,setLoading] = useState(true);
      const [image,setImage] = useState();
      const get = async () => {
        // const resp =await Axios.get(`${Config.LINK}/resource/${props.data._id}`);
        // console.log(resp);
        setImage(props.data[props.imageName][3]);
      }
      useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
          }, 7000);
          get();
          return () => {
            clearTimeout(timeout);
          };
      })

        return <div style={{width:'100%',minHeight:'100vh',color:'white',fontSize:18}}>{loading?<><Spinner /></>:<img style={{width:'200px',height:'200px'}} src={image}></img>}</div>
    
}

export default FinalResult;