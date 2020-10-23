'use strict'


var gSize = 40;

var ctx;
var STORAGE_KEY = 'memeDB';
var gMemes;
var gCounter =0;


var gImgs = [{
    id: 1, url: 'img/meme-imgs_(square)/1.jpg', keywords: ['happy']
},
{
    id: 2, url: 'img/meme-imgs_(square)/2.jpg', keywords: ['happy']
},
{
    id: 3, url: 'img/meme-imgs_(square)/3.jpg', keywords: ['happy']
},
{
    id: 4, url: 'img/meme-imgs_(square)/4.jpg', keywords: ['happy']
},
{
    id: 5, url: 'img/meme-imgs_(square)/5.jpg', keywords: ['happy']
},
{
    id: 6, url: 'img/meme-imgs_(square)/6.jpg', keywords: ['happy']
},
{
    id: 7, url: 'img/meme-imgs_(square)/7.jpg', keywords: ['happy']
},
{
    id: 8, url: 'img/meme-imgs_(square)/8.jpg', keywords: ['happy']
},
{
    id: 9, url: 'img/meme-imgs_(square)/9.jpg', keywords: ['happy']
},
{
    id: 10, url: 'img/meme-imgs_(square)/10.jpg', keywords: ['happy']
},
{
    id: 11, url: 'img/meme-imgs_(square)/11.jpg', keywords: ['happy']
},
{
    id: 12, url: 'img/meme-imgs_(square)/12.jpg', keywords: ['happy']
},
{
    id: 13, url: 'img/meme-imgs_(square)/13.jpg', keywords: ['happy']
},
{
    id: 14, url: 'img/img/meme-imgs_(square)/14.jpg', keywords: ['happy']
},
{
    id: 15, url: 'img/meme-imgs_(square)/15.jpg', keywords: ['happy']
},
{
    id: 16, url: 'img/meme-imgs_(square)/16.jpg', keywords: ['happy']
},
{
    id: 17, url: 'img/meme-imgs_(square)/17.jpg', keywords: ['happy']
},
{
    id: 18, url: 'img/meme-imgs_(square)/18.jpg', keywords: ['happy']
},
{
    id: 19, url: 'img/meme-imgs_(square)/19.jpg', keywords: ['happy']
},
{
    id: 20, url: 'img/meme-imgs_(square)/20.jpg', keywords: ['happy']
}
];

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,

    lines: [{
        txt: 'I Love Meme Generator',
        size: 40,
        x: 150,
        y: 100,
        align: 'left',
        color: 'red',
        stroke: 'black',
        font: 'impact'
    }
    ]
}

function txtGetBegger(text) {
    var size = 10;
    gMeme.lines[gMeme.selectedLineIdx].size += size
    renderMeme()
    renderTxt(gMeme.lines);
    _saveMemeToStorage()
}

function canvasItems() {
    return ctx
}


function txtGetLittle(text) {
    var size = 10;

    gMeme.lines[gMeme.selectedLineIdx].size -= size
    // var newWidth = ctx.measureText(gMeme.lines[gMeme.selectedLineIdx].txt).width - 10;
    renderMeme()
    renderTxt(gMeme.lines);
    _saveMemeToStorage()
}


function textGetUp() {
    var y = 10;
    gMeme.lines[gMeme.selectedLineIdx].y -= y
    renderMeme()
    renderTxt(gMeme.lines);
    _saveMemeToStorage()
}

function textGetDonw() {
    var y = 10;

    gMeme.lines[gMeme.selectedLineIdx].y += y
    renderMeme()
    renderTxt(gMeme.lines);
    _saveMemeToStorage()
}

function textGetRghit() {
    var x = 10;
    gMeme.lines[gMeme.selectedLineIdx].x += x
    renderMeme()
    renderTxt(gMeme.lines);
    _saveMemeToStorage()
}

function textGetLeft() {
    var x = 10;
    gMeme.lines[gMeme.selectedLineIdx].x -= x
    renderMeme()
    renderTxt(gMeme.lines);
    _saveMemeToStorage()
}

function swichLine() {
    console.log('gMeme',gMeme);

    gCounter++;
    // console.log('gCounter', gCounter);
    
    if (gCounter >= gMeme.lines.length) gCounter = 0;
    
    gMeme.selectedLineIdx = gCounter;
    console.log('gMeme',gMeme);

    renderMeme()
    // drawRect()
    _saveMemeToStorage()
}


function findImsById(imgId) {

    return gImgs.find(img => {
        return img.id === imgId
    });

}

function getImgs() {
    return gImgs
}

function updataMeme(Id) {
    gMeme.selectedImgId = Id;
    _saveMemeToStorage()
}

function draw(ev) {
    const { offsetX, offsetY } = ev
}

function changeTxt(text, linesIdx) {

    gMeme.selectedLineIdx += 1

    // if()
    var newLine = {
        txt: text,
        size: 40,
        x: 250,
        y: 500,
        align: 'left',
        color: 'red',
        stroke: 'black',
        font: 'impact'
    }

    gMeme.lines.push(newLine);
    _saveMemeToStorage();
}

function getMeme() {
    _saveMemeToStorage();
    return gMeme
}

function removeLine() {

    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    if (gMeme.selectedLineIdx > 0 && gMeme.selectedLineIdx) gMeme.selectedLineIdx -= 1;
    renderMeme();
    _saveMemeToStorage();
}
function fontColor(newColor){
    gMeme.lines[gMeme.selectedLineIdx].color = newColor
    renderMeme();
    renderTxt(gMeme.lines);
    _saveMemeToStorage();
}

function strokeColor(color){
    gMeme.lines[gMeme.selectedLineIdx].stroke = color
    renderMeme();
    renderTxt(gMeme.lines);
    _saveMemeToStorage();
}

function font(newFont){
    gMeme.lines[gMeme.selectedLineIdx].font = newFont
    renderMeme();
    renderTxt(gMeme.lines);
    _saveMemeToStorage();
}
function _saveMemeToStorage() {
    saveToStorage(STORAGE_KEY, gMeme);
}

function uploadImg(elForm, ev) {
    ev.preventDefault();
    document.getElementById('imgData').value = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }

    doUploadImg(elForm, onSuccess);
}
