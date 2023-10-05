function mostrarFecha() {
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const anio = document.getElementById('anio').value;

    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
        alert("Una de los datos no tiene numero")
    } else {
        let date = new Date(anio, mes - 1, dia)
        const meses = [
            'Enero', 'Febrero', 'Marzo', 'Abril',
            'Mayo', 'Junio', 'Julio', 'Agosto',
            'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        const dias = [
            'Domingo', 'Lunes', 'Martes', 'Miércoles',
            'Jueves', 'Viernes', 'Sábado'
          ];

let mes = date.getMonth();
let dia = date.getDay()







        console.log(date);

    }










}
