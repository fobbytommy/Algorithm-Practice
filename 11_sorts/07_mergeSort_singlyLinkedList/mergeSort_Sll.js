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
		var node = new Node(data);
		// empty list
		if (!current) {
			this.head = node;
		}
		// non-empty list
		else {
			// fiind current.next is null
			while(current.next) {
				current = current.next;
			}
			current.next = node;
		}

		this._length++;
		return node.value;
	},
	remove: function(index) {
		if (index > -1 && index < this._length) {
			var current = this.head, previous;
			// index is head (index === 0)
			if (index === 0) {
				this.head = current.next;
			}
			// index is somewhere else
			else {
				// go to that index
				for (var i = 0; i < index; i++) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}

			this._length--;
			// return the value that we are removing
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

function reverseSll(sll) {
	// check if either sll is empty or has only 1 node
	if (!sll.head || !sll.head.next) {
		return sll;
	}
	var current = sll.head;
	var nodes = [];

	while(current) {
		nodes.push(current);
		current = current.next;
	}
	var reversedLinkedList = new SinglyLinkedList();
	reversedLinkedList.head = nodes.pop();
	current = reversedLinkedList.head;

	var node = nodes.pop();
	while(node) {
		node.next = null;
		current.next = node;

		current = current.next;
		node = nodes.pop();
	}

	return reversedLinkedList;
}

var sll = new SinglyLinkedList();
sll.add(3);
sll.add(6);
sll.add(4);
sll.add(2);
sll.add(19);
sll.add(-3);
sll.add(11);
sll.add(26);
sll.add(-8);
sll.add(8);
sll.add(14);
sll.add(-15);


// sll.display();

function mergeSortLinkedList(sll) {
	if(sll._length < 2) {
		return sll;
	}
	var left = new SinglyLinkedList();
	var right = new SinglyLinkedList();
	var currentList = sll.head;

	for (var i = 0; i < sll._length; i++) {
		if (i < (sll._length / 2)) {
			left.add(currentList.value);
		}
		else {
			right.add(currentList.value);
		}
		currentList = currentList.next;
	}

	return mergeLinkedLists(mergeSortLinkedList(left), mergeSortLinkedList(right));
}

function mergeLinkedLists(left, right) {
	var sortedLinkedList = new SinglyLinkedList();

	while(left._length && right._length) {
		if (left.head.value <= right.head.value) {
			sortedLinkedList.add(left.head.value);
			left.remove(0);
		}
		else {
			sortedLinkedList.add(right.head.value);
			right.remove(0);
		}
	}

	while(left._length) {
		sortedLinkedList.add(left.head.value);
		left.remove(0);
	}
	while(right._length) {
		sortedLinkedList.add(right.head.value);
		right.remove(0);
	}

	return sortedLinkedList;
}
var sortedSll = mergeSortLinkedList(sll);
sortedSll.display();
