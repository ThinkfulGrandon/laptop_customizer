import React from 'react'
import { render } from 'react-dom';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD' 
});




function Summary(props) {

  console.log(props.stat)
  return (
    
    Object.keys(props.stat.selected).map((feature, idx) => {

    const featureHash = feature + '-' + idx;
    const selectedOption = props.stat.selected[feature];

      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    
    }
  )
  )
}
  export default Summary; 