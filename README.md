<div align="center">
<table>
    <theader>
        <tr>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/epis.png?raw=true" alt="EPIS" style="width:50%; height:auto"/></td>
            <th>
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">DEPARTAMENTO ACADÉMICO DE INGENIERÍA DE SISTEMAS E INFORMÁTICA</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </th>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/abet.png?raw=true" alt="ABET" style="width:50%; height:auto"/></td>
        </tr>
    </theader>

</table>
</div>

<div align="center">
<span style="font-weight:bold;">INFORME DE LABORATORIO</span><br />
</div>


<table>
<theader>
<tr><th colspan="6">INFORMACIÓN BÁSICA</th></tr>
</theader>
<tbody>
<tr><td>ASIGNATURA:</td><td colspan="5">Programación Web 2</td></tr>
<tr><td>TÍTULO DE LA PRÁCTICA:</td><td colspan="5">JavaScript</td></tr>
<tr>
<td>NÚMERO DE PRÁCTICA:</td><td>02</td><td>AÑO LECTIVO:</td><td>2023 A</td><td>NRO. SEMESTRE:</td><td>III</td>
</tr>

<tr><td colspan="6">INTEGRANTES:
    <ul>
        <li><P>Luis Edgar Arocutipa Gutierrez</P></li>
    </ul>
</td>
</<tr>
<tr><td colspan="6">DOCENTES:
<ul>
<li>Carlo Corrales Delgado</li>
</ul>
</td>
</<tr>
</tdbody>
</table>

#

## EJERCICIOS PROPUESTOS
- Ejercicio 01: Escriba una función que reciba el número de día de la fecha actual new Date() - https://www.w3schools.com/jsref/jsref_obj_date.asp y devuelva el texto del día de la semana correspondientes. Por ejemplo si recibe 0, devolvería “Domingo”.
- Ejercicio 02: Escriba una página web que reciba un texto y al presionar un botón muestre el mismo texto invertido en otra sección (div). Por ejemplo si se escribe “Hola”, se mostraría como “aloH”.
- Ejercicio 03: Escribir una página que muestre cuántos días faltan para el día de Arequipa!
- Ejercicio 04: Escribir un página que reciba el URL de la sesión de google meet de hoy y devuelva el código de la sesión sin guiones separadores
- Ejercicio 05: Escribir una página que permita calcular las suma de todos los valores de una tabla de valores dinámica. La idea es crear una página web con un formulario que te permita decir cuantos valores tendrá la tabla, luego, al enviar el formulario la tabla se debe crear dinámicamente, junto con otro botón de envió para calcular la suma.
- Ejercicio 06: Utilice la herramienta flipgrid - https://info.flipgrid.com/ envie un video en el tema "Presentacion y ejemplo deJavaScript" ponga aquí los enlaces de sus envíos.
#

## SOLUCIÓN DE LOS EJERCICIOS PROPUESTOS
- Para la resolución del segundo laboratorio se creó el siguiente repositoiro en GitHub, en el que subió los archivos index.html y Ejercicios.js:
https://github.com/LuisArocutipa/pwebLab02
- En el primer ejercicio nos piden que mostremos el día que es cuando ejecutemos el archivo. Para resolver este primer ejercicio se creó un array que contiene el nombre de todos los dias empezando con domingo. Luego, atraves del objeto "new Date()" (función que nos da la fecha actual) obtenemos el número de día que es mediante el método "getDay()" y lo almacenamos en una constante. Finalmente mostramos el nombre del día que es reemplazando el número de la constante con una posición en el array.
- El segundo ejercicio nos pide que mostremos la inversa de un texto que se introduzca en un formulario. Primero, se creó un formulario, en el cual se introduzca el texto que va a invertir posteriormente, junto con un botón que llama a una función que esta en el archivo de javascript. Despues, se crea una función en la cual se almacena el valor que se haya escrito en el formulario y mediante un ciclo for vamos recorriendo cada letra del texto, empezando desde el final de la cadena de texto, y concatenando a una variable de modo que se vaya guardando cada letra del texto de manera invertida. Finalmente, mostramos el resultado en el archivo index.html.
- El tercer ejercicio nos pide mostrar cuantos dias faltan para el aniversario de Arequipa. Empezamos obteniendo la fecha en la que se ejecuta el archivo mediante el objeto new Date(). Despues, obtenemos el tiempo que hay entre la fecha actual y el 15 de agosto, atraves del método getTime() y restando los tiempos que obtenemos con la función entre las dos fechas. Finalmente, transfomamos ese tiempo a dias y los mostramos en el archivo html.
- El cuarto ejercicio nos pido obtener el código de una sesión de google meet que se intoduzca en un formulario. Para empezar nos aseguramos de que la url que se envia en el formulario es de google meet, esto lo hacemos mediante el objeto RegExp(). Una vez que se haya verificado que la url es de google meet, le quitamos la parte que no contenga el código y la almacenamos en una variable. Para finalizar, reemplazamos los guiones del código obtenido por un string vacio, de modo que nos quede el código sin guiones.
- En el quinto ejercicio se pide ingresar un número que sea el número de elementos para luego crear una tabla por javascript y calcular la suma de sus elementos. En primer lugar, obtenemos el número de elementos atraves de un formulario. Luego, en una primera función creamos la tabla usando la función createElement() y lo vamos rellenando con un ciclo for y añadiendo el elemento creado con el método appendChild(). Después, en otra función mostraremos la suma de los elemento de la tabla, creando otra tabla y recorriendola con dos ciclos for una vez se haga click en un botón que se agregó en el archivo html.

#
