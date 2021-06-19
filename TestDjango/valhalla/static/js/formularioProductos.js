$("#form_producto").validate({
    rules:{
        producto:{
            required:true,
            minlength:3,
            maxlength:44

            

        },

        cantidad:{
            required:true,
            minlength:3,
            maxlength:44

            

        },

        precio:{
            required:true,
            minlength:3,
            maxlength:44

            

        },

        categoria:{
            required:true


        },

        cantCategorias:{
            required:true


        },
        
        estadoProd:{
            required:true


        },

        fecha:{
            required:true


        },
    }

})

$("#guardar").click(function(){
    if($("#form_producto").valid()==false){
        return;
        alert('Favor de completar registro  ');
    }
    if($("#form_producto").valid()==true){
        alert('x');
        return;
        
    }

    let producto=$("#producto").val()
    let cantidad=$("#cantidad").val()
    let precio=$("#precio").val()
    let categoria=$("#categoria").val()
    let cantCategorias=$("#cantCategorias").val()
    let estadoProd=$("#estadoProd").val()
    let fecha=$("#fecha").val()
    let terminosUser=$("#terminosUser").is(":checked")


})

$("#guardar").click(function(event) {
    if(!$("#cantCategorias input[name='cantCategorias']").is(':checked')){
        alert('Favor de completar registro  ');
    }

    if(!$("#estadoProd input[name='estadoProd']").is(':checked')){
        alert('Favor de completar registro  ');
    }
})
