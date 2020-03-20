//Create time element
$(document).ready(function() {
    const curTime = moment();

    console.log('Start', curTime);

    $('.container').append('<table style="width: 100%" class="table" id="myPlan"></table>');
    $('.table').append('<thead><tr><th scope="col">' + "Time" + '</th><th scope="col">' + "Description" + ' </th><th scope="col">' + "Save" + ' </th></tr></thead> ');

    $('.table').append('<tbody></tbody>');

    for (var i = 0; i < 24; i++) {
        console.log(i);
        var tableRow = 'block' + i;
        console.log(tableRow);

        $('.table tbody').append('<tr><td class="time-block">' + i + '</td><td class="description"></td><td class="saveBtn"><span style="font-size: 40px"><i class="far fa-calendar-check"></i></span></td></tr>');
    }

    function clock() {
        $("#currentDay").html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
    }

    setInterval(clock, 1000);

});