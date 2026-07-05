function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Test FizzBuzz
console.log("TASK 1: Five Classic Functions ");
console.log("\n--- fizzBuzz(15) ---");
fizzBuzz(15)


// 2. Reverse String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 3. Palindrome Check (case-insensitive)
function isPalindrome(str) {
  const cleanStr = str.toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

// 4. Find Largest Number
function findLargest(arr) {
  return Math.max(...arr);
}

// 5. Count Vowels
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
