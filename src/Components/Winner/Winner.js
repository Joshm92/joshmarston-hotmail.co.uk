import React from "react";

const Winner = ({ winner }) => (
winner > 0 ? (<h2 className="alert alert-success">Player { winner } wins!</h2>) : null 
);

export default Winner;