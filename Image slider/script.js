let img1 = document.querySelector(".image-container-1");
let img2 = document.querySelector(".image-container-2");
let img3 = document.querySelector(".image-container-3");


let rightArrow = document.querySelector(".arrow-right");
let leftArrow = document.querySelector(".arrow-left");


let img_arr_container = [img1 , img2 , img3];

let index = 0;

function showImage(idx) {
    img_arr_container.forEach((img, i) => {
        if (i === idx) {
            img.classList.remove("d-none");
        } else {
            img.classList.add("d-none");
        }
    });

    if (idx === 0){
        leftArrow.classList.add("d-none")
    }else{
        leftArrow.classList.remove("d-none")
    }

    if (idx === 2){
        rightArrow.classList.add("d-none")
    }else{
        rightArrow.classList.remove("d-none")
    }
}


showImage(index);

rightArrow.addEventListener("click", () => {
    index = (index + 1) % img_arr_container.length; // move forward
    showImage(index);
});

leftArrow.addEventListener("click", () => {
    index = (index - 1 + img_arr_container.length) % img_arr_container.length; // move backward
    showImage(index);
});
