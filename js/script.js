$(document).ready(function (e) {

    $("#gb_button, .gb_button").click(function () {
        $(".ds").hide();
        $(".n64").hide();
        $(".gb").show();
    });

    $("#ds_button, .ds_button").click(function () {
        $(".ds").show();
        $(".n64").hide();
        $(".gb").hide();
    });

    $("#n64_button, .n64_button").click(function () {
        $(".ds").hide();
        $(".n64").show();
        $(".gb").hide();
    });

    $("#todos_button").click(function () {
        $(".ds").show();
        $(".n64").show();
        $(".gb").show();
    })

    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myDIV .marco").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

/*$(
function() {
    var b = $("#button");
    var w = $("#wrapper");
    var l = $("#list");

    w.height(l.outerHeight(true));

    b.click(function() {

        if(w.hasClass('open')) {
            w.removeClass('open');
            w.height(0);
        } else {
            w.addClass('open');
            w.height(l.outerHeight(true));
        }

    });
});*/
