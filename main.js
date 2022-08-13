function multiple() {
  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log("hello");
    } else if (i % 5 === 0) {
      console.log("world");
    } else if (i % 7 === 0) {
      console.log("you");
    } else {
      console.log(i);
    }
  }
}
multiple();
