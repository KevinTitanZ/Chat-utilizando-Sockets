#  Chat en Tiempo Real con Sockets

**Estudiante:** _Ordoñez Cabrera Kevin Lenin_  
**Fecha de entrega:** _30/05/2025_

---

## 📘 Introducción

Este proyecto consiste en la creación de un **chat en tiempo real** utilizando `Node.js`, `Express` y `Socket.IO`.  
Su propósito es permitir la comunicación instantánea entre múltiples usuarios conectados a un mismo servidor.

Gracias a los **sockets**, se mantiene una conexión abierta entre el cliente y el servidor, lo cual es esencial para aplicaciones como chats, juegos multijugador, sistemas de notificación, entre otros.

---

## 📦 Repositorio Base

Repositorio original proporcionado por el docente:  
🔗 [https://github.com/paulosk8/webChat/tree/main](https://github.com/paulosk8/webChat/tree/main)

- **Rama principal:** Código base del proyecto.  
- **Rama `implementacion-chat`:** Versión final de referencia.

Clona el repositorio y crea tu propia rama de trabajo:


git clone https://github.com/paulosk8/webChat.git


## 🛠️ Implementación del Proyecto

### 🧱 Estructura General

- `index.js`: Servidor principal con configuración de Express y Socket.IO.
- `realTimeServer.js`: Manejador de eventos de socket.
- `routes/index.js`: Rutas del frontend (chat y registro).
- `public/js/register.js`: Captura el nombre del usuario desde un formulario.
- `public/js/script.js`: Lógica del cliente para enviar y recibir mensajes.
- `middlewares/isLoggedIn.js`: Middleware para validar sesiones mediante cookies.

![Estructura General](https://imgur.com/JqEszKI.png)

---

### 🎨 Mejoras de Diseño

- Estilo tipo WhatsApp para diferenciar mensajes enviados y recibidos.
- Diseño moderno y responsive con CSS.
- El input del mensaje se limpia automáticamente después de enviarlo.
- Se muestra la hora del mensaje y el nombre del usuario.


![Mejoras de Diseño 2](https://i.imgur.com/hvkYIQC.png)

---

### ✨ Funcionalidades Adicionales (Opcionales)

- Identificación del usuario mediante cookie (`username`).
- Alineación de mensajes: izquierda (otros usuarios) y derecha (usuario actual).

![Funcionalidad 1](https://i.imgur.com/GQSftTY.png)  
![Funcionalidad 2](https://i.imgur.com/XtpHffQ.png)

- Colores personalizados según el remitente del mensaje.

![Colores personalizados](https://i.imgur.com/LJd1Wqv.png)


▶️ Instrucciones de Ejecución
Clona el repositorio:

- git clone https://github.com/KevinTitanZ/Chat-utilizando-Sockets.git
- cd webChat-implementacion-chat
- Inicia el servidor:
npm start

- Abre el navegador en:

📍 http://localhost:3000

🖼️ Capturas de Pantalla
- Registro de Usuario:
![Mejoras de Diseño 3](https://i.imgur.com/hvkYIQC.png)

- Interfaz del Chat:
![Diseño 3](https://i.imgur.com/QZE2MXO.png)

- Mensajes estilo WhatsApp:
![Diseño 4](https://i.imgur.com/kn3HjD7.png)

---
**Conclusiones**


Durante el desarrollo de este proyecto aprendí a:

Implementar un servidor de sockets utilizando Socket.IO.

Crear una interfaz de chat moderna y funcional en tiempo real.

Usar cookies, middleware y gestionar rutas con Express.

Diseñar una experiencia de usuario inspirada en la interfaz de WhatsApp.

**Dificultades Encontradas**


Gestión del flujo de cookies para identificar a cada usuario.

Aplicación de estilos condicionales según el remitente.

Limpieza automática del campo de entrada sin recargar la página.

**Referencias**


https://github.com/paulosk8/webChat/tree/main


https://github.com/KevinTitanZ/Chat-utilizando-Sockets