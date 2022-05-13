var mobileNavButtonSVG = '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="mobileNavButton"> <path id="topRect"  fill-rule="evenodd" stroke="none" d="M 25 0 C 11.193 0 0 11.192993 0 25 L 0 25 C 0 38.806999 11.193 50 25 50 L 175 50 C 188.807007 50 200 38.806999 200 25 L 200 25 C 200 11.192993 188.807007 0 175 0 Z"/> <path id="bottomRect"  fill-rule="evenodd" stroke="none" d="M 25 100 C 11.193 100 0 111.193001 0 125 L 0 125 C 0 138.807007 11.193 150 25 150 L 175 150 C 188.807007 150 200 138.807007 200 125 L 200 125 C 200 111.193001 188.807007 100 175 100 Z"/> </svg>';


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
    closeMobileNav();
    setTimeout(function () {
        window.location.href = location + ".html";
    }, 250);
    setTimeout(function () {
        $("#transitioner").removeClass("out");
    }, 1000);
}


function navBarBuilder() {
    var mobileNavHeader = $("<div>");
    mobileNavHeader.attr("id", "mobileNavHeader");
    var mobileNavHeaderName = $("<div>");
    mobileNavHeaderName.attr("id", "mobileNavHeaderText");
    mobileNavHeaderName.text("Matthew Sand");

    var mobileNavButton = $(mobileNavButtonSVG);
    mobileNavButton.click(toggleMobileNav);


    mobileNavHeader.append(mobileNavHeaderName).append(mobileNavButton);
    // makes mobileNavHeader the first child of nav
    $("nav").prepend(mobileNavHeader);

    var navLinks = $("#navLinks").empty();
    navLinks.append(navButtonBuilder("Home", "index").css("--order", "1"));
    navLinks.append(navButtonBuilder("About", "about").css("--order", "2"));
    navLinks.append(navButtonBuilder("Projects", "projects").css("--order", "3"));
    navLinks.append(navButtonBuilder("Contact", "contact").css("--order", "4"));
}


navBarBuilder();

function toggleMobileNav() {
    if (!$("nav").hasClass("mobileOpen") & !$("nav").hasClass("mobileClosed")) {
        $("nav").addClass("mobileOpen");
        return;
    }
    if ($("nav").hasClass("mobileOpen")) {
        $("nav").removeClass("mobileOpen");
        $("nav").addClass("mobileClosed");
        return;
    }
    if ($("nav").hasClass("mobileClosed")) {
        $("nav").removeClass("mobileClosed");
        $("nav").addClass("mobileOpen");
        return;
    }
}

function closeMobileNav() {
    $("nav").removeClass("mobileOpen");
    $("nav").addClass("mobileClosed");
}