//array
/*let ary = [3, 2, 33, 54, 5];
let sum = ary.reduce((a, b) => {
    return a + b;
}, 0)
console.log(sum)

const array = [1,2,3,4,6,7,8];
const sumArray = array.reduce((acc, item) => acc + item)
const sumFUllArray = 36
let missItem = sumFUllArray - sumArray;
console.log(missItem)

// self dividing number
function selfDividingNumber(left, right) {
    let result = [];
    if (left > 0 && right < 10000) {
        for (let number = left; number <= right; number++){
            if (isSelfDivided(number)) {
                result.push(number)
            }
        }
        return result;
    } else {
        return 'invalid constraint'
    }
    
}
function isSelfDivided(number) {
    let digits = number.toString().split('');
    for (digit of digits) {
        if (digit === '0' || number % parseInt(digit) !== 0) {
            return false
        }
       
    }
     return true
}
console.log(selfDividingNumber(1, 22))
    
 
var selfDividingNumbers = function(left, right) {
    var result = []
    if(left>0 && right<10000){
        for(var number = left; number <=right; number++){
            if(isSelfDivided(number)){
                result.push(number)
            }
        }
        return result
    }else{
        return 'invalid constraints'
    }
    
};
var isSelfDivided = function(number){
    let digits = number.toString().split('')
    for(digit of digits){
        if (digit === '0' || number % parseInt(digit) !== 0) {
            return false
        }
    }
    return true
}
console.log(selfDividingNumbers(1, 22)) 
    
var numIdenticalPairs = function (nums) {
    const frequency = {}
    let count = 0
    for (num of nums) {
        if (frequency[num]) {
            count += frequency[num]
            frequency[num]++
        }
        else frequency[num]=1
    }
    return count
}
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // Output: 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // Output: 6
console.log(numIdenticalPairs([1, 2, 3])); // Output: 0
var selfDividingNumbers = function (left, right) {
    let result =[]
    if (left > 0 && right < 10000) {
        for (let number = left; number <= right; number++){
            if (isSelfDivided(number)) {
                result.push(number)
            }
        }
    }
    return result;
}
var isSelfDivided = function (number) {
    let digits = number.toString().split('')
    for (digit of digits) {
        if (digit === '0' || number % parseInt(digit) !== 0) {
            return false
        }
    }
    return true
}
console.log(selfDividingNumbers(11,22))

const convertTemperature = function (celsius) {
    const kelvin = (celsius + 273.15).toFixed(2);
    const fahrenheit = (celsius * 1.8 + 32).toFixed(2);
    
    return [parseFloat(kelvin).toFixed(5), parseFloat(fahrenheit).toFixed(5)];
};

console.log(convertTemperature(36.50));  // Output: [309.65000, 97.70000]
console.log(convertTemperature(122.11)); // Output: [395.26000, 251.79800]
const shuffle = function(nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }
    return result;
};

// Example usage:
const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
console.log(shuffle(nums, n));  // Output: [2, 3, 5, 4, 1, 7]

function numEmployees(hours, target) {
  let count = 0;
  const length = hours.length;

  for (let i = 0; i < length; i++) {
    if (hours[i] >= target) {
      count++;
    }
  }

  return count;
}
const hours1 = [0, 1, 2, 3, 4];
const target1 = 2;
console.log(numEmployees(hours1, target1)); // Output: 3

const hours2 = [5, 1, 4, 2, 2];
const target2 = 6;
console.log(numEmployees(hours2, target2)); // Output: 0

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function smallestMultiple(n) {
  const lcm = (2 * n) / gcd(2, n);
  return lcm;
}
console.log(smallestMultiple(5)); // Output: 10
console.log(smallestMultiple(6)); // Output: 6

function tes(n) {
    let digits = n.toString().split('')
    let revDigit = digits.reverse()
    if (digits === revDigit) {
        console.log(parseInt(digits.join(''))+ ' is palindrome')
    }
}
tes(121)

function isPalindrome(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }

  let reversed = 0;
  let num = x;

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reversed === x;
}
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false

function mergeAlternately(word1, word2) {
  const merged = [];
  const length1 = word1.length;
  const length2 = word2.length;
  const maxLength = Math.max(length1, length2);

  for (let i = 0; i < maxLength; i++) {
    if (i < length1) {
      merged.push(word1[i]);
    }
    if (i < length2) {
      merged.push(word2[i]);
    }
  }

  return merged.join('');
}
console.log(mergeAlternately("abc", "pqr")); // Output: "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // Output: "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // Output: "apbqcd"
var countPrimes = function(n) {
    let isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i * i < n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
        }
      }
    }
  return isPrime.filter((val) => val).length;
};

//find sum of target number on given sorted array
const arr = [1, 2, 3, 4, 5, 6]
const target = 6;
function sum(arr, target) {
  let p1 = 0;
  let p2 = arr.length-1;
  while (p1 < p2) {
    const sumOfTwo = arr[p1] + arr[p2]
    if (sumOfTwo === target) {
      return arr[p1]+ ' and '+ arr[p2]
    }
    else if (sumOfTwo < target) {
      p1++
    }
    else p2--
  }
}
console.log(sum(arr,target))

// find two element that sum is 0
const ary = [-10, -5, -3, 1, 2, 3, 4]
let zeroSum = function (arr) {
  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 < p2) {
    let sum = arr[p1] + arr[p2]
    if (sum === 0) {
      return arr[p1]+ ' and ' +arr[p2]
    }
    else if (sum < 0) {
      p1++
    }else p2--
  }
}
console.log(zeroSum(ary))
var mergeTwoLists = function(list1, list2) {
     // Create a dummy node
  const dummy = new ListNode(0);
  let prev = dummy;

  // Iterate through the lists
  while (list1 !== null && list2 !== null) {
    // Compare and link nodes
    if (list1.val <= list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }

    // Move the pointers
    prev = prev.next;
  }

  // Handle remaining nodes
  prev.next = list1 !== null ? list1 : list2;

  // Return the merged list
  return dummy.next;
};
class Solution {
  containsDuplicate(nums) {
    // TODO: Write your code here
    const uniqueSet = new Set()
    for(let i=0; i<nums.length; i++){
      if(uniqueSet.has(nums[i])){
        return true
      }
      uniqueSet.add(nums[i])
    }
    return false;
  }
}
let arr = [1, 2, 3, 4]
const sol = new Solution()
console.log(sol.containsDuplicate(arr))

function string(str) {
  const reverseStr = str.split('').reverse().join('');
  console.log(reverseStr)
}
console.log(string('aeiou'))

function reverseVowels(s) {
  const vowels = "aeiouAEIOU";
  const arr = [...s]; // Convert string to array

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (vowels.includes(arr[left]) && vowels.includes(arr[right])) {
      // Both characters are vowels, swap them
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else if (vowels.includes(arr[left])) {
      // Character at left pointer is a vowel, move right pointer
      right--;
    } else {
      // Character at right pointer is a vowel or neither are vowels, move left pointer
      left++;
    }
  }

  return arr.join(""); // Convert array back to string
}

// Example usage:
console.log(reverseVowels("hello")); // Output: "holle"
console.log(reverseVowels("AEIOU")); // Output: "UOIEA"
console.log(reverseVowels("DesignGUrus")); // Output: "DusUgnGires"

function Vo(str) {
  const vowels = 'aeiouAEIOU'
  const arr = [...str]
  let left = 0;
  let right = arr.length - 1
  while (left < right) {
    if (vowels.includes(arr[left]) && vowels.includes(arr[right])) {
      [arr[right],arr[left]]= [arr[left],arr[right]]
      left++
      right--
    } else if (vowels.includes(arr[left])) {
      right--
    }else left++
  }
  return arr.join('')
}
console.log(Vo('DesignGUrus'))

function isPalindrome(s) {
  const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Example usage:
console.log(isPalindrome("A mana, a plan, a canal, Panama!")); // Output: true
console.log(isPalindrome("Was it a car or a cat I saw?")); // Output: true

function palindrome(s) {
  let newStr = s.toLowerCase().replace(/[^a-z0-9]/g, "")
  let left = 0;
  let right = newStr.length - 1;
  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
console.log(palindrome('Was it a car or a cat I saw'))

function RemoveTarget(arr,key) {
  let newElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[newElement] = arr[i]
      newElement++
    }
  }
  return newElement
}
console.log(RemoveTarget([3, 2, 3, 6, 3, 10, 9, 3], 3)); 
console.log(RemoveTarget([2, 11, 2, 2, 1], 2));

//remove duplicated and return the length of new subarray
class Solution {
  // Define a method called "remove" that takes an array 'arr' as input.
  remove(arr) {
    // Initialize a variable 'nextNonDuplicate' to keep track of the index of the next non-duplicate element.
    let nextNonDuplicate = 1;

    // Initialize a variable 'i' to iterate through the array.
    let i = 0;

    // Start a while loop to iterate through the elements of the array 'arr'.
    while (i < arr.length) {
      // Check if the element at 'nextNonDuplicate - 1' index is not equal to the current element at 'i' index.
      if (arr[nextNonDuplicate - 1] !== arr[i]) {
        // If they are not equal, it means a new non-duplicate element is found.
        // Set the element at 'nextNonDuplicate' index to the current element at 'i' index.
        arr[nextNonDuplicate] = arr[i];

        // Increment 'nextNonDuplicate' to prepare for the next non-duplicate element.
        nextNonDuplicate += 1;
      }

      // Increment the iterator 'i' to move to the next element in the array.
      i += 1;
    }

    // After processing the array, 'nextNonDuplicate' represents the length of the modified array with duplicates removed.
    // Return 'nextNonDuplicate' as the result.
    return nextNonDuplicate;
  }
}

// Create an instance of the Solution class.
const sol = new Solution();

// Test the 'remove' method with two different arrays and print the results.
console.log(sol.remove([2, 3, 3, 3, 6, 9, 9])); // Output: 4 (modified array: [2, 3, 6, 9, 6, 9, 9])
console.log(sol.remove([2, 2, 2, 11])); 

//check whether a number is palindron or not
function checkPal(num) {
  const numToCheck = num.toString()
  let left = 0;
  let right = numToCheck.length-1;
  while (left < right) {
    if (numToCheck[left] != numToCheck[right]) {
      return false
    }
    else {
      right--
      left++
    }
      
    
  }
 
  return true
}
console.log(checkPal(13221))

// return the length of last word in string
function orString(str) {
  const word = str.trim().split(' ');
  return (word[word.length - 1]).length;
}
console.log(orString('hello word '))

 * @param {string} s
 * @return {number}

var lengthOfLastWord = function(s) {
    let count =0;
    let i= s.length-1
    while(i>0){
        if(s[i]===' ' && count>0){
            return count
        }else if(s[i]!==' '){
            count++
        }
        i--
    }
    return count;
};

var twoSum = function(nums, target) {
    let left= 0;
    let right = nums.length-1;
    while(left < right){
        let sum = nums[left] + nums[right];
        if(target === sum){
            return [left,right]
        }else if(sum<target){
            left++
        }else right--
    }
    return false
    
};
let arr = [1,2,5,7]
console.log(twoSum(arr,9))

var twoSum = function(nums, target) {
   const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in map) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return [];
   
};

function checkAttendanceAward(s) {
  let absentCount = 0;
  let lateCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      absentCount++;
      lateCount = 0; // Reset the late count if the student is absent
    } else if (s[i] === 'L') {
      lateCount++;
    } else {
      lateCount = 0; // Reset the late count if the student is present
    }

    if (absentCount >= 2 || lateCount >= 3) {
      return false;
    }
  }

  return true;
}

// Example usage:
console.log(checkAttendanceAward('PPALLP')); // Output: true
console.log(checkAttendanceAward('PPALLL')); // Output: false

function attendance(s) {
  let a = 0;
  let l = 0;
  for (let i = 0; i <= s.length - 1; i++){
    if (s[i] === 'A') {
      a++;
      l = 0;
    } else if (s[i] === 'L') {
      l++
    }
    else l = 0;
  }
  if (a >= 2 || l >= 3) {
    return false
  }else return true
}
console.log(attendance('PPAALL'))
console.log(attendance('PPALLP'))
// slide window the brute force solution
var removeDuplicates = function(nums) {
  
    let k = [... new Set(nums)]
    return k;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

// add two sorted array and return first array as new long sort array
function addTwoSortArray(ar1, m, ar2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = n + m - 1;
  while (p1 >= 0 && p2 >= 0) {
    if (ar1[p1] > ar2[p2]) {
      ar1[p] = ar1[p1]
      p1--
    } else {
      ar1[p] = ar2[p2]
      p2--
    }
    p--
  }
  while (p2 >= 0) {
    ar1[p] = ar2[p2]
    p2--
    p--
  }
  return ar1;
}
let a1 = [1, 2, 4, 10];
let a2 = [3, 5, 0, 0, 0];
console.log(addTwoSortArray(a1, 3, a2, 2))
//brute force of of window slider
function maxSumOfTarget(arr,p) {
  let i = 0;
  let maxSum = 0;
  let length = arr.length - 1;
  while (i <=length  - p) {
    let sum = 0;
    let j = i;
    while (j <i + p) {
      sum = sum + arr[j];
      j++
    }
    i++
    maxSum = Math.max(maxSum,sum)
  }
  return maxSum
}
const arry = [2, 4,6, 1, -2, 9]
let n = 3;
console.log(maxSumOfTarget(arry,n))
// efficient slide window solution
//[1,2,3,4,5,6,7]
function maxSumWindow(arr, n) {
  let maxSum = 0;
  let sum = 0;
  let i = 0;
  while(i < n){
    sum = sum + arr[i];
    i++
  }
  maxSum = sum
  i = n;
  while (i < arr.length) {
    sum = sum + arr[i]-arr[i - n] ;
    if (maxSum < sum) {
      maxSum = sum;
    }
    i++
  }
  return maxSum;
}
let arr =[11,1,4,6,3,10,2]
console.log(maxSumWindow(arr, 3));
*/
function maxDiffTemp(k) {
  let minTemp = k[0];
  let maxDiff = 0;
  for (let i = 0; i < k.length; i++){
    minTemp = Math.min(minTemp, k[i]);
    maxDiff = Math.max(maxDiff,k[i]-minTemp)
  }
  return maxDiff;
}


let k = [70, 10, 30, 50, 60, 40];
console.log(maxDiffTemp(k))

