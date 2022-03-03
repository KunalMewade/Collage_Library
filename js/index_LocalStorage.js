
// ==================== Store data of book obj in localStorage ===========
showBooks();

console.log('hiii hellow ')


//Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

// Add methods to Display Prototype

// add submit event listener to form

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('submit targeted');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    };

    let book = new Book(name, author, type);


    let tableBody = localStorage.getItem('tableBody');
    if (tableBody == null) {
        tableBodyObj = [];
    }
    else {
        tableBodyObj = JSON.parse(tableBody);
    }

    tableBodyObj.push(book);
    localStorage.setItem("tableBody", JSON.stringify(tableBodyObj));
    name.value = " ";
    author.value = " ";
    type.value = " ";

    console.log(book);


    // e.preventDefault();

}

function showBooks() {
    let tableBody = localStorage.getItem('tableBody');
    if (tableBody == null) {
        tableBodyObj = [];
    }
    else {
        tableBodyObj = JSON.parse(tableBody);
    }

    let html = " ";

    tableBodyObj.forEach(element => {
        html += `
                    <tr>
                    <td>${element.name}</td>
                    <td>${element.author}</td>
                    <td>${element.type}</td>
                    </tr>`; 

    });

    let tableBodyElement = document.getElementById('tableBody');
    if(tableBodyObj.length != 0){
        tableBodyElement.innerHTML = html;
    }else{
        tableBodyElement.innerHTML = `Nothing to Show`;
    }
}