function func () {
  try {
    console.log(1)
  }
  catch (e) {
    console.log(2)
  }
  finally {
    console.log(3)
  }
  console.log(4)
}

func();