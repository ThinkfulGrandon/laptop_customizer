
import React from 'react';
import Total from './Total';
import Summary from './Summary';

export default function Cart(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary 
                selected={props.selected}
                features={props.features}
            />
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                <Total 
                    selected={props.selected}
                    features={props.features}
                />
                </div>
            </div>
        </section>
    )
}