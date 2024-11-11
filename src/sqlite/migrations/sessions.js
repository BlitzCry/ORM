class Session {
    up() {
        return {
            table: "sessions",
            columns: [
                {
                    name: "id",
                    type: "string",
                    unique: true,
                    primary: true,
                    foreign: false,
                },
                {
                    name: "payload",
                    type: "text",
                    unique: false,
                    primary: false,
                    foreign: false,
                },
                {
                    name: "last_activity",
                    type: "integer",
                    unique: false,
                    primary: false,
                    foreign: false,
                },
            ]
        }
    }
}

module.exports = Session
