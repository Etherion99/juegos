$(document).ready(function (e) {
    //filtros
    var filters = ["category", "year", "studio", "console"];

    //generación automática de posts
    var postsHTML = "";

    for(var post of posts){
        postsHTML += `<div class="post">
            <div class="image">
                <img src="${post.photo}" alt="foto ${post.name}">
            </div>
            <div class="content">
                <h3 class="title">${post.name}</h3>
                <br>
                <p class="description">${post.description}</p>
            </div>
        </div>`;
    }

    $("#posts").html(postsHTML);


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
