import React,{useState} from 'react';
import {Form,Input,Checkbox} from 'antd'
import Styles from './Form.module.css';

const CheckboxGroup = Checkbox.Group;

const FormComponent = () => {
    const [form] = Form.useForm();
    const [buildingList,setBuildingList] = useState([]);
    const [fields,setFields] = useState([]);

    const onBuildingListChange = (e) => {
        setBuildingList(e);
        let f = [];
        if(e.includes('Single room flat') || e.includes('2 BHK') || e.includes('3 BHK')){
            f.push('Flat');
        }
        if(e.includes('Duplex')) f.push('Duplex');
        if(e.includes('Bunglow')) f.push('Bunglow');
        if(e.includes('Community Hall')) f.push('Duplex');
        setFields(f);
    }

    return <div style={{minHeight:'100vh',padding:'5px'}}>
        {/* <div style={{backgroundColor:'white'}}> */}
        <Form className={Styles.Form} layout='vertical' form={form} >
          
            <Form.Item label='Select required building types'>
            <CheckboxGroup
                options={['Single room flat', '2 BHK', '3 BHK','Duplex','Bunglow','Community Hall']}
                value={buildingList}
                onChange={ onBuildingListChange}
             />
            </Form.Item>
            {buildingList.map(el => {
                return <Form.Item label={`no. of ${el}`}>
                <Input placeholder='total no.s' 
                onChange={e => console.log(e.target.value)} 
                />
            </Form.Item>
            })}
            {fields.map(el => {
                return   <Form.Item label={`${el} Area`}>
                <Input placeholder='in square meters' 
                onChange={e => console.log(e.target.value)} 
                />
            </Form.Item>
            })}
        </Form>
        {/* </div> */}
    </div>
}

export default FormComponent;