const form = document.getElementById("AnswerForm");
let rows = ""
let passImg = '<img src="check.png">'
let reproveImg = '<img src="no.png">'
const grades = [];
const gradeNotes = [];
const spanApproved = `<span class="pass">Approved</span>`;
const spanReproved = `<span class="fail">Reproved</span>`;
const minimum = parseFloat(prompt("Input the minimum average: "))


form.addEventListener('submit', function(e) {
    e.preventDefault();

    rowCreator();
    uptadeTable();
    updateAverage();
})

function rowCreator(){

    const gradeName = document.getElementById('gradeName');
    const gradeNote = document.getElementById('gradeNote');

    if (grades.includes(gradeName.value)){
        alert(`The "${gradeName.value}" is already inserted`)
    } else {
        grades.push(gradeName.value);
        gradeNotes.push(parseFloat(gradeNote.value));
    
        let row = "<tr>";
        row += `<td> ${gradeName.value}</td>`;
        row += `<td> ${gradeNote.value}</td>`;
        row += `<td> ${gradeNote.value >= minimum ? passImg : reproveImg}</td>`;
        row += `</tr>`;

        rows += row

        gradeName.value = "";
        gradeNote.value = "";
    }
}

function uptadeTable(){
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = rows 
}

function updateAverage() {
    const result = calculateAverage();

    document.getElementById('finalAverage').innerHTML = result.toFixed(2);
     
    document.getElementById('result').innerHTML = result >= minimum ? spanApproved : spanReproved;

}

function calculateAverage(){
    let total = 0;
    for (let i = 0; i < gradeNotes.length; i++){
        total += gradeNotes[i]
    }

    return total / gradeNotes.length
}