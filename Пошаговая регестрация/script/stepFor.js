document.getElementById("name").value = window.localStorage.Name
document.getElementById("surname").value = window.localStorage.Surname
document.getElementById("password").value = window.localStorage.passwordOne
document.getElementById("mail").value = window.localStorage.mail
document.getElementById("date").value = window.localStorage.birthday

document.getElementById('buttonNext').onclick = function save(){
    window.location.href='registrStart.html'
}

document.getElementById('buttonBack').onclick = function save(){
    window.location.href='stepThree.html'
}