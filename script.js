var container = document.querySelector("#container");
var description = document.querySelector("#description");

var saveBtn = document.getElementById("saveBtn");
var saveBtn10am = document.getElementById("saveBtn-10am");
var saveBtn10am = document.getElementById("saveBtn-11am");
var saveBtn10am = document.getElementById("saveBtn-12hr");
var saveBtn10am = document.getElementById("saveBtn-1hr");
var saveBtn10am = document.getElementById("saveBtn-2hr");
var saveBtn10am = document.getElementById("saveBtn-3hr");
var saveBtn10am = document.getElementById("saveBtn-4hr");
var saveBtn10am = document.getElementById("saveBtn-4hr");

var storage = "";
var storage10am = "";
var storage11hr = "";
var storage12hr = "";
var storage1hr = "";
var storage2hr = "";
var storage3hr = "";
var storage4hr = "";
var storage5hr = "";

saveBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var button = event.target;
    var parent = button.closest("div.row");
    var id = parent.id;
    var textEl = parent.querySelector("textarea").value;
  
    storage =  textEl;
    
    localStorage.setItem("storage", storage); 
   
  
  });
  
  document.getElementById("myTextarea").value = localStorage.getItem("storage");  
//================================

 




// var time = dayjs().format('h A');
// $('.hour').text(time);


$('#currentDay').text(dayjs().format('MMM Do, YYYY'));
