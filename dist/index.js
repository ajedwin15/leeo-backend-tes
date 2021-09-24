"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//Swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions_1 = require("./swaggerOptions");
const index_1 = __importDefault(require("./routes/index"));
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_1.options);
app.use(index_1.default);
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
const PORT = 3000;
const server = app.listen(PORT, () => console.log(`App conectada al puerto ${PORT}`));
process.on('SIGINT', () => {
    server.close();
    console.log('App finalizada');
});
