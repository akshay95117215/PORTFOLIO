function downloadCV() {
    alert("CV download will be added soon!");
}

function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function projectMessage(project) {
    alert(project + " project selected!");
}

function sendMessage() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    alert("Thank you " + name + "! Your message has been sent.");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}