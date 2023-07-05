


 window.onload = function() { 
   document.querySelector("#btn").addEventListener("click", function() {
     document.querySelector("#excusa").innerHTML = generadorExcusa();
   });
   console.log("Generador de excusa  ");
 };


  let generadorExcusa = function() {


   let pronombre = ["Un","El"];
   let sujeto = ["jardinero", "canino", "niño", "pájaro"];
   let accion = ["se llevó", "se tragó", "se enredó con", "se hizo en"];
   let objeto = ["la torta de mi tía", "la manguera de mi jardín", "las llaves de mi carro", "el chinchorro de mi patio"];


   let proIndx = Math.floor(Math.random() * pronombre.length);
   let sujIndx = Math.floor(Math.random() * sujeto.length);
   let accionIndx = Math.floor(Math.random() * accion.length);
   let objetoIndx = Math.floor(Math.random() * objeto.length);


  return pronombre[proIndx] + " " + sujeto[sujIndx] + " " + accion[accionIndx] + " " + objeto[objetoIndx]; 

};
