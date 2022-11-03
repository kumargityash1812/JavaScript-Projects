const fileInput = document.querySelector('.file-input'),
    chooseImgBtn = document.querySelector('.choose-img'),
    filterOptions = document.querySelectorAll('.filter button'),
    filterName = document.querySelector('.filter-info .name'),
    filterValue = document.querySelector(".filter-info .value"),
    rotateOptions = document.querySelectorAll(".rotate  button"),
    input = document.querySelector('.slidebar input'),
    previewImg = document.querySelector('.preview-img'),
    ResetFilterBtn = document.querySelector('.reset-filter'),
     saveImgBtn = document.querySelector('.save-img'),
    image = previewImg.querySelector('img');

let brightness = 100, saturation = 100, grayscale = 0, inversion = 0;
let rotate = 0, flipHorizontal = 1, flipVertical = 1;
const applyfilters = () => {
    image.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal},${flipVertical})`;
    image.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
}

const loadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    image.src = URL.createObjectURL(file);
    image.addEventListener('load', () => {
        document.querySelector(".container").classList.remove("disable");
    });
}
image.addEventListener('click', () => chooseImgBtn.click());
filterOptions.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".filter .active").classList.remove('active');
        option.classList.add("active");
        filterName.innerHTML = option.innerHTML;

        if (option.id == 'brightness') {
            input.max = "200";
            input.value = brightness;
            filterValue.innerText = `${brightness}%`;
        }
        else if (option.id == 'saturation') {
              input.max = "200";
            input.value = saturation;
            filterValue.innerText = `${saturation}%`;
        }
        else if (option.id == 'inversion') {
              input.max = "100";
            input.value = inversion;
            filterValue.innerText = `${inversion}%`;
        }
        else {
              input.max = "100";
            input.value = grayscale;
            filterValue.innerText = `${grayscale}%`;
        }
    })
});
input.addEventListener("input", () => {
    filterValue.innerHTML = `${input.value}%`;
    const selectedFilter = document.querySelector(".filter .active");

    if (selectedFilter.id == 'brightness') {
        brightness = input.value;
    }else if (selectedFilter.id == 'saturation') {
        saturation = input.value;
    }else if (selectedFilter.id == 'inversion') {
        inversion = input.value;
    }else if (selectedFilter.id == 'grayscale') {
        grayscale = input.value;
    }
    applyfilters();
})
rotateOptions.forEach(option => {
    option.addEventListener("click", () => {
        if (option.id == 'left') {
            rotate -= 90;
        } else if (option.id == 'right') {
            rotate += 90;
        } else if (option.id == 'horizontal') {
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        } else{
            flipVertical = flipVertical === 1 ? -1 : 1;
        } 

        applyfilters();
    })
})
const resetFilter = () => {
    brightness = 100; saturation = 100; grayscale = 0; inversion = 0;
    rotate = 0; flipHorizontal = 1; flipVertical = 1;
    filterOptions[0].click();
    applyfilters();
}
const saveImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    ctx.translate(canvas.width / 2, canvas.height / 2);
    if (rotate !== 0){
        ctx.rotate(rotate * Math.PI / 180);
    }
    if (flipHorizontal !== 1 || flipVertical !== 1) {
        ctx.scale(flipHorizontal, flipVertical);
    }
    ctx.filter=`brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.drawImage(image,-canvas.width/2,-canvas.height/2, canvas.width, canvas.height);
    
    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
}
ResetFilterBtn.addEventListener("click", resetFilter);
fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());
saveImgBtn.addEventListener("click", saveImage);