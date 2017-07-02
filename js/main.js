function validateForm(){
	/* Escribe tú código aquí */
	//Esta funcion esta basada en un archivo de JS script puro, y no se deberia mezclar con jQuery
}

$(document).ready(function() {
	$("button").click(function() {
		nombre();
		apellido();
		correo();
		contrasena();
		seleccion();
	});
	

	//validación nombre
	function nombre(){
			var nameValue = $("#name").val();
			if (!(/^[A-Z][a-z]{3,19}$/).test(nameValue)){
			$(".name-container").append('<span>Nombre inválido. Debe incluir letras de la A-Z</span>');
			$("#name").val("");
			}
	}

	//validacion apellido
	function apellido(){
			var apellidoValue = $("#lastname").val();
			if (!(/^[A-Z][a-z]{3,19}$/).test(apellidoValue)){
			$(".lastname-container").append('<span>Apellido inválido. Debe incluir letras de la A-Z</span>');
			}
	}

	//validacion correo 
	function correo(){
			var emailValue = $("#input-email").val();
			if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(emailValue)){
			$(".email-container").append('<span>Correo inválido. Debe tener formato valido</span>');
			}
	}

	//validacion contraseña, debe ser mayor de 6 caracteres, y no incluir 123456, 098765 ó password
	function contrasena(){
			var passValue = $("#input-password").val();
			if (passValue=="123456" || passValue=="098765" || passValue=="password" || !(/^(?=.*\d).{6,}$/).test(passValue)){
				$(".password-container").append('<span>Contraseña inválida. Mínimo 6 caracteres</span>');
			}
	}

	//validacion seleccion, debe escoger una opción, tagName me da un arreglo el cual deboo recorrer
	function seleccion(){
			var selectValue = $("select");
			for (var i=0 ; i<selectValue.length ; i++){
				if (selectValue.val() == 0){
					$(".select-container").append('<span>Debe seleccionar una opción</span>');
				}
			}	
	}

});