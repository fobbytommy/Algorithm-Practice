function Node(data) {
	this.value = data;
	this.next = null;
	this.prev = null;
}

function DoublyLinkedList() {
	this._length = 0;
	this.head = null;
	this.tail = null;
}

DoublyLinkedList.prototype = {
	add: function(data) {
		var node = new Node(data);
		var current = this.head;

		// empty list
		if (!current) {
			this.head = node;
			this.tail = node;
		}
		// non-empty list
		else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}

		this._length++;
		return node.value;
	},
	remove: function(index) {
		if (index > -1 && index < this._length) {
			var current = this.head;

			// removal is in the head
			if (index === 0) {
				this.head = current.next;

				// case where now the linked list is empty
				if (!this.head) {
					this.tail = null;
				}
				else {
					this.head.prev = null;
				}
			}
			// removal is in the tail
			else if (index === this._length - 1) {
				current = this.tail;
				this.tail = current.prev;
				this.tail.next = null;
			}
			// removal is in the somewhere middle
			else {
				// go to that Node
				for (var i = 0; i < index; i++) {
					current = current.next;
				}
				current.prev.next = current.next;
			}

			this._length--;
			return current.value;
		}
		else {
			return null;
		}
	},
	display: function() {
		var current = this.head;
		while(current) {
			console.log(current.value);
			current = current.next;
		}
	}
};

function reverseDll(dll) {
	var head = dll.head, current = dll.head;
	var temp;

	while(current) {
		temp = current.next;
		current.next = current.prev;
		current.prev = temp;
		if (!temp) {
			dll.head = current;
		}
		current = temp;
	}

	dll.tail = head;
	dll.tail.next = null;

	return dll;
}

var dll = new DoublyLinkedList();
dll.add(0);
dll.add(1);
dll.add(2);
dll.add(3);
dll.add(4);
dll.add(5);
// dll.add(3);
dll.remove(0);
// dll.display();
// console.log(dll);
var reversedLinkedList = reverseDll(dll);
reversedLinkedList.remove(4);
console.log(reversedLinkedList);

reversedLinkedList.display();
