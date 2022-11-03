const uploadBox = document.querySelector('.uploadbox'),
    fileInput = uploadBox.querySelector("input"),
    para=uploadBox.querySelector('p'),
    imageInput = uploadBox.querySelector("img"),
    widthInput = document.querySelector('.width input'),
    heightInput = document.querySelector('.height input'),
    ratioInput = document.querySelector('.ratio input'),
    downloadBtn = document.querySelector('.download-btn'),
    qualityInput=document.querySelector(".quality input")
    ;
    
let ogInputRatio;
const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    imageInput.src = URL.createObjectURL(file);
    imageInput.style.width = '100%';
    imageInput.style.height = '100%';
    uploadBox.style.border = 'none';
    imageInput.addEventListener('load', () => {
        document.querySelector('.wrapper').classList.add('active');
         widthInput.value = imageInput.naturalWidth;
        heightInput.value = imageInput.naturalHeight;
        ogInputRatio = imageInput.naturalWidth / imageInput.naturalHeight;
    });
    para.style.display = 'none';
    console.log(file);
}
widthInput.addEventListener("keyup", () => {
    const height = ratioInput.checked ? widthInput.value / ogInputRatio : heightInput.value;
    heightInput.value = Math.floor(height);
    imageInput.style.width = widthInput.value;
    imageInput.style.height = heightInput.value;
});
heightInput.addEventListener("keyup", () => {
    const width = ratioInput.checked ? heightInput.value / ogInputRatio : widthInput.value;
    widthInput.value = Math.floor(width);
    imageInput.style.width = widthInput.value;
    imageInput.style.height = heightInput.value;
});
const imgQuality = qualityInput.checked ? 0.7 : 1.0;
const resizeAndDownload = () => {
    const canvas = document.createElement("canvas");
    const a = document.createElement("a");
    const ctx = canvas.getContext("2d");
    canvas.width = widthInput.value;
    canvas.height = heightInput.value;
    ctx.drawImage(imageInput, 0, 0, canvas.width, canvas.height);
    //document.body.appendChild(canvas);
    a.href = canvas.toDataURL("image/jpeg", imgQuality);
    a.download = new Date().getTime();
    a.click();
}
downloadBtn.addEventListener('click', resizeAndDownload);
fileInput.addEventListener('change', loadFile);
uploadBox.addEventListener('click', () => fileInput.click());

