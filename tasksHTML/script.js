function Done(boxId) {
    var box = document.getElementById(boxId);
    box.src = "https://static.tildacdn.com/tild3463-3138-4137-a232-333538373261/web-2018010114204555.png";
}

function NewTask() {
    var input = document.getElementById("text").value

    var tasks = document.getElementById("tasks");
    var task = document.createElement("div");
    var img = document.createElement("img");
    img.id = "box1"
    img.class = "checkbox"
    img.src = "https://d29fhpw069ctt2.cloudfront.net/clipart/89484/preview/checkbox_unchecked_preview_48d2.png";
    img.onclick = "alert('1')";
    var text = document.createElement("a");
    text.innerHTML = input
    task.appendChild(img);
    task.appendChild(text);
    tasks.appendChild(task)
}

{/* <div>
    <img id="box1" class="checkbox" src="https://d29fhpw069ctt2.cloudfront.net/clipart/89484/preview/checkbox_unchecked_preview_48d2.png" onclick="Done('box1')" />
    <a href="#3">Задание 1</a>
</div> */}