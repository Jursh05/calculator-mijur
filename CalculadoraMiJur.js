const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let bienvenidaMostrada = false;

// Logica para la funcion Sumar
function sumar(a, b) {
    const resultado = a + b;
    console.log('El resultado de la suma es:', resultado);
    setTimeout(() => {
        console.log(''); // Deja un espacio
        mostrarMenu();
        rl.question('Selecciona una: ', manejarOpcion);
    }, 1000); // Espera 1 segundo antes de mostrar el menú
}

// Logica para la funcion Restar
function restar(a, b) {
    const resultado = a - b;
    console.log('El resultado de la resta es:', resultado);
    setTimeout(() => {
        console.log(''); // Deja un espacio
        mostrarMenu();
        rl.question('Selecciona una: ', manejarOpcion);
    }, 1000); // Espera 1 segundo antes de mostrar el menú
}

// Logica para la funcion Multiplicar
function multiplicar(a, b) {
    const resultado = a * b;
    console.log('El resultado de la multiplicación es:', resultado);
    setTimeout(() => {
        console.log(''); // Deja un espacio
        mostrarMenu();
        rl.question('Selecciona una: ', manejarOpcion);
    }, 1000); // Espera 1 segundo antes de mostrar el menú
}

// Logica para la funcion Dividir
function dividir(a, b) {
    if (b === 0) {
        console.log('Error: No se puede dividir por cero.');
    } else {
        const resultado = a / b;
        console.log('El resultado de la división es:', resultado);
    }
    setTimeout(() => {
        console.log(''); // Deja un espacio
        mostrarMenu();
        rl.question('Selecciona una: ', manejarOpcion);
    }, 1000); // Espera 1 segundo antes de mostrar el menú
}

// Logica para el menu de configuracion
function mostrarMenu() {
    if (!bienvenidaMostrada) {
        console.log('Bienvenido!');
        bienvenidaMostrada = true;
    }
    console.log('Las opciones del menú son las siguientes:');
    console.log('1. Sumar');
    console.log('2. Restar');
    console.log('3. Multiplicar');
    console.log('4. Dividir');
    console.log('5. Salir');
    
}

function manejarOpcion(opcion) {
    switch (opcion) {
        case '1':
            rl.question('Ingrese el valor de A: ', (inputA) => {
                const a = parseFloat(inputA);
                rl.question('Ingrese el valor de B: ', (inputB) => {
                    const b = parseFloat(inputB);
                    sumar(a, b);
                });
            });
            break;
        case '2':
            rl.question('Ingrese el valor de A: ', (inputA) => {
                const a = parseFloat(inputA);
                rl.question('Ingrese el valor de B: ', (inputB) => {
                    const b = parseFloat(inputB);
                    restar(a, b);
                });
            });
            break;
        case '3':
            rl.question('Ingrese el valor de A: ', (inputA) => {
                const a = parseFloat(inputA);
                rl.question('Ingrese el valor de B: ', (inputB) => {
                    const b = parseFloat(inputB);
                    multiplicar(a, b);
                });
            });
            break;
        case '4':
            rl.question('Ingrese el valor de A: ', (inputA) => {
                const a = parseFloat(inputA);
                rl.question('Ingrese el valor de B: ', (inputB) => {
                    const b = parseFloat(inputB);
                    dividir(a, b);
                });
            });
            break;
        case '5':
            console.log('Saliendo de la calculadora...');
            console.log('');
            rl.close();
            break;
        default:
            console.log('Opción no válida.');
            setTimeout(() => {
                console.log(''); // Deja un espacio
                mostrarMenu();
                rl.question('Selecciona una: ', manejarOpcion);
            }, 1000); // Espera 1 segundo antes de mostrar el menú
            break;
    }
}

mostrarMenu();
rl.question('Selecciona una: ', manejarOpcion);
