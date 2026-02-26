// Simulación de una base de datos de mascotas
const mascotas = [
    {
        id: 1,
        nombre: 'Max',
        especie: 'perro',
        edad: 'cachorro',
        tamaño: 'mediano',
        descripcion: 'Max es un cachorro juguetón y lleno de energía. Le encanta correr y jugar a la pelota. Es muy sociable con otros perros y personas.',
        foto: 'img/perro1.jpg',
        requisitos: ['Patio cercado', 'Tiempo para jugar y pasear diariamente', 'No apto para hogares con gatos']
    },
    {
        id: 2,
        nombre: 'Michi',
        especie: 'gato',
        edad: 'adulto',
        tamaño: 'pequeño',
        descripcion: 'Michi es un gato tranquilo y cariñoso. Disfruta de largas siestas al sol y de ser acariciado. Es ideal para un hogar tranquilo.',
        foto: 'img/gato1.jpg',
        requisitos: ['Hogar sin otros gatos', 'Acceso a ventanas para tomar el sol', 'Ambiente tranquilo']
    },
    {
        id: 3,
        nombre: 'Rocky',
        especie: 'perro',
        edad: 'joven',
        tamaño: 'grande',
        descripcion: 'Rocky es un perro joven y fuerte con un gran corazón. Es muy leal y protector. Necesita un dueño con experiencia.',
        foto: 'img/perro2.jpg',
        requisitos: ['Dueño con experiencia en perros grandes', 'Ejercicio diario vigoroso', 'Entrenamiento de obediencia continuo']
    },
    {
        id: 4,
        nombre: 'Luna',
        especie: 'gato',
        edad: 'cachorro',
        tamaño: 'pequeño',
        descripcion: 'Luna es una gatita curiosa y muy inteligente. Le encanta explorar cada rincón de la casa y jugar con juguetes interactivos.',
        foto: 'img/gato2.jpg',
        requisitos: ['Hogar seguro y a prueba de gatitos', 'Juguetes y estimulación mental', 'Paciencia durante su etapa de crecimiento']
    },
    
    {
        id: 5,
        nombre: 'Piolín',
        especie: 'ave',
        edad: 'joven',
        tamaño: 'pequeño',
        descripcion: 'Piolín es un canario cantor y alegre. Su canto ilumina las mañanas. Es fácil de cuidar y perfecto para principiantes.',
        foto: 'img/ave1.png', // Deberás agregar esta imagen en tu carpeta img
        requisitos: ['Jaula espaciosa', 'Alimentación balanceada para canarios', 'Ambiente sin corrientes de aire']
    },
    {
        id: 6,
        nombre: 'Toby',
        especie: 'perro',
        edad: 'adulto',
        tamaño: 'pequeño',
        descripcion: 'Toby es un perro pequeño y muy cariñoso. Disfruta estar acompañado y es ideal para departamentos.',
        foto: 'img/perro3.png',
        requisitos: ['Paseos diarios cortos', 'Compañía frecuente', 'Entrenamiento básico']
    },
    {
        id: 7,
        nombre: 'Nala',
        especie: 'gato',
        edad: 'joven',
        tamaño: 'mediano',
        descripcion: 'Nala es una gata activa y juguetona. Le encanta trepar y observar desde lugares altos.',
        foto: 'img/gato3.png',
        requisitos: ['Rascadores', 'Espacios verticales', 'Tiempo de juego diario']
    },
    {
        id: 8,
        nombre: 'Bruno',
        especie: 'perro',
        edad: 'adulto',
        tamaño: 'grande',
        descripcion: 'Bruno es un perro noble y tranquilo. Se lleva bien con niños y es muy obediente.',
        foto: 'img/perro4.png',
        requisitos: ['Espacio amplio', 'Rutina estable', 'Visitas regulares al veterinario']
    },
    {
        id: 9,
        nombre: 'Kiwi',
        especie: 'ave',
        edad: 'adulto',
        tamaño: 'pequeño',
        descripcion: 'Kiwi es un periquito curioso y sociable. Aprende sonidos con facilidad y disfruta la interacción.',
        foto: 'img/ave2.png',
        requisitos: ['Compañía diaria', 'Juguetes para aves', 'Limpieza frecuente de la jaula']
    },
    {
        id: 10,
        nombre: 'Coco',
        especie: 'roedor',
        edad: 'joven',
        tamaño: 'pequeño',
        descripcion: 'Coco es un hámster activo durante la noche. Es ideal para observar y de bajo mantenimiento.',
        foto: 'img/roedor1.png',
        requisitos: ['Jaula con rueda', 'Rutina de limpieza', 'Manipulación suave']
    },
    {
        id: 11,
        nombre: 'Simba',
        especie: 'gato',
        edad: 'adulto',
        tamaño: 'grande',
        descripcion: 'Simba es un gato independiente pero muy leal. Disfruta la tranquilidad y los espacios amplios.',
        foto: 'img/gato4.png',
        requisitos: ['Espacio amplio', 'Cepillado regular', 'Ambiente sin estrés']
    },
    {
        id: 12,
        nombre: 'Daisy',
        especie: 'perro',
        edad: 'cachorro',
        tamaño: 'pequeño',
        descripcion: 'Daisy es una cachorra dulce y curiosa. Aprende rápido y se adapta fácilmente a nuevos entornos.',
        foto: 'img/perro5.png',
        requisitos: ['Entrenamiento temprano', 'Tiempo y paciencia', 'Socialización gradual']
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const catalogoContenedor = document.getElementById('catalogo-mascotas');

    function mostrarMascotas(listaMascotas) {
        catalogoContenedor.innerHTML = ''; 

        if (listaMascotas.length === 0) {
            catalogoContenedor.innerHTML = '<p class="text-center">No se encontraron mascotas que coincidan con la búsqueda.</p>';
            return;
        }

        listaMascotas.forEach(mascota => {
            const card = document.createElement('div');
            card.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
            card.innerHTML = `
                <div class="card h-100 shadow">
                    <img src="${mascota.foto}" class="card-img-top" alt="Foto de ${mascota.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${mascota.nombre}</h5>
                        <p class="card-text">Especie: ${mascota.especie}</p>
                        <p class="card-text">Edad: ${mascota.edad}</p>
                        <p class="card-text">Tamaño: ${mascota.tamaño}</p>
                        <a href="html/detalle.html?id=${mascota.id}" class="btn btn-success">Ver Detalles</a>
                    </div>
                </div>
            `;
            catalogoContenedor.appendChild(card);
        });
    }

    // Mostrar todas las mascotas al cargar la página
    mostrarMascotas(mascotas);

    // Lógica de filtros y búsqueda
    const filtroEspecie = document.getElementById('filtro-especie');
    const filtroEdad = document.getElementById('filtro-edad');
    const filtrotamaño = document.getElementById('filtro-tamaño');
    const busquedaNombre = document.getElementById('busqueda-nombre');
    const btnBuscar = document.getElementById('btn-buscar');

    function aplicarFiltros() {
        let mascotasFiltradas = mascotas;
        //filtros
        //especie
        const especie = filtroEspecie.value;
        if (especie) {
            mascotasFiltradas = mascotasFiltradas.filter(m => m.especie === especie);
        }

        //edad
        const edad = filtroEdad.value;
        if (edad) {
            mascotasFiltradas = mascotasFiltradas.filter(m => m.edad === edad);
        }

        //tamaño
        const tamaño = filtrotamaño.value;
        if (tamaño) {
            mascotasFiltradas = mascotasFiltradas.filter(m => m.tamaño === tamaño);
        }

        //nombre (búsqueda)
        const nombre = busquedaNombre.value.trim().toLowerCase();
        if (nombre) {
            mascotasFiltradas = mascotasFiltradas.filter(m => m.nombre.toLowerCase().includes(nombre));
        }

        mostrarMascotas(mascotasFiltradas);
    }

    
    filtroEspecie.addEventListener('change', aplicarFiltros);
    filtroEdad.addEventListener('change', aplicarFiltros);
    filtrotamaño.addEventListener('change', aplicarFiltros);
    btnBuscar.addEventListener('click', aplicarFiltros);
    //por si queremos que se active cuando presione enter 
    busquedaNombre.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            aplicarFiltros();
        }
    });
});