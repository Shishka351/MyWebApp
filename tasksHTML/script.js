var number = 0;

window.onload = function() {
    var input = document.getElementById("text");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("btn").click();
        }
    });
}

function NewTask() {
    number = number + 1
    var id = "'" + "box" + number + "'";
    var text = document.getElementById("text").value;
    var tasks = document.getElementById("tasks");
    var task = document.createElement("div");
    task.innerHTML = '<input type="checkbox" id=' + id + ' class="checkbox"/>' + text + '<div class="delete"><button>X<button></div>';
    task.setAttribute("class", "task");
    tasks.appendChild(task);
    document.getElementById("text").value = ""
}