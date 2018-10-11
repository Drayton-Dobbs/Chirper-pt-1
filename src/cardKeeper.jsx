import React from 'react';
import Card from './Card';

const CardKeeper = (props) => {
    return (
        <React.Fragment>
            {props.people.map((person, index) => {
                return (
                    <Card
                       
                    />
                );
            })}
        </React.Fragment>
    );
};

export default CardKeeper;