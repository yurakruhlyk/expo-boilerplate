import { compose, withHandlers } from 'recompose';

const withRefs = (handlerName = 'setIdRef') => compose(withHandlers(() => {
  let refs = {};

  return {
    [handlerName]: () => (inputId, ref) => {
      refs = {
        ...refs,
        [inputId]: !!ref && ref,
      };
    },
    getRefs: () => () => refs,
    getRef: () => refName => !!refs[refName] && refs[refName],
  };
}));

export default withRefs;
