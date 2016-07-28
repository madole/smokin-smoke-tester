import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'rebass';
import Icon from 'react-geomicons';


export default function BackButton(props) {
  return (
    <Link to="/">
      <Button {...props} title="Like">
          <Icon
            fill="currentColor"
            height="1em"
            name="chevronLeft"
            width="1em"
          />
      </Button>
    </Link>
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func
};
