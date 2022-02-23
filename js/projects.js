var projects = [{
        "name": "WikiWhat",
        "description": "WikiWhat is a game I built for my friends and I. The goal is, given only images from a wikiHow article, guess what article the images correspond to. The project randomly pulls the article and images contained within it, as well as pulling the names of other, incorrect articles. This project had me dealing a lot with game design as well as database development and developing a python backend.",
        "images": ["images/projectsImages/wikiWhat.png", "images/projectsImages/wikiWhat2.png"],
        "links": []
    },
    {
        "name": "Dequeue",
        "description": "Dequeue is an app that allows you to control your computer from your phone, made by myself and Ayden Colby! It has a home screen allowing you to control more general things like volume, music, or terminal commands, and a section which allows you to create your own shortcuts and scripts to run on your computer remotely. This is my first time working with a mobile centric design and my first time using progressive web apps.",
        "images": ["images/projectsImages/dequeue.png", "images/projectsImages/dequeue2.png"],
        "links": [{
                "type": "github",
                "url": "https://github.com/Quickzand/Dequeue"
            },
            {
                "type": "site",
                "url": "https://matthewsand.info/dequeue"
            }
        ]
    },
    {
        "name": "Homesub",
        "description": "Homesub is my coronavirus relief effort. As someone who has experienced firsthand how difficult it can be to be completely disconnected from the physical environment of school, I wanted to find a way to help my classmates through the rough transition period to online learning. Seeing the difficulties that computer science students had with writing their code from home, I created a website for them to write, test, and submit all of their code from. Homesub was my first time working with any sort of backend, and was a valuable learning experience when it came to working with server side development.",
        "images": ["images/projectsImages/homesub.png", "images/projectsImages/homesub2.png"],
        "links": [{
                "type": "github",
                "url": "https://github.com/Quickzand/Homesub"
            },
            {
                "type": "site",
                "url": "http://www.homesub.dev/"
            }
        ]
    },
    {
        "name": "Google Meets Stories",
        "description": "Although Google Meets Stories started out as a joke between my friends and I, it has quickly turned into one the projects I’m most proud of. Throughout the course of its development I got the chance to work with full stack development. Stories was my first chance to build a database from the ground up, as well as integrate my application with an external API, namely Google’s gApi, and connect all of the backend into a clean and universal frontend.",
        "images": ["images/projectsImages/stories.png", "images/projectsImages/stories2.png"],
        "links": [{
            "type": "site",
            "url": "https://www.matthewsand.info/stories/"
        }]
    },
    {
        "name": "Wifi Panda",
        "description": "For the HackMIT hackathon, my group and I made Wifi Panda. Wifi Panda is a small web app that pins all nearby wifi hotspots, and specifies libraries and coffee shops. The app uses the open maps api to retrieve wifi hotspot data as well as the google maps api to display the pins on a map.",
        "images": ["images/projectsImages/wifiPanda.png", "images/projectsImages/wifiPanda2.png"],
        "links": [{
                "type": "github",
                "url": "https://github.com/Quickzand/Blooprint"
            },
            {
                "type": "site",
                "url": "https://www.matthewsand.info/wifi-panda/"
            }
        ]

    },
    {
        "name": "Host Directory",
        "description": "My Localhost directory is a pet project I made purely for myself. Being frustrated with constantly having to remember paths and exact file names to access my in progress projects, I decided to make my localhost directory. Through its user-friendly interface, it has allowed me to access whatever projects I need to work on with ease, even from my phone!",
        "images": ["images/projectsImages/hostDirectory.png", "images/projectsImages/hostDirectory2.png"],
    },
    {
        "name": "Tankz",
        "description": "Tank-Z started out as a simple idea between my friends and I, “what if we could play one of our favorite childhood games online?” Quickly though, we realized just how difficult that task would be, rebuilding the game from the ground up in an engine made by ourselves in Javascript, with a websocket based NodeJS backend. Through this project I got the opportunity to learn and implement my first websockets, as well as make a fully NodeJS application based backend.",
        "images": ["images/projectsImages/tankz.png", "images/projectsImages/tankz2.png"],
        "links": [{
            "type": "github",
            "url": "https://github.com/Quickzand/tankz"
        }, {
            "type": "site",
            "url": "https://www.matthewsand.info/tankz/"
        }]
    },
    {
        "name": "Bingo",
        "description": "For my first ever programming job, I made a bingo application for an aparent complex in New York. Working on the application built up my skills in HTML, CSS, and Javascript, while also gaining experience in working with a client and their input.",
        "images": ["images/projectsImages/bingo.png", "images/projectsImages/bingo2.png"],

    }
];

