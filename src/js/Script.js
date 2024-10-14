// login
$(document).ready(function() {
  // Asignar un controlador de eventos al botón
  $("#login").click(function() {
    // Redirigir al usuario a otro HTML
    window.location.href = "/src/pages/Home.html";
  });
});

// registro
$(document).ready(function() {
  // Asignar un controlador de eventos al botón
  $("#registro").click(function() {

    var correo = $("#re_correo").val(); 
    $("#correo").text(correo); 
    localStorage.setItem("#re_correo",correo);

    var usuario = $("#re_usuario").val(); 
    $(".usuario").text(usuario); 
    localStorage.setItem("#re_usuario",usuario);

    var contraseña = $("#re_contraseña").val(); 
    $("#contraseña").text(contraseña); 
    localStorage.setItem("#re_contraseña",contraseña);

    var celular = $("#re_celular").val(); 
    $("#celular").text(celular); 
    localStorage.setItem("#re_celular",celular);

    var direccion = $("#re_direccion").val(); 
    $("#direccion").text(direccion); 
    localStorage.setItem("#re_direccion",direccion);

    // Redirigir al usuario a otro HTML
    window.location.href = "/src/pages/Login.html";
  });
});

// almacenamiento local a partir del registro
var ls_correo2 = localStorage.getItem("#re_correo")
if (ls_correo2) {
  $("#correo").text(ls_correo2);
}

var ls_usuario2 = localStorage.getItem("#re_usuario")
if (ls_usuario2) {
  $(".usuario").text(ls_usuario2);
}

var ls_contraseña2 = localStorage.getItem("#re_contraseña")
if (ls_contraseña2) {
  $("#contraseña").text(ls_contraseña2);
}

var ls_celular2 = localStorage.getItem("#re_celular")
if (ls_celular2) {
  $("#celular").text(ls_celular2);
}

var ls_direccion2 = localStorage.getItem("#re_direccion")
if (ls_direccion2) {
  $("#direccion").text(ls_direccion2);
}

// actualizar
$(document).ready(function () {
  $("#actualizar").click(function() {
    var correo = $("#ed_correo").val(); // guarda en una variable el contenido de la etiqueta especificada
    $("#correo").text(correo); // muestra el contenido en la etiqueta especificada
    localStorage.setItem("#ed_correo",correo); // guarda el contenido en el almacenamiento local    

    var usuario = $("#ed_usuario").val(); 
    $(".usuario").text(usuario); 
    localStorage.setItem("#ed_usuario",usuario);

    var contraseña = $("#ed_contraseña").val(); 
    $("#contraseña").text(contraseña); 
    localStorage.setItem("#ed_contraseña",contraseña);

    var celular = $("#ed_celular").val(); 
    $("#celular").text(celular); 
    localStorage.setItem("#ed_celular",celular);

    var direccion = $("#ed_direccion").val(); 
    $("#direccion").text(direccion); 
    localStorage.setItem("#ed_direccion",direccion);
  });
});

// para mostrar el almacenamiento local (a partir de la actualizacion)
var ls_correo = localStorage.getItem("#ed_correo")
if (ls_correo) {
  $("#correo").text(ls_correo);
}

var ls_usuario = localStorage.getItem("#ed_usuario")
if (ls_usuario) {
  $(".usuario").text(ls_usuario);
}

var ls_contraseña = localStorage.getItem("#ed_contraseña")
if (ls_contraseña) {
  $("#contraseña").text(ls_contraseña);
}

var ls_celular = localStorage.getItem("#ed_celular")
if (ls_celular) {
  $("#celular").text(ls_celular);
}

var ls_direccion = localStorage.getItem("#ed_direccion")
if (ls_direccion) {
  $("#direccion").text(ls_direccion);
}

// cambio interfaces
$(document).ready(function() {
  $("#btnCambiar").click(function() {
    var contenedor = $("#contenedor");
    if (contenedor.hasClass("interface-oscura")) {
      contenedor.removeClass("interface-oscura");
      contenedor.addClass("interface-clara");
      $("#btnCambiar").text("Cambiar a Interfaz Oscura");
    } else {
      contenedor.removeClass("interface-clara");
      contenedor.addClass("interface-oscura");
      $("#btnCambiar").text("Cambiar a Interfaz Clara");
    }
  });
});

// cambio imagenes
$("#botonUser1").click(function () {
  var rutaImagen = "/img/user1.png";
  $("#imagen").attr("src", "/img/user1.png")
  localStorage.setItem("rutaImagen", rutaImagen);
});

$("#botonUser2").click(function () {
  var rutaImagen = "/img/user2.png";
  $("#imagen").attr("src", "/img/user2.png");
  localStorage.setItem("rutaImagen", rutaImagen);
});

// obtengo la ruta del almacenamiento local
var imagenGuardada = localStorage.getItem("rutaImagen");
  if (imagenGuardada) {
    $("#imagen").attr("src", imagenGuardada);
  }