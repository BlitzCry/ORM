import Blueprint from "./Blueprint.ts";

export default class Schema {

    static create(table: string, callback: any) {
        const blueprint = new Blueprint();

        callback(blueprint);

        let columnsDefinition = blueprint.columns.join(", ");

        const sql = `CREATE TABLE IF NOT EXISTS ${table} (${columnsDefinition})`;

        return sql;
    }
}
