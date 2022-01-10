function saveTextAsFile(nome)
{
    
    var contador=1;
    var salvar;
    salvar='itemCompra';
    contador+=1;
    var textToSave = nome;
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

function batata2(){
    alert("Mushroom Pack added");
    saveTextAsFile("[item]|Mushroom pack|5,00|");
}
function bataata(){
    alert("Fire Flower Pack added");
    nome = "[item]|Fire Flower pack|15,00|";
    saveTextAsFile(nome);
}
function bataaata(){
    alert("Star Pack added");
    nome = "[item]|Star pack|25,00|";
    saveTextAsFile(nome);
}


