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

class UnionFind {
  constructor(numberOfObjects) {


  }

  const union()
}

class Node {
  constructor(parent, child) {
    this.parent = parent;
    this.child = child;
  }

  set newParent(node) {
    this.parent = node;
  }

  set newChild(node) {
    this.child = node;
  }

  static findParent(node) {
    let parent = this.parent;

    while (parent !== undefined) {
      if (parent === node) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  static findChild(node) {
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
