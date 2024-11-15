//@ts-ignore
import Blueprint from "@/Schema/Blueprint.ts";
// @ts-ignore
import ColumnDefinition from "@/PostgreSQL/ColumnDefinition.ts";

export default class Grammar {
    private grammar: object = {
        table: '',
        rows: []
    }

    private rows: string[] = [];

    query: string = '';

    constructor(table: string, blueprint: Blueprint) {
        this.table(table);
        this.columns(blueprint.columns);

        console.log(this.rows);
    }

    private table(table: string) {

    }

    private columns(columns: object) {
        for (const name in columns) {
            const definition = columns[name];

            switch (definition.get('type')) {
                case "varchar":
                    this.rows.push(this.processVarChar(name, definition));
                    break;

                default:
                    break;
            }
        }
    }

    private processVarChar(name: string, definition: ColumnDefinition) {
        return `${name} VARCHAR(${definition.get('length')}) ${!definition.get('default') ? 'DEFAULT' : ''}`;
    }
}
