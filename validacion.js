
    let email = document.getElementById("mail");
    let nombre = document.getElementById("name");
    let apellido = document.getElementById("surname");
    let msj = document.getElementById("message");
    let form = document.getElementById("form1");
    let button = document.getElementById("boton_enviar");

    $("#name").keyup(function(){

        nombre.addEventListener("input", validarNombre);
        validarNombre();

        if(this.checkValidity()){
            $("#nameError").hide();
        } else {
            $("#nameError").show();
        }

    });

    $("#surname").keyup(function(){

        apellido.addEventListener("input", validarapellido);
        validarapellido();


        if(this.checkValidity()){
            $("#surnameError").hide();
        } else {
            $("#surnameError").show();
        }

    });

    $("#mail").keyup(function(){

        email.addEventListener("input", validarmail);
        validarmail();


        if(this.checkValidity()){
            $("#emailError").hide();
        } else {
            $("#emailError").show();
        }

    });

    $("#message").keyup(function(){

        msj.addEventListener("textarea", validarMsj);
        validarMsj();


        if(this.checkValidity()){
            $("#messageError").hide();
        } else {
            $("#messageError").show();
        }

    });

    function validarNombre() {
        if (nombre.value===""){
            nombre.setCustomValidity("Debe ingresar un nombre");
        }
        else {
            var patt = new RegExp("[a-zA-Z ]{3,}");

            if (patt.test(nombre.value) === false) {
                nombre.setCustomValidity("Formato no válido");

            } else {
                nombre.setCustomValidity('')
            }
        }

    }

    function validarapellido() {
        if (apellido.value===""){
            apellido.setCustomValidity("Debe ingresar un apellido");
        }
        else {
            var patt = new RegExp("[a-zA-Z ]{3,}");

            if (patt.test(apellido.value) === false) {
                apellido.setCustomValidity("Formato no válido");

            } else {
                apellido.setCustomValidity('')
            }
        }
    }




    function validarmail() {

        if (email.value === "") {
            email.setCustomValidity("Ingresá un email válido");
        } else {
            var patt = new RegExp("[a-zA-Z0-9._/-]{3,16}@(yahoo|hotmail|gmail){1}.com");

            if (patt.test(email.value) === false) {
                email.setCustomValidity("Formato no válido");

            } else {
                email.setCustomValidity('')
            }
        }
    }

    function validarMsj(){
        if (msj.value === ""){
            msj.setCustomValidity("Debe ingresar un mensaje");

        } else {
            var patt = new RegExp("[a-zA-Z1-9 ]{4,}");

            if (patt.test(msj.value) === false) {
                msj.setCustomValidity("Formato no válido");

            } else {
                msj.setCustomValidity('')
            }
        }
    }

    form.addEventListener('keyup', function () {
        isValidName = nombre.checkValidity();
        isValidSurname = apellido.checkValidity();
        isValidEmail = email.checkValidity();
        isValidMessage = msj.checkValidity();

        button.disabled = !(isValidName && isValidSurname && isValidEmail && isValidMessage
            && nombre.value != "" && apellido.value != "" && email.value != "" && msj.value != "");
    });
