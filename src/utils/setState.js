const setStateAsync = (state, that) =>  {
  console.log(state)
  return new Promise((resolve) => {
    that.setState(state, resolve)
  });
}

export default setStateAsync
