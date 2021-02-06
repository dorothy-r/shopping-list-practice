var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");

// Adding Delete buttons to existing list
for (let i = 0; i < listItem.length; i++) {
	addDeleteButton(listItem[i]);
}

// Functions

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	addDeleteButton(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markDone(event) {
	event.target.classList.toggle("done");
}

function addDeleteButton(listItem) {
	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delBtn");
	deleteButton.appendChild(document.createTextNode("Delete"));
	listItem.appendChild(deleteButton);

	deleteButton.addEventListener("click", function () {
		listItem.parentNode.removeChild(listItem);
	});
}




// Event Listeners
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", markDone);