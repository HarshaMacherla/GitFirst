var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e) {
    e.preventDefault();
    
    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

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