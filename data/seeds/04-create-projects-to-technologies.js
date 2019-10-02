
exports.seed = function(knex) {
    return knex('projects_to_technologies').insert([
        {pt_project_id: 1, pt_technology_id: 1},
        {pt_project_id: 1, pt_technology_id: 2},
        {pt_project_id: 1, pt_technology_id: 3},
        {pt_project_id: 2, pt_technology_id: 4},
        {pt_project_id: 2, pt_technology_id: 5},
        {pt_project_id: 2, pt_technology_id: 6},
        {pt_project_id: 3, pt_technology_id: 7},
        {pt_project_id: 3, pt_technology_id: 8},
        {pt_project_id: 3, pt_technology_id: 9},
        {pt_project_id: 4, pt_technology_id: 10},
        {pt_project_id: 4, pt_technology_id: 11},
        {pt_project_id: 4, pt_technology_id: 12},
        {pt_project_id: 5, pt_technology_id: 13},
        {pt_project_id: 5, pt_technology_id: 14},
        {pt_project_id: 5, pt_technology_id: 12},
        {pt_project_id: 6, pt_technology_id: 11},
        {pt_project_id: 6, pt_technology_id: 10},
        {pt_project_id: 6, pt_technology_id: 9},
        {pt_project_id: 7, pt_technology_id: 8},
        {pt_project_id: 7, pt_technology_id: 7},
        {pt_project_id: 7, pt_technology_id: 6},
        {pt_project_id: 8, pt_technology_id: 5},
        {pt_project_id: 8, pt_technology_id: 4},
        {pt_project_id: 8, pt_technology_id: 3},
        {pt_project_id: 9, pt_technology_id: 2},
        {pt_project_id: 9, pt_technology_id: 1},
        {pt_project_id: 9, pt_technology_id: 13}

      ]);
};
