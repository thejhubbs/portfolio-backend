exports.up = function(knex, Promise) {
    return knex.schema.table('projects', function(t) {
        t.text('github_link').notNull().defaultTo("");
        t.text('github_link_2').notNull().defaultTo("");
        t.text('live_link').notNull().defaultTo("");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('projects', function(t) {
        t.dropColumn('github_link');
        t.dropColumn('github_link_2');
        t.dropColumn('live_link');
    });
};
