var container = document.querySelector("#container");
var description = document.querySelector("#description");

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

// var time = dayjs().format('h A');
// $('.hour').text(time);


$('#currentDay').text(dayjs().format('MMM Do, YYYY'));
