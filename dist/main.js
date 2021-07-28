"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function start() {
    const PORT = process.env.PORT || 5050;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('/api/');
    const config = new swagger_1.DocumentBuilder().setTitle('art backend').setDescription('Documentation api').build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => console.log(`server work on port = ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map