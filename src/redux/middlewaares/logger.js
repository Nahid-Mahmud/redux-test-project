export const logger = (store) => (next) => (action) => {
  const currentState = store.getState();
  console.log("%cCurrent State:", "color: blue; font-weight: bold;", currentState);
  console.log("%cDispatching Action:", "color: green; font-weight: bold;", action);
  next(action);
  console.log("%cNext State:", "color: red; font-weight: bold;", store.getState());
};
