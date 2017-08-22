const threeSum = (arr, target) => {
  let threeNums = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          threeNums.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return threeNums;
};

console.log(threeSum([1,2,3,4,5], 12));


class Node {
  constructor(parent, children, value) {
    this.parent = parent;
    this.children = children;
    this.value = value;
  }

  set newParent(node) {
    if (this.parent !== node) {
      this.parent = node;
      node.newChild = this;
    }
  }

  set newChild(node) {
    if (!this.children.includes(node)) {
      this.children.push(node);
      node.newParent = this;
    }
  }

  root() {
    let parent = this.parent;

    while(parent !== null) {
      parent = parent.parent;
    }

    return parent;
  }

  findParent(node) {
    let parent = this.parent;

    while (parent !== undefined) {
      if (parent === node) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  findChild(node) {
    if (this === node) {
      return true;
    }

    if (this.children.length === 0) {
      return false;
    }

    let found = this.children.some((child) => {
      if (child === node) {
        return true;
      } else {
        findChild(child);
      }
    })

    return found;
  }
}


class QuickFind {
  constructor(nodes) {
    console.log(this);
    this.store = this.baseConnections(nodes);
  }

  baseConnections(nodes) {
    let connections = [];

    for (let i = 0; i < nodes; i++) {
      connections[i] = i;
    }

    return connections;
  }

  union(a, b) {
    let valueToChange = this.store[a];
    let valueToConnectTo = this.store[b];

    this.store.forEach((currentValue, index) => {
      if (currentValue === valueToChange) {
        this.store[index] = valueToConnectTo;
      }
    });

    return this.store;
  }

  connected(a, b) {
    if (this.store[a] === this.store[b]) {
      return true;
    } else {
      return false;
    }
  }
}

class QuickUnion {
  constructor(nodes) {
    this.store = baseConnections(nodes)
  }

  baseConnections(nodes) {
    let connections = [];

    for (let i = 0; i < nodes; i++) {
      connections[i] = new Node(null, null, i);
    }

    return connections;
  }

  union(a, b) {
    var nodeToConnect;
    if (a == this.store[a].value) {
      nodeToConnect = this.store[a];
    } else {
      nodeToConnect = this.store[a].root();
    }
  }
}

class Stack {
  constructor() {
    this.store = [];
    this.size = 0;
  }

  pop() {
    this.size--;
    return this.store.pop();
  }

  push(element) {
    this.size++;
    return this.store.push(element);
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

Array.prototype.mergeSort = function() {
  if (this.length <= 1) {
    return this;
  }

  let halfWay = Math.floor(this.length / 2);
  let leftHalf = this.slice(0, halfWay);
  let rightHalf = this.slice(halfWay);

  let leftSorted = leftHalf.mergeSort();
  let rightSorted = rightHalf.mergeSort();

  return [].merge(leftSorted, rightSorted);
};

Array.prototype.merge = function(a, b) {
  let merged = [];

  while (a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      merged.push(a.shift());
    } else {
      merged.push(b.shift());
    }
  }

  return merged.concat(a, b);
}

/*
  Partition method will take in an array and return that array so that the number in the 0th index is now fully sorted

*/

Array.prototype.partition = function() {
  if (this.length <= 1) {
    return this;
  }

  let i = 1;
  let j = this.length - 1;
  let temp;

  while (i < j) {
    if (this[0] >= this[i]) {
      i += 1;
    } else {
      if (this[j] <= this[0]) {
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
        i += 1;
      }
      j -= 1;
    }
  }

  temp = this[i - 1];
  this[i - 1] = this[0];
  this[0] = temp;

  let leftHalfPartition = this.slice(0, i - 1).partition();
  let rightHalfPartition = this.slice(i + 1).partition();

  return leftHalfPartition + this[i - 1] + rightHalfPartition;
};

// Array.prototype.quicksort = function() {
//   if (this.length <= 1) {
//     return this;
//   }
//
//   this = this.partiton();
//
//   let leftHalf = this.slice(0, Math.floor(this.length / 2));
//   let rightHalf = this.slice(Math.floor(this.length / 2));
//
//
//
//
//
// };

const fibs = (n) => {
  let fib = [0, 1];
  if (n < 2) {
    return fib.slice(0, n + 1);
  }

  let lastFib = fibs(n - 1);
  lastFib.push(lastFib[lastFib.length - 2] + lastFib[lastFib.length - 1]);
  return lastFib;
};

const isPalindrome = (word) => {
  let i = 0;
  let j = word.length - 1;

  while (i < j) {
    if (word[i] !== word[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }

  return true;
};


const validIP = (string) => {
  if (!/^\d{1,3}(\.\d{1,3}){3}$/.test(string)) {
    return false;
  }
  let numbers = string.split(".");

  return numbers.every((number) => {
    n = parseInt(number);
    return (n >= 0 && n <= 255)
  });
};

const sumFromFile = (fileName) => {
  let file = new File(fileName);
  file.open("r");
  fileLines = []
  while (!file.eof) {
    fileLines.append(file.readln());
  }
  let nums = fileLines.filter((line) => line[0] != "#").map((line) => parseInt(line));
  return nums.reduce((a, b) => a + b, 0);
};

const shuffle = (array) => {
  let max = array.length;
  let i = 0;
  while (i < max) {
    let newI = Math.floor(Math.random(0, max));
    let temp = array[i];
    array[i] = array[newI];
    array[newI] = temp;
    i += 1;
  }
  return array;
};

const uniqSubs = (word) => {
  let i = 0;
  let uniq = new Set;
  while (i < word.length - 1) {
    let j = i + 1;
    while (j < word.length) {
      uniq.add(word.slice(i, j + 1))
      j += 1;
    }
    i += 1;
  };
  return uniq;
};

const largestContiguousSubSum = (array) => {
  let sum = 0;
  let newHighest = 0;

  array.forEach((number) => {
    let nextSum = sum + number;
    if (nextSum < 0) {
      sum = 0;
    } else if (nextSum > newHighest) {
      newHighest = nextSum;
    }
    sum = nextSum;
  });

  return newHighest;
};

const sillyYears = (year) => {
  let years = [];
  let firstTwo = Math.floor(year / 100);
  let lastTwo = year % 100;
  let middleTwo = firstTwo + lastTwo;

  let firstNum = Math.floor(year / 1000);
  let lastNum = year % 10;

  if (year < parseInt(`${firstNum}${middleTwo}0`)) {
    for (var i = 0; i < 10; i++) {
      years.push(parseInt(`${firstNum}${middleTwo}${i}`));
    }
  } else {
    for (var i = 0; i < 10; i++) {
      years.push(parseInt(`${firstNum + 1}${middleTwo}${i}`));
    }
  }

  return years;
};

const binarySearch = (array, target) => {
  let midPoint = Math.floor(array.length / 2);

  if (array[midPoint] === target) {
    return midPoint;
  } else if (array.length < 1) {
    return false;
  } else if (array.length === 1 && array[midPoint] !== target) {
    return false;
  }

  let leftHalf = array.slice(0, midPoint);
  let rightHalf = array.slice(midPoint + 1);

  if (target < array[midPoint]) {
    return binarySearch(leftHalf, target);
  } else {
    let sub = binarySearch(rightHalf, target);
    if (!sub) {
      return null;
    } else {
      return sub + midpoint + 1;
    }
  }
};

//array = [1,2,3,4,5]
//target = 1


const productify = (array) => {
  let productified = new Array(array.length - 1);
  productified.fill(1);

  let lower = 1;
  for (let i = 0; i < array.length; i++) {
    productified[i] = lower;
    lower *= array[i];
  }

  let upper = 1;
  for (let i = array.length - 1; i > -1; i--) {
    productified[i] *= upper;
    upper *= array[i];
  }

  return productified;
};


class Node {
  constructor(name = '') {
    this.name = name;
    this.prev = null;
    this.next = null;
  }
}

class Table {
  constructor() {
    this.tableCount = 0;
    this.head = null;
    this.tail = null;
  }

  addPerson(node) {
    this.tableCount += 1;

    if (this.tableCount === 1) {
      this.head = node;
      return node;
    } else if (this.tableCount === 2) {
      this.tail = node;
      this.tail.next = this.head;
      this.tail.prev = this.head;
      this.head.next = node;
      this.head.prev = node;
      return node;
    } else {
      this.tableCount += 1;

      let currentNode = this.head;

      while (!(node.name > currentNode && node.name < curentNode.next)) {
        currentNode = currentNode.next;
      }

      node.next = currentNode.next;
      node.prev = currentNode;

      currentNode.next = node;
      node.next.prev = node;
    }
  }
}

const seatedSorting = (name) => {

};

const sortOne = (array) => {
  let sorted = new Array(array.length);

  for (let i = 1; i <= array.length; i++) {
    sorted[i - 1] = i;
  }

  return sorted;
};

const sortTwo = (array) => {
  let max = 0;

  let i = 0
  while (i < array.length) {
    if (max < array[i]) {
      max = array[i]
    }
    i+= 1
  }

  let sorted = new Array(max);

  i = 0;
  while (i < array.length) {
    sorted[array[i] - 1] = array[i];
    i += 1;
  }

  let result = [];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== undefined) {
      result.push(sorted[i]);
    }
  }

  return result;
};

const weightedRandomIndex = (array) => {
  let total = array[0];
  for(let i = 1; i < array.length; i++) {
    total += array[i];
  }

  let rand = Math.floor(Math.random() * total + 1);
  let runningTotal = 0;

  for (let i = 0; i < array.length; i++) {
    if (rand > runningTotal && rand <= runningTotal + array[i]) {
      return array[i];
    }
    runningTotal += array[i];
  }
};

const moveZeros = (array) => {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    if (array[i] !== 0) {
      i += 1;
    } else if (array[i] === 0 && array[j] === 0) {
      j -= 1;
    } else {
      array[i] = array[j];
      array[j] = 0;

      j -= 1;
      i += 1;
    }
  }

  return array;
};

const lookAndSay = (array) => {
  let counter = 1;
  let result = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      counter += 1;
    } else {
      result.push([counter, array[i - 1]]);
      counter = 1;
    }
  }

