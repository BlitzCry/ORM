// @ts-ignore
import ColumnDefinition from "@/Migrations/ColumnDefinition.ts";

export default class Blueprint {
    columns: object = {};

    string(name: string, length: number = 256): ColumnDefinition {
        return this.addColumn('VARCHAR', name, { length });
    }

    id(name: string = "id"): ColumnDefinition {
        return this.addColumn('SERIAL', name);
    }

    integer(name: string, autoIncrement: boolean = false, unsigned: boolean = false) {
        return this.addColumn("integer", name, { autoIncrement, unsigned });
    }

    tinyInteger(name: string, autoIncrement: boolean = false, unsigned: boolean = false) {
        return this.addColumn("tinyInteger", name, { autoIncrement, unsigned });
    }

    timestamps(): void {
        this.addColumn('TIMESTAMP', 'created_at').default('CURRENT_TIMESTAMP');
        this.addColumn('TIMESTAMP', 'updated_at').default('CURRENT_TIMESTAMP');
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
