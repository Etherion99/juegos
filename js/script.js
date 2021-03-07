$(document).ready(function (e) {
    var filterOpts = {
        studio: [],
        category: [],
        console: [],
        year: []
    }

    //generación automática de posts
    var postsHTML = "";

    for (var post of posts) {
        var categories = "category-" + post.categories.join(" category-");
        var consoles = "console-" + post.consoles.join(" console-");

        postsHTML += `<div class="marco gb year-${post.year} studio-${post.studio} ${categories} ${consoles}">
            <a href="wiki.html?index=${posts.indexOf(post)}">
                <img src="${post.photo}" class="info__picture">
            </a>
            <div class="text-container">
                        <a href="wiki.html?index=${posts.indexOf(post)}">
                <h3 class="nombre">${post.name}</h3>
            </a>
            <p class="info__copy">${post.description}
            </p>
            </div>

            <div class="characteristics">
            <p>
            <b>Consola: </b>${post.consoles.join(", ")}.
            <b>Categoría: </b>${post.categories.join(", ")}. 
            <b>Estudio: </b>${post.studio}. 
            <b>Año de Lanzamiento: </b>${post.year}.
            </p>

            </div>
        </div>`;

        if (!filterOpts.studio.includes(post.studio)) {
            filterOpts.studio.push(post.studio);
        }

        if (!filterOpts.year.includes(post.year)) {
            filterOpts.year.push(post.year);
        }

        for (var i = 0; i < post.categories.length; i++) {
            if (!filterOpts.category.includes(post.categories[i])) {
                filterOpts.category.push(post.categories[i]);
            }
        }

        for (var i = 0; i < post.consoles.length; i++) {
            if (!filterOpts.console.includes(post.consoles[i])) {
                filterOpts.console.push(post.consoles[i]);
            }
        }
    }

    $("#posts").html(postsHTML);

    $(".filter").each(function () {
        var type = $(this).attr("data-type");
        filterOpts.year.sort();
        for (var option of filterOpts[type]) {
            $(this).append(`<option value='${option}'>${option}</option>`);
        }
    });

    function seleccionados() {
        var selector = "";
        $('.filter').each(function () {
            if ($(this).val() !== "") {
                selector += "." + $(this).attr("data-type") + "-" + $(this).val();
            }
        });
        return selector;
    }

    function filtering() {
        var value = $("#myInput").val().toLowerCase();
        console.log("#posts .marco" + seleccionados());
        $(".marco").hide();
        $("#posts .marco" + seleccionados()).filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    }

    $(".filter").change(filtering);

    $("#myInput").on("keyup", filtering);

    $("#reSet").click(function (event) {
        event.preventDefault();
        $(this).closest('form').get(0).reset();
        filtering();
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
