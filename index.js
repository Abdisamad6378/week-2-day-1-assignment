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


// ============================================
// TASK 2: Kenyan County Object
// ============================================

const county1 = {
  name: "Nairobi",
  capital: "Nairobi City",
  population: 4397073,
  area: 696,
  borders: ["Kiambu", "Machakos", "Kajiado"]
};

const county2 = {
  name: "Mombasa",
  capital: "Mombasa City",
  population: 1208333,
  area: 219.9,
  borders: ["Kilifi", "Kwale"]
};

const county3 = {
  name: "Kisumu",
  capital: "Kisumu City",
  population: 1157574,
  area: 417,
  borders: ["Vihiga", "Kakamega", "Nandi", "Kericho"]
};

// Format population with commas
function formatPopulation(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Display county information
function displayCounty(county) {
  return `${county.name} County | Capital: ${county.capital} | Population: ${formatPopulation(county.population)} | Area: ${county.area} km²`;
}

// Create borders string with 'and' before last item
function bordersString(county) {
  if (county.borders.length === 0) return `${county.name} has no bordering counties`;
  if (county.borders.length === 1) return `${county.name} borders ${county.borders[0]}`;
  
  const allButLast = county.borders.slice(0, -1).join(", ");
  const last = county.borders[county.borders.length - 1];
  return `${county.name} borders ${allButLast}, and ${last}`;
}

// ============================================
// TEST TASK 2
// ============================================
console.log("\n\n========== TASK 2: Kenyan County Object ==========");
console.log("\n--- County 1: Nairobi ---");
console.log(displayCounty(county1));
console.log(bordersString(county1));

console.log("\n--- County 2: Mombasa ---");
console.log(displayCounty(county2));
console.log(bordersString(county2));

console.log("\n--- County 3: Kisumu ---");
console.log(displayCounty(county3));
console.log(bordersString(county3));
