var container = document.querySelector("#container");
var description = document.querySelector("#description");
var saveBtn = document.getElementById("saveBtn");

var storage = {};



    saveBtn.addEventListener('click', function(event) {
        var button = event.target;
        var parent = button.closest("div.row");

        var id = parent.id;
        var textContent = parent.querySelector("textarea").value;

        storage[id] =  textContent;

        localStorage.setItem("storage", JSON.stringify(storage)); 
    });





// var time = dayjs().format('h A');
// $('.hour').text(time);


$('#currentDay').text(dayjs().format('MMM Do, YYYY'));
