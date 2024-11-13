import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

import Schema from "./migrations/PostgreSQL/Schema.ts";
import Blueprint from "./migrations/PostgreSQL/Blueprint.ts";

const databaseUrl = Deno.env.get("DATABASE_URL")!;
const pool = new Pool(databaseUrl, 3, true);
const connection = await pool.connect();

let query = Schema.create('flights', (table: Blueprint) => {
  table.id();
  table.string('name');
  table.string('airline');
  table.timestamps();
});


try {
  await connection.queryObject(query);
} finally {
  connection.release();
}
