
// select inputs
const submitBtn = document.querySelector(".submit-btn");
const names = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const number = document.querySelector("#number");
const tac = document.querySelector("#terms-and-cond");
const notification = document.querySelector("#notification");

submitBtn.addEventListener("click", () => {
    if(names.value.length < 3){
        showAlert('name must be 3 letters long');
    } else if (!email.value.length){
        showAlert("enter your email");
    } else if (password.value.length < 8){
        showAlert("password should be 8 letters long")
    } else if (!number.value.length){
        showAlert("enter your phone number");
    } else if (!number.value.length || number.value.length < 10){
        showAlert("invalid number, please enter valid one");
    } else if (!tac.checked){
        showAlert("you must agree to our terms and conditions");
    } else {
        sendData('/signup', {
            name: names.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.value,
            notification: notification.value,
            seller: false
        })
    }
})

// send data function
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers : new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then(response => {
        console.log(response);
    })
}

// alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector(".alert-box");
    let alertMsg = document.querySelector(".alert-msg");
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 3000);
}


