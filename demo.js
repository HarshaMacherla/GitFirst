// 1. Parent Element of the List Items
var parentOfList = document.querySelector('.list-group-item');
console.log(parentOfList.parentElement);

// 2. Last Element Child
var items = document.querySelector('.list-group');
console.log(items.lastElementChild);

// 3. Last Child
console.log(items.lastChild);

// 4. Create Child
var node = document.createElement('h1');
var nodeText = document.createTextNode('Hello World');
node.appendChild(nodeText);
var parentNode = document.querySelector('.container');
parentNode.appendChild(node);

// 5. First Element Child
console.log(items.firstElementChild);

// 6. First child
console.log(items.firstChild);

// 7. Next Sibling
console.log(items.firstChild.nextSibling);

// 8. Next Element Sibling
console.log(items.firstElementChild.nextElementSibling);

// 9. Previous Sibling
var siblings = document.getElementsByClassName('list-group-item');
console.log(siblings[1].previousSibling);

// 10. Previous Element Sibling
console.log(siblings[1].previousElementSibling);

// 11. Create Element
var newElement = document.createElement('li');

// 12. Set Attribute
newElement.setAttribute('class', 'list-group-item');

// 13. Create Text Node
var newTextNode = document.createTextNode('Item 5');
newElement.appendChild(newTextNode);

// 14. Append Child
items.appendChild(newElement);


// 1. Now go ahead and add HEllo world before Item Lister
var myContainer = document.querySelector('header .container');
var item = document.getElementById('header-title');
var newElement2 = document.createElement('h1');
var newTextNode2 = document.createTextNode('HEllo world');
newElement2.appendChild(newTextNode2);
myContainer.insertBefore(newElement2, item);

// 2. Now go ahead and HEllo world before Item 1
var newNode = document.createElement('li');
newNode.className = 'list-group-item';
var newText = document.createTextNode('HEllo world');
newNode.appendChild(newText);
items.insertBefore(newNode, items.firstElementChild);