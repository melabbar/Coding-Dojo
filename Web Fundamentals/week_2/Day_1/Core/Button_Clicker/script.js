function logout(element) {
    if (element.innerText == "Login") {
        element.innerHTML = "Logout"
    } else if (element.innerHTML == "Logout") {
        element.innerText = "Login"
    }
}

function del(element) {
    element.remove()
}
function liked() {
    alert("The ninja was liked!");
}