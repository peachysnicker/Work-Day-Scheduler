let timeDisplayEl = $('#time-display');
let input = $('#input9am').val();

const saveBtn9 = $('#saveBtn9');
const saveBtn10 = $('#saveBtn10');
const saveBtn11 = $('#saveBtn11');
const saveBtn12 = $('#saveBtn12');
const saveBtn13 = $('#saveBtn13');
const saveBtn14 = $('#saveBtn14');
const saveBtn15 = $('#saveBtn15');
const saveBtn16 = $('#saveBtn16');



let timeOfDay = ['9', '12', '11', '12', '13', '14', '15', '16',];



var checkTime = function () {
  for (let i = 0; i <= timeOfDay.length; i++) {

    if (dayjs().hour() > timeOfDay[i]) {

      $('.row').removeClass("present").addClass("past");
      console.log('past')

    } else if (dayjs().hour() < timeOfDay[i]) {

      $('.row').removeClass("present").addClass("future");
      console.log('future');

    } else {
      console.log('present');
    };
  }
};


saveBtn9.on('click', function () {
  info = localStorage.getItem('9am info', ' ');
  localStorage.setItem('9am info', $('#input9am').val());
  $('#input9am').val('');
});

saveBtn10.on('click', function () {
  info = localStorage.getItem('10am info', ' ');
  localStorage.setItem('10am info', $('#input10am').val());
  $('#input10am').val('');
});

saveBtn11.on('click', function () {
  info = localStorage.getItem('11am info', ' ');
  localStorage.setItem('11am info', $('#input11am').val());
  $('#input11am').val('');
});

saveBtn12.on('click', function () {
  info = localStorage.getItem('12pm info', ' ');
  localStorage.setItem('12pm info', $('#input12pm').val());
  $('#input12pm').val('');
});

saveBtn13.on('click', function () {
  info = localStorage.getItem('1pm info', ' ');
  localStorage.setItem('1pm info', $('#input1pm').val());
  $('#input1pm').val('');
});

saveBtn14.on('click', function () {
  info = localStorage.getItem('2pm info', ' ');
  localStorage.setItem('2pm info', $('#input2pm').val());
  $('#input2pm').val('');
});

saveBtn15.on('click', function () {
  info = localStorage.getItem('3pm info', ' ');
  localStorage.setItem('3pm info', $('#input3pm').val());
  $('#input3pm').val('');
});

saveBtn16.on('click', function () {
  info = localStorage.getItem('4pm info', ' ');
  localStorage.setItem('4pm info', $('#input4pm').val());
  $('#input4pm').val('');
});


function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY HH');
  timeDisplayEl.text(rightNow + " hours");
}


displayTime();
checkTime();
