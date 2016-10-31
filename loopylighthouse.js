var start = 100;
var finish = 200;

for (var i = start; i <= finish; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) {
    console.log("Loopy")
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}