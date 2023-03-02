function showNotes() {
    let notes = localStorage.getItem("notes");
    console.log("NOTES");
    console.log(notes);
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        console.log("JSON");
        console.log(notesObj);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        /*html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
                    </div>
                </div>`;*/

        html += `<div class="col-3 col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Note ${index + 1}</h5>
                            <p class="card-text"> ${element}</p>
                            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
                        </div>
                    </div>
                </div>`;
    });
    let notesElem = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = `You Currently Have No Notes!`;
    }
}

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addText = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
});

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

function darkMode() {
    toggle.classList.toggle("active");
    let htmlTag = document.getElementById("htmlTag");
    if (htmlTag.className == "light") {
        localStorage.setItem("notes_theme", "dark");
        htmlTag.className = "dark";
    }
    else {
        localStorage.setItem("notes_theme", "light");
        htmlTag.className = "light";
    }
}

const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", darkMode)

let theme = localStorage.getItem("notes_theme");
if (theme == "dark") {
    darkMode();
}

showNotes();