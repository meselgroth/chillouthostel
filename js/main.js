$(document).ready(function () {
    //Smooth Scrolling
    $(".scroll").click(function (event) {
        event.preventDefault();
        console.log($(this).show());
        $('html,body').animate({ scrollTop: $(this.hash).offset().top - 118 }, 1000);
    });
    $(".search-btn").click(function (e) {
        enviarBookingHome($(e.target).data("navid"));
    });
    $("#nav").sticky({ topSpacing: 0 });

    $("#destino_f").mouseover(function () {
        //$("#destinoOption_a, #destinoOption_b, #destinoOption_c, #destinoOption_d").fadeOut("slow", function () {
        //});
        $("#destinoOption_f").fadeIn("slow", function () {
        });
    });

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if (isChrome) {
        $('.tmpPromo').addClass('shimmer');
    }
});

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

    $('div[id=browse]').click(function () {
        //alert("Not yet working!");
    });
    var dateFromScrolling = $('#dateFromScrolling');
    var dateToScrolling = $('#dateToScrolling');
    var dateFromTopNav = $('#dateFromTopNav');
    dateFromScrolling.datepicker({ autoclose: true, ignoreReadonly: true, language: "en", format: 'dd/mm/yyyy', startDate: 'd/m/Y' });
    dateToScrolling.datepicker({ autoclose: true, ignoreReadonly: true, language: "en", format: 'dd/mm/yyyy', startDate: 'd/m/Y' });
    dateFromTopNav.datepicker({ autoclose: true, ignoreReadonly: true, language: "en", format: 'dd/mm/yyyy', startDate: 'd/m/Y' });
    var dateToTopNav = $('#dateToTopNav');
    dateToTopNav.datepicker({ autoclose: true, ignoreReadonly: true, language: "en", format: 'dd/mm/yyyy', startDate: 'd/m/Y' });

    dateFromTopNav.change(function () {
        if (!sincronisando) {
            sincronisando = true;
            dateFromScrolling.val(dateFromTopNav.val());
            sincronisando = false;

            var fechaDesde = dateFromTopNav.datepicker('getDate');
            fechaDesde.setTime(fechaDesde.getTime() + ((1000 * 3600 * 24) * 1));

            dateToTopNav.datepicker('setStartDate', fechaDesde);
            if (dateToTopNav.datepicker('getDate') == null) {
                dateToTopNav.datepicker('setDate', fechaDesde);
            }
            dateToScrolling.datepicker('setStartDate', fechaDesde);
            if (dateToScrolling.datepicker('getDate') == null) {
                dateToScrolling.datepicker('setDate', fechaDesde);
            }
        }
    });
    dateToTopNav.change(function () {
        if (!sincronisando) {
            sincronisando = true;
            dateToScrolling.val(dateToTopNav.val());
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
    dateFromScrolling.change(function () {
        if (!sincronisando) {
            sincronisando = true;
            dateFromTopNav.val(dateFromScrolling.val());
            sincronisando = false;

            var fechaDesde = dateFromScrolling.datepicker('getDate');
            fechaDesde.setTime(fechaDesde.getTime() + ((1000 * 3600 * 24) * 1));

            dateToScrolling.datepicker('setStartDate', fechaDesde);
            if (dateToScrolling.datepicker('getDate') == null) {
                dateToScrolling.datepicker('setDate', fechaDesde);
            }

            dateToTopNav.datepicker('setStartDate', fechaDesde);
            if (dateToTopNav.datepicker('getDate') == null) {
                dateToTopNav.datepicker('setDate', fechaDesde);
            }
        }
    });
    dateToScrolling.change(function () {
        if (!sincronisando) {
            sincronisando = true;
            dateToTopNav.val(dateToScrolling.val());
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

function enviarBookingHome(navid) {

    var dateFrom = $('#dateFrom' + navid).datepicker('getDate');
    var dateTo = $('#dateTo' + navid).datepicker('getDate');
    var cPersonas = $('#cantPersonas' + navid).val();

    var cNoches = 0;
    var msg = '';
    if ((dateFrom != null) && (dateTo != null)) {
        var timeDiff = Math.abs(dateTo.getTime() - dateFrom.getTime());
        cNoches = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (dateTo <= dateFrom) {
            console.log('esta mal');
            msg += 'Arrival and chueck out dates are not correct\n';
        }
    }

    if (dateFrom == null) {
        msg += 'Select the arrival date\n';
    }
    if (dateTo == null) {
        msg += 'Select the departure\n';
    }

    if (msg != '') {
    } else {
        //book now
        $.post("https://myallocator.com/en/booknow/o2skXtyWkETOOjB2RDP6Hg/rooms",
            { "lang": "=en&date_start=2016-05-04&nights=2" },
            function (data) {
                $(".content").html = data;
            });
    }
}