# ProyectoFinal

Aquí os presentó la base de datos de mi aplicación de venta de móviles para el proyecto final.

# Inicializar servicio mysql

npm run dev

 # Herramientas

-JAVASCRIPT

-NODE

-NODEMON

-SQL

-SEQUELIZE

-EXPRESS JS

-POSTMAN

# Descripción

Lo primero que he hecho es crear una modelo para cada tabla, de este modo, al crear las tablas sabremos que parámetros necesitamos.
A continuación he generado otra tabla con las mismas características la cual va a ser migrada a la base de datos y la que nos servirá de guía para hacer los "seeaders".
En la tercera tabla he utilizado las características de las dos tablas anteriores para darle los parámetros correspondientes.
Y para finalizar he creado los "endpoinds" necesarios que requería el proyecto.

# Requisitos previos y funcionamiento

El primer paso para poner en funcionamiento el proyecto es clonarlo en nuestro local, siempre con el NODE instalado.

 git clone 'url-del-repositorio'
El segundo paso es instalar las dependencias con el siguiente comando:

npm init

npm install

npm update

npm run dev

npm run start

npm install cors jsonwebtoken bcrypt

sequelize model:generate --name user --attributes name:string, password:string, email:string

sequelize db:create

sequelize db:migrate

sequelize db:migrate:undo

sequelize db:migrate:undo:all

sequelize seed:generate --name demo-user

sequelize db:seed:all

sequelize db:seed:undo

sequelize db:seed:undo:all

# End-points

Register
POST - localhost:3001/auth/nuevousuario - 

{ "nombre": "Juan", "email": "Juan@email.com",  "contraseña": "contraseña" }

En caso de querer iniciar sesion posteriormente un usuario adim para que pueda realizar ciertas consultas, introducir en el body:

{ "nombre": "Juan", "email": "Juan@email.com",  "contraseña": "contraseña", "id_rol": 1 }

Login

POST - localhost:3001/auth/login - { "email": "Juan@email.com",  "contraseña": "contraseña" }

Home

GET - localhost:3001

Usuarios

Get - localhost:3001/Usuarios/update/:email

Compras

get - localhost:3001/compras/

Post - localhost:3001/compras/nuevocompras -

{"fecha_pedido: "2022-10-04", "emailUsuario":"JuanG@gmail.com", "id_movil": "5"}

Moviles

GET - localhost:3001/movils/

GET - localhost:3001/movils/:id


 # Relacion entre tablas


 # Autor:

 Juan Genovard Caballero.