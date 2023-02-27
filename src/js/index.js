const checkboxEl = document.querySelector("#menu-handler")

checkboxEl.onclick = () => {
    var state = checkboxEl.checked
    console.log(state)
}