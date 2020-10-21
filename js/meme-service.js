'use strict'

var gCanvas;
var gCtx;

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,

    lines: [{
        txt: 'I never eat Falafel',
        size: 20, align: 'left',
        color: 'red'
    }]
}


function newText() {
    
    var meme = {
        txt: document.getElementById('text').value,
        size: 40,
        align: 'left',
        color: 'red'
    }

    gMeme.lines.push(meme) ;

    console.log('gMeme.lines',gMeme.lines);
    return meme.txt
}

function draw(ev) {

    const { offsetX, offsetY} = ev
    console.log(offsetX,offsetY) ;
   
   
 }


