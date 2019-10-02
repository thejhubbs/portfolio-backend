
exports.seed = function(knex) {
    return knex('projects').insert([
        //1
        {
          project_name: "GrimWire",
          project_description: "Interactive Spiritual Enclopedia, built on React & Express",
          project_show_priority: 1,
        },
        //2
        {
          project_name: "My Portfolio",
          project_description: "Gallery/portfolio built on React & Express",
          project_show_priority: 2,
        },
        //3
        {
          project_name: "QuietTime",
          project_description: "WebApp built for teachers that detects noises in the room & rewards kids for silence",
          project_show_priority: 1,
        },
        //4
        {
          project_name: "That One Guy",
          project_description: "Freelance CSS/HTML/JS work completed & used in production for marketing company.",
          project_show_priority: 3,
        },
        //5
        {
          project_name: "SPLAT",
          project_description: "A single page HTML template for quickly getting a landing page up.",
          project_show_priority: 3,
        },
        //6
        {
          project_name: "Colors.LESS",
          project_description: "A LESS-based 'script' that takes in a hex-color and settings and outputs color schemes.",
          project_show_priority: 3,
        },
        //7
        {
          project_name: "VaxTrack Website",
          project_description: "",
          project_show_priority: 4,
        },
        //8
        {
          project_name: "JLC Website",
          project_description: "",
          project_show_priority: 4,
        },
        //9
        {
          project_name: "Scale Theory",
          project_description: "A pure JS app that allows users to interact with an on-screen guitar/bass and display scales and tunings.",
          project_show_priority: 2,
        }
      ]);
};
