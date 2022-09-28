var per_name = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
var x = window.localStorage.mail;
var x1 = window.localStorage.birthday;
var date = new Date()
var dateYear = Number(window.localStorage.birthday[0]+window.localStorage.birthday[1]+window.localStorage.birthday[2]+window.localStorage.birthday[3])
var currentDateYear = date.getFullYear()

document.getElementById("infoMail").innerHTML = 'Заполните поле'
document.getElementById("infoMail2").innerHTML = 'Заполните поле'

document.getElementById('inputOne').value = x;
document.getElementById('inputTwo').value = x1;

if (per_name.test(x) && (dateYear >= 1000 && dateYear <= 9999) && (currentDateYear - dateYear) >= 18){
    document.getElementById("buttonNext").disabled = false
    document.getElementById("mail").style.display = 'none'
    document.getElementById("inputOne").style.border = '2px solid black'
    document.getElementById("birthday").style.display = 'none'
    document.getElementById("inputTwo").style.border = '2px solid black'
}

document.getElementById('buttonBack').onclick = function back() {
    window.location.href = 'stepTwo.html'
}
document.getElementById("buttonNext").onclick = function save() {
    window.localStorage.mail = x
    window.localStorage.birthday = x1
    window.location.href='stepFor.html'
}

inputOne.oninput = function() {
    x = document.getElementById("inputOne").value
    if(!per_name.test(x)){
        document.getElementById("infoMail").innerHTML = 'Некорректный e-mail '
        document.getElementById("buttonNext").disabled = true
        document.getElementById("mail").style.display = "initial"
        document.getElementById("inputOne").style.border = "2px dashed red"
    }
    else{
        document.getElementById("mail").style.display = 'none'
        document.getElementById("inputOne").style.border = '2px solid black'
    }
    if (per_name.test(x) && (dateYear >= 1000 && dateYear <= 9999) && (currentDateYear - dateYear) >= 18){
        document.getElementById("buttonNext").disabled = false
    }
}

inputTwo.oninput = function() {
    x1 = document.getElementById("inputTwo").value
    dateYear = Number(x1[0]+x1[1]+x1[2]+x1[3])
    if (dateYear < 1000 || dateYear > 9999 || isNaN(dateYear)){
        document.getElementById("birthday").style.display = "initial"
        document.getElementById("inputTwo").style.border = "2px dashed red"
        document.getElementById("buttonNext").disabled = true
        document.getElementById("infoMail2").innerHTML = "Некорректная дата"
    }
    else if (currentDateYear - dateYear < 18) {
        document.getElementById("birthday").style.display = "initial"
        document.getElementById("inputTwo").style.border = "2px dashed red"
        document.getElementById("buttonNext").disabled = true
        document.getElementById("infoMail2").innerHTML = "К сожалению, чтобы создать учетную запись, вы должны быть старше 18 лет."
    }
    else{
        document.getElementById("birthday").style.display = 'none'
        document.getElementById("inputTwo").style.border = '2px solid black'
    }
    if (per_name.test(x) && (dateYear >= 1000 && dateYear <= 9999) && (currentDateYear - dateYear) >= 18){
        document.getElementById("buttonNext").disabled = false
    }
}