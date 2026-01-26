// selectors
const mainPage = document.querySelector(".main__page");
const openBtn = document.querySelector(".openBtn");

const backArrow = document.querySelector(".fa-arrow-left");
const savingBtn = document.querySelector(".fa-bookmark");
const savedBtn = document.querySelector(".save-mark");

const notes = document.querySelector(".myNotesContainer");
const textInp = document.querySelector("#myNotes");


// controlling the workFlow
openBtn.addEventListener("click" , ()=> {
    mainPage.classList.add("hideClass");
    notes.classList.remove("hideClass");
})

backArrow.addEventListener("click" , ()=> {
    mainPage.classList.remove("hideClass");
    notes.classList.add("hideClass");
})


// applying user saved inputs using localstorage
textInp.value = localStorage.getItem("note");
const saving = localStorage.getItem("save");
applySaved(saving)


//------------------Making A toggle for Saved Bookmark--------------

function applySaved(save){//applying saved the theme
    if (save === "saved"){
        localStorage.setItem("note" , textInp.value) || "";
        savedBtn.classList.remove("hideClass");
        savingBtn.classList.toggle("hideClass");
    }else{
        savedBtn.classList.add("hideClass");
        savingBtn.classList.remove("hideClass");
    }
}

function saved(saved){ ///saving the theme
    localStorage.setItem("save" , saved) || "notSaved";
    applySaved(saved);
}

// event listners
savingBtn.addEventListener("click" , ()=> {
    saved("saved")
})

savedBtn.addEventListener("click" , ()=>{
    saved("notSaved");
})
