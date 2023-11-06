/* Add your JavaScript to this file */
const load = () => {

const FORM = document.querySelector('form')
const INPUT = document.getElementById('email')
const MESSAGE = document.querySelector('.message')

FORM.addEventListener('submit', (event) => {

    let message = ["","red"]
    let validEmailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    event.preventDefault()

    if(INPUT.value == '' || INPUT.value == null) {
        message[0] = "Please enter  email address before submitting"
    } 
    else if (!(INPUT.value.match(validEmailFormat))) {
        message[0] = "Please enter a valid email address."
    } 
    else {
        message[0] = `Thank you! Your email address <b>${INPUT.value}</b> has been added to our mailing list!`
        message[1] = "#525ec7"
    }

    MESSAGE.innerHTML = `<p style = 'color:${message[1]};'><i>${message[0]}</i></p>`

    //EXTRA STYLING FOR MESSAGE 
    MESSAGE.style.backgroundColor = "white"
    MESSAGE.style.padding = "16px"
    MESSAGE.style.fontSize = "16px"
    MESSAGE.style.maxWidth = "500px"
    MESSAGE.style.display = "flex"
    MESSAGE.style.borderRadius = "5px"
    MESSAGE.style.boxShadow = "2px 3px 10px 1px hsla(0, 0%, 0%, 0.1)"
    
    INPUT.style.border = `1px solid ${message[1]}`

})

}
document.addEventListener("DOMContentLoaded", load);