class HashTable {
  constructor(size) {
    this.table = new Array(size);

    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = [];
    }
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.table.length;
    }

    return hash;
  }

  insert(key, value) {
    const index = this._hash(key);

    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;

        return;
      }
    }

    this.table[index].push([key, value]);
  }

  delete(key) {
    const index = this._hash(key);

    this.table[index] = this.table[index].filter((pair) => pair[0] !== key);
  }

  lookup(key) {
    const index = this._hash(key);

    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return undefined;
  }

  keys() {
    const keysArray = [];

    for (let bucket of this.table) {
      for (let pair of bucket) {
        console.log("pair => ", pair);
        keysArray.push(pair[0]);
      }
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];

    for (let bucket of this.table) {
      for (let pair of bucket) {
        valuesArray.push(pair[1]);
      }
    }

    return valuesArray;
  }
}

// Example hash table state
// [    [],                              // Bucket 0 (empty)
//     [["apple", 5], ["banana", 3]],   // Bucket 1 (colliding "apple" and "banana")
//     [["grape", 7], ["cherry", 8], ["lemon", 9]], // Bucket 2 (colliding "grape", "cherry", and "lemon")
//     []                               // Bucket 3 (empty)
// ]

// Example usage
const ht = new HashTable(5);
ht.insert("apple", 5);
ht.insert("banana", 3);
ht.insert("lemon", 10);
ht.insert("cherry", 8);

console.log(ht.lookup("cherry"));
console.log(ht.keys());
console.log(ht.values())