const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese una palabra: ', (palabra) => {
    const nueva = palabra.toUpperCase;
    console.log(nueva);
})

// Programa 1: Saludo con nombre y apellido
rl.question('Ingresa tu nombre: ', (nombre) => {
    rl.question('Ingresa tu apellido: ', (apellido) => {
      console.log(`Hola, ${nombre} ${apellido}!`);
      rl.close();
    });
  });

  // Programa 2: Contar caracteres
rl.question('Ingresa una cadena de texto: ', (cadena) => {
    console.log(`La longitud de la cadena es: ${cadena.length}`);
    rl.close();
  });

// Programa 3: Convertir a mayúsculas
rl.question('Ingresa una cadena de texto: ', (cadena) => {
    console.log(`La cadena en mayúsculas es: ${cadena.toUpperCase()}`);
    rl.close();
  });

  // Programa 4: Reemplazar una palabra específica
rl.question('Ingresa una frase: ', (frase) => {
    rl.question('Ingresa la palabra que deseas reemplazar: ', (palabraAntigua) => {
      rl.question('Ingresa la palabra nueva: ', (palabraNueva) => {
        const fraseNueva = frase.replace(palabraAntigua, palabraNueva);
        console.log(`La frase con la palabra reemplazada es: ${fraseNueva}`);
        rl.close();
      });
    });
  });

  // Programa 5: Extraer una subcadena
rl.question('Ingresa una cadena de texto: ', (cadena) => {
    rl.question('Ingresa la posición inicial: ', (inicio) => {
      rl.question('Ingresa la posición final: ', (fin) => {
        const subcadena = cadena.substring(parseInt(inicio), parseInt(fin));
        console.log(`La subcadena es: ${subcadena}`);
        rl.close();
      });
    });
  });

  // Programa 6: Contar el número de palabras
rl.question('Ingresa una frase: ', (frase) => {
    const palabras = frase.split(' ');
    console.log(`El número de palabras en la frase es: ${palabras.length}`);
    rl.close();
  });

  // Programa 7: Invertir una cadena
rl.question('Ingresa una cadena de texto: ', (cadena) => {
    const cadenaInvertida = cadena.split('').reverse().join('');
    console.log(`La cadena invertida es: ${cadenaInvertida}`);
    rl.close();
  });

  // Programa 8: Verificar si una palabra es un palíndromo
rl.question('Ingresa una palabra: ', (palabra) => {
    const palabraInvertida = palabra.split('').reverse().join('');
    if (palabra === palabraInvertida) {
      console.log('La palabra es un palíndromo.');
    } else {
      console.log('La palabra no es un palíndromo.');
    }
    rl.close();
  });

  // Programa 9: Contar el número de vocales
rl.question('Ingresa una palabra: ', (palabra) => {
    const vocales = palabra.match(/[aeiou]/gi);
    const numVocales = vocales ? vocales.length : 0;
    console.log(`El número de vocales en la palabra es: ${numVocales}`);
    rl.close();
  });

  // Programa 10: Capitalizar la primera letra de cada palabra
rl.question('Ingresa una frase: ', (frase) => {
    const palabras = frase.split(' ');
    const fraseCapitalizada = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
    console.log(`La frase con la primera letra de cada palabra capitalizada es: ${fraseCapitalizada}`);
    rl.close();
  });