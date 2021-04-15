var container = document.querySelector("#container");
var description = document.querySelector("#description");
var saveBtn = document.getElementById("saveBtn");



saveBtn.addEventListener("click", function(event){
   event.preventDefault();
   console.log(localStorage);
   var descriptionObject = {
       eventDes: description,
   }

   localStorage.setItem("description", JSON.stringify(descriptionObject));
   renderDes();
});


function renderDes(){
    var x = JSON.parse(localStorage.getItem("description"));
    if(x !== null){
        document.querySelector(".description").textContent = "";
    }
}



// var time = dayjs().format('h A');
// $('.hour').text(time);


$('#currentDay').text(dayjs().format('MMM Do, YYYY'));
