const sentence = "hello there from lighthouse labs";
let delay = 0;
let amountOfTime = 50;
for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char);
}, delay) 
delay += amountOfTime;
}
let delay2 = sentence.length * amountOfTime  + amountOfTime;
setTimeout(()=> process.stdout.write('\n'), delay2)
