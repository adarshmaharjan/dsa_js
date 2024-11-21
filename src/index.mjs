class Node {
  constructor(newData) {
    this.data = newData;
    this.next = null;
  }
}

function reverseLinkedList(head) {}

function printList(node) {
  while (node != null) {
    console.log(" " + node.data);
    node = node.next;
  }
  console.log();
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log("Given linked list");
printList(head);
