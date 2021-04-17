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
        console.log("storage[id]>> " + storage[id]);

        localStorage.setItem("storage", JSON.stringify(storage)); 

        var item = storage[id];
         document.getElementById("myTextarea").value = item;   
         
       
    });
   

    // function myFunction() {
    //     document.getElementById("myTextarea").value = "Fifth Avenue, New York City";
    //   }


// var time = dayjs().format('h A');
// $('.hour').text(time);


$('#currentDay').text(dayjs().format('MMM Do, YYYY'));
