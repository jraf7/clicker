import React from 'react';

function Character (props) {
    return (
        <div className="card">
            <img 
                className="card-img-top"
                src= {props.image}
                alt= ""               
                id= {props.id}
                onClick= {() => props.clicked(props.id)}
            />
        </div>
    )
}

export default Character;