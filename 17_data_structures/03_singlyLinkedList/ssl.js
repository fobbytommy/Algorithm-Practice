function Node(data) {
	this.value = data;
	this.next = null;
}

function SinglyLinkedList() {
	this._length = 0;
	this.head = null;
}

SinglyLinkedList.prototype = {
	add: function(data) {
		var current = this.head;

		// empty list
		if (!current) {
			this.head = new Node(data);
			this._length++;

			return this.head.value;
		}
		// non empty list
		else {
			// find the next is 'null'
			while (current.next) {
				current = current.next;
			}

			current.next = new Node(data);
			this._length++;

			return current.value;
		}
	},
	remove: function(index) {
		if (index > -1 && index < this._length) {
			var current = this.head;
			var previous;

			// index = 0 which is the head;
			if (index === 0) {
				this.head = current.next;
			}
			else {
				for (var i = 0; i < index; i++) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			// console.log(current.value);
			this._length--;
			return current.value;
		}
		else {
			return null;
		}
	},
	display: function() {
		var current = this.head;
		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}
};

// reversing a node
function reverseSll(sll) {
	// if head is null or head.next is null return sll;
	if (!sll.head || !sll.head.next) {
		return sll;
	}

	var nodes = [];
	var current = sll.head;
	while(current) {
		nodes.push(current);
		current = current.next;
	}

	var reversedList = new SinglyLinkedList();

	reversedList.head = nodes.pop();
	current = reversedList.head;

	var node = nodes.pop();

	while(node) {
		node.next = null;
		current.next = node;

		current = current.next;
		node = nodes.pop();
	}

	return reversedList;
}


var sll = new SinglyLinkedList();
sll.add(0);
sll.add(1);
sll.add(2);
sll.add(3);
sll.add(4);
sll.add(5);
// sll.remove(3);
sll.display();
var reversedLinkedList = reverseSll(sll);
reversedLinkedList.display();
