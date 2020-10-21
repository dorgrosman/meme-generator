'use strict'

var gCanvas;
var gCtx;




var gImgs = [{
    id: 1,
    keywords: ['happy']
},
{
    id: 2,
    keywords: ['happy']
},
{
    id: 3,
    keywords: ['happy']
},
{
    id: 4,
    keywords: ['happy']
},
{
    id: 5,
    keywords: ['happy']
},
{
    id: 6,
    keywords: ['happy']
},
{
    id: 7,
    keywords: ['happy']
},
{
    id: 8,
    keywords: ['happy']
},
{
    id: 9,
    keywords: ['happy']
},
{
    id: 10,
    keywords: ['happy']
},
{
    id: 11,
    keywords: ['happy']
},
{
    id: 12,

    keywords: ['happy']
},
{
    id: 13,
    keywords: ['happy']
},
{
    id: 14,
    keywords: ['happy']
},
{
    id: 15,
    keywords: ['happy']
},
{
    id: 16,
    keywords: ['happy']
},
{
    id: 17,
    keywords: ['happy']
},
{
    id: 18,
    keywords: ['happy']
}];



function init() {
    gCanvas = document.getElementById('canvas');
    gCtx = gCanvas.getContext('2d');
    renderImg();
}

function renderImg() {

    var strHtmls = gImgs.map(function (img) {
        return `
         
        <a class="gallery"> <img class="gallery-img" src="meme-imgs_(square)/${img.id}.jpg"  onclick="onImgCanvas(${img.id})" ></a>
      
        `
    })
    document.querySelector('.gallery-container').innerHTML = strHtmls.join('')

}


function onImgCanvas(src) {

    console.log('src', src);
    var img = new Image();
    img.src = `./meme-imgs_(square)/${src}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    }

}

function onAddTxt() {
    var eltxt = document.querySelector('.add-txt input[name=]')


}

function ondraw(ev) {
    draw(ev);

}



function drawText(text) {
    
    newText();

    gCtx.strokeStyle = 'red'
    gCtx.fillStyle = 'white'
    gCtx.lineWidth = '2'
    gCtx.font = '48px IMPACT'
    gCtx.textAlign = 'start'
    gCtx.fillText(text, 200, 100)
    gCtx.strokeText(text, 200, 100)

}