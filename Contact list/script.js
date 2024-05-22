const form = document.getElementById("AnswerForm");
let rows = ""
let passImg = '<img src="check.png">'
let reproveImg = '<img src="no.png">'
const contacts = [];
const contactNames = [];


form.addEventListener('submit', function(e) {
    e.preventDefault();

    rowCreator();
    uptadeTable();
})

function rowCreator(){

    const ContactName = document.getElementById('ContactName');
    const ContactPhone = document.getElementById('ContactPhone');
    

    if (contacts.includes(ContactName.value)){
        alert(`The "${ContactName.value}" is already in the list`)
    } else {
        contacts.push(ContactName.value);
        contactNames.push(parseFloat(ContactPhone.value));
    
        let row = "<tr>";
        row += `<td> ${ContactName.value}</td>`;
        row += `<td> ${ContactPhone.value}</td>`;
        row += `</tr>`;

        rows += row

        ContactName.value = "";
        ContactPhone.value = "";
    }
}

function uptadeTable(){
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = rows 

    document.getElementById('amout').innerHTML = contacts.length
}

