<<<<<<< HEAD
import React from "react";
=======

import React from 'react';
>>>>>>> testing1
//import { Icon } from 'antd';
import { EnvironmentTwoTone } from "@ant-design/icons";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const MapMarker = ({ name, key }) => {
  return (
    <div key={key}>
      <GridItem>
        <span className="brand-red">{name}</span>
        <EnvironmentTwoTone
          style={{ fontSize: "30px" }}
          twoToneColor="#9c27b0"
        />
      </GridItem>
    </div>
  );
};

export default MapMarker;