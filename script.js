var list = document.getElementById('list');
var story = document.getElementsByClassName("item");
var popup = document.getElementById("popup");
var close = document.querySelector(".close");

function addItem() {
    var newLi = document.createElement('li');
    newLi.innerHTML = 'Новая задача!';
    newLi.className = 'item';
    list.appendChild(newLi);
}

function delItem() {
    list.removeChild(story[0]);
    if (story.length == 0)
        popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = "none";
}


function authorize() {
    var name = document.getElementById("user").value;
    //console.log("Здравствуйте, " + name + "!");
    var age = document.getElementById("age").value;
    //console.log("Вам, " + age + " лет.");

    if (!name.length || !age.length) {
        alert("Введите, пожалуйста, Ваше имя и возраст.");
    }
    if (name !== "" && age !== "" && age >= 18) {
        alert("Здравствуйте, " + name + "!. Вам " + age + " лет. Вам октрыт доступ и у Вас есть подписка.");
    }
    if (name !== "" && age !== "" && age <= 18)
        alert("Здравствуйте, Вам отказано в доступе.");
}


btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);
entering.addEventListener("click", authorize);