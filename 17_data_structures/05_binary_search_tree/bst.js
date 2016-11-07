// function Node(data) {
// 	this.value = data;
// 	this.left = null;
// 	this.right = null;
// }
//
// function BST() {
// 	this.root = null;
// }
//
// BST.prototype = {
// 	add: function(data) {
// 		var node = new Node(data);
// 		var current = this.root;
//
// 		if (current === null) {
// 			this.root = node;
// 		}
// 		else {
// 			while(true) {
// 				if (node.value < current.value) {
// 					if (current.left === null) {
// 						current.left = node;
// 						break;
// 					}
// 					else {
// 						current = current.left;
// 					}
// 				}
// 				else if (node.value > current.value) {
// 					if (current.right === null) {
// 						current.right = node;
// 						break;
// 					}
// 					else {
// 						current = current.right;
// 					}
// 				}
// 				else {
// 					break;
// 				}
// 			}
// 		}
// 	},
// 	traverse_preOrder: function() {
// 		function preOrder(node) {
// 			if (node) {
// 				console.log(node.value);
// 				preOrder(node.left);
// 				preOrder(node.right);
// 			}
// 		}
// 		preOrder(this.root);
// 	},
// 	traverse_inOrder: function() {
// 		function inOrder(node) {
// 			if (node) {
// 				inOrder(node.left);
// 				console.log(node.value);
// 				inOrder(node.right);
// 			}
// 		}
// 		inOrder(this.root);
// 	},
// 	traverse_postOrder: function() {
// 		function postOrder(node) {
// 			if (node) {
// 				postOrder(node.left);
// 				postOrder(node.right);
// 				console.log(node.value);
// 			}
// 		}
// 		postOrder(this.root);
// 	},
// }

function Node(data) {
	this.value = data;
	this.left = null;
	this.right = null;
}

function BST() {
	this.root = null;
}

BST.prototype = {
	add: function(data) {
		var node = new Node(data);
		var current = this.root;

 		if (current === null) {
			this.root = node;
		}
		else {
			while (true) {
				if (node.value < current.value) {
					if (current.left === null) {
						current.left = node;
						break;
					}
					else {
						current = current.left;
					}
				}
				else if (node.value > current.value) {
					if (current.right === null) {
						current.right = node;
						break;
					}
					else {
						current = current.right;
					}
				}
				else {
					break;
				}
			}
		}
	},
	traverse_preOrder: function() {
		function preOrder(node) {
			if (node) {
				console.log(node.value);
				preOrder(node.left);
				preOrder(node.right);
			}
		}
		preOrder(this.root);
	},
	traverse_inOrder: function() {
		function inOrder(node) {
			if (node) {
				inOrder(node.left);
				console.log(node.value);
				inOrder(node.right);
			}
		}
		inOrder(this.root);
	},
	traverse_postOrder: function() {
		function postOrder(node) {
			if (node) {
				postOrder(node.left);
				postOrder(node.right);
				console.log(node.value);
			}
		}
		postOrder(this.root);
	},
	findMin: function() {
		var current = this.root;
		while (current.left) {
			current = current.left;
		}
		console.log(current.value);
	},
	findMax: function() {
		var current = this.root;
		while (current.right) {
			current = current.right;
		}
		console.log(current.value);
	},
	find: function(value) {
		var found = false;
		var current = this.root;

		while (!found && current) {
			if (value < current.value) {
				current = current.left;
			}
			else if (value > current.value) {
				current = current.right;
			}
			else {
				found = true;
			}
		}

		if (found) {
			return current;
		}
		else {
			return "not found";
		}
	},
	delete: function(value) {},
	checkHeight: function () {
		function height(node) {
			if (!node) {
				return 0;
			}
			var leftHeight = height(node.left);
			var rightHeight = height(node.right);

			return Math.max(leftHeight, rightHeight) + 1;
		}
		return height(this.root);
	}
};

var tree = new BST();
tree.add(5);
tree.add(7);
tree.add(6);
tree.add(8);
tree.add(3);
tree.add(2);
tree.add(4);
// tree.traverse_preOrder();
// tree.traverse_inOrder();
// tree.traverse_postOrder();
// tree.findMin();
// tree.findMax();
console.log(tree.find(11));
console.log(tree.checkHeight());
// console.log(tree);
