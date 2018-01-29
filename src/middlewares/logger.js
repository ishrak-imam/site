
const logger = store => next => action => {
  const regex = /redux-form/;
  const pattern = action.type;
  let result = next(action);
  if (!regex.test(pattern)) {
    console.log('%c DISPATCHING      :: ', 'color: green', action);
    result = next(action);
    console.log('%c NEXT STATE       :: ', 'color: green', store.getState());
  }
  return result;
};

export default logger;
