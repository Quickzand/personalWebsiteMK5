function navButtonBuilder(title, locaion) {
    var navButton = $("<div>");
    navButton.addClass("navButton");
    navButton.text(title);
    navButton.data("location", locaion);
    navButton.attr("id", title);
    navButton.click(navTo);
    return navButton;
}


function navTo() {
    $(".navButton").removeClass("selected");
    $(this).addClass("selected");
    $("#transitioner").addClass("out");
    var location = $(this).data("location");
    setTimeout(function () {
        window.location.href = location + ".html";
    }, 150);
    setTimeout(function () {
        $("#transitioner").removeClass("out");
    }, 1000);
}


function navBarBuilder() {
    var navLinks = $("#navLinks").empty();
    navLinks.append(navButtonBuilder("Home", "index"));
    navLinks.append(navButtonBuilder("About", "about"));
    navLinks.append(navButtonBuilder("Projects", "projects"));
    navLinks.append(navButtonBuilder("Contact", "contact"));
    navLinks.append(navButtonBuilder("Resume", "resume"));
}

navBarBuilder();