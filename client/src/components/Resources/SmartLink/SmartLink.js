import React from 'react';
import { NavLink } from 'react-router-dom';

// Replaces react-router-dom's Link. If the content of the section isEditting, it will prompt an alert
// to save the changes before changing the section. Once the changes are saved, isEditting is set as false
// and the links will act normally.

const SmartLink = ({isEditting, match, to, value}) => {
  if (isEditting) {
    return (
      <div className="section-selectors disabled-link" onClick={() => alert("You have to save the changes before changing the section")}>
        <span>{value}</span>
      </div>
    )
  } else {
    return (
        <NavLink className="section-selectors" activeClassName="selected-section" to={`/dashboard/details/${match.params.id}/${to}`}>{value}</NavLink>
    );

  }

}

export default SmartLink;
