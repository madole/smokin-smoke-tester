import React, { PropTypes } from 'react';
import { Button } from 'rebass';
import { Flex, Box } from 'reflexbox';

export default function FilterButtons(props) {
  const {
    styles,
    allFilter,
    successFilter,
    warningFilter,
    failureFilter,
    filteredItemsLength
  } = props;
  return (
    <Flex justify="flex-start" className={styles.flex}>
      <div className={styles.filterButton}>
        <Button big color="white" backgroundColor="#2D3137" onClick={() => allFilter()}> All </Button>
      </div>
      <div className={styles.filterButton}>
        <Button big color="white" backgroundColor="success" onClick={() => successFilter()}>Just Successes</Button>
      </div>
      <div className={styles.filterButton}>
        <Button big color="white" backgroundColor="warning" onClick={() => warningFilter()}>Just Warnings</Button>
      </div>
      <div className={styles.filterButton}>
        <Button big color="white" backgroundColor="failure" onClick={() => failureFilter()}>Just Failures</Button>
      </div>
      <Box align="center" ml={1} className={styles.count}>{filteredItemsLength}</Box>
    </Flex>
  );
}

FilterButtons.propTypes = {
  styles: PropTypes.object.isRequired,
  allFilter: PropTypes.func.isRequired,
  successFilter: PropTypes.func.isRequired,
  warningFilter: PropTypes.func.isRequired,
  failureFilter: PropTypes.func.isRequired,
  filteredItemsLength: PropTypes.number.isRequired
};
