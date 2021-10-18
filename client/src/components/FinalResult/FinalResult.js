import React,{useState,useEffect} from 'react';
import Spinner from '../Spinner/Spinner';

const FinalResult = (props) => {
 
      const [loading,setLoading] = useState(true);
      const [image1,setImage1] = useState();
      const [image2,setImage2] = useState();
      const get = async () => {
        // const resp =await Axios.get(`${Config.LINK}/resource/${props.data._id}`);
        // console.log(resp);
        setImage1(props.data[props.imageName][1]);
        setImage2(props.data[props.imageName][2]);
      }
      useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
          }, 6000);
          get();
          return () => {
            clearTimeout(timeout);
          };
      })

        return <div style={{width:'100%',minHeight:'100vh',color:'white',fontSize:18}}>{loading?<><Spinner /></>:<><img style={{width:'200px',height:'200px'}} src={image1}></img><img style={{width:'200px',height:'200px',marginLeft:'10px'}} src={image2}></img></>}</div>
    
}

export default FinalResult;