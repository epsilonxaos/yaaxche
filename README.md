# Documentación basica del sitio

## Requerimientos

Por preferencia y comodidad se usa la herramienta de [Wamp.net](https://wamp.net/) para gestionar todo el apartado de php y apache, en caso de usar otras herramientas como Xampp, Mamp, etc., se debera realizar las configuraciones necesarias para la **Configuración de sitio**.

1. Php >= 8.1.x
2. Apache >= 2.4..x
3. Composer >= 2.5
4. Node >= 18.x
5. Npm >= 9.8.x
6. MySql

## Comienzos

### Instalación

Ejecutar los siguientes comandos:

`composer install`

`cp .env.example .env`

`php artisan key:generate`

`npm install`

### Configuración de sitio

> :warning: **Warning:** _Configuración para Wamp.net_

1. Ingresar en el menú a _Sites_
2. Presionar boton _Create Site_
3. Ingresar los siguientes datos
    - **Domain Name:** Direccion del proyecto local (Predeterminado: sitio.dev)
    - **Domain Aliases:** www
    - **Document root:** Ruta en donde se encuentra el proyecto, debe apuntar a la carpeta _site/public_
    - **DataBase:** Mysql
    - **Web Server:** Apache
    - **Php version:** php >= 8.1.x <br>

#### Configurar Base de datos

Crear una base de datos y configurar los siguientes parametros:

```
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

```

Ejeuctar los siguientes comandos, estos cargaran las tablas y valores iniciales

Crea las tablas
`php artisan migrate`

Ingresa datos iniciales a las tablas
`php artisan db:seed`

Para obtener informacion sobre el usuario admin inicial, revisar el archivo AdminSeeder en Database > Seeder

#### Configurar los siguientes parametros **.env**

Ejemplo:

```
APP_URL=https://host.mx/

SERVER_HOST=host.mx
SERVER_HTTPS_KEY=file.key
SERVER_HTTPS_CERT/file.crt

DB_CONNECTION=mysql
DB_HOST= //Colocar host
DB_PORT= // Colocar puerto
DB_DATABASE=database
DB_USERNAME= //Colocar usuario
DB_PASSWORD=//Colocar contraseña

MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=3b8cf6fa23b356
MAIL_PASSWORD=e47cc8718a034c
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="email@send.com"
MAIL_FROM_NAME="${APP_NAME}"


```

Finalmente ejcutar el comando

-   `npm run dev`: Compilación modo desarrollo _habilita el WS de vite_
-   `npm run build`: Compilación modo producción _generá los archivos necesarios del servidor_
