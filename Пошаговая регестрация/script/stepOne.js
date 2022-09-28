var x = window.localStorage.Name;
var x1 = window.localStorage.Surname;
var per_name =/^[А-Я]{1}[а-я]*$/;

document.getElementById('inputOne').value = x;
document.getElementById('inputTwo').value = x1;

document.getElementById("helpName").innerHTML = 'Заполните поле'
document.getElementById("helpName1").innerHTML = 'Заполните поле'


document.getElementById('buttonNext').onclick = function save(){
    window.localStorage.Name = x
    window.localStorage.Surname = x1
    window.location.href='stepTwo.html'
}

if (x.length < 20 && x1.length < 20 && per_name.test(x) && per_name.test(x1) && x.length !== 0 && x1.length !== 0){
    document.getElementById("inputOne").style.border = "2px solid black"
    document.getElementById("inputTwo").style.border = "2px solid black"
    document.getElementById("helpRam").style.display = "none"
    document.getElementById("helpRam1").style.display = "none"
    document.getElementById("buttonNext").disabled = false
}

inputOne.oninput = function() {
    x = document.getElementById('inputOne').value;
    if (x.length === 0) {
        document.getElementById("helpName").innerHTML = 'Минимальная длина Имени 1'
        document.getElementById("buttonNext").disabled = true
        document.getElementById("helpRam").style.display = "initial"
        document.getElementById("inputOne").style.border = "2px dashed red"
    }
    else if(!per_name.test(x)){
        document.getElementById("helpName").innerHTML = 'Разрешены только русские буквы ,Имя должно начинаться с заглавной буквы и продолжаться строчными'
        document.getElementById("buttonNext").disabled = true
        document.getElementById("helpRam").style.display = "initial"
        document.getElementById("inputOne").style.border = "2px dashed red"
    }
    else if (x.length > 20){
        document.getElementById("helpName").innerHTML = 'Превышенна максимальная длинна'
        document.getElementById("buttonNext").disabled = true
        document.getElementById("helpRam").style.display = "initial"
        document.getElementById("inputOne").style.border = "2px dashed red"
    }
    else{
        document.getElementById("helpRam").style.display = "none"
        document.getElementById("inputOne").style.border = "2px solid black"
    }
    if(x.length < 20 && x1.length < 20 && per_name.test(x) && per_name.test(x1) && x.length !== 0 && x1.length !== 0) {
        document.getElementById("buttonNext").disabled = false
    }
}

inputTwo.oninput = function() {
    x1 = document.getElementById('inputTwo').value;
    if (x1.length === 0) {
        document.getElementById("helpName1").innerHTML = 'Минимальная длина Имени 1'
        document.getElementById("buttonNext").disabled = true
        document.getElementById("helpRam1").style.display = "initial"
        document.getElementById("inputTwo").style.border = "2px dashed red"
    }
    else if(!per_name.test(x1)){
        document.getElementById("helpName1").innerHTML = 'Разрешены только русские буквы ,Фамилия должна начинаться с заглавной буквы и продолжаться строчными'
        document.getElementById("buttonNext").disabled = true
        document.getElementById("helpRam1").style.display = "initial"
        document.getElementById("inputTwo").style.border = "2px dashed red"
    }
    else if (x1.length > 20){
        document.getElementById("helpName1").innerHTML = 'Превышенна максимальная длинна'
        document.getElementById("buttonNext").disabled = true
        document.getElementById("helpRam1").style.display = "initial"
        document.getElementById("inputTwo").style.border = "2px dashed red"
    }
    else{
        document.getElementById("helpRam1").style.display = "none"
        document.getElementById("inputTwo").style.border = "2px solid black"
    }
    if (x.length < 20 && x1.length < 20 && per_name.test(x) && per_name.test(x1) && x.length !== 0 && x1.length !== 0){
        document.getElementById("buttonNext").disabled = false
    }
}