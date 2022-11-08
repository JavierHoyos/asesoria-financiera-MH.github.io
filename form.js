const btnEnvio = document.getElementById('enviarCorreo');


btnEnvio.addEventListener('click', function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('email').value;
    const numerotelefono = document.getElementById('numeroTelefono').value;
    const empleados = document.getElementById('empleados').value;
    const facturasEntrantes = document.getElementById('facturasEntrantes_').value;
    const facturasEmitidas = document.getElementById('facturasEmitidas_').value;
    
    


    window.location.href=`mailto:mariohernandezAsesoria@gmail.com?subject=envioDesdeFormulario&body=Nombre%3A%20${nombre}%0AEmail%3A%20${correo}%0AN%C3%NumeroTelefonico%3A%20${numerotelefono}%0AEmpleados%3A%20${empleados}%0AFacturasentrantes%3A%20${facturasEntrantes}%0AFacturasemitidas%3A%20${facturasEmitidas}%0A%0A`;
});