
export const conectarCliente = ( cliente , io ) => {

    const usuario = new Usuario( cliente.id );
    usuariosConectados.agregar( usuario );

}


export const desconectar = ( cliente, io) => {

    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');

        usuariosConectados.borrarUsuario( cliente.id );

        io.emit('usuarios-activos', usuariosConectados.getLista()  );

    });

}


// Escuchar solicitud amistad
export const  solicitud = ( cliente, io ) => {

    cliente.on('solicitud-amistad', (  payload  ) => {

        console.log('Notificacion recibida', payload );

        io.emit('solicitud amistad', payload );

    });

}


// Obtener Usuarios
export const obtenerUsuarios = ( cliente, io) => {

    cliente.on('obtener-usuarios', () => {

        io.to( cliente.id ).emit('usuarios-activos', usuariosConectados.getLista()  );
        
    });

}