  result.push([counter, array[array.length - 1]]);

  return result;
};

const sumsOnSums = (array) => {
  let inputTotal = 0;
  let expectedTotal = 0;

  for(let i = 0; i < array.length; i++) {
    inputTotal += array[i];
  }

  for(let i = 0; i < array.length + 1; i++) {
    expectedTotal += i;
  }

  return expectedTotal - inputTotal;
};


class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.children = null;
  }
}


const caesarCipher = (string, offset) => {
  let chars = string.split('');
  const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

  const newChars = chars.map((currentValue) => {
    if (/ /.test(currentValue)) {
      return currentValue;
    } else {
      let indexOfChar = ALPHABET.indexOf(currentValue);
      let newIndex = (indexOfChar + offset) % 25;

      return ALPHABET[newIndex];
    }
  })

  return newChars.join('');
};

const digitalRoot = (number) => {
  if (number < 10) {
    return number;
  }

  let ones = number % 10;
  let remainder = Math.floor(number / 10)

  if (ones + remainder < 10) {
    return ones + remainder
  } else {
    return ones + digitalRoot(remainder);
  }
};

const sumRec = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + sumRec(arr.slice(1));
  }
};

const recFib = (n) => {
  let fibs = [0, 1];
  if (n <= 2) {
    return fibs.slice(0, n);
  }

  let lastFib = recFib(n - 1);

  lastFib.push(lastFib[lastFib.length - 1] + lastFib[lastFib.length - 2]);

  return lastFib;
};

