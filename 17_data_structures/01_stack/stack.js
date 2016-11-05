var Stack = (function() {

	function Stack() {
		this.dataStore = [];
		this.top = 0;
	}

	Stack.prototype.display = function() {
		for (var i = 0; i < this.top; i++) {
			console.log(this.dataStore[i]);
		}
	};

	Stack.prototype.push = function(x) {
		this.dataStore.push(x);
		this.top++;
	};

	Stack.prototype.pop = function() {
		if (this.top !== 0) {
			this.dataStore.pop();
			this.top--;
		}
	};

	Stack.prototype.checkTop = function() {
		if (this.top === 0) {
			console.log('Empty stack');
			// throw new Error("stock is empty.");
		}
		else {
			console.log(this.dataStore[this.top - 1]);
		}
	}

	Stack.prototype.isEmpty = function() {
		if (this.top === 0) {
			return true;
		}
		else {
			return false;
		}
	}

	Stack.prototype.search = function(x) {
		for (var i = 0; i < this.top; i++) {
			if (this.dataStore[i] == x) {
				return i;
			}
		}
		return 'did not found';
	}

	return Stack;
})();

var test = new Stack();
test.push(3);
test.push(2);
test.pop();
test.push(5);
test.push(7);
test.pop();
test.pop();
// test.checkTop();
test.display();
console.log(test.isEmpty());
console.log(test.search(3));
