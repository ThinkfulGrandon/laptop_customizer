import React from 'react'
import { render } from 'react-dom';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD' 
});



function Summary(props) {
  console.log("HERE", props.state.selected)
  const summary = Object.keys(props.state.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.state.selected[feature];
    
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });
return summary
}
  export default Summary; 