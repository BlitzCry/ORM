// @ts-ignore
import ColumnDefinition from "@/PostgreSQL/ColumnDefinition.ts";

export default class Blueprint {
    columns: object = {};

    string(name: string, length: number = 256): ColumnDefinition {
        return this.addColumn('varchar', name, { length });
    }

    id(name: string = "id"): ColumnDefinition {
        return this.addColumn('integer', name).primary();
    }

    integer(name: string, autoIncrement: boolean = false, unsigned: boolean = false) {
        return this.addColumn("integer", name, { autoIncrement, unsigned });
    }

    tinyInteger(name: string, autoIncrement: boolean = false, unsigned: boolean = false) {
        return this.addColumn("tinyInteger", name, { autoIncrement, unsigned });
    }

    timestamps(): void {
        this.addColumn('timestamp', 'created_at').default('CURRENT_TIMESTAMP');
        this.addColumn('timestamp', 'updated_at').default('CURRENT_TIMESTAMP');
    }

    char(name: string, length: number = 64): ColumnDefinition {
        return this.addColumn('char', name, { length });
    }

    addColumn(type: string, name: string, parameters: object = {}): ColumnDefinition {
        return this.addColumnsDefinition(new ColumnDefinition({ type, name, ...parameters }));
    }

    addColumnsDefinition(definition: ColumnDefinition): ColumnDefinition {
        this.columns[definition.get("name")] = definition;

        return definition;
    }
}
