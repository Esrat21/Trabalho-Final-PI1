window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
    xv+=1;
}
var life  = 2;
px=py=10; // cobra
gs=tc=20;
ax=ay=15; // cereja
xv=yv=0;
trail=[];
tail = 1; 
function game() {
    px+=xv;
    py+=yv;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 0;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
    // cria cobrinha
    ctx.fillStyle="white";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        drawScore();
        drawLife();
        if(trail[i].x==px && trail[i].y==py) {
            if(life==1){   
                tail = 5;
                alert("GAME OVER");
                var uname = document.getElementById("username").value;
                
                saveTextAsFile(uname,score);
                
                document.location.reload()
            }
            else{
                life -=1;
                tail = 1;
            }
        }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
    trail.shift();
    }
    //pegou uma cereja
    if(ax==px && ay==py) {
        tail++;
        score+=1;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    //cria cerejas
    ctx.fillStyle="red";
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 65:
            xv=-1;yv=0;
            break;
        case 87:
            xv=0;yv=-1;
            break;
        case 68:
            xv=1;yv=0;
            break;
        case 83:
            xv=0;yv=1;
            break;
    }
}
var score=0;
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Score: "+score, 8, 20);
}
function drawLife() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Lives: "+life, 100, 20);
}

function saveTextAsFile(uname,score)
{
    
    var contador=1;
    var salvar;
    salvar='ScoreBoard';
    contador+=1;
    var textToSave = "[User] |"+uname + "|" + score;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs;
    fileNameToSaveAs = salvar;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
function destroyClickedElement(){
    document.body.removeChild(event.target);
}