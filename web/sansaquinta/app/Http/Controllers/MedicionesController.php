<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Medicion;

class MedicionesController extends Controller
{
    public function getTiposMedida(){
        $tipos = array();
        $tipos[] = "Kilowatts";
        $tipos[] = "Watts";
        $tipos[] = "Temperatura";
        return $tipos;
    }

    public function getMediciones(){
        $mediciones = Medicion::all();
        return $mediciones;
    }

    public function filtrarMediciones(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $mediciones = Medicion::where("tipo", "=", $filtro)->get();
        return $mediciones;
    }

    public function crearMedicion(Request $request){
        $input = $request->all();
        $medicion = new Medicion();
        $medicion->fecha = $input["fecha"];
        $medicion->hora = $input["hora"];
        $medicion->medidor = $input["medidor"];
        $medicion->direccion = $input["direccion"];
        $medicion->valor = $input["valor"];
        $medicion->tipo = $input["tipo"];
        $medicion->save();
        return $medicion;
    }

    public function descartarMedicion(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $medicion = Medicion::findOrFail($id);
        $medicion->delete();
        return "ok";
    }
}
