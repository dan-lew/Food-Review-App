import React from 'react'
import { GoogleComponent } from 'react-google-location'
const API_KEY = "" 


export default function InputFields(props) {
    console.log("input: ", props)
    return (
        
        <div>
            <GoogleComponent
           apiKey={API_KEY}
           language={'de'}
           country={'country:de'}
           coordinates={true}
           placeholder={'Start typing your location'}
           locationBoxStyle={'custom-style'}
           locationListStyle={'custom-style-list'}
           onChange={props.change} />
        </div>
    )
}
