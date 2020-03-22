//Create time element
var hour;
var myInput;
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
    var myInput = $(this).siblings('.input').children('.details').val();
    console.log("this", this.id)
    console.log("input", myInput)
    console.log($(".details"))


    hour = $(this).siblings('.hour').text();
    console.log("hour", hour)

    localStorage.setItem(hour, JSON.stringify(myInput));

    changeColor();
    saveInput($(this));

})

function saveInput() {

    var milTime = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'];

    for (var i = 0; i < milTime.length; i++) {

        var slot1 = JSON.parse(localStorage.getItem(milTime[i]));

        $('#' + (i + 6)).val(slot1);
        console.log("saveInput -> i", $(i))

    }
}