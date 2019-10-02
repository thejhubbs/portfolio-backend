
exports.seed = function(knex) {
    return knex('technologies').insert([
        //1
        {
          technology_name: "HTML",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: null
        },
        //2
        {
          technology_name: "CSS",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: null
        },
        //3
        {
          technology_name: "Javascript",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: null
        },
        //4
        {
          technology_name: "PHP",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: null
        },
        //5
        {
          technology_name: "Ruby on Rails",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: null
        },
        //6
        {
          technology_name: "LESS",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: 2
        },
        //7
        {
          technology_name: "React",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: 3
        },
        //8
        {
          technology_name: "Node",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: 3
        },
        //9
        {
          technology_name: "Express",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: 3
        },
        //10
        {
          technology_name: "POSTGRESQL",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: 15
        },
        //11
        {
          technology_name: "MYSQL, SQLITE",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: 15
        },
        //12
        {
          technology_name: "C/C++",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: null
        },
        //13
        {
          technology_name: "JSON",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: 3
        },
        //14
        {
          technology_name: "Wordpress",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: 4
        },
        //15
        {
          technology_name: "SQL & Database Design",
          technology_experience: "",
          technology_hex_color: "",
          parent_id: null
        }

      ]);
};
