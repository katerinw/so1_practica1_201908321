# so1_practica1_201908321
Sistemas operativos 1 segundo semestre 2022

# DOCUMENTACION

## Manual Tecnico.

- DataBase.

    Para la base de datos se uso Mongo DB, donde se tiene una base de datos llamada CRUD de autos y una coleccion llamada logs. por defecto corre en el 27017.

    ![mongo](https://victorroblesweb.es/wp-content/uploads/2016/11/mongodb.png)
- Backend.

    Para el backend se utilizo el lenguaje Golang, donde se utiliza gorilla mux para crear un servidor y hacer hacer las diferentes consultas, tambien se realiza una conexion a la base de datos. este se levanta en el  puerto 8000.

    ![go](https://mug-it.org.ar/multimedios//imgs/17582_620.jpg)
- Frontend.

    Para el frontent se utlizo React js y Semantic-ui para los estilos, este se levanta en el puerto 3000.

    ![react](https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png)
- DOCKER.

    Se uso docker para realizar el uso de containers, donde se uso DOCKER HUB donde se subieron nuestras imagenes, las cuales fue backend y frontend y docker compose para lenvantar los 3 containers a la vez, el cual es el de mongo, el backend y el frontend y por ultimo se uso docker volumnes para la persistencia de datos.

    ![docker](https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png)    
