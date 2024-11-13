import Schema from "../Schema.ts";
import Blueprint from "../Blueprint.ts";

export default class Flights {
    public up() {
        return Schema.create('flights', (table: Blueprint) => {
            table.id();
            table.string('name');
            table.string('airline');
            table.timestamps();
        });
    }
}
