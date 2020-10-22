'use strict'

var gCanvas;
var gCtx=canvasItems();

var meme = getMeme();

function init() {
    gCanvas = document.getElementById('canvas');
    gCtx = gCanvas.getContext('2d');

    renderImg();
    // renderMeme();
}

function renderImg() {
    
    var imgs = getImgs();
    var strHtmls = imgs.map(function (img) {
        return `
        <a  class="gallery" id="gallery" href="#header"> <img class="gallery-img" src="meme-imgs_(square)/${img.id}.jpg"  onclick="onUpdataMeme(${img.id})"  > </a>
        `
    })
    document.querySelector('.gallery-container').innerHTML = strHtmls.join('')

}


function onUpdataMeme(Id){

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
    
}

function drawRect(){
    // console.log('gCtx.measureText(meme.lines[gMeme.selectedLineIdx].txt)',gCtx.measureText(meme.lines[gMeme.selectedLineIdx].txt).width);
    var x = meme.lines[meme.selectedLineIdx].x
    var y = meme.lines[meme.selectedLineIdx].y
    var hight =meme.lines[meme.selectedLineIdx].size
    // var width =(gCtx.measureText(meme.lines[gMeme.selectedLineIdx].txt).width )
    // console.log('y',y);
    // console.log('x',x);
    // console.log('hight',hight);
    // console.log('width',width);
    // console.log('hight',y- hight);
    
    gCtx.rect( x ,y -hight, gCtx.measureText(meme.lines[gMeme.selectedLineIdx].txt).width , hight)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()

}

function renderMeme() {
    var img = findImsById(meme.selectedImgId)
    drawCanvas(img.url);
}

function renderTxt(text) {
    
    text.forEach(line => {
        drawText(line.txt, line.size,line.x,line.y,line.color,line.stroke, line.font);
    });
    
    console.log('text',text);
}

function drawText(text, size , x , y, fontColor ,strokeColor ,font) {
    
    gCtx.strokeStyle = strokeColor
    gCtx.fillStyle = fontColor
    gCtx.lineWidth = '2'
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = 'start'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text,x, y)
    // gCtx.beginPath();
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
    text =document.getElementById('text').value ;
    txtGetBegger(text);
}

function onTxtLittle(text) {
    text =document.getElementById('text').value ;

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
function onSwichLine(){
    swichLine();
}

function onRemoveLine(){
    removeLine();
}
function onFontColor(color){
    fontColor(color);
}
 function onStrokeColor(color){
    strokeColor(color) ;
 }
 function onFont(onFont){
     console.log('onFont',onFont);
    font(onFont);
 }

