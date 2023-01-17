const todo = document.getElementById('todo')



function add() {

    //get the value
    let newText = document.getElementById('newText')

    //add new list
    let newTodo = "<li class='list'> <span onclick='toggle(this)'> " + newText.value + "</span>" +
    "<span onclick='removeItem(this)'> <span class='material-symbols-outlined'> delete</span> </span>" +
        "</li>"

    todo.insertAdjacentHTML('afterbegin', newTodo)

    //return the value
    newText.value = ""

}

function toggle(el) {
    el.classList.toggle('done')
}

function removeItem(el) {
    el.parentElement.remove()
}