// import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
// const databaseUrl = Deno.env.get("DATABASE_URL")!;
// const pool = new Pool(databaseUrl, 3, true);
// const connection = await pool.connect();


// @ts-ignore
import Schema from "@/PostgreSQL/Schema.ts";
// @ts-ignore
import Blueprint from "@/PostgreSQL/Blueprint.ts";

Schema.create('flights', (table: Blueprint) => {
  table.id();
  table.string('name').primary();
  table.string('airline').default("Wizz Air");
  table.timestamps();
  table.char("gdpr_accepted", 2).default('n').nullable().primary();

  console.log(table);
});


// try {
//   await connection.queryObject(query);
// } finally {
//   connection.release();
// }
