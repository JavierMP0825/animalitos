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
    const formulario = document.getElementById('formulario-postulacion');
    const selectMascota = document.getElementById('mascota');

    // 1. Cargar las mascotas en el select
    function cargarMascotas() {
        selectMascota.innerHTML = '<option value="" selected disabled>Selecciona una mascota</option>'; // Opción por defecto
        mascotas.forEach(mascota => {
            const option = document.createElement('option');
            option.value = mascota.id;
            option.textContent = `${mascota.nombre} (${mascota.especie})`;
            selectMascota.appendChild(option);
        });
    }

    // 2. Pre-seleccionar la mascota si viene de la página de detalles
    function preseleccionarMascota() {
        const params = new URLSearchParams(window.location.search);
        const mascotaId = params.get('mascotaId');
        if (mascotaId) {
            selectMascota.value = mascotaId;
        }
    }

    // 3. Manejar el envío del formulario
    formulario.addEventListener('submit', (event) => {
        
        event.preventDefault();
        event.stopPropagation();

        
        if (!formulario.checkValidity()) {
            formulario.classList.add('was-validated');
            return;
        }

        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mascotaId = parseInt(selectMascota.value);
        const experiencia = document.getElementById('experiencia').value;
        const domicilio = document.getElementById('domicilio').value;

        
        const postulaciones = JSON.parse(localStorage.getItem('postulaciones')) || [];

        // Validar que no haya una postulación duplicada
        const yaPostulo = postulaciones.some(p => p.email === email && p.mascotaId === mascotaId);
        if (yaPostulo) {
            alert('Error: Ya te has postulado para adoptar a esta mascota.');
            return;
        }

        // Crear la nueva postulación
        const nuevaPostulacion = {
            id: Date.now(), 
            nombreAdoptante: nombre,
            email: email,
            mascotaId: mascotaId,
            experiencia: experiencia,
            domicilioUrl: domicilio,
            estado: 'En revisión' 
        };

        // Agregar la nueva postulación y guardarla en localStorage
        postulaciones.push(nuevaPostulacion);
        localStorage.setItem('postulaciones', JSON.stringify(postulaciones));

        
        alert('¡Postulación enviada con éxito! Gracias por tu interés.');
        window.location.href = 'postulaciones.html';
    });

    
    cargarMascotas();
    preseleccionarMascota();
});