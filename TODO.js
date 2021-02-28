//JS code for TODO 

var btnAdd = document.getElementById("badd");
// var btnUpdate = document.getElementById("bupdate");
var btnRemove = document.getElementById("bremove");
var list = document.getElementById("todo-list");
var inputBox = document.getElementById("todo-input");


var currentInput = "";
inputBox.addEventListener("input", function(e) {
    currentInput = e.target.value;
});


inputBox.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        addListItems();
    }
});


function createNewNode() {
    var newList = document.createElement("li");
    var textNode = document.createTextNode(currentInput);
    newList.appendChild(textNode);
    newList.id = "item" + (list.childElementCount + 1);

    return newList;
};


function addListItems() {

    if (currentInput !== undefined && currentInput !== null && currentInput !== "") {
        var newList = createNewNode();

        list.appendChild(newList);
        inputBox.value = "";
        currentInput = "";
    } else {
        alert("Please, Enter valid TO-DO item!!");
    }


};




btnAdd.addEventListener('click', addListItems);



// btnUpdate.addEventListener('click', function() {
//     var firstElement = list.firstElementChild;
//     var newList = createNewNode;


//     list.removeChild(newList, firstElement);
// });

btnRemove.addEventListener('click', function() {
    var firstElement = list.firstElementChild;

    list.removeChild(firstElement);


});