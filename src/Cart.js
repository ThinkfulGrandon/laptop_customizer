
import React from 'react';

import Summary from './Summary';

export default function Cart(props) {
    return (
        <Summary 
            selected={props.selected}
            features={props.features}
        />
            
    )
}