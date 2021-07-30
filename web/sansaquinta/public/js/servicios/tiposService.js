const getTiposMedida = async ()=>{
    let resultado = await axios.get("api/tipos/get");
    return resultado.data;
};
