function Queue() {
	this.dataStore = [];
	this.rear = 0;
}

Queue.prototype.display = function () {
	for (var i = 0; i < this.rear; i++) {
		console.log(this.dataStore[i]);
	}
};

Queue.prototype.enqueue = function(x) {
	this.dataStore.push(x);
	this.rear++;
}

Queue.prototype.dequeue = function() {
	if (this.rear !== 0) {
		this.dataStore.shift();
		this.rear--;
	}
}

Queue.prototype.checkRear = function() {
	if (this.rear == 0) {
		console.log('there is no rear');
	}
	else {
		console.log(this.dataStore[this.rear - 1]);
	}
}

var test = new Queue();

test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
test.enqueue(4);
test.dequeue();
test.checkRear();
test.display();
