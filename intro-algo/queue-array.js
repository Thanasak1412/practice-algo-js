class Queue {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  // * Add an element to the end of the queue
  enqueue(value) {
    this.length++;
    this.items.push(value);

    return this.length;
  }

  // * Remove the element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.length--;
    return this.items.shift();
  }

  // * Retrieve the element an the front of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[0];
  }

  // * Check if the queue is empty
  isEmpty() {
    return !this.length;
  }

  // * Get number of elements in the queue
  getSize() {
    return this.length;
  }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(11);
q.enqueue(12);
q.dequeue();
console.log(q.front());
console.log(q.getSize());
