//getMediciones
const getMediciones = async (filtro = "todos")=>{
    let resp;
    if(filtro == "todos"){
        resp = await axios.get("api/mediciones/get");
    } else {
        resp = await axios.get(`api/mediciones/filtrar?filtro=${filtro}`);
    }
    return resp.data;
};

//crearMedicion
const crearMedicion = async(medicion)=>{
    let resp = await axios.post("api/mediciones/post", medicion, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

//descartarMedicion
const descartarMedicion = async(id)=>{
    try{
        let resp = await axios.post("api/mediciones/delete", {id}, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
}
