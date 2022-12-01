import React from "react";

const  CarNew = (props) =>{
return(
    <div>
        
        <h2>
        My Car brand is {props.Brand} and color is {props.color} also the price is {props.Price} model of the car is{props.Model} it has {props.Engine}

        </h2>
    </div>

) 
}
export default CarNew;