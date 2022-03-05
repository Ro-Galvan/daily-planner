// setting date to autopopulate 
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

document.querySelectorAll('.row').forEach(row => {
    const hourElement = row.querySelector('.hour');
    const descriptionElement = row.querySelector('.description');
    const saveBtn = row.querySelector(".saveBtn");
    const hour = hourElement.textContent;
    const date = new Date();
    const hourAmp = hour.split(" ");
    const currentHour = date.getHours();

    //split array to isolate AM/PM and add 12 hours for military 
    let hourInNumber = parseInt(hourAmp[0], 10);
    if (hourAmp[1] === 'PM' && hourInNumber !== 12) {
        hourInNumber += 12;
    }
    const text = localStorage.getItem(hourInNumber.toString());
    
    if (text) {
        descriptionElement.value = text;
    }

    // to change colors based on current hour
    if (hourInNumber === currentHour) {
        descriptionElement.classList.add('present')
    } else if (hourInNumber > currentHour) {
        descriptionElement.classList.add('future');
    } else {
        descriptionElement.classList.add('past');
    }

    saveBtn.addEventListener('click', () => {
        if (!descriptionElement.value) return;
        localStorage.setItem(hourInNumber.toString(), descriptionElement.value);
    })
})

function changesColors(){
    var time = moment().hour;
    console.log(time);
}

