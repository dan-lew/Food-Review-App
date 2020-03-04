import React from 'react';
import { Icon, Slider } from 'antd/lib';

// import 'antd/dist/antd.css';
// import { Slider } from 'antd/lib/slider';
// import { Icon} from 'antd/lib/icon';

const ConstraintSlider = ({ iconType, value, onChange, text }) => {
  return (   
    <section className="d-flex flex-column" >
      <div className="d-flex w-100 align-items-center">
        {/* <Icon className="font-1-5 mr-4" type={iconType} /> */}
        <Slider className="w-100" value={value} min={0} max={60} onChange={onChange} />
      </div>
      <span className="text-center">{text}</span>
    </section>    
  )};

export default ConstraintSlider;


 

