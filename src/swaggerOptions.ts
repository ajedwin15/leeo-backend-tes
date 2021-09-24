export const options = {
    definition:{
        openapi: "3.0.0",
        info:{
            title: 'Leelo Todo api',
            version: '1.0.0',
            description: "Api simple de leelo todo"
        },
        servers:[
            {
                url:"http://localhost:3000"
            }
        ]
    },
    apis:["./src/routes/*.ts"]
}