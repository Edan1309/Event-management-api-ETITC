# EventHub API

API REST desarrollada con **Node.js**, **Express**, **TypeScript** y **MongoDB** para la gestión de eventos, usuarios, registros, feedback y notificaciones.

---

# 🚀 Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- MongoDB
- JWT Authentication
- Swagger
- Zod
- Bcrypt
- Cors
- Helmet
- Compression

---

# 📁 Estructura del proyecto

```bash
src/
│
├── api/
│   └── v1/
│       └── index.ts
│
├── config/
│   ├── database.ts
│   ├── env.ts
│   └── openapi.ts
│
├── libs/
│   ├── bcrypt.ts
│   └── jwt.ts
│
├── middlewares/
│   ├── auth.middleware.ts
│   ├── error.middleware.ts
│   └── validate.middleware.ts
│
├── modules/
│   ├── auth/
│   ├── users/
│   ├── events/
│   ├── registrations/
│   ├── feedback/
│   └── notifications/
│
├── app.ts
└── server.ts
```

---

# 🔐 Autenticación

La API utiliza autenticación JWT.

Para acceder a rutas protegidas:

1. Registrar usuario
2. Hacer login
3. Copiar token
4. Usar Bearer Token

Ejemplo:

```http
Authorization: Bearer TOKEN
```

---

# 📦 Instalación

## Clonar repositorio

```bash
git clone https://github.com/TU-USUARIO/eventhub-api.git
```

---

## Entrar al proyecto

```bash
cd eventhub-api
```

---

## Instalar dependencias

```bash
npm install
```

---

# ⚙️ Variables de entorno

Crear archivo `.env`

```env
PORT=3000

MONGO_URI=TU_URI_MONGODB

MONGO_DB_NAME=eventsdb

JWT_SECRET=secretkey

JWT_EXPIRATION=1d
```

---

# ▶️ Ejecutar proyecto

```bash
npm run dev
```

Servidor:

```bash
http://localhost:3000
```

---

# 📚 Swagger

Documentación disponible en:

```bash
http://localhost:3000/api-docs
```

---

# 📌 Módulos implementados

## 🔑 Auth

- Register
- Login

## 👤 Users

- Create
- Get
- Update
- Delete

## 📅 Events

- Create
- Get
- Update
- Delete

## 📝 Registrations

- Register user to event
- Get registrations
- Update
- Delete

## ⭐ Feedback

- Create feedback
- Get feedbacks
- Update
- Delete

## 🔔 Notifications

- Create notification
- Get notifications
- Update
- Delete

---

# 🧪 Ejemplo Login

## Endpoint

```http
POST /api/v1/auth/login
```

## Body

```json
{
  "email": "edwin@test.com",
  "password": "123456"
}
```

---

# 🧪 Ejemplo Crear Evento

## Endpoint

```http
POST /api/v1/events
```

## Headers

```http
Authorization: Bearer TOKEN
```

## Body

```json
{
  "title": "Evento Node",
  "description": "Evento de prueba",
  "date": "2026-05-14",
  "userId": "6a059d56e766ccb68b5cdb1b"
}
```

---

# 🛡️ Seguridad implementada

- JWT Authentication
- Password Hashing con Bcrypt
- Helmet
- Validación con Zod
- Manejo de errores global

---

# 👨‍💻 Autor

Edwin Celis

Proyecto académico desarrollado para prácticas de API REST con Node.js y MongoDB.
