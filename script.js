//Create time element
var hour;
var input;
$(document).ready(function() {

    const curTime = moment();

    console.log('Loaded');

    function clock() {
        $("#currentDay").html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
    }

    setInterval(clock, 1000);
    changeColor();
    saveInput();
});


function changeColor() {
    let realTime = moment().hours();
    console.log("Current Time" + realTime);

    $(".details").each(function() {
        var timeTest = parseInt($(this).attr("id"));
        console.log(timeTest);

        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (realTime < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

$('.saveBtn').on('click', function() {
    input = $(this).siblings('.details').val();
    console.log("this", this)
    console.log("input", input)


    hour = $(this).siblings('.hour').text();
    console.log("hour", hour)

    localStorage.setItem(hour, JSON.stringify(input));

    changeColor();
    saveInput();

})

function saveInput() {
    var slot1 = JSON.parse(localStorage.getItem("6:00 AM"));
    $('#6').val("");
    $('#6').val(slot1);

    var slot2 = JSON.parse(localStorage.getItem("7:00 AM"));
    $('#7').val("");
    $('#7').val(slot2);
}