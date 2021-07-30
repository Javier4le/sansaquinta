<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MedicionesController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("tipos/get", [MedicionesController::class, "getTiposMedida"]);
Route::get("mediciones/get", [MedicionesController::class, "getMediciones"]);
Route::get("mediciones/filtrar", [MedicionesController::class, "filtrarMediciones"]);

Route::post("mediciones/post", [MedicionesController::class, "crearMedicion"]);
Route::post("mediciones/delete", [MedicionesController::class, "descartarMedicion"]);
