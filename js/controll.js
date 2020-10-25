'use strict'

var gCanvas;
var gCtx = canvasItems();
var meme = getMeme();
var gSaveMemeLocl = [];



function init() {
    gCanvas = document.getElementById('canvas');
    gCtx = gCanvas.getContext('2d');

    renderImg();
    
}

function renderImg() {

    var imgs = getImgs();
    var strHtmls = imgs.map(function (img) {
        return `
        <a  class="gallery" id="gallery" href="#canvas"> <img class="gallery-img" src="./img/${img.id}.jpg"  onclick="onUpdataMeme(${img.id})"  ></a>
        `
    })
    document.querySelector('.gallery-container').innerHTML = strHtmls.join('')

}


function onUpdataMeme(Id) {
    updataMeme(Id);
    renderMeme();
}

function drawCanvas(srcImg) {

    var img = new Image();
    img.src = srcImg;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        renderTxt(meme.lines);
        gCtx.beginPath()
        drawRect();
    }
    _saveMemeToStorage()
}

function drawRect() {

    console.log('gCtx.measureText(meme.lines[gMeme.selectedLineIdx].txt)', gCtx.measureText(meme.lines[gMeme.selectedLineIdx].txt).width);
    var x = meme.lines[meme.selectedLineIdx].x
    var y = meme.lines[meme.selectedLineIdx].y
    var hight = meme.lines[meme.selectedLineIdx].size
    var width = (gCtx.measureText(meme.lines[gMeme.selectedLineIdx].txt).width)
   
    console.log('width', width);
    

    gCtx.rect(x, y - hight, width, hight)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()

}

function renderMeme() {
    var img = findImsById(meme.selectedImgId)
    drawCanvas(img.url);

}

function renderTxt(text) {

    text.forEach(line => {
        drawText(line.txt, line.size, line.x, line.y, line.color, line.stroke, line.font);
    });

}

function drawText(text, size, x, y, fontColor, strokeColor, font) {

    gCtx.strokeStyle = strokeColor
    gCtx.fillStyle = fontColor
    gCtx.lineWidth = '2'
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = 'start'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    
}

function displayPage(){


}

function onDraw(ev) {
    draw(ev);
}

function onDrawText(text) {
    var currIdx = meme.selectedLineIdx
    changeTxt(text, currIdx);
    renderMeme();
}

function onTxtBegger(text) {
    text = document.getElementById('text').value;
    txtGetBegger(text);
}

function onTxtLittle(text) {
    text = document.getElementById('text').value;
    txtGetLittle(text);
}

function onTxtUp() {
    textGetUp();
}
function onTxtDonw() {
    textGetDonw();
}
function onTxtRghit() {
    textGetRghit();
}
function onTxtLeft() {
    textGetLeft();
}
function onSwichLine(diff) {
    console.log('diff', diff);
    swichLine(diff);
}

function onRemoveLine() {
    if (window.confirm("Do you really want to remove this lin?")) {
        removeLine();
    }

}
function onFontColor(color) {
    fontColor(color);
}
function onStrokeColor(color) {
    strokeColor(color);
}
function onFont(onFont) {
    console.log('onFont', onFont);
    font(onFont);
}

function onToggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onToggleRead() {
    document.body.classList.toggle('open-modal')
    document.body.classList.toggle('screen')
}


function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-img.jpg'
}


function onShare(elForm, ev) {
    uploadImg(elForm, ev);

}


function renderCanvas(img) {
    gCanvas.width = img.width;
    gCanvas.height = img.height;
    gCtx.drawImage(img, 0, 0);
    // drawCanvas(img);
}



function onImgInput(ev) {

    loadImageFromInput(ev, renderCanvas)

}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader();

    reader.onload = function (event) {
        var img = new Image();
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result;
    }
    reader.readAsDataURL(ev.target.files[0]);
}
////////





