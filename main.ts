// import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
// const databaseUrl = Deno.env.get("DATABASE_URL")!;
// const pool = new Pool(databaseUrl, 3, true);
// const connection = await pool.connect();


// @ts-ignore
import Builder from "@/Schema/Builder.ts";
// @ts-ignore
import Blueprint from "@/Schema/Blueprint.ts";

Builder.create('flights', (table: Blueprint) => {
  table.id();
  table.string('name').primary();
  table.string('airline').default("Wizz Air");
  table.timestamps();
  table.char("gdpr_accepted", 2).default('n').nullable().primary();
});


// try {
//   await connection.queryObject(query);
// } finally {
//   connection.release();
// }
