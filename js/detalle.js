const mascotas = [
    {
        id: 1,
        nombre: 'Max',
        especie: 'perro',
        edad: 'cachorro',
        tamaño: 'mediano',
        descripcion: 'Max es un cachorro juguetón y lleno de energía. Le encanta correr y jugar a la pelota. Es muy sociable con otros perros y personas.',
        foto: '../img/perro1.jpg',
        requisitos: ['Patio cercado', 'Tiempo para jugar y pasear diariamente', 'No apto para hogares con gatos']
    },
    {
        id: 2,
        nombre: 'Michi',
        especie: 'gato',
        edad: 'adulto',
        tamaño: 'pequeño',
        descripcion: 'Michi es un gato tranquilo y cariñoso. Disfruta de largas siestas al sol y de ser acariciado. Es ideal para un hogar tranquilo.',
        foto: '../img/gato1.jpg',
        requisitos: ['Hogar sin otros gatos', 'Acceso a ventanas para tomar el sol', 'Ambiente tranquilo']
    },
    {
        id: 3,
        nombre: 'Rocky',
        especie: 'perro',
        edad: 'joven',
        tamaño: 'grande',
        descripcion: 'Rocky es un perro joven y fuerte con un gran corazón. Es muy leal y protector. Necesita un dueño con experiencia.',
        foto: '../img/perro2.jpg',
        requisitos: ['Dueño con experiencia en perros grandes', 'Ejercicio diario vigoroso', 'Entrenamiento de obediencia continuo']
    },
    {
        id: 4,
        nombre: 'Luna',
        especie: 'gato',
        edad: 'cachorro',
        tamaño: 'pequeño',
        descripcion: 'Luna es una gatita curiosa y muy inteligente. Le encanta explorar cada rincón de la casa y jugar con juguetes interactivos.',
        foto: '../img/gato2.jpg',
        requisitos: ['Hogar seguro y a prueba de gatitos', 'Juguetes y estimulación mental', 'Paciencia durante su etapa de crecimiento']
    },
    {
        id: 5,
        nombre: 'Piolín',
        especie: 'ave',
        edad: 'joven',
        tamaño: 'pequeño',
        descripcion: 'Piolín es un canario cantor y alegre. Su canto ilumina las mañanas. Es fácil de cuidar y perfecto para principiantes.',
        foto: '../img/ave1.png',
        requisitos: ['Jaula espaciosa', 'Alimentación balanceada para canarios', 'Ambiente sin corrientes de aire']
    },
    {
        id: 6,
        nombre: 'Toby',
        especie: 'perro',
        edad: 'adulto',
        tamaño: 'pequeño',
        descripcion: 'Toby es un perro pequeño y muy cariñoso. Disfruta estar acompañado y es ideal para departamentos.',
        foto: '../img/perro3.png',
        requisitos: ['Paseos diarios cortos', 'Compañía frecuente', 'Entrenamiento básico']
    },
    {
        id: 7,
        nombre: 'Nala',
        especie: 'gato',
        edad: 'joven',
        tamaño: 'mediano',
        descripcion: 'Nala es una gata activa y juguetona. Le encanta trepar y observar desde lugares altos.',
        foto: '../img/gato3.png',
        requisitos: ['Rascadores', 'Espacios verticales', 'Tiempo de juego diario']
    },
    {
        id: 8,
        nombre: 'Bruno',
        especie: 'perro',
        edad: 'adulto',
        tamaño: 'grande',
        descripcion: 'Bruno es un perro noble y tranquilo. Se lleva bien con niños y es muy obediente.',
        foto: '../img/perro4.png',
        requisitos: ['Espacio amplio', 'Rutina estable', 'Visitas regulares al veterinario']
    },
    {
        id: 9,
        nombre: 'Kiwi',
        especie: 'ave',
        edad: 'adulto',
        tamaño: 'pequeño',
        descripcion: 'Kiwi es un periquito curioso y sociable. Aprende sonidos con facilidad y disfruta la interacción.',
        foto: '../img/ave2.png',
        requisitos: ['Compañía diaria', 'Juguetes para aves', 'Limpieza frecuente de la jaula']
    },
    {
        id: 10,
        nombre: 'Coco',
        especie: 'roedor',
        edad: 'joven',
        tamaño: 'pequeño',
        descripcion: 'Coco es un hámster activo durante la noche. Es ideal para observar y de bajo mantenimiento.',
        foto: '../img/roedor1.png',
        requisitos: ['Jaula con rueda', 'Rutina de limpieza', 'Manipulación suave']
    },
    {
        id: 11,
        nombre: 'Simba',
        especie: 'gato',
        edad: 'adulto',
        tamaño: 'grande',
        descripcion: 'Simba es un gato independiente pero muy leal. Disfruta la tranquilidad y los espacios amplios.',
        foto: '../img/gato4.png',
        requisitos: ['Espacio amplio', 'Cepillado regular', 'Ambiente sin estrés']
    },
    {
        id: 12,
        nombre: 'Daisy',
        especie: 'perro',
        edad: 'cachorro',
        tamaño: 'pequeño',
        descripcion: 'Daisy es una cachorra dulce y curiosa. Aprende rápido y se adapta fácilmente a nuevos entornos.',
        foto: '../img/perro5.png',
        requisitos: ['Entrenamiento temprano', 'Tiempo y paciencia', 'Socialización gradual']
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const detalleContenedor = document.getElementById('detalle-mascota-contenedor');

    const params = new URLSearchParams(window.location.search);
    const mascotaId = parseInt(params.get('id'));

    const mascota = mascotas.find(m => m.id === mascotaId);

    // aquí mostramos la info de la mascota
    if (mascota) {
        detalleContenedor.innerHTML = `
            <div class="row g-5">
                <div class="col-md-6">
                    <img src="${mascota.foto}" class="img-fluid rounded shadow-lg" alt="Foto de ${mascota.nombre}">
                </div>
                <div class="col-md-6">
                    <h1 class="display-5">${mascota.nombre}</h1>
                    <p class="lead">${mascota.descripcion}</p>
                    <ul class="list-group list-group-flush mb-4">
                        <li class="list-group-item"><strong>Especie:</strong> ${mascota.especie}</li>
                        <li class="list-group-item"><strong>Edad:</strong> ${mascota.edad}</li>
                        <li class="list-group-item"><strong>Tamaño:</strong> ${mascota.tamaño}</li>
                    </ul>

                    <h4 class="mt-4">Requisitos de Adopción</h4>
                    <ul class="list-unstyled">
                        ${mascota.requisitos.map(req => `<li><i class="bi bi-check-circle-fill text-success"></i> ${req}</li>`).join('')}
                    </ul>

                    <div class="d-grid mt-4">
                        <a href="postulacion.html?mascotaId=${mascota.id}" class="btn btn-success btn-lg">
                            <i class="bi bi-heart-fill"></i> Postularse para Adopción
                        </a>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Si no se encuentra la mascota, mostrar un mensaje de error
        detalleContenedor.innerHTML =
            '<div class="alert alert-danger text-center">Mascota no encontrada. Por favor, regresa al catálogo.</div>';
    }
});