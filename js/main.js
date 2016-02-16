var banderaEvent = 0;

function cambiarSelect(campoA, campoB) {
    var $select = $("#" + campoA).selectize();
    var selectize = $select[0].selectize;
    selectize.setValue($("#" + campoB).val());
}

var sincronisando = false;

$(document).ready(function () {
    //detecta el scrollbar y oculta los calendarios
    $(window).scroll(function () {
        $('.datepicker').css("display", "none");
        clearTimeout($.data(this, "TestScroll"));
        $.data(this, "TestScroll", setTimeout(function () {
            // NO estas haciendo scroll
        }, 250));
    });

    $('#nochesDesdeS').datepicker({ autoclose: true, ignoreReadonly: true, language: "en", format: 'dd/mm/yyyy', startDate: 'd/m/Y' });
    $('#nochesHastaS').datepicker({ autoclose: true, ignoreReadonly: true, language: "en", format: 'dd/mm/yyyy', startDate: 'd/m/Y' });
    $('#nochesDesdeC').datepicker({ autoclose: true, ignoreReadonly: true, language: "en", format: 'dd/mm/yyyy', startDate: 'd/m/Y' });
    $('#nochesHastaC').datepicker({ autoclose: true, ignoreReadonly: true, language: "en", format: 'dd/mm/yyyy', startDate: 'd/m/Y' });


    $('#cantPersonasS').selectize();
    $('#cantPersonasC').selectize();
    $('#idHostelC').selectize();
    $('#idHostelS').selectize();

    //CAMBIOS DEL BOOKING 1 AL 2
    $("#idHostelC").change(function () {
        if (!sincronisando) {
            sincronisando = true;
            cambiarSelect("idHostelS", "idHostelC");
            sincronisando = false;
        }
    });
    $("#nochesDesdeC").change(function () {
        if (!sincronisando) {
            sincronisando = true;
            $("#nochesDesdeS").val($("#nochesDesdeC").val());
            sincronisando = false;

            var fechaDesde = $('#nochesDesdeC').datepicker('getDate');
            fechaDesde.setTime(fechaDesde.getTime() + ((1000 * 3600 * 24) * 1));

            $('#nochesHastaC').datepicker('setStartDate', fechaDesde);
            if ($('#nochesHastaC').datepicker('getDate') == null) {
                $('#nochesHastaC').datepicker('setDate', fechaDesde);
            }
            $('#nochesHastaS').datepicker('setStartDate', fechaDesde);
            if ($('#nochesHastaS').datepicker('getDate') == null) {
                $('#nochesHastaS').datepicker('setDate', fechaDesde);
            }
        }
    });
    $("#nochesHastaC").change(function () {
        if (!sincronisando) {
            sincronisando = true;
            $("#nochesHastaS").val($("#nochesHastaC").val());
            sincronisando = false;
        }
    });
    $("#cantPersonasC").change(function () {
        if (!sincronisando) {
            sincronisando = true;
            cambiarSelect("cantPersonasS", "cantPersonasC");
            sincronisando = false;
        }
    });

    //CAMBIOS DEL BOOKING 2 AL 1
    $("#idHostelS").change(function () {
        if (!sincronisando) {
            sincronisando = true;
            cambiarSelect("idHostelC", "idHostelS");
            sincronisando = false;
        }
    });
    $("#nochesDesdeS").change(function () {
        if (!sincronisando) {
            sincronisando = true;
            $("#nochesDesdeC").val($("#nochesDesdeS").val());
            sincronisando = false;

            var fechaDesde = $('#nochesDesdeS').datepicker('getDate');
            fechaDesde.setTime(fechaDesde.getTime() + ((1000 * 3600 * 24) * 1));

            $('#nochesHastaS').datepicker('setStartDate', fechaDesde);
            if ($('#nochesHastaS').datepicker('getDate') == null) {
                $('#nochesHastaS').datepicker('setDate', fechaDesde);
            }

            $('#nochesHastaC').datepicker('setStartDate', fechaDesde);
            if ($('#nochesHastaC').datepicker('getDate') == null) {
                $('#nochesHastaC').datepicker('setDate', fechaDesde);
            }
        }
    });
    $("#nochesHastaS").change(function () {
        if (!sincronisando) {
            sincronisando = true;
            $("#nochesHastaC").val($("#nochesHastaS").val());
            sincronisando = false;
        }
    });
    $("#cantPersonasS").change(function () {
        if (!sincronisando) {
            sincronisando = true;
            cambiarSelect("cantPersonasC", "cantPersonasS");
            sincronisando = false;
        }
    });
});

function enviarBookingHome(form) {
    var muestraMensaje = true;

    //VALIDO LOS CAMPOS DEL BOOKING
    var idHostel = $('#idHostel' + form).val();
    var fechaDesde = $('#nochesDesde' + form).datepicker('getDate');
    var fechaHasta = $('#nochesHasta' + form).datepicker('getDate');
    var cPersonas = $('#cantPersonas' + form).val();

    var cNoches = 0;
    var msg = '';
    if ((fechaDesde != null) && (fechaHasta != null)) {
        var timeDiff = Math.abs(fechaHasta.getTime() - fechaDesde.getTime());
        cNoches = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (fechaHasta <= fechaDesde) {
            console.log('esta mal');
            msg += 'Arrival and chueck out dates are not correct\n';
            muestraMensaje = true;
        }
    }

    if (idHostel == 0) {
        msg += 'Select city\n';
    }

    if (fechaDesde == null) {
        msg += 'Select the arribal date\n';
    }
    if (fechaHasta == null) {
        msg += 'Select the departure\n';
    }

    if (msg != '') {
        if (muestraMensaje) {
            swal("Invalid data", msg, "error");
        }
    } else {
        var valor = idHostel.split(",");

        if (valor[1] > 1) { //es multidestino
            window.location = "https://chillouthostelboracay.com/index.php?option=com_chillouthostel&controller=multidestino&task=display&idCiudad=" + valor[2] + "&fechaDesde=" + formatFecha(fechaDesde) + "&fechaHasta=" + formatFecha(fechaHasta) + "&cPersonas=" + cPersonas;
        } else {
            window.location = "https://chillouthostelboracay.com/index.php?option=com_chillouthostel&controller=micrositio&idHostel=" + valor[0] + "&fechaDesde=" + formatFecha(fechaDesde) + "&fechaHasta=" + formatFecha(fechaHasta) + "&cPersonas=" + cPersonas;
        }
    }
}


$(window).load(function () {
    $("#nav").sticky({ topSpacing: 0 });
});

$("#masDestinos").click(function () {
    $("#destOcultos").toggle("slow", callbackFn);
})

function callbackFn() {
    $(this).is(":visible") ? $("#masDestinos").text("LESS DESTINATIONS") : $("#masDestinos").text("MORE DESTINATIONS");
}
