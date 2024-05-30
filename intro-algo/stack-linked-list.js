class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  //   * Add an element to the top of the stack
  push(value) {
    const newNode = new Node(value);

    if (this.top) {
      newNode.next = this.top;
    }

    this.top = newNode;
    this.size++;

    return this.size;
  }

  //   * Remove an element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const temp = this.top;
    this.top = this.top.next;
    this.size--;

    return temp.value;
  }

  //   * Retrieve the element at the top of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.top.value;
  }

  //   * Check if the stack is empty
  isEmpty() {
    return !this.size;
  }

  // * Get the number of elements in the stack
  getSize() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(11);
stack.push(12);
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.getSize());
