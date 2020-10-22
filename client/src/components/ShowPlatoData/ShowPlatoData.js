import React,{useState,useEffect} from 'react';

const ShowPlatoData = () => {
    const [loading,setLoading] = useState(false)
    const [text, setText] = useState('');
    const x = [
      'Checking the data for plato, water bodies, forest etc....',
      'Converting data to visual mode...',
    ];
    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 6000);
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
      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }, []);

return <div style={{width:'100%',minHeight:'100vh',color:'white',fontSize:18}}>{text}</div>
}

export default ShowPlatoData;