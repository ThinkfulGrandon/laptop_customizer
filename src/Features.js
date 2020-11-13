import React from 'react'
import slugify from 'slugify'
import Options from './Options'




function Features(props){
  const features = Object.keys(props.features).map((feature, idx) => {
      return (
        <fieldset className="feature" key={`feature${idx}`}>
          <legend className="feature__name">
            <h3 key={idx}>{feature}</h3>
          </legend>
          <Options 
            selected={props.selected} 
            features={props.features} 
            feature={feature} 
            updateFeature={props.updateFeature} 
          /> 
        </fieldset>
      );
    });
    return features;
}

export default Features