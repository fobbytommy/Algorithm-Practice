function Node(data) {
	this.value = data;
	this.next = null;
}

function HashTable() {
	// given fixed size of array of 26 slots
	this.table = new Array(26);
}
HashTable.prototype.simpleHash = function(data) {
	// determines the hash value given data
	var index = data.charAt(0);
	index = index.toLowerCase();
	index = index.charCodeAt(0);
	index = index - 97;
	// how can we use the ASCII values to find appropriate data (use charCodeAt())
	return index;
}
HashTable.prototype.simplePut = function(data) {
	var key = this.simpleHash(data);
	console.log(key);
	var node = new Node(data);
	if (!this.table[key]) {
		this.table[key] = node;
	}
	else {
		node.next = this.table[key];
		this.table[key] = node;
	}

  	// place data in appropriate place by using simpleHash
}
HashTable.prototype.showDistribution = function() {
	// shows distribution of hash table
	for(var i = 0; i < this.table.length; i++) {
		console.log(this.table[i]);
	}
}

var names = ["Tony", "Tori", "Kate", "Kyle", "Thomas", "Dale",
             "David", "Daisy", "Andy", "Albert", "Dane", "Shane", "Lane",
             "Janet", "Katelyn", "Janet", "Vivian", "Joe"];

var hashTable = new HashTable();
// hashTable.simplePut("Andy");
// hashTable.simplePut("Ah");
//


for(var i = 0; i < names.length; i++) {
	hashTable.simplePut(names[i]);
}
hashTable.showDistribution();
// simpleHashTable.showDistribution();
// var betterHashTable = new HashTable();
// for(var i = 0; i < names.length; i++) {
//   	betterHashTable.linkPut(names[i]);
// }
// betterHashTable.showDistribution();
