import React from "react";
import WellLogo from '../natural-gas.png';


//Create the component Card in unction Style
const Card = ({name}) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="wells" src={WellLogo} style={{width:'50px'}}/>
            <div>
                <h3>{name}</h3>
            </div>
        </div>
    );
}

export default Card;