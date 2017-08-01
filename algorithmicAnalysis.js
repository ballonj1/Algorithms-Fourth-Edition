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
