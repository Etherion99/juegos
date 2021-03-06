$(document).ready(function (e) {
    var filterOpts = {
        studio: [],
        category: [],
        console: []
    }

    //generación automática de posts
    var postsHTML = "";

    for (var post of posts) {
        var categories = "category-" + post.categories.join(" category-");
        var consoles = "console-" + post.consoles.join(" console-");

        postsHTML += `<div class="marco gb year-${post.year} studio-${post.studio} ${categories} ${consoles}">
            <img src="${post.photo}" class="info__picture">
            <h3 class="nombre">${post.name}</h3>
            <p class="info__copy">${post.description}</p>
        </div>`;

        if(!filterOpts.studio.includes(post.studio)){
            filterOpts.studio.push(post.studio);
        }

        for(var i = 0; i < post.categories.length; i++){
            if(!filterOpts.category.includes(post.categories[i])){
                filterOpts.category.push(post.categories[i]);
            }
        }

        for(var i = 0; i < post.consoles.length; i++){
            if(!filterOpts.console.includes(post.consoles[i])){
                filterOpts.console.push(post.consoles[i]);
            }
        }
    }

    $("#posts").html(postsHTML);

    $(".filter").each(function(){
        var type = $(this).attr("data-type");

        for(var option of filterOpts[type]){
            $(this).append(`<option value='${option}'>${option}</option>`);
        }
    });

    $(".filter").change(function (){
        $(".marco").hide();
        var selector = "";
        $('.filter').each(function(){
            if ($(this).val()!=""){
                selector += "." + $(this).attr("data-type") + "-" + $(this).val();
            }
        });
        console.log(selector);
        $(selector).show()
    });


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

    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#posts .marco").filter(function () {
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
