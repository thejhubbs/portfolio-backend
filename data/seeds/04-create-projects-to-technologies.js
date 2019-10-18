
exports.seed = function(knex) {
    return knex('projects_to_technologies').insert([
        //Grimwire- React, Node/Express, PG, SASS
        {pt_project_id: 1, pt_technology_id: 7},
        {pt_project_id: 1, pt_technology_id: 8},
        {pt_project_id: 1, pt_technology_id: 9},
        {pt_project_id: 1, pt_technology_id: 10},
        {pt_project_id: 1, pt_technology_id: 16},

        //This portfolio- React, Node/Express, PG, CSS
        {pt_project_id: 2, pt_technology_id: 7},
        {pt_project_id: 2, pt_technology_id: 8},
        {pt_project_id: 2, pt_technology_id: 9},
        {pt_project_id: 2, pt_technology_id: 10},
        {pt_project_id: 2, pt_technology_id: 2},

        //QuietTime- React, Node/Express, SQLITE, CSS
        {pt_project_id: 3, pt_technology_id: 7},
        {pt_project_id: 3, pt_technology_id: 8},
        {pt_project_id: 3, pt_technology_id: 9},
        {pt_project_id: 3, pt_technology_id: 11},
        {pt_project_id: 3, pt_technology_id: 2},

        //Freelance guy- HTML, CSS, JS, Wordpress
        {pt_project_id: 4, pt_technology_id: 1},
        {pt_project_id: 4, pt_technology_id: 2},
        {pt_project_id: 4, pt_technology_id: 3},
        {pt_project_id: 4, pt_technology_id: 14},

        //SPLAT- HTML, CSS, JS
        {pt_project_id: 5, pt_technology_id: 1},
        {pt_project_id: 5, pt_technology_id: 2},
        {pt_project_id: 5, pt_technology_id: 3},

        //COLORS.LESS- LESS
        {pt_project_id: 6, pt_technology_id: 6},

        //VaxTrack- HTML, CSS, JS
        {pt_project_id: 7, pt_technology_id: 1},
        {pt_project_id: 7, pt_technology_id: 2},
        {pt_project_id: 7, pt_technology_id: 3},

        //JLC- HTML, CSS, JS
        {pt_project_id: 8, pt_technology_id: 1},
        {pt_project_id: 8, pt_technology_id: 2},
        {pt_project_id: 8, pt_technology_id: 3},

        //Scale Theory- HTML, CSS, JS
        {pt_project_id: 9, pt_technology_id: 1},
        {pt_project_id: 9, pt_technology_id: 2},
        {pt_project_id: 9, pt_technology_id: 3},

        //Responsive- LESS
        {pt_project_id: 10, pt_technology_id: 6},

        //ColorPal- PHP, NoSQL, Javascript, CSS
        {pt_project_id: 11, pt_technology_id: 4},
        {pt_project_id: 11, pt_technology_id: 15},
        {pt_project_id: 11, pt_technology_id: 2},
        {pt_project_id: 11, pt_technology_id: 3},


      ]);
};
