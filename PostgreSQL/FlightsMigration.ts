import Schema from "./Schema.ts";
//@ts-ignore
import Blueprint from "@/Schema/Blueprint.ts";

export default class Flights {
    public static up() {
        return Schema.create('flights', (table: Blueprint) => {
            table.id();
            table.string('name');
            table.string('airline');
            table.timestamps();
        });
    }
}
