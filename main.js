const form = document.getElementById("myForm");
const success = document.getElementById("submit-message")


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const first = document.getElementById("firstName").value.trim();
    const last = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const query = document.querySelector('input[name="flexRadio"]:checked')
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("consent").checked;

    const error = document.querySelectorAll(".error");


    let isValid = true;

    if (first === "") {
        isValid = false;

        document.querySelector("#firstName + .error").style.display = "block"
        document.querySelector("#firstName").style.boder = "1px solid red"

    } else {
        document.querySelector("#firstName + .error").style.display = "none"
        document.querySelector("#firstName").style.boder = "1px solid rgb(98, 154, 116)"

    }
    if (last === "") {
        isValid = false;

        document.querySelector("#lastName + .error").style.display = "block"
        document.querySelector("#lastName").style.boder = "1px solid red"

    } else {
        document.querySelector("#lastName + .error").style.display = "none"
        document.querySelector("#lastName").style.boder = "1px solid rgb(98, 154, 116)"

    }

    if (!isValidEmail(email)) {
        isValid = false;

        document.querySelector("#email + .error").style.display = "block"
        document.querySelector("#email").style.boder = "1px solid red"

    } else {
        document.querySelector("#email + .error").computedStyleMap.display = "none"
        document.querySelector("#email").style.boder = "1px solid rgb(98, 154, 116)"

    }
    // 
    if (message === "") {
        isValid = false;

        document.querySelector("#message + .error").style.display = "block"
        document.querySelector("#message").style.boder = "1px solid red"

    } else {
        document.querySelector("#message + .error").computedStyleMap.display = "none"
        document.querySelector("#message").style.boder = "1px solid rgb(98, 154, 116)"

    }

    // if (!query) {
    //     isValid = false;

    //     document.querySelector(".form-check-input + .error").style.display = "block"
    // } else {
    //     document.querySelector(".form-check-input + .error").style.display = "none"

    // }

    // if (!consent) {
    //     isValid = false
    //     error[5].classList.add("error")
    // } else {
    //     error[5].classList.remove("error")

    // }


    if (isValid) {
        success.classList.add("active");
        form.reset();
    }
})

function isValidEmail(email) {
    let Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return Regex.test(email)

}