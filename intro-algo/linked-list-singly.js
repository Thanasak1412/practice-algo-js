class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;

      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  prepend(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;

      return;
    }

    const current = this.head;
    this.head = newNode;
    this.head.next = current;
  }

  insertAtPosition(value, position) {
    const newNode = new ListNode(value);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let currentPosition = 0;
    let prev = null;
    while (current !== null && currentPosition < position) {
      prev = current;
      current = current.next;
      currentPosition++;
    }

    console.log(currentPosition);
    console.log(position);

    if (currentPosition < position) {
      console.error("Position out bounds");
      return;
    }

    prev.next = newNode;
    newNode.next = current;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeEnd() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    current = prev;
    current.next = null;
  }

  removeAtPosition(position) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let prev = null;
    let currentPosition = 0;
    while (current && currentPosition < position) {
      prev = current;
      current = current.next;
      currentPosition++;
    }

    if (currentPosition < position) {
      console.error("Position out bounds");
      return;
    }

    prev.next = current.next;
  }

  printList() {
    let current = this.head;
    const listValues = [];

    while (current) {
      listValues.push(current.value);
      current = current.next;
    }

    console.log(listValues.join(" -> "));
  }
}

const list = new LinkedList();
list.append(5);
list.append(10);
list.append(16);
list.prepend(2);
list.insertAtPosition(22, 4);
list.removeAtPosition(3);
list.printList();
