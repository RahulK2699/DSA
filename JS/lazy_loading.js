function handleChange(value) {
  console.log(value)
}

function myDebounce(myfunc,delay) {
let timerId;

return function() {
  const context = this;
  const args = arguments;

  clearTimeout(timerId);
  timerId = setTimeout(function() {
    myfunc.apply(context, args);
  },delay)
}
}

const debounce = myDebounce(handleChange,400);