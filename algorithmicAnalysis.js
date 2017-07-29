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

Array.prototype.quicksort = function() {
  if (this.length <= 1) {
    return this;
  }

  this = this.partiton();

  let leftHalf = this.slice()

  let leftHalf = this.slice(0, Math.floor(this.length / 2));
  let rightHalf = this.slice(Math.floor(this.length / 2));





};
