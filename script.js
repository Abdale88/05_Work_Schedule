var container = document.querySelector("#container");
var description = document.querySelector("#description");
// var saveBtn = document.querySelector("saveBtn");

var storage = {};


document.querySelectorAll('.saveBtn').forEach(item => {
    item.addEventListener('click', event => {
        var button = event.target;
        var parent = button.closest("div.row");

        var id = parent.id;
        var textContent = parent.querySelector("textarea").value;

        storage[id] =  textContent;

        localStorage.setItem("storage", JSON.stringify(storage)); 
    });
})

document.querySelectorAll('.saveBtn').forEach(item => {
    item.addEventListener('click', event => {
        var button = event.target;
        var parent = button.closest("div.row");

        var id = parent.id;
        var textContent = parent.querySelector("textarea").value;

        storage[id] =  textContent;

        var getEl = JSON.parse(localStorage.getItem("storage")); 
    });
})




// var time = dayjs().format('h A');
// $('.hour').text(time);


$('#currentDay').text(dayjs().format('MMM Do, YYYY'));
