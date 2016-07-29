export const SUCCESS = 'success';
export const FAILURE = 'failure';
export const WARNING = 'warning';
export const ALL = 'all';

export function successFilter() {
  return {
    type: SUCCESS
  };
}

export function failureFilter() {
  return {
    type: FAILURE
  };
}

export function warningFilter() {
  return {
    type: WARNING
  };
}

export function allFilter() {
  return {
    type: ALL
  };
}
