var per_name = /(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/
var x = window.localStorage.passwordOne;
var x1 = window.localStorage.passwordTwo;

document.getElementById("infoPas").innerHTML = 'Заполните поле'
document.getElementById("infoPas2").innerHTML = 'Заполните поле'

document.getElementById('inputOne').value = x;
document.getElementById('inputTwo').value = x1;

document.getElementById('checkbox').onclick = function click() {
    if (document.getElementById('password-checkbox').checked === true){
        document.getElementById('inputOne').type = "text"
        document.getElementById('inputTwo').type = "text"
    }
    if (document.getElementById('password-checkbox').checked === false){
        document.getElementById('inputOne').type = "password"
        document.getElementById('inputTwo').type = "password"
    }
}

document.getElementById('buttonBack').onclick = function back() {
    window.location.href = 'stepOne.html'
}
document.getElementById("buttonNext").onclick = function save() {
    window.localStorage.passwordOne = x
    window.localStorage.passwordTwo = x1
    window.location.href='stepThree.html'
}

if(per_name.test(x) && per_name.test(x1) && x.length >= 8 && x1.length >= 8 && window.localStorage.passwordOne === window.localStorage.passwordTwo){
    document.getElementById("buttonNext").disabled = false
    document.getElementById("inputTwo").style.border = "2px solid black"
    document.getElementById("passwordTwo").style.display = "none"
    document.getElementById("inputOne").style.border = "2px solid black"
    document.getElementById("passwordOne").style.display = "none"
}

inputOne.oninput = function() {
    x = document.getElementById("inputOne").value
    if (x.length < 8) {
        document.getElementById("infoPas").innerHTML = 'Минимальная длина пароля: 8'
        document.getElementById("buttonNext").disabled = true
        document.getElementById("passwordOne").style.display = "initial"
        document.getElementById("inputOne").style.border = "2px dashed red"
    }
    else if (!per_name.test(x)){
        document.getElementById("infoPas").innerHTML = 'Пароль должен содержать минимум одну заглавную , одну строчную английские буквы , цифру и специальный символ'
        document.getElementById("buttonNext").disabled = true
        document.getElementById("passwordOne").style.display = "initial"
        document.getElementById("inputOne").style.border = "2px dashed red"
    }
    else{
        document.getElementById("passwordOne").style.display = "none"
        document.getElementById("inputOne").style.border = "2px solid black"
    }
    if(per_name.test(x) && per_name.test(x1) && x.length >= 8 && x1.length >= 8 && x === x1){
        document.getElementById("buttonNext").disabled = false
        document.getElementById("inputOne").style.border = "2px solid black"
        document.getElementById("passwordTwo").style.display = "none"
        document.getElementById("inputTwo").style.border = "2px solid black"
        document.getElementById("passwordTwo").style.display = "none"
    }
    if(x1 != x){
        document.getElementById("infoPas2").innerHTML = 'Пароли не совпадают'
        document.getElementById("buttonNext").disabled = true
        document.getElementById("passwordTwo").style.display = "initial"
        document.getElementById("inputTwo").style.border = "2px dashed red"
    }
}

inputTwo.oninput = function() {
    x1 = document.getElementById("inputTwo").value
    if(x1 != x){
        document.getElementById("infoPas2").innerHTML = 'Пароли не совпадают'
        document.getElementById("buttonNext").disabled = true
        document.getElementById("passwordTwo").style.display = "initial"
        document.getElementById("inputTwo").style.border = "2px dashed red"
    }
    if(per_name.test(x) && per_name.test(x1) && x.length >= 8 && x1.length >= 8 && x === x1){
        document.getElementById("buttonNext").disabled = false
        document.getElementById("inputTwo").style.border = "2px solid black"
        document.getElementById("passwordTwo").style.display = "none"
    }
}

