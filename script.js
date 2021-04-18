var container = document.querySelector("#container");
var description = document.querySelector("#description");

var timeElHr9 = document.querySelector("#hour9");
var timeElHr10 = document.querySelector("#hour10");
var timeElHr11 = document.querySelector("#hour11");
var timeElHr12 = document.querySelector("#hour12");
var timeElHr1 = document.querySelector("#hour1");
var timeElHr2 = document.querySelector("#hour2");
var timeElHr3 = document.querySelector("#hour3");
var timeElHr4 = document.querySelector("#hour4");
var timeElHr5 = document.querySelector("#hour5")

var saveBtn = document.getElementById("saveBtn");
var saveBtn10am = document.getElementById("saveBtn-10am");
var saveBtn11hr = document.getElementById("saveBtn-11hr");
var saveBtn12hr = document.getElementById("saveBtn-12hr");
var saveBtn1hr = document.getElementById("saveBtn-1hr");
var saveBtn2hr = document.getElementById("saveBtn-2hr");
var saveBtn3hr = document.getElementById("saveBtn-3hr");
var saveBtn4hr = document.getElementById("saveBtn-4hr");
var saveBtn5hr = document.getElementById("saveBtn-4hr");

var storage = "";
var storage10am = "";
var storage11hr = "";
var storage12hr = "";
var storage1hr = "";
var storage2hr = "";
var storage3hr = "";
var storage4hr = "";
var storage5hr = "";
var isCurrent = true;

$('#currentDay').text(dayjs().format('dddd MMMM Do, YYYY'));

 var time = dayjs().format('h A');



 var now = new Date(),
  hours = now.getHours();
 var minutes = now.getMinutes();
//These function will display the correct time and color
function hour9(){
    if(hours > timeElHr9.textContent) {
        document.getElementById("hr-9").setAttribute("style", "background-color: #d3d3d3;");
        $(timeElHr9).text("9 AM");
      }
      else if(hours < timeElHr9.textContent) {
        document.getElementById("hr-9").setAttribute("style", "background-color: #77dd77;");
        $(timeElHr9).text("9 AM");
      }
      else {
        document.getElementById("hr-9").setAttribute("style", "background-color: #ff6961;"); 
        $(timeElHr9).text(time);
      }
}
function hour10(){
    if(hours > timeElHr10.textContent) {
        document.getElementById("hr-10").setAttribute("style", "background-color: #d3d3d3;");
        $(timeElHr10).text("10 AM");
      }
      else if(hours < timeElHr10.textContent) {
        document.getElementById("hr-10").setAttribute("style", "background-color: #77dd77;");
        $(timeElHr10).text("10 AM");
      }
      else {
        document.getElementById("hr-10").setAttribute("style", "background-color: #ff6961;"); 
        $(timeElHr10).text(time);
      }
}

function hour11(){
    if(hours > timeElHr11.textContent) {
        document.getElementById("hr-11").setAttribute("style", "background-color: #d3d3d3;");
        $(timeElHr11).text("11 AM");
      }
      else if(hours < timeElHr11.textContent) {
        document.getElementById("hr-11").setAttribute("style", "background-color: #77dd77;");
        $(timeElHr11).text("11 AM");
      }
      else {
        document.getElementById("hr-11").setAttribute("style", "background-color: #ff6961;"); 
        $(timeElHr11).text(time);
      }
}
 
function hour12(){
    if(hours > timeElHr12.textContent) {
        document.getElementById("hr-12").setAttribute("style", "background-color: #d3d3d3;");
        $(timeElHr12).text("12 PM");
      }
      else if(hours < timeElHr12.textContent) {
        document.getElementById("hr-12").setAttribute("style", "background-color: #77dd77;");
        $(timeElHr12).text("12 PM");
      }
      else {
        document.getElementById("hr-12").setAttribute("style", "background-color: #ff6961;"); 
        $(timeElHr12).text(time);
      }
}

function hour1(){
    if(hours > timeElHr1.textContent) {
        document.getElementById("hr-1").setAttribute("style", "background-color: #d3d3d3;");
        $(timeElHr1).text("1 PM");
      }
      else if(hours < timeElHr1.textContent) {
        document.getElementById("hr-1").setAttribute("style", "background-color: #77dd77;");
        $(timeElHr1).text("1 PM");
      }
      else {
        document.getElementById("hr-1").setAttribute("style", "background-color: #ff6961;"); 
        $(timeElHr1).text(time);
      }
}

function hour2(){
    if(hours > timeElHr2.textContent) {
        document.getElementById("hr-2").setAttribute("style", "background-color: #d3d3d3;");
        $(timeElHr2).text("2 PM");
      }
      else if(hours < timeElHr2.textContent) {
        document.getElementById("hr-2").setAttribute("style", "background-color: #77dd77;");
        $(timeElHr2).text("2 PM");
      }
      else {
        document.getElementById("hr-2").setAttribute("style", "background-color: #ff6961;"); 
        $(timeElHr2).text(time);
      }
}

