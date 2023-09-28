import React from "react";
import "./OwnerDetails.css";
import logo from '../../assets/img/Profile.png';
import giflogo from '../../assets/img/corporate_pp.gif';

const OwnerDetails = (props) => {
  return (
    <React.Fragment>
    <div className="owner-details-container">
      <div className="owner-image">
        <img src={giflogo} alt={props.name} />
      </div>
      <div className="owner-info">
        <p className="name">{props.name}</p>
        <p className="contact"><i className="fa fa-envelope" aria-hidden="true"></i>
{props.contact}</p>
        <p className="description">
        <i className="fa fa-suitcase" aria-hidden="true"></i>{props.description}
        </p>
        <div className="owner-social-media">
            
        </div>
      </div>
    </div>
    <hr />
    </React.Fragment>
  );
};
export default OwnerDetails;
