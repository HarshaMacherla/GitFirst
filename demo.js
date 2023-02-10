var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();
    
    // Get input value
    var newItem = document.getElementById('item').value;
    var newDescription = document.getElementById('description').value;

    // Create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" " + newDescription));

    // Create del buttom element
    var deleteBtn = document.createElement('button');
    
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);

    // Adding Edit button
    var editBtn = document.createElement('button');
    var buttonText = document.createTextNode('Edit');
    editBtn.appendChild(buttonText);
    editBtn.className = 'btn btn-sm float-right';
    li.appendChild(editBtn);
    
}

// Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();

    // Storing the list items into a collection
    var items = document.getElementsByTagName('li');

    // Converting to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        var itemDescription = item.childNodes[1].textContent;
        if (itemName.toLowerCase().indexOf(text) != -1 || itemDescription.toLowerCase().indexOf(text) != -1)
            item.style.display = 'block';
        else
            item.style.display = 'none';
    });
}
