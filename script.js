//Створюємо перший JS код:)
//Створюємо вспливче вікно на веб-сайті
function offering(message){
    alert(message)
}
setTimeout(function(){offering('Запишіться на наші курси, щоб виявити свої творчі здібності')}, 2*60*1000)

//Створюємо інтерактивні комірці
let name=document.querySelector('#correct_name')
let surname=document.querySelector('#correct_surname')
let email=document.querySelector('#correct_email')
let password=document.querySelector('#correct_password')
let phone_number=document.querySelector('#correct_phone_number')
let date=document.querySelector('#correct_date')
let submit=document.querySelector('.send-btn-click')

submit.addEventListener('click', function(){
class User{
    constructor(name, surname, email, password, phone_number, date){
        this.name=name
        this.surname=surname
        this.email=email
        this.password=password
        this.phone_number=phone_number
        this.date=date
    } 
}
let user=new User('Вікторія', 'Чуприна',  'vikachuprina@gmail.com', 'zxcvbnm2345', '+3800672344567', '06.05.2008')
})
//Перекладання сайта на різні мови
if(navigator.language=='uk'){
}else if(navigator.language=='en'){
}else if(navigator.language=='rus'){
}
function first_question(message){
    alert('А давайте трохи пограємось. Ми вам будемо давати запитання, а ви будете відповідати на них')
}
setTimeout(first_question, 3000)

function second_question(message){
    alert('Запитання 1. Чим змішують олійні фарби, коли вони починають засихати? А)З розчинником для фарб; Б)З водою')
}
function third_question(message){
    alert('Ви готові почути відповідь. Правильна відповідь А')
}
let promise = new Promise(function(resolwe, reject){
    setTimeout(function(){
        second_question();
        resolwe();
    }, 5000)
    });

promise.then(function(){
    setTimeout(third_question, 7000)
});