 ## Boom 🧸

Boom es una plataforma web diseñada para promover la movilidad sostenible y ágil, enfocándose en la oferta de bicicletas y soluciones ecológicas para el transporte en ciudades de congestion vehicular. Este proyecto combina un diseño moderno y responsivo con una experiencia de usuario optimizada, adaptándose a diferentes tamaños de pantalla para garantizar accesibilidad desde cualquier dispositivo.


## API Reference

#### City Bikes API


  GET  https://api.citybik.es/v2/

#### Get item


  GET https://api.citybik.es/v2/network{city}



## 🛠 Tecnologias
- **`HTML5`**
- **`React Vite`**
- **`Axios`**
- **`Redux`**
- **`React Router Dom`**
- **`Tailwind`**
- **`Material UI Icons`**

## Authors

- [@ksofia05](https://github.com/ksofia05)
- [@Issblann](https://github.com/Issblann)
- [@Mileana0910](https://github.com/Mileana0910)
- [@anamariablnc](https://github.com/anamariablnc)
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| whiteDark | ![#E9E9E9](https://via.placeholder.com/10/E9E9E9?text=+) #E9E9E9 |
| blueLight | ![#AFD8F2](https://via.placeholder.com/10/AFD8F2?text=+) #AFD8F2 |
| blueMedium | ![#5289B5](https://via.placeholder.com/10/5289B5?text=+) #5289B5 |
| blueDark | ![#1F3541](https://via.placeholder.com/10/1F3541?text=+) #1F3541 |



## Deployment

### Clonar el repositorio

Para clonar este repositorio en tu máquina local, usa el siguiente comando:

`git clone https://github.com/Issblann/boom-md.git`


### Explicación:

1. **Clonar el repositorio**: Usas el comando `git clone` para copiar el repositorio de GitHub a tu máquina local. La URL debe ser la del repositorio público o privado que quieras clonar.
   
2. **Instalar dependencias**: Una vez que se ha clonado el repositorio, es necesario instalar las dependencias del proyecto (como las librerías de Node.js) con el comando `npm install`.

3. **Desplegar el proyecto**: Aquí usas `npm run deploy`, lo cual depende de cómo hayas configurado tu proyecto para el despliegue (esto puede incluir configurar un script en el `package.json` para hacer el despliegue a un servidor o a un servicio de hosting).


## Carpetas


### Descripción de Carpetas y Archivos

- **`public/`**: Contiene los archivos estáticos que se sirven tal cual como están.
  
- **`src/`**: Es el directorio que contiene todo el código fuente de la aplicación.
  - **`components/`**: Contiene los componentes reutilizables de la aplicación, como `Home`, `About us`, etc.
  - **`App.js`**: El componente raíz de la aplicación, donde se organizan los componentes principales.

- **`.gitignore`**: Especifica qué archivos o directorios deben ser ignorados por Git (como dependencias o archivos temporales).

- **`package.json`**: Este archivo contiene los metadatos del proyecto, como las dependencias, los scripts de construcción y los comandos de ejecución.