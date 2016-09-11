'use strict';

class TrieNode {
  constructor(c) {
    this.data = c;
    this.isEndOfString = false;
    this.child = [ ];
  }

  subNode(c) {

  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  searchInTrie(str) {
    // search in trie
  }
}

