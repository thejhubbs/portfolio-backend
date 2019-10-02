
exports.seed = function(knex) {
    return knex('images').insert([
        {
          image_name: "Main image",
          image_description: "This is the image",
          thumbnail: true,
          image_project_id: 1
        },
        {
          image_name: "Secondary image",
          image_description: "This is the image",
          thumbnail: false,
          image_project_id: 1
        },
        {
          image_name: "Main image",
          image_description: "This is the image",
          thumbnail: true,
          image_project_id: 2
        },
        {
          image_name: "Secondary image",
          image_description: "This is the image",
          thumbnail: false,
          image_project_id: 2
        },
        {
          image_name: "Main image",
          image_description: "This is the image",
          thumbnail: true,
          image_project_id: 3
        },
        {
          image_name: "Secondary image",
          image_description: "This is the image",
          thumbnail: false,
          image_project_id: 3
        },
        {
          image_name: "Main image",
          image_description: "This is the image",
          thumbnail: true,
          image_project_id: 4
        },
        {
          image_name: "Secondary image",
          image_description: "This is the image",
          thumbnail: false,
          image_project_id: 4
        },
        {
          image_name: "Main image",
          image_description: "This is the image",
          thumbnail: true,
          image_project_id: 5
        },
        {
          image_name: "Secondary image",
          image_description: "This is the image",
          thumbnail: false,
          image_project_id: 5
        },
        {
          image_name: "Main image",
          image_description: "This is the image",
          thumbnail: true,
          image_project_id: 6
        },
        {
          image_name: "Secondary image",
          image_description: "This is the image",
          thumbnail: false,
          image_project_id: 6
        },
        {
          image_name: "Main image",
          image_description: "This is the image",
          thumbnail: true,
          image_project_id: 7
        },
        {
          image_name: "Secondary image",
          image_description: "This is the image",
          thumbnail: false,
          image_project_id: 7
        },
        {
          image_name: "Main image",
          image_description: "This is the image",
          thumbnail: true,
          image_project_id: 8
        },
        {
          image_name: "Secondary image",
          image_description: "This is the image",
          thumbnail: false,
          image_project_id: 8
        },
        {
          image_name: "Main image",
          image_description: "This is the image",
          thumbnail: true,
          image_project_id: 9
        },
        {
          image_name: "Secondary image",
          image_description: "This is the image",
          thumbnail: false,
          image_project_id: 9
        }
      ]);
};
