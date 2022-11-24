class User {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor});
    }

    getBookNames() {
        const arr = [];
        for(let i = 0; i < this.libros.length; i++) {
            arr.push(this.libros[i].nombre);
        }
        return arr;
    }

}

const Juan = new User("Juan", "Gonzalez", [
    {nombre: "La Selección", autor:"Kiera Cass"},
    {nombre: "Hush Hush", autor:"Becca Fitzpatrick"}
], ["Zeus", "Pelusa", "Hachi", "Kira"]);

console.log(Juan.getFullName());
Juan.addMascota("Sirius");
console.log(Juan.countMascotas());
Juan.addBook("Crónica de una muerte anunciada", "Gabriel García Márquez");
console.log(Juan.getBookNames());