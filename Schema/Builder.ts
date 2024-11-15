//@ts-ignore
import Blueprint from "@/Schema/Blueprint.ts";

//@ts-ignore
import Grammar from "@/Schema/Grammar.ts";

//@ts-ignore
import Processor from "@/Schema/Processor.ts";

export default class Builder {
    // @ts-ignore

    static create(table: string, callback: any) {
        const blueprint = new Blueprint();

        callback(blueprint);

        return Processor.run(new Grammar(table, blueprint));
    }
}
