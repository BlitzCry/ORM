export default class Blueprint {
    columns: string[] = [];

    string(name: string, length: number = 256): void {
        this.columns.push(`${name} VARCHAR(${length})`);
    }

    id(name: string = "id"): void {
        this.columns.push(`${name} SERIAL PRIMARY KEY`);
    }

    timestamps(): void {
        this.columns.push(`created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`);
    }


}
