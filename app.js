const { Array } = require('./ds/linear/array');
const { MultidimensionalArray } = require('./ds/linear/multidimensional-array');
const { LinkedList } = require('./ds/linear/linked-list');
const { DllNode, DoublyLinkedList } = require('./ds/linear/doubly-linked-list');
const { Set } = require('./ds/non-linear/set');
const { Stack } = require('./ds/linear/stack');
const { Queue } = require('./ds/linear/queue');
const { HashMap } = require('./ds/non-linear/hashmap');
const { AvlBst } = require('./ds/non-linear/avl_binary-search-tree');
const { BinaryTree } = require('./ds/non-linear/binary-tree');
const { Graph } = require('./ds/non-linear/graph');
const { LruCache } = require('./ds/non-linear/lru-cache');
const { PriorityQueue } = require('./ds/non-linear/priority-queue');
const { RedBlackBst } = require('./ds/non-linear/redblack_binary-search-tree');
const { SkipList } = require('./ds/non-linear/skip-list');
const { Tree } = require('./ds/non-linear/tree');
const { Trie } = require('./ds/non-linear/trie');
const { UnionFind } = require('./ds/non-linear/union-find');


switch(process.env.DS) {
  case 'ARRAY':
    const arr = new Array(['dog', 'cat', 'fish', 'parrot']);

    // Remove 'parrot' item
    this.array.pop();

    // Insert 'chameleon' item
    this.array.push('chameleon');

    arr.print();
    break;


  case 'MULTIDIMENSIONAL_ARRAY':
    const twoDimArr = new MultidimensionalArray([
      ['dog', 'cat', 'fish', 'parrot'],
      ['car', 'bike', 'airplane', 'scooter'],
      ['blue', 'orange', 'purple', 'green']
    ]);

    twoDimArr.print();
    break;


  case 'LINKED_LIST':
    const ll = new LinkedList();

    ll.head = new LlNode('dog');
    ll.head.next = new LlNode('cat');
    ll.head.next.next = new LlNode('hamster');
    ll.head.next.next.next = new LlNode('chameleon');

    ll.unshift('ferret');
    ll.append('another ferret');
    ll.insertAtIndex('goat', 3);
    ll.reversal();

    ll.print();
    break;


  case 'DOUBLY_LINKED_LIST':
    const dll = new DoublyLinkedList();
    dll.head = new DllNode('dog');
    dll.append('cat');
    dll.append('hamster');
    dll.append('chameleon');

    dll.print();
    break;


  case 'STACK':
    const balanced = ['(' , 'a' , '+', ' ( ', 'b ' , '-' , ' c' ,')' , ' ) '];
    const unbalanced = ['(' , '(' , 'a' , ' + ' , ' b' , ')'];
    const s = new Stack(-1);

    s.checkIfBalancedParenthesis(balanced);
    s.checkIfBalancedParenthesis(unbalanced);


    s.print();
    break;


  case 'QUEUE':
    const q = new Queue();

    q.enqueue('Brandon');
    q.enqueue('Lance');
    q.enqueue('Scott');
    q.enqueue('Jordan');
    q.enqueue('Jethro');
    q.enqueue('Kodee');

    q.print();
    break;


  case 'SET':
    const set = new Set();

    set.print();
    break;


  case 'HASHMAP':
    const intKeys = new HashMap();

    intKeys.insert(1, 'Bulbasaur');
    intKeys.insert(2, 'Ivysaur');
    intKeys.insert(3, 'Venusaur');
    intKeys.insert(4, 'Charmander');
    intKeys.insert(5, 'Charmeleon');
    intKeys.insert(6, 'Charizard');
    intKeys.insert(7, 'Squirtle');
    intKeys.insert(8, 'Warturtle');
    intKeys.insert(9, 'Blastoise');
    intKeys.insert(150, 'Mewtwo');
    intKeys.insert(151, 'Mew');

    intKeys.delete(2);
    intKeys.delete(5);
    intKeys.delete(8);
    intKeys.delete(150);

    const strKeys = new HashMap();

    strKeys.insert('001', 'Bulbasaur');
    strKeys.insert('002', 'Ivysaur');
    strKeys.insert('003', 'Venusaur');
    strKeys.insert('#004', 'Charmander');
    strKeys.insert('#005', 'Charmeleon');
    strKeys.insert('#006', 'Charizard');
    strKeys.insert('#007', 'Squirtle');
    strKeys.insert('#008', 'Warturtle');
    strKeys.insert('#009', 'Blastoise');
    strKeys.insert('#150', 'Mewtwo');
    strKeys.insert('#151', 'Mew');

    // strKeys.delete('#002');
    // strKeys.delete('#005');
    // strKeys.delete('#008');
    // strKeys.delete('#150');

    // hm.intKeys.print();
    hm.strKeys.print();
    break;


  case 'BINARY_TREE':
    const bt = new BinaryTree();

    bt.print();
    break;


  case 'TRIE':
    const trie = new Trie();

    trie.print();
    break;


  case 'TREE':
    const tree = new Tree();

    tree.print();
    break;


  case 'GRAPH':
    const g = new Graph();

    g.print();
    break;


  case 'BST_AVL':
    const avl = new AvlBst();

    avl.print();
    break;


  case 'BST_RED_BLACK':
    const rb = new RedBlackBst();

    rb.print();
    break;


  case 'PRIORITY_QUEUE':
    const pq = new PriorityQueue();

    pq.print();
    break;


  case 'UNION_FIND':
    const uf = new UnionFind();

    uf.print();
    break;


  case 'SKIP_LIST':
    const sl = new SkipList();

    sl.print();
    break;


  case 'LRU_CACHE':
    const lru = new LruCache();

    lru.print();
    break;

  default:
    console.log('DATA STRUCTURES!!!!!!!!!');
}