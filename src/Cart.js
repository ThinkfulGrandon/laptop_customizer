
import React from 'react';
import Summary__Total from './SummaryTotal'
import Summary__Options from './SummaryOptions';

export default function Cart(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary__Options 
                selected={props.selected}
                features={props.features}
            />
            <Summary__Total
                selected={props.selected}
                features={props.features}
            />  
        </section>
          
    )
}