function exampleFunction() {
    let x = 1;
    if (true) {
      let x = 2; // New variable, because it is block-scoped
      console.log(x); // Output: 2
    }
    console.log(x); // Output: 1
  }
  