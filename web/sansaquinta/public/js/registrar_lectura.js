
const cargarTiposMedida = async()=>{
    let tipos = await getTiposMedida();
    let tipoSelect = document.querySelector("#tipo-select");
    tipos.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        tipoSelect.appendChild(option);
    });
};

document.addEventListener("DOMContentLoaded", ()=>{
    cargarTiposMedida();
});


document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let fecha = document.querySelector("#fecha-txt").value.trim();
    let hora = document.querySelector("#hora-txt").value.trim();
    let medidor = document.querySelector("#medidor-select").value.trim();
    let direccion = document.querySelector("#direccion-txt").value.trim();
    let valor = document.querySelector("#valor-txt").value.trim();
    let tipo = document.querySelector("#tipo-select").value.trim();


    let errores = [];

    // if(nombre === ""){
    //     errores.push("Debe ingresar un nombre");
    // } else {
    //     //Validar si la consola existe en el sistema
    //     let mediciones = await getMediciones();
    //     let medicionEncontrada = mediciones.find(c=>c.nombre.toLowerCase() === nombre.toLowerCase());
    //     if(medicionEncontrada != undefined){
    //         errores.push("La lectura ya existe");
    //     }
    // }

    if (valor<1){
        errores.push("Valor debe ser mayor a 1");
    }else if (valor>500){
        errores.push("Valor debe ser menor a 500");
    }else if(hora===""){
        errores.push ("Debe ingresar una hora");
    }else if(hora.length!=5 || hora.charAt(2)!=':'){
        errores.push("Debe ingresar un fomato válido (HH:MM)");
    }

    if(errores.length == 0){
        let medicion = { fecha, hora, medidor, direccion, valor, tipo };
        let res = await crearMedicion(medicion);
        await Swal.fire("Lectura Registrada", "Lectura registrada exitosamente", "info");
        window.location.href = "mediciones_existentes";
    } else {
        Swal.fire({
            title: "Errores de validación",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});
