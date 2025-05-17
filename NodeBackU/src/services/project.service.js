const Project = require('../models/project.model');
const User = require('../models/user.model');

// Se exporta el servicio para crear nuevos proyectos
exports.createProject = async (nombre, descripcion, administrador_id) => {
    try {
        const newProject = await Project.create({ // Crea al usuario con los datos dados
            nombre,
            descripcion,
            administrador_id
        });

        return newProject; // Devuelve al usuario creado
    } catch (err) {
        throw new Error(`Error al crear el proyecto: ${err.message}`);
    }
};

// Se exporta el servicio para obtener todos los proyectos, con un administrador y sus usuarios asociados
exports.getAllProjects = async () => {
    try {
        const projects = await Project.findAll({
            include: [
                {
                    model: User,
                    as: 'administrador',
                    attributes: ['id', 'nombre', 'email']
                },
                {
                    model: User,
                    as: 'usuarios',
                    attributes: ['id', 'nombre', 'email'],
                    through: { attributes: [] }
                }
            ]
        });
        return projects;
    } catch (err) {
        throw new Error(`Error al obtener los proyectos: ${err.message}`);
    }
};

// Se exporta el servicio para obtener los proyectos por ID
exports.getProjectById = async (id) => {
    try {
        const project = await Project.findByPk(id);
        if (!project) {
            throw new Error('Proyecto no encontrado');
        }
        return project;
    } catch (err) {
        throw new Error(`Error al obtener el proyecto: ${err.message}`);
    }
};


// Se exporta el servicio para asociar usuarios a un proyecto mediante IDs
exports.assingUsersToProject = async (data) => {
    // Buscar el proyecto por su ID
    const project = await Project.findByPk(data.projectId);
    if (!project) throw new Error('Proyecto no encontrado');

    // Buscar todos los usuarios con los IDs proporcionados
    const users = await User.findAll({ where: { id: data.userIds }});
    if (users.length !== data.userIds.length) throw new Error('Algunos usuarios no fueron encontrados');

    // Asociar los usuarios al proyecto
    await project.addUsuarios(users); // Esto está bien para agregar varios usuarios

    // Recargar el proyecto y obtener los usuarios asociados
    return await project.reload({
        include: [
            {
                model: User,
                as: 'usuarios', // Relación definida
                attributes: ['id', 'nombre', 'email'], // Campos a incluir
                through: { attributes: [] } // Sin atributos del modelo de relación
            }
        ],
    });
};


// Se exporta el servicio para desasociar usuarios de un proyecto mediante IDs
exports.removeUserFromProject = async (data) => {
    const project = await Project.findByPk(data.projectId);
    if (!project) 
        throw new Error('Proyecto no encontrado'); // Verifica que el proyecto exista

    const user = await User.findByPk(data.userId);
    if (!user) 
        throw new Error('Usuario no encontrado'); // Verifica que usuario exista

    await project.removeUsuario(user); // Mediante el "removeUsuario" lo desasocia
};


// Se exporta el servicio para actualizar los datos de un proyecto
exports.updateProject = async (id, nombre, descripcion, administrador_id) => {
    try {
        const project = await Project.findByPk(id);
        if (!project) {
            throw new Error('Proyecto no encontrado');
        }

        await project.update({ // Actualiza el proyecto con los nuevo datos dados mediante el update
            nombre,
            descripcion,
            administrador_id,
        });

        return project; // Devuelve el objeto con las modificaciones
    } catch (err) {
        throw new Error(`Error al actualizar el proyecto: ${err.message}`);
    }
};


// Se exporta el servicio para eliminar un proyecto por id
exports.deleteProject = async (id) => {
    try {
        const project = await Project.findByPk(id);
        if (!project) {
            throw new Error('Proyecto no encontrado');
        }
        
        await project.destroy();
        return { message: 'Proyecto eliminado con éxito' };
    } catch (err) {
        throw new Error(`Error al eliminar el proyecto: ${err.message}`);
    }
};