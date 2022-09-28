window.localStorage.Name = ''
window.localStorage.Surname = ''
window.localStorage.passwordOne = '';
window.localStorage.passwordTwo = '';
window.localStorage.mail = '';
window.localStorage.birthday = '';

var greetings = document.getElementById("hello");
var day = new Date();
var time = day.toLocaleTimeString();

time = Number(time[0] + time[1])

if (time >= 6 && time <= 12) greetings.innerHTML = "Доброе утро"
if (time > 12 && time <= 18) greetings.innerHTML = "Добрый день"
if (time > 18 && time <= 24) greetings.innerHTML = "Добрый вечер"
if (time > 0 && time < 6) greetings.innerHTML = "Доброй ночи"