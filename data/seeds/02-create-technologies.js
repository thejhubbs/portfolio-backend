
exports.seed = function(knex) {
    return knex('technologies').insert([
        //1
        {
          technology_name: "HTML",
          technology_experience: "I learned HTML in high school about 10 years ago, and have really been using it since.",
          technology_hex_color: "#86BBD8",
          parent_id: null
        },
        //2
        {
          technology_name: "CSS",
          technology_experience: "Learned in high school along with HTML, but took awhile for it to really click. Currently I am very confident in creating clean, modern design using base CSS or a preprocessor.",
          technology_hex_color: "#57886C",
          parent_id: null
        },
        //3
        {
          technology_name: "Javascript",
          technology_experience: "I have used Javascript for simple menu animations, to using React to develop whole webapps. I am very confident with Javascript & many of it's popular libraries.",
          technology_hex_color: "#33658A",
          parent_id: null
        },
        //4
        {
          technology_name: "PHP",
          technology_experience: "PHP was the first backend technology I learned, in 2012, and I created a few simple apps to explore. I got further experience with it with my time using Wordpress.",
          technology_hex_color: "#669Ba8",
          parent_id: null
        },
        //5
        {
          technology_name: "Ruby on Rails",
          technology_experience: "My favorite backend tech, learned in college, and the main technology I used to create a few startup applications.",
          technology_hex_color: "#57886C",
          parent_id: null
        },
        //6
        {
          technology_name: "LESS",
          technology_experience: "",
          technology_hex_color: "#77a88C",
          parent_id: 2
        },
        //7
        {
          technology_name: "React",
          technology_experience: "I've learned in the past year, since starting Lamda School. It's by far my current favorite web technology, for what it does, when you'd need it.",
          technology_hex_color: "#7365aA",
          parent_id: 3
        },
        //8
        {
          technology_name: "Node",
          technology_experience: "Used largely with Express.",
          technology_hex_color: "#3345aA",
          parent_id: 3
        },
        //9
        {
          technology_name: "Express",
          technology_experience: "Created several Rest API's with Node/Express and enjoy the benefits of using Javascript across the stack.",
          technology_hex_color: "#53656A",
          parent_id: 3
        },
        //10
        {
          technology_name: "POSTGRESQL",
          technology_experience: "Experience with PG on Heroku.",
          technology_hex_color: "#37a86C",
          parent_id: 15
        },
        //11
        {
          technology_name: "SQLITE",
          technology_experience: "",
          technology_hex_color: "#57688C",
          parent_id: 15
        },
        //12
        {
          technology_name: "GraphQL",
          technology_experience: "",
          technology_hex_color: "#77a88C",
          parent_id: null
        },
        //13
        {
          technology_name: "Web Audio API",
          technology_experience: "Used to read & monitor microphone noise & output levels to the screen.",
          technology_hex_color: "#1365bA",
          parent_id: 3
        },
        //14
        {
          technology_name: "Wordpress",
          technology_experience: "Experience doing freelance for clients, including setting up basic websites.",
          technology_hex_color: "#46bB98",
          parent_id: 4
        },
        //15
        {
          technology_name: "NoSQL",
          technology_experience: "JSON-formatted storage, used for simple, quick webapps.",
          technology_hex_color: "#176C88",
          parent_id: null
        },
        //16
        {
          technology_name: "SASS",
          technology_experience: "",
          technology_hex_color: "#37684C",
          parent_id: 2
        },

      ]);
};
