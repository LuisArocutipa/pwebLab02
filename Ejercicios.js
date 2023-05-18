function verDia(){
    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    const dia = new Date().getDay();
    document.getElementById("ejercicio1").innerHTML = dias[dia];
}
function invertir(){
    var palabra = document.getElementById("formulario").value;
    var inversa = "";
    for(var i = palabra.length; i >= 0; i--)
        inversa += palabra.charAt(i);
    document.getElementById("ejercicio2").innerHTML = inversa; 
}
function diasFaltantes(){
    const hoy = new Date().getTime();
    const arequipa = new Date("August 15 2023 00:00:00").getTime();
    var falta = arequipa - hoy;
    falta = (falta / 3600000) / 24; 
    document.getElementById("ejercicio3").innerHTML = Math.floor(falta);
}
function convertirUrl(){
    var url = document.getElementById("formulario2").value;
    const patronMeet = new RegExp('^https?:\\/\\/meet\\.google\\.com\\/\\S+$');
    if(patronMeet.test(url)){
        const inicioUrl = url.indexOf("https://meet.google.com/") + "https://meet.google.com/".length;
        var codigo= url.slice(inicioUrl).replace(/-/g, "");
        document.getElementById("ejercicio4").innerHTML = codigo;
    } else
        document.getElementById("ejercicio4").textContent = "Url no valida";
}
