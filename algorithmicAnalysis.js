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
  constructor(parent, child) {
    this.parent = parent;
    this.child = child;
  }

  set newParent(node) {
    this.parent = node;
    node.newChild = this;
  }

  set newChild(node) {
    this.child = node;
    node.newParent = this;
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
    let child = this.child;

    while (child !== undefined) {
      if (child === node) {
        return true;
      }
      child = child.child;
    }
    return false;
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
      connections[i] = i;
    }

    return connections;
  }

  union(a, b) {
    
  }
}
