$(document).ready(function(){
    estadoInicial()
});

/**
 * Intenta autenticar al usuario en la aplicaciòn
 */
 function registrar(){
    //capturar los datos que ingreso el usuario en la pagina
    let name = $("#username").val()
    let email = $("#useremail").val()
    let password = $("#password").val()
    let repeatpassword = $("#passwordrepeat").val()

    let datos={
        name: $("#username").val(),
        password: $("#password").val(),
        email: $("#useremail").val()
    }


    let datosPeticion = JSON.stringify(datos)

    //utilizo la funcion de JQuery $.ajax para hacer un llamado asincrono
    //a un ws
    $.ajax({
        //url del servicio
        url: "http://localhost:90/api/user/new",

        //envio datos capturados por el usuario a la peticion
        data: datosPeticion,

        //tipo de peticion
        type: 'POST'                                                                                    ,
        
        contentType: "application/JSON",

        //tipo de contenido
        dataType: 'json',

        
        //success: funcion con acciones si todo sale ok
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            resultado(respuesta)    
        },

        //error: funcion con acciones si hay error
        error: function (xhr, status) {
            //$("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);       
            console.log("algo fallo");  
        },
        //complete: funcion con al final de la petición
        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log("Todo super bien"  + status);
        }
    });
}

/**
 *valida si en id viene un dato nulo, o viene el codigo del usuario 
 *
 * Configura mensaje de bienvenida o de error segun sea el caso
 */
function resultado(respuesta){
    let id = respuesta.id
    let nombre= respuesta.name

    if (id==null){
        $("#mensaje").html("No fue posible crear la cuenta");
    }else
        $("#mensaje").html("Cuenta creada de forma correcta" )
    $("#mensaje").show()
     

}

function estadoInicial(){
    $("#username").focus()
    $("#usermensaje").hide()
}

//--------------------------------------VALIDACIONES----------------------------------------

