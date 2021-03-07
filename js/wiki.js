$(document).ready(function(){
    var url = window.location.href;
    var index = url.substr(url.indexOf("index=")+6, url.length-url.indexOf("index="));

    var post = posts[index];

    $("#title").text(post.name);
});
