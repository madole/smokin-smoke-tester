import React, { PropTypes } from 'react';
import { Button } from 'rebass';
import { Flex } from 'reflexbox';

export default function SortButtons(props) {
  const {
    styles,
    sortResponseTimeAsc,
    sortResponseTimeDesc
  } = props;

  return (
    <Flex justify="flex-end" className={styles.flexSort}>
    <div className={styles.sortButton}>
      <Button
        big
        color="white"
        backgroundColor="#2D3137"
        onClick={() => sortResponseTimeAsc()}
      >Response Time ⬆︎</Button>
    </div>
    <div className={styles.sortButton}>
      <Button
        big
        color="white"
        backgroundColor="#2D3137"
        onClick={() => sortResponseTimeDesc()}
      >Response Time ⬇︎</Button>
    </div>
    </Flex>
  );
}

SortButtons.propTypes = {
  styles: PropTypes.object.isRequired,
  sortResponseTimeAsc: PropTypes.func.isRequired,
  sortResponseTimeDesc: PropTypes.func.isRequired
};