const itFib = (n) => {
  let fibs = [0, 1];
  if (n <= 2) {
    return fibs.slice(0, n);
  }

  while (fibs.length < n) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }

  return fibs;
};

const longestCommonSubstring = (str1, str2) => {
  let arrayCount = str1.length;
  let arrayLength = str2.length;

  let matrix = [];

  while (matrix.length < array.count) {
    let nextRow = [];

    for(let i = 0; i < array.length; i++) {
      nextRow.push(0);
    }

    matrix.push(nextRow);
  }

  i = 0;

  while (i < str1.length) {
    let j = 0
    while (j < str2.length) {
      if (str[i] === str[j]) {
        if (i == 0 || j == 0) {
          matrix[i][j] = 1;
        } else {
          matrix[i][j] = matrix[i - 1][j - 1] + 1
        }
      }
      j += 1
    }
    i += 1;
  }
};

const numberSums = (num) => {

};

const uniqSubs = (string) => {
  let subs = new Set();
  for(let i = 0; i < string.length; i++) {
    for(let j = i; j < string.length; j++) {
      subs.add(string.slice(i, j + 1));
    }
  }

  return subs.entries();
};

const largestContiguousSubsum = (array) => {
  let currentSub = 0;
  let largestSub = 0;

  array.forEach((currentValue, index, array) => {
    if (currentSub + currentValue < 0) {
      if (currentSub > largestSub) {
        largestSub = currentSub;
      }
      currentSub = 0;
    } else if (currentSub + currentValue > largestSub){
      currentSub += currentValue;
      largestSub = currentSub;
    } else {
      currentSub += currentValue;
    }
  });

  return largestSub;
};


