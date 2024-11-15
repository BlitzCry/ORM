export default class ColumnDefinition {
    private attributes: object = {};

    constructor(attributes: object) {
        for (const [key, value] of Object.entries(attributes)) {
            this.attributes[key] = value;
        }
    }

    get(key: string, fallback: any = null) {
        return this.attributes[key] ?? fallback;
    }

    private set(key: string, value: any = null): ColumnDefinition {
        this.attributes[key] = value;

        return this;
    }

    value(key: string, fallback: any = null) {
        if (key in this.attributes) {
            return this.attributes[key];
        }

        return fallback;
    }

    nullable(): ColumnDefinition {
        return this.set("nullable", true);
    }

    default(value: string): ColumnDefinition {
        return this.set("default", value);
    }

    primary(): ColumnDefinition {
        return this.set("primary", true);
    }
}
