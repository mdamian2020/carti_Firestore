import React from 'react';
import Media from 'react-bootstrap/Media'

const Carte = (props) => {
    const {src, titlu, text, autpret} = props;  //  Destructurare props
    
    return (
        <Media>
            <img className="mr-3" src={src} alt="Generic placeholder" />
            <Media.Body>
                <h5>{titlu.toUpperCase()}</h5>
                <p>{text}</p>
                <p>{autpret}</p>
            </Media.Body>
        </Media>
    )
};   

export default Carte;