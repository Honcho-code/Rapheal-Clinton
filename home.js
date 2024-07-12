// const { error } = require("console");

const hamburgerMenu = document.querySelector(".hamburgerMenu");
const links = document.querySelector(".links");

hamburgerMenu.addEventListener("click", ()=>{
    hamburgerMenu.classList.toggle("active")
    links.classList.toggle("active")

})

document.querySelectorAll(".navlink").forEach(n => n
    .addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    links.classList.remove("active");
}))


//get email massages


function sendMail(){
    var param = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_9tcox1n"
    const templateID = "template_p12fx6e"

    emailjs.send(serviceID, templateID, param).then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent sucessfully")
    })
    .catch(err => console.log(err));
}

