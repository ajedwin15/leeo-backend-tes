import express from 'express'
const app = express();

//Swagger
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import { options } from './swaggerOptions'

import indexRoutes from './routes/index'

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const specs = swaggerJsDoc(options)


app.use(indexRoutes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

const PORT = 3000;

const server = app.listen(PORT, () => console.log(`App conectada al puerto ${PORT}`));


process.on('SIGINT', () => {
    server.close();
    console.log('App finalizada');
});

