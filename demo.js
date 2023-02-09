var items = document.getElementsByClassName('list-group-item');
items[1].style.backgroundColor = 'green';
items[2].style.display = 'none';


var listItems = document.querySelectorAll('.list-group-item');
listItems[1].style.color = 'green';
var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
}