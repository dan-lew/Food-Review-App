import React from 'react';
import {  Slider } from 'antd';
import {CarTwoTone } from '@ant-design/icons';

const ConstraintSlider = (({ iconType, value, onChange, text }) => {
  return (
    < section className="" >
      <div className="">
        {/* <Icon className="" type={iconType} /> */}
        <CarTwoTone style={{ fontSize: '25px' }} twoToneColor="#9c27b0" />
        <Slider className="" value={value} min={0} max={60} onChange={onChange} />
      </div>
      <span className="text-center">{text}</span>
    </section >
  );
});

export default ConstraintSlider;