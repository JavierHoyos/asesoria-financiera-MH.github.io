/* Botón de contabilidad */

let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText')


hideText_btn.addEventListener('click', toggleText);

function toggleText () {
hideText.classList.toggle('show');
}



/* Botón de Impuestos */

let hideText_btn_impuestos = document.getElementById('hideText_btn_impuestos');

let hideText_impuestos = document.getElementById('hideText_impuestos')


hideText_btn_impuestos.addEventListener('click', toggleText_impuestos);

function toggleText_impuestos () {
hideText_impuestos.classList.toggle('show');
}



/* Botón asesoría financiera */


let hideText_btn_asesoria = document.getElementById('hideText_btn_asesoria');

let hideText_asesoria = document.getElementById('hideText_asesoria')


hideText_btn_asesoria.addEventListener('click', toggleText_asesoria);

function toggleText_asesoria () {
hideText_asesoria.classList.toggle('show');
}
