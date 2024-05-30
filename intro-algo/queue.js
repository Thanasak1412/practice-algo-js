class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // * Add an element to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }

    this.length++;
  }

  // * Remove the element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const { value } = this.head;

    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }

    this.length--;

    return value;
  }

  // * Retrieve the element an the front of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.head.value;
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
q.dequeue();
console.log(q.front());
console.log(q.getSize());
