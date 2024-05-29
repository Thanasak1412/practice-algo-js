class ListNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
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
      this.length++;
      newNode.prev = null;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    newNode.prev = current;
  }

  printList() {
    const listValues = [];

    let current = this.head;
    while (current) {
      listValues.push(current.value);
      current = current.next;
    }

    console.log(listValues);
  }
}

const ll = new LinkedList();
ll.append(10);
ll.append(15);
ll.append(20);
ll.printList();
