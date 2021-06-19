



$("#formulario_user").validate({
    rules:{
        nombreUser:{
            required:true,
            minlength:3,
            maxlength:44



        },
        
        apellidoUser:{
            required:true,
            minlength:3,
            maxlength:44



        },
        emailUser:{
            required:true,
            email:true,
           
            
        },
        emailUser2:{
            required:true,
            equalTo: "#emailUser"
        }
      
        ,
        passwordUser:{
            required:true,
            minlength:6

        },
        passwordUser2:{
            required:true,
            equalTo:"#passwordUser"
        },
        rutUser:{
            required:true,
            minlength:9,
            maxlength:12
        },
        telefonoUser:{
            required:true


        },
        regionUser:{
            required:true


        },
        comunaUser:{
            required:true


        },
        calleUser:{
            required:true


        },
        generoUser:{
            required:true
        }
      
    },

    messages: {
        emailUser2:{
            equalTo:"los emails no coinciden"
        },
        passwordUser:{
            minlength:"contraseña muy corta"
        },
        passwordUser2:{
            equalTo:"las contraseñas no coinciden"
        },
        rutUser:{
            minlength:"formato de rut incorrecto",
            maxlength:"formato de rut incorrecto"
        },
        telefonoUser:{
            required:"ingrese fono de contacto porfavor",
        },
        generoUser:{
            required:'porfavor selecciona un genero'
        }
        

    },  errorPlacement: function(error, element) 
    {
        if ( element.is(":radio") ) 
        {
            error.appendTo( element.parents('.container') );
        }
        else 
        { 
            error.insertAfter( element );
        }
     }
});
    







$("#guardar").click(function(){
   
      
    if($("#formulario_user").valid()==false){
        return;
        alert('Favor de completar registro  ');
    }
    if($("#formulario_user").valid()==true){
        alert('bienvenido al team ValhallaGeek Disfruta de tu estancia  ');
        return;
        
    }
 
  

   let nombreUser=$("#nombreUser").val()
   let apellidoUser=$("#apellidoUser").val()
   let emailUser =$("#emailUser").val()
   let emailUser2=$("#emailUser2").val()
   let passwordUser=$("#passwordUser").val()
   let passwordUser2=$("#passwordUser2").val()
   let rutUser=$("#rutUser").val()
   let telefonoUser=$("#telefonoUser").val()
   let regionUser=$("#regionUser").val()
   let comunaUser=$("#comunaUser").val()
   let calleUser=$("#calleUser").val()
   let terminosUser=$("#terminosUser").is(":checked")
   let generoUser=$("name=generoUser").is(":checked")


  
     
   //construir un json y enviar los datos por post
})

/*$("#guardar").click(function(event) {
    if(!$("#generoUser input[name='generoUser']").is(':checked')){
       alert('porfavor elejir genero')
    }
  })
  */
