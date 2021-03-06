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

    $(document).ready(function(){
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#myDIV .marco").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

});
