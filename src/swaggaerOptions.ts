export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'linktic backend test',
            version: '1.0.0',
            description: 'test backend linktic Api Res'
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`
            }
        ]
    },
    apis: ["./src/router/*.ts"]
}