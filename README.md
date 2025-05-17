# NodeLearnU

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

> Proyecto universitario para aprendizaje de Node.js con PostgreSQL

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Base de Datos](#base-de-datos)
- [API Endpoints](#api-endpoints)
- [Pruebas con Postman](#pruebas-con-postman)

## 📝 Descripción

NodeLearnU es un proyecto de práctica universitaria utilizando NODEjs, express, sequelize y PostgressBd

## 🗂️ Estructura del Proyecto

```
NodeLearnU/
├── .vscode/                # Configuración de Visual Studio Code
├── SQL/                    # Scripts de base de datos
│   ├── PostgresStructureDb.sql  # Estructura de la base de datos
│   └── seeds.sql           # Datos iniciales para la base de datos
├── postman/                # Colección de Postman para pruebas de API
├── src/                    # Código fuente de la aplicación
├── .gitattributes          # Configuración de atributos de Git
├── .gitignore              # Archivos y directorios ignorados por Git
├── package-lock.json       # Versiones exactas de dependencias
├── package.json            # Configuración del proyecto y dependencias
└── README.md               # Este archivo
```

## 🔧 Requisitos Previos

- [Node.js](https://nodejs.org/) (v20.x o superior)
- [PostgreSQL](https://www.postgresql.org/) (v12.x o superior)
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
