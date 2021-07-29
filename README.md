## Pasos por cada entidad:
1. Crear migracion
2. Crear Modelo
3. Crear Controller
4. Agregar al controller las operaciones CRUD (INSERT, DELETE, BLA BLA)
5. Agregar controller a las routes (api.php)
6. Crear interfaz blade
7. Crear archivo service
8. Agregar al archivo service las llamadas al controller
9. Agregar el codigo de un archivo js con el mismo nombre de la vista


## Tipos de datos y modificadores existentes
``
https://laravel.com/docs/8.x/migrations#available-column-types
``


### Primero

## Para desplegar con docker
``
   docker-compose build
   docker-compose up -d
``


### Segundo

## Para crear un proyecto de cero:
# En el terminal de la imagen de laravel
``
   composer create-project laravel/laravel nombreApp
``


### Tercero

## Para error de permisos carpeta storage en windows
# En el terminal de la imagen de laravel
``
   cd "nombreProyecto"
   chmod -R 777 storage
``


### Cuarto

### Base de datos
## Para actualizar la base de datos
``
    php artisan migrate
``


### Quinto

## Para crear una migracion de una tabla
``
    php artisan make:migration nombre_de_la_migracion --create=nombre_tabla_siempre_en_plural
``

## Para instalar (recien se descarga de github, cuando el proyecto ya existe):
``
    composer install
``


### Sexto
### Para Laravel:

## Para crear controladores (dentro del contenedor):
## En los controladores metemos la logica de la aplicacion (el acceso a base de datos, etc)
``
    php artisan make:controller NombreController
``


### Septimo

## Para crear un modelo (un modelo es un archivo que permite efectuar operaciones con la base de datos)
## Importante siempre el nombre en SINGULAR
``
    php artisan make:model Nombre
``