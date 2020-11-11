
import React from 'react';
import Total from './Total';
import Summary from './Summary';

export default function Cart(props) {
    return (
        <Summary 
            selected={props.selected}
            features={props.features}
        />
            
    )
}