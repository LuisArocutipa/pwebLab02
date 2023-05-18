function verDia(){
    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    const dia = new Date().getDay();
    console.log(dia)
    document.getElementById("ejercicio1").innerHTML = dias[dia];
}