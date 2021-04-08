var letterGradeDiv = document.getElementById('letter-grade');
var creditHoursDiv =  document.getElementById('credit-hours');
var showGpaDiv = document.getElementById('show-gpa-div');
var avgGpaDiv = document.getElementById('avg-gpa-div');
var btnGpa = document.getElementById('btn-gpa');
var btnAddEntry = document.getElementById('btn-add-entry');

var table = document.createElement('table');

var letterGrade, creditHours, gpa, lst_grades = [], lst_gpa = [], p_gpa;

var grades = ["F", "D", "C", "B", "A"];

function getValues(){
        letterGrade = Number(letterGradeDiv.value);
        creditHours = Number(creditHoursDiv.value);
        lst_grades[lst_grades.length] = letterGrade;
        lst_gpa[lst_gpa.length] = letterGrade * creditHours;
        return [grades[letterGrade], creditHours];
}

function createTable(){
    table.setAttribute('id', 'gpa-table');
    table.setAttribute('border', '2');

    th_gpa = document.createElement('th');
    th_gpa.innerHTML = "CREDIT HOURS";
    
    th_grade = document.createElement('th');
    th_grade.innerHTML = "GRADE";

    table.appendChild(th_grade);
    table.appendChild(th_gpa);
}

function enterTableData(grade, gpa){
    td_gpa = document.createElement('td');
    td_gpa.innerHTML = gpa;

    td_grade = document.createElement('td');
    td_grade.innerHTML = grade;

    tr = document.createElement('tr');
    tr.appendChild(td_grade);
    tr.appendChild(td_gpa);

    table.appendChild(tr);
}

function addEntry(){
    if(letterGradeDiv.value && creditHoursDiv.value){
        if(btnGpa.disabled == true){
            btnGpa.disabled = false;
        }
        if(lst_grades.length == 0){
            tmp_list = getValues();
            createTable();
            enterTableData(tmp_list[0], tmp_list[1]);
            showGpaDiv.append(table);
        } else{
            tmp_list = getValues();
            enterTableData(tmp_list[0], tmp_list[1]);
        }
    } else{
        alert("Complete all fields");
    }
}
function avgGpa(){
    var sum_gpa = lst_gpa.reduce(function(a, b){
        return a + b;
    }, 0);
    var sum_grade = lst_grades.reduce(function(a, b){
        return a + b;
    }, 0);
    gpa = Math.round((sum_gpa/sum_grade) * 100) / 100;
    //console.log(sum_grade + " " + sum_gpa);

    createGpaView();
    p_gpa.innerHTML = "GPA: " + gpa;
    avgGpaDiv.appendChild(p_gpa);

    btnAddEntry.disabled = true;
    btnGpa.disabled = true;
}
function createGpaView(){
    p_gpa = document.createElement('p');
    p_gpa.setAttribute('id', 'gpa-show');
}
function reset(){
    letterGrade = null;
    creditHours = null;
    gpa = null;
    lst_grades = [];
    lst_gpa = [];
    letterGradeDiv.value = "A";
    creditHoursDiv.value = null;

    p_gpa.remove();
    clearTable();
    btnAddEntry.disabled = false;
    btnGpa.disabled = true;
}

function clearTable(){
    while(table.firstChild != null){
        table.removeChild(table.firstChild);
    }
    table.remove();
}
window.onload = function(){
    btnGpa.disabled = true;
}