const { Array } = require('./ds/linear/array');
const { MultidimensionalArray } = require('./ds/linear/multidimensional-array');
const { LinkedList } = require('./ds/linear/linked-list');
const { DllNode, DoublyLinkedList } = require('./ds/linear/doubly-linked-list');
const { SetRelations } = require('./ds/non-linear/set');
const { Stack } = require('./ds/linear/stack');
const { Queue } = require('./ds/linear/queue');
const { HashMap } = require('./ds/non-linear/hashmap');
const { AvlBst } = require('./ds/non-linear/avl_binary-search-tree');
const { BinarySearchTree } = require('./ds/non-linear/binary-search-tree');
const { Graph } = require('./ds/non-linear/graph');
const { LRUCache } = require('./ds/non-linear/lru-cache');
const { PriorityQueue } = require('./ds/non-linear/priority-queue');
const { RedBlackBst } = require('./ds/non-linear/redblack_binary-search-tree');
const { SkipList } = require('./ds/non-linear/skip-list');
const { TreeNode, Tree } = require('./ds/non-linear/tree');
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
    const setA = [1, 2, 3, 5, 7, 11, 13, 17, 23, 27, 29, 31, 37];
    const setB = [2, 7, 9];
    const set = new SetRelations(setA, setB);

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


  case 'TREE':
    const t = new Tree();
    t.head = new TreeNode([
      new TreeNode([
        new TreeNode([
          new TreeNode(),
          new TreeNode()
        ]),
        new TreeNode(),
        new TreeNode()
      ]),
      new TreeNode([
        new TreeNode()
      ])
    ]);

    t.print();
    break;


  case 'BINARY_SEARCH_TREE':
    const bt = new BinarySearchTree();

    bt.print();
    break;


  case 'TRIE':
    const trie = new Trie();

    trie.print();
    break;


  case 'GRAPH':
    const g = new Graph();

    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C');
    g.addEdge('A', 'B');
    g.addEdge('A', 'C');
    g.addEdge('B', 'C');

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
    pq.push("Person A", 2);
    pq.push("Person B", 1);
    pq.push("Person C", 1);

    console.log(pq.print());
    console.log(pq.pop());
    console.log(pq.print());
    break;


  case 'UNION_FIND':
    const uf = new UnionFind();

    uf.print();
    break;


  case 'SKIP_LIST':
    const sl = new SkipList(3);
    l.insert(10);
    l.insert(20);
    l.insert(30);

    console.log(l.search(20)); // true
    console.log(l.search(40)); // false

    list.delete(20);

    console.log(list.search(20)); // false
    break;


  case 'LRU_CACHE':
    const lru = new LRUCache(2);

    lru.put(1, 1);
    lru.put(2, 2);
    lru.put(3, 3);
    lru.put(4, 4);

    lru.print();
    break;



  default:
    console.log('DATA STRUCTURES!!!!!!!!!');
}