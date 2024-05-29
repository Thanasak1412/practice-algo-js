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

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const { value } = this.head;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;

    return value;
  }

  isEmpty() {
    return !this.head;
  }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(11);
q.dequeue();