const sillyYears = (year) => {
  let silliestYears = [];

  let firstTwoDigits = Math.floor(year / 100);
  let lastTwoDigits = year % 100;

  let middleTwoDigits = firstTwoDigits + lastTwoDigits;

  let firstDigit = Math.floor(year / 1000);

  let nextYear = ((firstDigit * 1000) + (middleTwoDigits * 10));

  if (nextYear > year) {
    for (let i = 0; i < 10; i++) {
      silliestYears.push(nextYear + i);
    }
  } else {
    newDigit = firstDigit + 1;
    let greaterYear = (newDigit * 1000) + (middleTwoDigits * 10);
    for (let i = 0; i < 10; i++) {
      silliestYears.push(greaterYear + i);
    }
  }
  return silliestYears;
};

const binarySearch = (array, target) => {
  let midPoint = Math.floor(array.length / 2);

  if (array[midPoint] === target) {
    return midPoint;
  } else if (array.length <= 1 && array[midPoint] !== target) {
    return null;
  }

  if (array[midPoint] > target) {
    return binarySearch(array.slice(0, midPoint), target);
  } else {
    let rightSearch = binarySearch(array.slice(midPoint + 1), target);

    if (rightSearch !== null) {
      return midPoint + rightSearch + 1;
    } else {
      return null;
    }
  }
};

[1,2,3,4]


function degreeOfArray(array) {
  let numAndCount = {};
  let degree = 0;

  array.forEach((number) => {
    if (numAndCount[number]) {
      numAndCount[number] += 1;
      if (degree < numAndCount[number]) {
        degree = numAndCount[number];
      }
    } else {
      numAndCount[number] = 1;
      if (degree === 0) {
        degree = 1;
      }
    }
  });

  let nums = [];
  Object.keys(numAndCount).forEach((key) => {
    if (numAndCount[key] === degree) {
      nums.push(parseInt(key));
    }
  });

  let degreeArrays = [];
  nums.forEach((num) => {
    let i = 0;
    let j = array.length - 1;

    while (array[i] !== num) {
      i += 1;
    }

    while (array[j] !== num) {
      j -= 1;
    }

    degreeArrays.push([i, j]);
  });

  let greatestDifference = [];

  degreeArrays.forEach((degrees) => {
    if (greatestDifference.length === 0) {
      greatestDifference = degrees;
    } else if ((greatestDifference[1] - greatestDifference[0]) > (degrees[1] - degrees[0])) {
      greatestDifference = degrees;
    }
  })

  return array.slice(greatestDifference[0], greatestDifference[1] + 1);
}

// [1,2,3,4,5]

function consecutiveSum(array, target) {
  let i = 0;
  let j = 1;
  let range = array[i] + array[j];
  let total = 0;

  while (i < array.length && j !== array.length && i !== j) {
    if (range === target) {
      total += 1;
      range -= array[i];
      i += 1;
      j += 1;
      range += array[j];
    } else if (range < target) {
      j += 1;
      range += array[j];
    } else if (range > target) {
      range -= array[i];
      i += 1;
    }
  }

  return total;
}

const largestContiguousSubsum = (array) => {
  let currentSub = 0;
  let largestSub = 0;

  array.forEach((currentValue, index, array) => {
    if (currentSub + currentValue < 0) {
      if (currentSub > largestSub) {
        largestSub = currentSub;
      }
      currentSub = 0;
    } else if (currentSub + currentValue > largestSub){
      currentSub += currentValue;
      largestSub = currentSub;
    } else {
      currentSub += currentValue;
    }
  });

  return largestSub;
};

const binarySearch = (array, target) => {
  let midPoint = Math.floor(array.length / 2);

  if (array[midPoint] === target) {
    return midPoint;
  } else if (array.length <= 1 && array[midPoint] !== target) {
    return null;
  }

  if (array[midPoint] > target) {
    return binarySearch(array.slice(0, midPoint), target);
  } else {
    let rightSearch = binarySearch(array.slice(midPoint + 1), target);

    if (rightSearch !== null) {
      return midPoint + rightSearch + 1;
    } else {
      return null;
    }
  }
};

const sumsOnSums = (array) => {
  let inputTotal = 0;
  let expectedTotal = 0;

  for(let i = 0; i < array.length; i++) {
    inputTotal += array[i];
  }

  for(let i = 0; i < array.length + 1; i++) {
    expectedTotal += i;
  }

  return expectedTotal - inputTotal;
};

function numToBinary(n) {
  let binaryString = "";

  while (n > 0) {
    let nextBit = n % 2;
    binaryString = nextBit + binaryString;
    n = Math.floor(n / 2);
  }

  return binaryString;
}

function itFact(n) {
  let runningSum = n;

  while (n > 0) {
    n -= 1;
    runningSum *= n;
  }

  return runningSum;
}

function recFact(n) {
  if (n === 1) {
    return n;
  }

  return n * recFact(n - 1);
}
