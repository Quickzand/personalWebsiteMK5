function skillBarBuilder(title, fillPercent, location) {
    var skillBar = $("<div>").addClass("skillBar");
    var skillBarHeader = $("<div>").addClass("skillBarHeader").text(title);
    var skillBarFillContainer = $("<div>").addClass("skillBarFillContainer");
    var skillBarFill = $("<div>").addClass("skillBarFill").css("width", fillPercent + "%");

    skillBarFillContainer.append(skillBarFill);
    skillBar.append(skillBarHeader).append(skillBarFillContainer);
    location.append(skillBar);
}

skillBarBuilder("HTML", 100, $("#programmingLanguages .statsList"));
skillBarBuilder("CSS", 100, $("#programmingLanguages .statsList"));
skillBarBuilder("Javascript", 100, $("#programmingLanguages .statsList"));
skillBarBuilder("SQL", 35, $("#programmingLanguages .statsList"));
skillBarBuilder("PHP", 60, $("#programmingLanguages .statsList"));
skillBarBuilder("C#", 25, $("#programmingLanguages .statsList"));
skillBarBuilder("Python", 95, $("#programmingLanguages .statsList"));
skillBarBuilder("Java", 86, $("#programmingLanguages .statsList"));
skillBarBuilder("C", 50, $("#programmingLanguages .statsList"));
// Technologies
skillBarBuilder("Node.js", 75, $("#technologies .statsList"));
skillBarBuilder("Electron", 75, $("#technologies .statsList"));
skillBarBuilder("JQuery", 95, $("#technologies .statsList"));
skillBarBuilder("PWA's", 75, $("#technologies .statsList"));
skillBarBuilder("Websockets", 70, $("#technologies .statsList"));
skillBarBuilder("Git", 80, $("#technologies .statsList"));
skillBarBuilder("Unity", 45, $("#technologies .statsList"));
// Proficiencies
skillBarBuilder("MacOS", 100, $("#proficiencies .statsList"));
skillBarBuilder("Windows", 90, $("#proficiencies .statsList"));
skillBarBuilder("Office Suite", 90, $("#proficiencies .statsList"));
skillBarBuilder("Image Editing", 88, $("#proficiencies .statsList"));
skillBarBuilder("Video Editing", 85, $("#proficiencies .statsList"));
skillBarBuilder("Game Design", 30, $("#proficiencies .statsList"));

$(window).scroll(function () {
    var skillBars = $(".skillBarFill");
    // Goes through each skill bar and checks if it is in view
    skillBars.each(function () {
        var $this = $(this);
        if ($this.isInViewport()) {
            $this.addClass("isVisible");
        }
    });
});