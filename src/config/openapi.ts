import path from "path";
import { fileURLToPath } from "url";
import swaggerJsdoc from "swagger-jsdoc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const openApiSpec = swaggerJsdoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API EVENTS',
            version: '1.0.0',
            description: 'Documentación de endpoints de la API'
        },
        servers: [
            {
                // URL local para desarrollo
                url: 'http://localhost:3000',
                description: 'Servidor local'
            },
            {
                url:'https://event-management-api-etitc.onrender.com/',
                description: 'servidor web'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: 'Ingresa el token JWT en formato bearer'
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },
    // Es importante verificar que la ruta relativa sea correcta respecto a este archivo
    apis: [
        path.join(__dirname, '../modules/**/*.routes.{ts,js}')
    ]
});