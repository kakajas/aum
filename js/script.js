//divs
var headerDiv = document.getElementById('header');
var mainDiv = document.getElementById('main');
var footerDiv = document.getElementById('footer');

//other variables
var headerFile = 'header.html';
var footerFile = 'footer.html';
var testFile = 'test.txt';

function includeHtml(divName, filePath){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){divName.innerHTML = this.responseText}
            else{divName.innerHTML = "Unable to load " + filePath;}
        }
    };
    xhr.open("GET", filePath, true);
    xhr.send();
}
window.onload = function(){
    includeHtml(headerDiv, headerFile);
    includeHtml(footerDiv, footerFile);
}