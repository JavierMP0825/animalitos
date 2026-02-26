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
    const tablaBody = document.getElementById('tabla-postulaciones-body');
    const btnExportar = document.getElementById('btn-exportar-txt');

    let postulaciones = JSON.parse(localStorage.getItem('postulaciones')) || [];

    function getBadgeClassForEstado(estado) {
        switch (estado) {
            case 'Aprobada': return 'bg-success';
            case 'Rechazada': return 'bg-danger';
            case 'En revisión':
            default: return 'bg-warning';
        }
    }

    function cargarPostulaciones() {
        tablaBody.innerHTML = ''; // Limpiar tabla

        if (postulaciones.length === 0) {
            tablaBody.innerHTML = '<tr><td colspan="5" class="text-center">No hay postulaciones para mostrar.</td></tr>';
            actualizarContadores();
            return;
        }

        postulaciones.forEach(postulacion => {
            const mascota = mascotas.find(m => m.id === postulacion.mascotaId);
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td data-label="ID">${postulacion.id}</td>
                <td data-label="Adoptante">${postulacion.nombreAdoptante}</td>
                <td data-label="Mascota">${mascota ? mascota.nombre : 'Mascota no encontrada'}</td>
                <td data-label="Estado"><span class="badge ${getBadgeClassForEstado(postulacion.estado)}">${postulacion.estado}</span></td>
                <td data-label="Acciones">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                            Cambiar Estado
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" data-id="${postulacion.id}" data-estado="En revisión">En revisión</a></li>
                            <li><a class="dropdown-item" href="#" data-id="${postulacion.id}" data-estado="Aprobada">Aprobada</a></li>
                            <li><a class="dropdown-item" href="#" data-id="${postulacion.id}" data-estado="Rechazada">Rechazada</a></li>
                        </ul>
                    </div>
                </td>
            `;
            tablaBody.appendChild(fila);
        });

        actualizarContadores();
        agregarListenersDeEstado();
    }

    function actualizarContadores() {
        const contadores = { perro: 0, gato: 0, ave: 0 };
        const postulacionesAprobadas = postulaciones.filter(p => p.estado === 'Aprobada');

        postulacionesAprobadas.forEach(p => {
            const mascota = mascotas.find(m => m.id === p.mascotaId);
            if (mascota && contadores.hasOwnProperty(mascota.especie)) {
                contadores[mascota.especie]++;
            }
        });

        document.getElementById('contador-perros').textContent = contadores.perro;
        document.getElementById('contador-gatos').textContent = contadores.gato;
        document.getElementById('contador-aves').textContent = contadores.ave;
    }

    function agregarListenersDeEstado() {
        const links = document.querySelectorAll('.dropdown-item');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const postulacionId = parseInt(e.target.dataset.id);
                const nuevoEstado = e.target.dataset.estado;
                
                // Actualizar el estado en el arreglo
                const index = postulaciones.findIndex(p => p.id === postulacionId);
                if (index !== -1) {
                    postulaciones[index].estado = nuevoEstado;
                }

                // Guardar en localStorage y recargar la tabla
                localStorage.setItem('postulaciones', JSON.stringify(postulaciones));
                cargarPostulaciones();
            });
        });
    }

    function exportarTXT() {
        let contenido = "AdoptaYA - Registro de Postulaciones\n";
        contenido += "-------------------------------------\n\n";

        postulaciones.forEach(p => {
            const mascota = mascotas.find(m => m.id === p.mascotaId);
            contenido += `ID: ${p.id}\n`;
            contenido += `Adoptante: ${p.nombreAdoptante}\n`;
            if (mascota) {
                contenido += `Mascota: ${mascota.nombre} (${mascota.especie}, ${mascota.edad})\n`;
            }
            contenido += `Estado: ${p.estado}\n`;
            contenido += "-------------------------------------\n\n";
        });

        contenido += `Total de postulaciones realizadas: ${postulaciones.length}\n`;

        const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'postulaciones.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    btnExportar.addEventListener('click', exportarTXT);
    cargarPostulaciones(); // Carga inicial
});