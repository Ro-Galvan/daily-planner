// setting date to autopopulate 
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
var saveBtn = document.querySelectorAll(".saveBtn");

function changesColors(){
    var time = moment().hour;
    console.log(time);
}

// $("col-1 hour").text(time);

// $('.time-block').each(function() {
//     if (hour < time) {
//         color =
//     } else {
        
//     }
// }
