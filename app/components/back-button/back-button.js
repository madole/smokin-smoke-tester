import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function BackButton(props) {
  return (<div id="back-button" className={props.style}>
      <Link to="/">
        <i className="fa fa-arrow-left fa-3x" />
      </Link>
    </div>
  );
}

BackButton.propTypes = {
  style: PropTypes.string
};
