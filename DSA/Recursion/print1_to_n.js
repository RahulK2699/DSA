function print(n) {

  if(n === 1) {
    console.log(n);
    return;
  }

  print(n - 1);
  console.log(n)
}

print(5)