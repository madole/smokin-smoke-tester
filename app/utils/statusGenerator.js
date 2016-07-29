import {
  WARNING,
  SUCCESS,
  FAILURE
} from '../actions/filter-actions';

export default (statusCode) => {
  const status = statusCode.toString();

  if (status.startsWith('1')) return SUCCESS;
  if (status.startsWith('2')) return SUCCESS;
  if (status.startsWith('3')) return WARNING;
  if (status.startsWith('4')) return FAILURE;
  if (status.startsWith('5')) return FAILURE;
};
