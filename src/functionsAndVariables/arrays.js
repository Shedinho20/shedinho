/**
 * TASK 1: Write a function which will take an array of
 * numbers and return the second lowest and second greatest numbers
 * @param {number[]} A
 */
function solution1(A) {
  // todo: implement solution here
  return [0, 0];
}

function main() {
  const A1 = [3, 1, 7, 8, 9, 0, 1, 20, 17];
  const y1 = solution1(A1);
  if (y1.join() !== [3, 17].join())
    console.error("TASK 1 Wrong Answer: Please implement a correct solution");
  else console.log("TASK 1 Correct, Welldone");
}

main();
