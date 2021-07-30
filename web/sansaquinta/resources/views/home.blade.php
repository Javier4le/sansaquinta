@extends("layouts.master")

@section("contenido")

<h1>Hola, este es el home vacío</h1>

@endsection
<!-- Esto define el contenido de la seccion javascript del master -->
@section("javascript")
    <script src="{{asset('js/servicios/medicionesService.js')}}"></script>
    <script src="{{asset('js/servicios/tiposService.js')}}"></script>
    <script src="{{asset('js/home.js')}}"></script>
@endsection
