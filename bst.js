function BSTNode(key, rightChild = null, leftChild = null) {
  this.key = key;
  this.rightChild = rightChild;
  this.leftChild = leftChild;
}

BSTNode.prototype.put = function(currentNode, insertKey) {
  if (currentNode === null) {
    return new BSTNode(insertKey);
  }

  if (insertKey < currentNode.key) {
    currentNode.leftChild = BSTNode.prototype.put(currentNode.leftChild, insertKey);
  } else if (insertKey > currentNode.key) {
    currentNode.rightChild = BSTNode.prototype.put(currentNode.rightChild, insertKey);
  }

  return currentNode;
}

BSTNode.prototype.findMin = function(currentNode) {
  if (currentNode.leftChild === null) {
    return currentNode;
  } else {
    return BSTNode.prototype.findMin(currentNode.leftChild);
  }
}

BSTNode.prototype.findMax = function(currentNode) {
  if (currentNode.rightChild === null) {
    return this;
  } else {
    return BSTNode.prototype.findMax(currentNode.rightChild);
  }
}

BSTNode.prototype.search = function(currentNode, key) {
  if (currentNode === null) {
    return false;
  }

  if (key === currentNode.key) {
    return currentNode;
  } else if (key < currentNode.key) {
    return BSTNode.prototype.search(currentNode.leftChild, key);
  } else if (key > currentNode.key) {
    return BSTNode.prototype.search(currentNode.rightChild, key);
  }
}


BSTNode.prototype.height = function(currentNode) {
  if (currentNode === null) {
    return 0;
  }

  let leftChildHeight = BSTNode.prototype.height(currentNode.leftChild);
  let rightChildHeight = BSTNode.prototype.height(currentNode.rightChild);

  let currentHeight;
  if (leftChildHeight > rightChildHeight) {
    currentHeight = 1 + leftChildHeight;
  } else {
    currentHeight = 1 + rightChildHeight;
  }

  return currentHeight;
}

BSTNode.prototype.delete = function(currentNode, key) {
  if (currentNode === null) {
    return null;
  } else if (currentNode.key === key) {
    if (currentNode.rightChild === null && currentNode.leftChild === null) {
      return null;
    } else if (currentNode.rightChild === null || currentNode.leftChild === null) {
      return currentNode.rightChild || currentNode.leftChild;
    } else {
      let min = BSTNode.prototype.findMin(currentNode.rightChild);
      min.rightChild = BSTNode.prototype.delete(currentNode.rightChild, min.key);
      min.leftChild = currentNode.leftChild;
      return min;
    }
  } else if (key < currentNode.key) {
    currentNode.leftChild = BSTNode.prototype.delete(currentnode.leftChild, key);
  } else if (key > currentNode.key) {
    currentNode.rightChild = BSTNode.prototype.delete(currentNode.rightChild, key);
  }
  return currentNode;
}

BSTNode.prototype.inOrder = function(currentNode) {
  let ordered = [];

  if (currentNode === null) {
    return ordered;
  }

  ordered = ordered.concat(BSTNode.prototype.inOrder(currentNode.leftChild));
  ordered.push(currentNode.key);
  ordered = ordered.concat(BSTNode.prototype.inOrder(currentNode.rightChild));

  return ordered;
}
