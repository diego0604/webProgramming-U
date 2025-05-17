-- Insertar datos en la tabla roles
INSERT INTO roles (nombre) VALUES 
    ('Administrador'), 
    ('Usuario');

-- Insertar un usuario
INSERT INTO usuarios (nombre, email, password, rol_id) VALUES 
    ('Juan Pérez', 'juan@example.com', 'password123', 1);

-- Insertar un proyecto
INSERT INTO proyectos (nombre, descripcion, administrador_id) VALUES 
    ('Proyecto A', 'Descripción del Proyecto A', 1);

-- Asignar un usuario a un proyecto
INSERT INTO usuarios_proyectos (usuario_id, proyecto_id) VALUES 
    (1, 1);

-- Asignar permisos a roles
INSERT INTO roles_permisos (rol_id, permiso_id) VALUES 
    (1, 1), 
    (1, 2), 
    (2, 3);
