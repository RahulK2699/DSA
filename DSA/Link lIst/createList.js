// Q 1 return size of linked list
// Q2  get kth element from linked list

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert Data into Linked list at the last of linkedlist

  insertData(data) {
    if (!this.head) {
      this.size++;
      let newNode = new Node(data);
      this.head = newNode;

      return this.head;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = new Node(data);
    this.size++;
  }

  //Print Linked List
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  //Get kth element  from a linkedlist
  getSingleElement(index) {
    let temp = this.head;
    while (index > 0 && temp.next != null) {
      temp = temp.next;
      index--;
    }
    if (temp.next) return temp.data;
    else return "No element Found";
  }
}

const l1 = new LinkedList();

console.log(l1.size);
l1.insertData(100);
l1.insertData(200);
l1.insertData(300);
l1.insertData(400);
l1.insertData(500);
l1.insertData(600);

l1.printList();
console.log(l1.getSingleElement(10));
console.log(l1.size);
