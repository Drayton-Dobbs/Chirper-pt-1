// import React, { Component } from "react";

// class Card extends Component {
//   constructor(props) {
//       super(props);

//     this.state = {
//       name: "Drayton",
//       text: "whole bunch of nothing"
//     };
//   }
//   render() {
//     return (
//       <div>
//         <div className="card-body">
//           <h5 className="card-title">{this.state.name}</h5>
//           <p className="card-text">
//             {this.state.text}
//           </p>

//         </div>
//       </div>
//     );
//   }
// }

// export default Card;

import React from "react";

const Card = props => {
  return (
    <div>
      <div className="card-body">
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
