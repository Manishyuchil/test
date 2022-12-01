import React from "react";

function Cars({Brand,color,Price,Model,Engine}) {
    return(
        <div>
            <h2>
                My Car Name brand is {Brand} and color is {color} also the price is {Price} model of the car is{Model} it has {Engine}
            </h2>
        </div>
    )
    
}

export default Cars;