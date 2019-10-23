exports.seed = function(knex) {
    return knex('projects').insert([
        //1
        {
          project_name: "GrimWire",
          project_description: "Interactive Spiritual Enclopedia, built on React & Express",
          project_show_priority: 1,
          project_details: "With so many philosophies, cultures, and religions, it is hard to remember everything, and even harder to find non-biased information sources that go in-depth enough to satisfy anything besides a meager curiosity. A larger app that allows users to view in-depth articles and click through related concepts.",
          project_development: "This was the largest solo project I had tackled to date. It included 6 REST Objects with 5 relationship tables and routes between them. There are image uploads, parsed with multer and uploaded to cloudinary.",
          project_reflection: "I am proud ofthe project and where it's currently at. I built it originally for my own personal use and it  serves it's purpose.",
          project_future: "I have a list of ideas for future implementation. This is actually a project I want to get up and running and have people use one day.",
          github_link: "https://github.com/Grimwire/grimwire-frontend",
          github_link_2: "https://github.com/Grimwire/grimwire-backend",
          live_link: "https://grimwire.netlify.com/"
        },
        //2- finish building before images
        {
          project_name: "My Portfolio",
          project_description: "Gallery/portfolio built on React & Express",
          project_show_priority: 2,
          project_details: "The portfolio you're viewing now, custom made by me.",
          project_development: "I really wanted to put a little extra into a site for myself, and polish it nicely.",
          project_reflection: "",
          project_future: "",
          github_link: "",
          github_link_2: "",
          live_link: ""
        },
        //3
        {
          project_name: "QuietTime",
          project_description: "WebApp built for teachers that detects noises in the room & rewards kids for silence",
          project_show_priority: 1,
          project_details: "Teachers of young students often find it difficult to quiet & calm their class without adding to the hysteria & noise. QuietTime allows a teacher to start a session, which pulls up adorable animated animals as long as it is quiet. It keeps score & allows the teacher to configure their own settings, including mic sensitivity.",
          project_development: "This project was the result of a 'Build Week' at Lambda school. This brought together students in the front-end & back-end portions of classes to build a single app. I was the only backend developer for this project, and contributed a fair amount to helping the front-end incorporate the Javascript WebAudio API functionality & design.",
          project_reflection: "I am proud of how this project turned out. Our 'Team Leader' contributed a fair amount to the animation & styling, even though he didn't have to, and it really motivated me to help drudge through the WebAudio API for the first time. I think it turned out quite good for a two week, part time, project.",
          project_future: "It would be neat to take this further, but I don't currently have any plans to.",
          github_link: "https://github.com/noise-controller-app/frontend",
          github_link_2: "https://github.com/noise-controller-app/backend",
          live_link: "https://noisecontrollerapp.netlify.com/"
        },
        //4
        {
          project_name: "The Dhali Group",
          project_description: "Freelance CSS/HTML/JS work completed & used in production for marketing company.",
          project_show_priority: 3,
          project_details: "Found on Upwork, a marketing firm I did 20 hours of freelance work for.",
          project_development: "We did several rounds of designing HTML/CSS/JS components for his client's WordPress site. The client was very pleased with the results.",
          project_reflection: "",
          project_future: "",
          github_link: "",
          github_link_2: "",
          live_link: ""
        },
        //5
        {
          project_name: "SPLAT",
          project_description: "A single page HTML template for quickly getting a landing page up.",
          project_show_priority: 3,
          project_details: "",
          project_development: "",
          project_reflection: "",
          project_future: "I like it as a good start, but would like to include a few more features.",
          github_link: "https://github.com/thejhubbs/splat",
          github_link_2: "",
          live_link: "http://splat.website"
        },
        //6- REPLACE
        {
          project_name: "Workout Builder",
          project_description: "A ruby on rails thing i hope to build.",
          project_show_priority: 3,
          project_details: "",
          project_development: "",
          project_reflection: "",
          project_future: "",
          github_link: "",
          github_link_2: "",
          live_link: ""
        },
        //7
        {
          project_name: "VaxTrack Website",
          project_description: "A multi-page website co-created with another developer for Lambda.",
          project_show_priority: 4,
          project_details: "",
          project_development: "We worked great together and had good communication. We took turns knocking things out and fixing bugs.",
          project_reflection: "",
          project_future: "With some polishing, I'd like to turn this into a multi-page website template, for simpler marketing-type pages such as this.",
          github_link: "https://github.com/BW1-WebPT6-immunization-tracking/marketing_immization_tracking",
          github_link_2: "",
          live_link: "https://bw1-webpt6-immunization-tracking.github.io/marketing_immization_tracking/"
        },
        //8- Make a live wordpress site
        {
          project_name: "JLC Website",
          project_description: "",
          project_show_priority: 4,
          project_details: "",
          project_development: "",
          project_reflection: "",
          project_future: "",
          github_link: "",
          github_link_2: "",
          live_link: ""
        },
        //9- Add nosql database
        {
          project_name: "Scale Theory",
          project_description: "A pure JS app that allows users to interact with an on-screen guitar/bass and display scales and tunings.",
          project_show_priority: 2,
          project_details: "",
          project_development: "I created custom Javascript to do the 'music' work, creating Notes, Scales, and other classes.",
          project_reflection: "I'm happy with how it turned out, and really think this would be a great idea to develop further.",
          project_future: "Right now, the main thing I would like to upgrade is the data storage. It is currently using hardcoded JSON objects for it's data. It would be nice to implement an actual database.",
          github_link: "https://github.com/thejhubbs/scale-theory",
          github_link_2: "",
          live_link: "http://scale-theory.site"
        },
        //10- make landing page w/ pictures & features
        {
          project_name: "Responsive",
          project_description: "A LESS file to simply get the basic responsive box classes, similar to the Bootstrap classes, including 5 breakpoints..",
          project_show_priority: 2,
          project_details: "",
          project_development: "",
          project_reflection: "",
          project_future: "",
          github_link: "https://github.com/thejhubbs/responsive",
          github_link_2: "",
          live_link: ""
        },
        //11
        {
          project_name: "ColorPal",
          project_description: "A quickly-made color palette generator with PHP & NoSQL",
          project_show_priority: 3,
          project_details: "I was frustrated the amount of color palettes out there, yet none of them generated shades for you, and many forced you to use either: a) very strict, or b) seemingly random, selection methods to generate your colors.",
          project_development: "",
          project_reflection: "It serves it's purpose as a tool I created for myself and can share with others.",
          project_future: "It's not very intuitive or very pleasing to look at. It would be awesome to make it much more user friendly overall.",
          github_link: "https://github.com/thejhubbs/responsive",
          github_link_2: "",
          live_link: "http://colorpal.jhubb.tech"
        }
      ]);
};
