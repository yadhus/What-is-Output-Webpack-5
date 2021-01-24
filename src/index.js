console.log("What is Entry - Webpack 5");

let a = 10;
let b = 30;

let c = a + b;

console.log(`Adding 10 + 30 = ${c}`);

setTimeout(function alerting() {
  import("./vendor").then((logger) => {
    alert("Hello World");
    logger("Lazy Hello world");
  });
}, 500);
