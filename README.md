# 🎟️ Event Management API

API REST desarrollada con Node.js, Express y MongoDB que permite la gestión de usuarios, autenticación, creación de eventos y registro de participantes.

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express
* MongoDB
* TypeScript
* JWT (Autenticación)
* Bcrypt (Encriptación)
* Zod (Validaciones)

---

## 📁 Estructura del proyecto

El proyecto sigue una arquitectura modular por capas:

* **Routes** → Definición de endpoints
* **Controller** → Manejo de solicitudes HTTP
* **Service** → Lógica de negocio
* **Repository** → Acceso a base de datos

---

## 🔐 Autenticación

Se utiliza JWT para proteger rutas privadas.

* Registro de usuario
* Login con generación de token
* Middleware de autenticación

---

## 📦 Módulos

### 👤 Users

* Registro de usuarios
* Listado de usuarios

### 🔐 Auth

* Login
* Registro
* Generación de token

### 📅 Events

* Crear eventos
* Listar eventos

### 🎟️ Registrations

* Registro a eventos
* Consulta de participantes por evento

---

## 📌 Endpoints principales

### 🔐 Auth

* POST `/api/v1/auth/register`
* POST `/api/v1/auth/login`

### 👤 Users

* POST `/api/v1/users/register`
* GET `/api/v1/users`

### 📅 Events

* POST `/api/v1/events`
* GET `/api/v1/events`

### 🎟️ Registrations

* POST `/api/v1/registrations`
* GET `/api/v1/registrations/:eventId`

---

## ⚙️ Instalación

1. Clonar repositorio:

```bash
git clone https://github.com/TU-USUARIO/event-management-api.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno en `.env`:

```env
PORT=3000
MONGO_URI=tu_uri_de_mongo
MONGO_DB_NAME=nombre_db
JWT_SECRET=tu_secreto
```

4. Ejecutar el proyecto:

```bash
npm run dev
```

---

## 🧪 Pruebas

Se recomienda usar Postman para probar los endpoints.

1. Registrar usuario
2. Iniciar sesión
3. Copiar token
4. Usar Bearer Token en endpoints protegidos

---

## 🎯 Objetivo del proyecto

Este proyecto fue desarrollado con fines educativos para implementar una arquitectura backend escalable utilizando buenas prácticas como separación de responsabilidades y modularización.

---

## 👨‍💻 Autor

Desarrollado por Edwin Celis 🚀
