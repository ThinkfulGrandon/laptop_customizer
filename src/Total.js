import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD' 
});

function Total(props) {
  console.log(props.stuff.selected)
    const total = Object.keys(props.stuff.selected).reduce(
    (acc, curr) => acc + props.stuff.selected[curr].cost,
    0
    
  );
  const Total = USCurrencyFormat.format(total)
  console.log(Total)
  return Total
}

export default Total; 