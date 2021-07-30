const cargarTiposMedida = async ()=>{
    let fitroCbx = document.querySelector("#filtro-cbx");
    let tipos = await getTiposMedida();
    tipos.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        option.value = m;
        fitroCbx.appendChild(option);
    });
};

const iniciarDescartar = async function(){
    let id = this.idMedicion;
    let resp = await Swal.fire({title:"Está seguro?", text:"Esta operación es irreversible", icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        if(await descartarMedicion(id)){
            let mediciones = await getMediciones();
            cargarTabla(mediciones);
            Swal.fire("Lectura Descartada", "Lectura descartada exitosamente", "info");
        } else {
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    } else {
        Swal.fire("Cancelado", "Cancelado a petición del usuario", "info");
    }
};

const cargarTabla = (mediciones)=>{
    let tbody = document.querySelector("#tbody-medicion");
    tbody.innerHTML = "";
    for(let i=0; i < mediciones.length; ++i){

        let tr = document.createElement("tr");

        let tdFecha = document.createElement("td");
        tdFecha.innerText = mediciones[i].fecha;
        let tdHora = document.createElement("td");
        tdHora.innerText = mediciones[i].hora;
        let tdMedidor = document.createElement("td");
        tdMedidor.innerText = mediciones[i].medidor;
        let tdDireccion = document.createElement("td");
        tdDireccion.innerText = mediciones[i].direccion;
        let tdValor = document.createElement("td");
        tdValor.innerText = mediciones[i].valor;
        let tdTipo = document.createElement("td");
        tdTipo.innerText = mediciones[i].tipo;
        let tdAcciones = document.createElement("td");

        let botonDescartar = document.createElement("button");
        botonDescartar.innerText = "Descartar";
        botonDescartar.classList.add("btn","btn-danger");
        botonDescartar.idMedicion = mediciones[i].id;
        botonDescartar.addEventListener("click", iniciarDescartar);
        tdAcciones.appendChild(botonDescartar);

        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdDireccion);
        tr.appendChild(tdValor);
        tr.appendChild(tdTipo);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};

document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let mediciones = await getMediciones(filtro);
    cargarTabla(mediciones);
});

document.addEventListener("DOMContentLoaded", async ()=>{
    await cargarTiposMedida();
    let mediciones = await getMediciones();
    cargarTabla(mediciones);
});
