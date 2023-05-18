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