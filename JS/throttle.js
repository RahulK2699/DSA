


function handleClick() {
  console.log("Pressed")
}

function myThrottle(myFunc, delay) {
  let timerId;

  return function () {
      const context = this;
      const args = arguments;

      clearTimeout(timerId);
      timerId = setTimeout(() => myFunc.apply(context, args), delay);
  }

}


const throttle = myThrottle(handleClick,300);