function hour3(){
    if(hours > timeElHr3.textContent) {
        document.getElementById("hr-3").setAttribute("style", "background-color: #d3d3d3;");
        $(timeElHr3).text("3 PM");
      }
      else if(hours < timeElHr3.textContent) {
        document.getElementById("hr-3").setAttribute("style", "background-color: #77dd77;");
        $(timeElHr3).text("3 PM");
      }
      else {
        document.getElementById("hr-3").setAttribute("style", "background-color: #ff6961;"); 
        $(timeElHr3).text(time);
      }
}

function hour4(){
    if(hours > timeElHr4.textContent) {
        document.getElementById("hr-4").setAttribute("style", "background-color: #d3d3d3;");
        $(timeElHr4).text("4 PM");
      }
      else if(hours < timeElHr4.textContent) {
        document.getElementById("hr-4").setAttribute("style", "background-color: #77dd77;");
        $(timeElHr4).text("4 PM");
      }
      else {
        document.getElementById("hr-4").setAttribute("style", "background-color: #ff6961;"); 
        $(timeElHr4).text(time);
      }
}
//=================
function hour5(){
    if(hours > timeElHr5.textContent) {
    document.getElementById("hr-5").setAttribute("style", "background-color: #d3d3d3;");
    $(timeElHr5).text("5 PM");
  }
  else if(hours < timeElHr5.textContent) {
    document.getElementById("hr-5").setAttribute("style", "background-color: #77dd77;");
    $(timeElHr5).text("5 PM");
  }
  else {
    document.getElementById("hr-5").setAttribute("style", "background-color: #ff6961;"); 
    $(timeElHr5).text(time);
  }}
  

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

  saveBtn10am.addEventListener('click', function(event) {
    event.preventDefault();
    var button = event.target;
    var parent = button.closest("div.row");
    var id = parent.id;
    var textEl = parent.querySelector("textarea").value;
  
    storage10am =  textEl;
    
    localStorage.setItem("storage10am", storage10am); 
   
  
  });
  
  document.getElementById("10am-Textarea").value = localStorage.getItem("storage10am"); 


  //================================

  saveBtn11hr.addEventListener('click', function(event) {
    event.preventDefault();
    var button = event.target;
    var parent = button.closest("div.row");
    var id = parent.id;
    var textEl = parent.querySelector("textarea").value;
  
    storage11hr =  textEl;
    
    localStorage.setItem("storage11hr", storage11hr); 
   
  
  });
  
  document.getElementById("11hr-Textarea").value = localStorage.getItem("storage11hr");

  //================================

  saveBtn12hr.addEventListener('click', function(event) {
    event.preventDefault();
    var button = event.target;
    var parent = button.closest("div.row");
    var id = parent.id;
    var textEl = parent.querySelector("textarea").value;
  
    storage12hr =  textEl;
    
    localStorage.setItem("storage12hr", storage12hr); 
   
  
  });
  
  document.getElementById("12hr-Textarea").value = localStorage.getItem("storage12hr");

    //================================

    saveBtn1hr.addEventListener('click', function(event) {
        event.preventDefault();
        var button = event.target;
        var parent = button.closest("div.row");
        var id = parent.id;
        var textEl = parent.querySelector("textarea").value;
      
        storage1hr =  textEl;
        
        localStorage.setItem("storage1hr", storage1hr); 
       
      
      });
      
      document.getElementById("1hr-Textarea").value = localStorage.getItem("storage1hr");

        //================================

  saveBtn2hr.addEventListener('click', function(event) {
    event.preventDefault();
    var button = event.target;
    var parent = button.closest("div.row");
    var id = parent.id;
    var textEl = parent.querySelector("textarea").value;
  
    storage2hr =  textEl;
    
    localStorage.setItem("storage2hr", storage2hr); 
   
  
  });
  
  document.getElementById("2hr-Textarea").value = localStorage.getItem("storage2hr");

    //================================

    saveBtn3hr.addEventListener('click', function(event) {
        event.preventDefault();
        var button = event.target;
        var parent = button.closest("div.row");
        var id = parent.id;
        var textEl = parent.querySelector("textarea").value;
      
        storage3hr =  textEl;
        
        localStorage.setItem("storage3hr", storage3hr); 
       
      
      });
      
      document.getElementById("3hr-Textarea").value = localStorage.getItem("storage3hr");

        //================================

  saveBtn4hr.addEventListener('click', function(event) {
    event.preventDefault();
    var button = event.target;
    var parent = button.closest("div.row");
    var id = parent.id;
    var textEl = parent.querySelector("textarea").value;
  
    storage4hr =  textEl;
    
    localStorage.setItem("storage4hr", storage4hr); 
   
  
  });
  
  document.getElementById("4hr-Textarea").value = localStorage.getItem("storage4hr");
  

    //================================

    saveBtn5hr.addEventListener('click', function(event) {
        event.preventDefault();
        var button = event.target;
        var parent = button.closest("div.row");
        var id = parent.id;
        var textEl = parent.querySelector("textarea").value;
      
        storage5hr =  textEl;
        
        localStorage.setItem("storage5hr", storage5hr); 
       
      
      });
      
      document.getElementById("5hr-Textarea").value = localStorage.getItem("storage5hr");

      hour9();
      hour10();
      hour11();
      hour12();
      hour1();
      hour2();
      hour3();
      hour4();
      hour5();