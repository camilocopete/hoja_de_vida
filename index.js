const ejercicio = () => {
    var boots = [1, 2, 3, 4];
    let camp = {'Hola': 1, 'Mundo': 2};
    const bootscamp = () => {
        return "Hola este es mi valor";
    }

    console.log(boots, camp, bootscamp);

    // Example of using forEach loop
    boots.forEach((boot) => {
        console.log(boot);
    });

    // Example of using map to transform array elements
    const doubledBoots = boots.map((boot) => {
        return boot * 2;
    });
    console.log(doubledBoots);

    // Example of using filter to filter array elements
    const evenBoots = boots.filter((boot) => {
        return boot % 2 === 0;
    });
    console.log(evenBoots);

    // Example of using reduce to calculate a sum
    const sum = boots.reduce((accumulator, boot) => {
        return accumulator + boot;
    }, 0);
    console.log(sum);

    // Example of using for loop
    for (let i = 0; i < boots.length; i++) {
        console.log(boots[i]);
    }

    // Example of using for...of loop
    for (const boot of boots) {
        console.log(boot);
    }

    let personas = {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 30,
        ciudad: 'Bogotá'
    };

    for (const key in personas) {
        console.log(key+" " +personas[key]);
    }

    Object.keys(personas).forEach((key) => {
        console.log(key+" " +personas[key]);
    });

    Object.values(personas).forEach((value) => {
        console.log(value);
    });

    Object.entries(personas).forEach(([key, value]) => {
        console.log(key+" " +value);
    });
}


const ejercicio2 = () => { 
    const students = [
        {
            name: 'John',
            age: 16,
            grade: 10,
            promedioNotas: 85,
            matematicas: 70,
            ciencias: 80,
            historia: 65
        },
        {
            name: 'Camila',
            age: 15,
            grade: 11,
            promedioNotas: 77,
            matematicas: 92,
            ciencias: 70,
            historia: 55
        },
        {
            name: 'Fernanda',
            age: 15,
            grade: 8,
            promedioNotas: 92,
            matematicas: 65,
            ciencias: 77,
            historia: 45
        },
        {
            name: 'Wendy',
            age: 15,
            grade: 7,
            promedioNotas: 65,
            matematicas: 90,
            ciencias: 100,
            historia: 76
        },
        {
            name: 'Jose',
            age: 15,
            grade: 10,
            promedioNotas: 70,
            matematicas: 56,
            ciencias: 45,
            historia: 95
        },
        {
            name: 'Coco',
            age: 15,
            grade: 9,
            promedioNotas: 100,
            matematicas: 90,
            ciencias: 80,
            historia: 85
        },
  
    ];


    const promedioNotas = students.map((student) => student.promedioNotas);
    console.log(promedioNotas);
    const promedioMatematicas = students.map((student) => student.matematicas);
    console.log(promedioMatematicas);

    const promedioCiencias = students.map((student) => student.ciencias);
    const promedioHistoria = students.map((student) => student.historia);
    console.log(promedioHistoria);
    

    const sumPromedio = promedioNotas.reduce((accumulator, promedio) => accumulator + promedio, 0);
    console.log(sumPromedio);
    const sumMatematicas = promedioMatematicas.reduce((accumulator, promedio) => accumulator + promedio, 0);
    console.log(sumMatematicas);
    const sumCiencias = promedioCiencias.reduce((accumulator, promedio) => accumulator + promedio, 0);
    console.log(sumCiencias);
    const sumHistoria = promedioHistoria.reduce((accumulator, promedio) => accumulator + promedio, 0);
    console.log(sumHistoria);

    const averagePromedio = sumPromedio / promedioNotas.length;
    const averageMatematicas = sumMatematicas / promedioMatematicas.length;
    const averageCiencias = sumCiencias / promedioCiencias.length;
    const averageHistoria = sumHistoria / promedioHistoria.length;

    console.table('matematicas ' + averageMatematicas, 'ciencias ' + averageCiencias, 'historia ' + averageHistoria,'total ' + averagePromedio );
 }


// ejercicio2();


 const ejercicio3 = () => {
        const books = [ { 
            titulo: 'The Great Gatsby',
            autor: 'F. Scott Fitzgerald', 
            año: 1925, 
            genero: 'Classic'
        }, 
        { 
            titulo: 'To Kill a Mockingbird',
            autor: 'Harper Lee', 
            año: 1960, 
            genero: 'Classic' 
        }, 
        { 
            titulo: '1984', 
            autor: 'George Orwell', 
            año: 1949, 
            genero: 'Dystopian' 
        }, 
        { 
            titulo: 'Pride and Prejudice', 
            autor: 'Jane Austen', 
            año: 1813, 
            genero: 'Romance' 
        }, 
        { 
            titulo: 'The Catcher in the Rye', 
            autor: 'J.D. Salinger', 
            año: 1951, 
            genero: 'Coming-of-age' 
        },
    ];

    const sortedBooks = books.sort((a, b) => b.año - a.año);
    console.log(sortedBooks);
    
    const oldestBook = sortedBooks[sortedBooks.length - 1];
    console.log("El libro más antiguo es:", oldestBook.titulo);
    console.log("Año de publicación:", oldestBook.año);


 };

 ejercicio3();