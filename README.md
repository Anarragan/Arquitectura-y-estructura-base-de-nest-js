# Arquitectura y estructura base de NestJS

Este proyecto es un ejemplo sencillo para entender la arquitectura y estructura básica de una aplicación NestJS. El objetivo es mostrar cómo se organizan los módulos, controladores y servicios, utilizando un saludo como ejemplo práctico.

---

## ¿Qué es NestJS?

NestJS es un framework para construir aplicaciones Node.js escalables y mantenibles, basado en TypeScript y con una arquitectura modular inspirada en Angular.

---

## Estructura del proyecto

```
arquitectura/
│
├── src/
│   ├── app.controller.ts        # Controlador principal
│   ├── app.service.ts           # Servicio principal
│   ├── app.module.ts            # Módulo raíz de la aplicación
│   ├── main.ts                  # Punto de entrada de la app
│   └── saludo/
│       ├── saludo.controller.ts # Controlador de saludo
│       └── saludo.service.ts    # Servicio de saludo
│
├── test/                        # Pruebas e2e
├── package.json                 # Dependencias y scripts
└── ...otros archivos de config
```

---

## ¿Qué hace este ejemplo?

- Expone una ruta `/saludo` que responde con un mensaje de saludo.
- El flujo es:
  1. El **controlador** recibe la petición HTTP.
  2. El controlador llama al **servicio** correspondiente.
  3. El servicio retorna el mensaje de saludo.
  4. El controlador responde al cliente con ese mensaje.

---

## Flujo de la arquitectura básica

1. **Módulo (`app.module.ts`)**  
   Registra los controladores y servicios que forman parte de la aplicación.

2. **Controlador (`saludo.controller.ts`)**  
   Define la ruta `/saludo` y gestiona la petición GET.

3. **Servicio (`saludo.service.ts`)**  
   Contiene la lógica para generar el mensaje de saludo.

---

## ¿Cómo iniciar el proyecto?

1. **Instala las dependencias:**
   ```bash
   npm install
   ```

2. **Ejecuta la aplicación:**
   ```bash
   npm run start
   ```

3. **Accede a la ruta de saludo:**
   - Abre tu navegador o usa Postman para ir a:  
     `http://localhost:3000/saludo`

   - Deberías ver la respuesta:  
     `¡Hola desde el servicio Saludo!`

---

## Comandos útiles de NestJS CLI

- Crear un servicio:  
  `nest generate service saludo`
- Crear un controlador:  
  `nest generate controller saludo`

---

## Referencias

- [NestJS Documentation](https://docs.nestjs.com/)