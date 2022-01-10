function batata(){
    var email = document.getElementById('Email').value;
    var pdw = document.getElementById('Password').value;

    if(email != null)
      loadFileAsText();  
    else
        alert("batata");
}

function loadFileAsText()
{
   var fileToLoad = document.getElementById("fileToLoad").files[0];
   var fileReader = new FileReader();
   fileReader.onload = function(fileLoadedEvent) 
   {
      var textFromFileLoaded = fileLoadedEvent.target.result;
      var texto = textFromFileLoaded;
      listar(texto);
   };
   fileReader.readAsText(fileToLoad, "UTF-8");
   
}

function listar(texto){
    var quantidade = document.getElementById("lista").rows.length;
    if (quantidade>1){
       for(var cont=1;cont<=quantidade;cont++){
          document.getElementById("lista").deleteRow(cont);
       }
    }
    var itens = texto.split('[item]');
    for(var i=1;i<itens.length;i++){
       var valores = itens[i].split("|");
       document.getElementById("bataaaaata").innerHTML += '<div>' + '<h6 class="my-0">' + "Items" + '</h6>' + '<small class="text-muted">' + item[0] + '</small>' + '</div>' + '<span class="text-muted" id="qtd">X1</span>' + '<span class="text-muted">'+ item[1] +'</span>'
       document.getElementById("SomaValores").innerHTML += item[1];
       document.getElementById("CartItems").innerHTML += itens.length/2;
    }
}