
exports.up = function (knex) {
    return knex.schema.createTable("contas", function (table) {
      table.string("id").primary();
      table.int("conta").notNullable();
      table.string("senha").notNullable();
      table.float("saldo").notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("contas");
  };
