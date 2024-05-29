class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    return this.items.push(value);
  }

  pop() {
    if (this.items) {
      return this.items.pop();
    }

    return undefined;
  }

  peek() {
    if (!this.items) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return !this.items.length;
  }

  size() {
    return this.items.length;
  }

  printStack() {
    let str = "";
    for (let item of this.items) {
      str += `${item} `;
    }

    return str;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(11);
stack.push(12);
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.printStack());
