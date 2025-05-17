


Click AskDeepwiki for total documentation

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/diego0604/webProgramming-U)
# WebProgramming-U

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
> Proyecto universitario para aprendizaje de Node.js con PostgreSQL y Angular


## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)

<details>
<summary><b>Backend (NodeBackU)</b></summary>

- [Base de Datos](#-base-de-datos)
- [API Endpoints](#-api-endpoints)
- [Pruebas con Postman](#-pruebas-con-postman)
- [Arquitectura del Backend](#-arquitectura-del-backend)

</details>

<details>
<summary><b>Frontend (angular-practice-U)</b></summary>

- [Estructura del Frontend](#-estructura-del-frontend)
- [Componentes](#-componentes)
- [Servicios](#-servicios)
- [Rutas](#-rutas)
- [Integración con Backend](#-integración-con-backend)

</details>
# 📝 Descripción

WebProgramming-U es un proyecto universitario full-stack que combina:

- **NodeBackU**: Backend desarrollado con Node.js, Express, Sequelize y PostgreSQL
- **angular-practice-U**: Frontend desarrollado con Angular y TypeScript

Este proyecto sirve como plataforma de aprendizaje para el desarrollo web moderno, implementando buenas prácticas en arquitectura de software, seguridad, y comunicación cliente-servidor.

## 🗂️ Estructura del Proyecto

El repositorio está organizado en dos carpetas principales:

```
webProgramming-U/
├── NodeBackU/                # Backend con Node.js, Express y PostgreSQL
│   ├── .vscode/              # Configuración de Visual Studio Code
│   ├── SQL/                  # Scripts de base de datos
│   │   ├── PostgresStructureDb.sql  # Estructura de la base de datos
│   │   └── seeds.sql         # Datos iniciales para la base de datos
│   ├── postman/              # Colección de Postman para pruebas de API
│   ├── src/                  # Código fuente del backend
│   │   ├── config/           # Configuración de la aplicación
│   │   ├── controllers/      # Controladores de la API
│   │   ├── middlewares/      # Middlewares personalizados
│   │   ├── models/           # Modelos de datos (Sequelize)
│   │   ├── routes/           # Definición de rutas de la API
│   │   ├── services/         # Servicios de negocio
│   │   └── utils/            # Utilidades y helpers
│   ├── .gitignore            # Archivos ignorados por Git
│   ├── package.json          # Dependencias del backend
│   └── README.md             # Documentación del backend
│
├── angular-practice-U/       # Frontend con Angular
│   ├── src/                  # Código fuente del frontend
│   │   ├── app/              # Componentes, servicios y módulos
│   │   │   ├── components/   # Componentes reutilizables
│   │   │   ├── pages/        # Páginas de la aplicación
│   │   │   ├── services/     # Servicios para comunicación con API
│   │   │   ├── models/       # Interfaces y modelos de datos
│   │   │   └── guards/       # Guards para protección de rutas
│   │   ├── assets/           # Recursos estáticos
│   │   └── environments/     # Configuración de entornos
│   ├── angular.json          # Configuración de Angular
│   ├── package.json          # Dependencias del frontend
│   └── README.md             # Documentación del frontend
│
└── README.md                 # Este archivo
```

## 🔧 Requisitos Previos

- [Node.js](https://nodejs.org/) (v20.x o superior)
- [PostgreSQL](https://www.postgresql.org/) (v12.x o superior)
- [Angular CLI](https://angular.io/cli) (v16.x o superior)
- [Postman](https://www.postman.com/) (para pruebas de API)


## 🚀 Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/diego0604/NodeLearnU.git
   cd NodeLearnU
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura la base de datos (ver sección [Base de Datos](#base-de-datos))

4. Inicia la aplicación:
   ```bash
   npm start
   ```

## 💾 Base de Datos

### Configuración

1. Crea una base de datos en PostgreSQL:
   ```bash
   createdb nodelearnudb
   ```

2. Ejecuta el script de estructura:
   ```bash
    SQL/PostgresStructureDb.sql
   ```

3. Carga los datos iniciales:
   ```bash
    SQL/seeds.sql
   ```

### Estructura de la Base de Datos

El archivo `PostgresStructureDb.sql` contiene la definición de todas las tablas necesarias para la aplicación. La estructura incluye:

- Tablas para gestión de usuarios
- Tablas para almacenamiento de datos de la aplicación
- Relaciones entre entidades
- Restricciones y claves foráneas

### Datos de Prueba

El archivo `seeds.sql` proporciona datos iniciales para probar la aplicación, incluyendo:

- Usuarios de ejemplo
- Datos de muestra para todas las tablas
- Relaciones entre los datos de prueba

## 📡 API Endpoints

La API proporciona los siguientes endpoints para gestionar usuarios, proyectos y autenticación:

### Autenticación

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST   | /api/v1/auth/login | Iniciar sesión y obtener token JWT |

### Usuarios

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET    | /api/v1/users | Obtener todos los usuarios |
| GET    | /api/v1/users/:id | Obtener un usuario específico por ID |
| POST   | /api/v1/users/create | Crear un nuevo usuario |
| PUT    | /api/v1/users/update/:id | Actualizar un usuario existente |
| DELETE | /api/v1/users/delete/:id | Eliminar un usuario |
| GET    | /api/v1/users/rol/:id | Obtener usuarios por rol |

### Proyectos

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET    | /api/v1/projects | Obtener todos los proyectos |
| GET    | /api/v1/projects/:id | Obtener un proyecto específico |
| POST   | /api/v1/projects/create | Crear un nuevo proyecto |
| PUT    | /api/v1/projects/update/:id | Actualizar un proyecto existente |
| DELETE | /api/v1/projects/delete/:id | Eliminar un proyecto |
| POST   | /api/v1/projects/associate | Asociar usuarios a un proyecto |
| DELETE | /api/v1/projects/disassociate | Desasociar usuarios de un proyecto |
## 🧪 Pruebas con Postman

### Importar Colección

1. Abre Postman
2. Haz clic en "Import"
3. Selecciona el archivo de colección en la carpeta `postman/`
4. La colección "API" aparecerá en tu lista de colecciones

### Configuración de Variables

La colección utiliza las siguientes variables que puedes configurar:

- `token`: Token de autenticación (se establece automáticamente después del login)

### Ejecutar Pruebas

1. Primero ejecuta la solicitud "Login" para obtener un token de autenticación
2. Luego puedes ejecutar cualquier otra solicitud de la colección
3. Para ejecutar todas las pruebas, haz clic derecho en la colección y selecciona "Run collection"
