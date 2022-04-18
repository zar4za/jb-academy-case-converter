document.getElementById("upper-case").addEventListener("click", function (){
   let content = document.querySelector("textarea").value.toUpperCase();
   document.querySelector("textarea").value = content;
});

document.getElementById("lower-case").addEventListener("click", function (){
   let content = document.querySelector("textarea").value.toLowerCase();
   document.querySelector("textarea").value = content;
});

document.getElementById("proper-case").addEventListener("click", function (){
   let content = document.querySelector("textarea").value.toLowerCase();
   let words = content.split(" ").map(capitalizeFirstLetter);
   document.querySelector("textarea").value = words.join(" ");
});

document.getElementById("sentence-case").addEventListener("click", function (){
   let content = document.querySelector("textarea").value.toLowerCase();
   let sentences = content.split(".").map(stringSentenceCase);
   document.querySelector("textarea").value = sentences.join(".");
});

document.getElementById("save-text-file").addEventListener("click", function (){
   download("text.txt", document.querySelector("textarea").value);
})

function capitalizeFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}

function stringSentenceCase(str) {
   return str.replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, s => s.replace(/([a-z])/,s => s.toUpperCase()))
}

function download(filename, text) {
   let element = document.createElement('a');
   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
   element.setAttribute('download', filename);
   element.style.display = 'none';
   document.body.appendChild(element);
   element.click();
   document.body.removeChild(element);
}