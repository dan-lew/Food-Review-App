import React from 'react';
import 'antd/dist/antd.css';
import { Icon } from 'antd/lib/icon';

const MapMarker = (({ name, key }) => {
  return (
    <div key={key}>
      <span className="brand-red">{name}</span>
      <Icon className="font-1-5" type="environment" theme="twoTone" twoToneColor="#fd0000" />
    </div>
  );
});

export default MapMarker;
