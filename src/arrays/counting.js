/**
 * TASK 1: Given an array of integers from [0, N], write a function
 * that counts the number of times each element in the array can be
 * divided by 2 (without a remainder) and returns an array containing
 * the indexes of only the numbers that can be divided by 2
 * (without a remainder) 3 times or more
 */

/**
 * Calculates total number of integers divisible by two
 * @param {number[]} A
 */
function solution1(A) {
  const result = [];
  A.forEach(function(item, index, array) {
    let count = 0;
    while (item % 2 == 0) {
      count++;
      item = item / 2;
      if (count >= 3) {
        result.push(index);
        break;
      }
    }
  });
  return result;
}

/**
 * TASK 2: Given an array of integers from [0, N], write a function
 * that returns the smallest missing integer. For example, given an array:
 * A = [1,3,2,5,6,-1,0,8], the function should return 4
 */

/**
 * Finds the smallest missing integer
 * @param {number[]} A
 */
function solution2(A) {
  // todo: implement function here
  const arry = A.sort((a, b) => a - b);
  let i;
  for (i = 0; i < arry.length - 1; i++) {
    if (arry[i] + 1 !== arry[i + 1]) {
      console.log(arry[i] + 1);
      return arry[i] + 1;
    }
  }
}

function main() {
  const A1 = new Array(125).fill(0).map((_, i) => i + 1);

  const y1 = solution1(A1);
  if (
    y1.join() !==
    [7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111, 119].join()
  )
    console.error(
      "Solution1 Wrong Answer: Please implement a correct solution"
    );
  else console.log("Solution1 Correct, Welldone");

  const A2 = [2, -1, 0, 1, 5, 3];

  const y2 = solution2(A2);
  if (y2 !== 4)
    console.error(
      "Solution2 Wrong Answer: Please implement a correct solution"
    );
  else console.log("Solution2 Correct, Welldone");
}

main();

/** 
var B = [8,6,8,16,1,1,1,1,8,16,2,2,2,2,2,2,2,2,2,2];
var D = solution(B);
console.log(D)
*/