var githubIcon = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="contactIcon tooltip Github"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"></path></svg>';
var siteIcon = '<svg version="1.1" id="Capa_1" class="contactIcon Website" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 209.281 209.281" style="enable-background:new 0 0 209.281 209.281;" xml:space="preserve"><path d="M203.456,139.065c3.768-10.786,5.824-22.369,5.824-34.425s-2.056-23.639-5.824-34.425c-0.092-0.324-0.201-0.64-0.333-0.944C188.589,28.926,149.932,0,104.641,0S20.692,28.926,6.159,69.271c-0.132,0.305-0.242,0.62-0.333,0.944c-3.768,10.786-5.824,22.369-5.824,34.425s2.056,23.639,5.824,34.425c0.092,0.324,0.201,0.64,0.333,0.944c14.534,40.346,53.191,69.271,98.482,69.271s83.948-28.926,98.482-69.271C203.255,139.705,203.364,139.39,203.456,139.065zM104.641,194.281c-3.985,0-10.41-7.212-15.78-23.324c-2.592-7.775-4.667-16.713-6.179-26.436H126.6c-1.512,9.723-3.587,18.66-6.178,26.436C115.051,187.069,108.626,194.281,104.641,194.281z M80.862,129.521c-0.721-7.998-1.102-16.342-1.102-24.881s0.381-16.883,1.102-24.881h47.557c0.721,7.998,1.102,16.342,1.102,24.881s-0.381,16.883-1.102,24.881H80.862z M15.001,104.641c0-8.63,1.229-16.978,3.516-24.881h47.3c-0.701,8.163-1.057,16.529-1.057,24.881s0.355,16.718,1.057,24.881h-47.3C16.23,121.618,15.001,113.271,15.001,104.641zM104.641,15c3.985,0,10.411,7.212,15.781,23.324c2.591,7.775,4.667,16.713,6.178,26.435H82.681c1.512-9.723,3.587-18.66,6.179-26.435C94.231,22.212,100.656,15,104.641,15z M143.464,79.76h47.3c2.287,7.903,3.516,16.251,3.516,24.881s-1.229,16.978-3.516,24.881h-47.3c0.701-8.163,1.057-16.529,1.057-24.881S144.165,87.923,143.464,79.76z M184.903,64.76h-43.16c-2.668-18.397-7.245-34.902-13.666-46.644C152.972,24.865,173.597,42.096,184.903,64.76z M81.204,18.115C74.783,29.857,70.206,46.362,67.538,64.76h-43.16C35.685,42.096,56.309,24.865,81.204,18.115z M24.378,144.521h43.16c2.668,18.397,7.245,34.902,13.666,46.645C56.309,184.416,35.685,167.186,24.378,144.521z M128.077,191.166c6.421-11.742,10.998-28.247,13.666-46.645h43.16C173.597,167.186,152.972,184.416,128.077,191.166z"></path></svg>';


function projctCardBuilder(project) {
    var projectCard = $("<div>").addClass("projectCard");
    var projectTitle = $("<div>").addClass("projectTitle").text(project.name);
    var projectPreview = $("<img>").addClass("projectPreview").attr("src", project.images[0]);
    projectCard.append(projectPreview).append(projectTitle);
    projectCard.click(function () {
        openProject(project);
    });
    return projectCard;
}

function projectsBuilder() {
    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var projectCard = projctCardBuilder(project);
        $("#projectsContainer").append(projectCard);
    }
}

function openProject(project) {
    $("#projectTitle").text(project.name);
    $("#projectBody").text(project.description);
    $("#projectImage img").attr("src", project.images[1]);
    $("#projectLinks").empty();
    if (project.links) {
        for (var i = 0; i < project.links.length; i++) {
            var link = project.links[i];
            var linkContainer = $("<div>").addClass("linkContainer");
            var linkIcon = $("<div>").addClass("linkIcon");
            switch (link.type) {
                case "github":
                    linkIcon.append(githubIcon);
                    linkContainer.addClass("github");
                    break;
                case "site":
                    linkIcon.append(siteIcon);
                    linkContainer.addClass("site");
                    break;
            }
            var linkText = $("<div>").addClass("linkText").text(link.type);
            linkContainer.append(linkIcon).append(linkText);
            linkContainer.attr("data-link", link.url);
            linkContainer.click(function () {
                window.open($(this).attr("data-link"), "_blank");
            })
            $("#projectLinks").append(linkContainer);
        }
    }


    $("#projectPopup").show();
}
$("#projectPopup").hide();



projectsBuilder();