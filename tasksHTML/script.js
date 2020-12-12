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

function Done(boxId) {
    var box = document.getElementById(boxId);
    if (box.src == 'https://d29fhpw069ctt2.cloudfront.net/clipart/89484/preview/checkbox_unchecked_preview_48d2.png')
    {
        box.src = "https://static.tildacdn.com/tild3463-3138-4137-a232-333538373261/web-2018010114204555.png";
    }
    else
    {
        box.src = "https://d29fhpw069ctt2.cloudfront.net/clipart/89484/preview/checkbox_unchecked_preview_48d2.png"
    }
}

function NewTask() {
    number = number + 1
    var id = "'" + "box" + number + "'";
    var text = document.getElementById("text").value;
    var tasks = document.getElementById("tasks");
    var task = document.createElement("div");
    task.innerHTML = '<img id=' + id + ' class="checkbox" src="https://d29fhpw069ctt2.cloudfront.net/clipart/89484/preview/checkbox_unchecked_preview_48d2.png" onclick="Done(' + id + ')"/>' + text
    tasks.appendChild(task);
    document.getElementById("text").value = ""
}