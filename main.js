let form = document.querySelector('.myForm')
let validateBtn = form.querySelector('.validateBtn')
let myName = form.querySelector('.name')
let myPhone = form.querySelector('.tel')
let myPassword = form.querySelector('.password')
let myPasswordConfirmation = form.querySelector('.passwordConfirmation')


  form.addEventListener('submit', function (event) {
    event.preventDefault()

    checkName(myName.value)

    checkPhone(myPhone.value)

    checkPassword (myPassword.value)

    checkPasswordConfirmation (myPassword.value, myPasswordConfirmation.value)
  })


  let checkName = function (thisName) {
    
    let letter
    let i = 0

    if (thisName.length === 0) {
        alert("Введите имя");
        return 
    }

    if (thisName.length < 3) {
        alert("Слишком короткое имя");
        return 
    }

    if (thisName.length > 30) {
        alert("Слишком длинное имя");
        return 
    }


    while (i < thisName.length) {
        letter = thisName[i];
        if (letter.toLowerCase() > letter.toUpperCase()) {
            i = i + 1 
        } else {
            alert("Имя должно содержать только русские или английские буквы")
            break
        }
}

}


let checkPhone = function (thisPhone) {

    if (thisPhone.length === 0) {
        alert("Введите номер телефона");
        return 
    }

    let firstSymbol = thisPhone[0];

    if (firstSymbol === "+") {
        thisPhone = thisPhone.substring(1)
    }

    if (thisPhone * 1 != thisPhone) {
        alert("Номер телефона должен содержать только цифры, может начинаться со знака \"+\"")
        return
    }

    if (thisPhone.length < 10) {
        alert("Слишком короткий номер телефона")
        return
    }

    if (thisPhone.length > 15) {
        alert("Слишком длинный номер телефона")
        return
    }

}


let checkPassword = function (thisPassword) {
    
    if (thisPassword.length === 0) {
        alert("Введите пароль");
        return 
    }

    let haveCapitalLetter = false
    let haveDigit = false

    if (thisPassword.length < 8) {
        alert("Слишком короткий пароль. Пароль должен содержать от 8 до 40 символов и содержать хотя бы одну цифру и заглавную букву")
        return
    }

    if (thisPassword.length > 40) {
        alert("Слишком длинный пароль. Пароль должен содержать от 8 до 40 символов и содержать хотя бы одну цифру и заглавную букву")
        return
    }

    let i = 0

    while (i < thisPassword.length) {
        letter = thisPassword[i];
        if (letter.toLowerCase() != letter) {
            haveCapitalLetter = true
            break
        } else {
            i = i + 1 
        }
    }

    i = 0

    while (i < thisPassword.length) {
        letter = thisPassword[i];
        if (letter * 1 == letter) {
            haveDigit = true
            break
        } else {
            i = i + 1 
        }
    }


if (haveCapitalLetter === false || haveDigit === false) alert("Пароль должен содержать от 8 до 40 символов и содержать хотя бы одну цифру и заглавную букву")

}


let checkPasswordConfirmation = function (thisPassword, thisPasswordConfirmation) {
    if (thisPasswordConfirmation.length === 0) {
        alert("Повторите пароль");
        return 
    }

    if (thisPassword != thisPasswordConfirmation) alert ("Пароли должны совпадать")
}