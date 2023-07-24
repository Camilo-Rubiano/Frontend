$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var nombre = $("input#nombre").val();
            var correo = $("input#correo").val();
            var asunto = $("input#asunto").val();
            var mensaje = $("textarea#mensaje").val();
            $this = $("#enviar");
            $this.prop("disabled", false);
            $('#contactForm').trigger("reset");
            alert("Mensaje enviado correctamente, se capturan los siguientes datos: " + "\n" + "Nombre: " + nombre + "\n" + "Correo: " + correo + "\n" + "Asunto: " + asunto + "\n" + "Mensaje: " + mensaje);           
        },
    });
});