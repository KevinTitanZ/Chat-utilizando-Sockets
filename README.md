# 💬 Chat en Tiempo Real con Sockets

**👨‍🎓 Nombre del estudiante:** _Tu Nombre Aquí_  
**📅 Fecha de entrega:** _DD/MM/AAAA_

---

## 📘 Introducción

Este proyecto consiste en la implementación de un **chat en tiempo real** utilizando `Node.js`, `Express` y `Socket.IO`.  
Su propósito es permitir la comunicación instantánea entre múltiples usuarios conectados a un mismo servidor.

El uso de **sockets** permite mantener una conexión abierta entre cliente y servidor, esencial para aplicaciones como chats, juegos multijugador, sistemas de notificación, etc.

---

## 📦 Repositorio Base

Repositorio original proporcionado por el docente:  
🔗 [https://github.com/paulosk8/webChat/tree/main](https://github.com/paulosk8/webChat/tree/main)

- **Rama principal:** Código inicial del proyecto.
- **Rama implementacion-chat:** Versión final como referencia.

Clonación del repositorio y creación de una nueva rama:

```bash
git clone https://github.com/paulosk8/webChat.git
cd webChat
git checkout -b mi-implementacion


## 🛠️ Implementación del Proyecto

### 🧱 Estructura General

- `index.js`: Servidor principal con configuración de Express y Socket.IO.
- `realTimeServer.js`: Manejador de eventos de socket.
- `routes/index.js`: Rutas del frontend (chat y registro).
- `public/js/register.js`: Captura el nombre del usuario desde un formulario.
- `public/js/script.js`: Lógica del cliente para enviar y recibir mensajes.
- `middlewares/isLoggedIn.js`: Middleware para validación de sesión por cookies.

---

### 🎨 Mejoras al Diseño

- Estilo tipo **WhatsApp** para diferenciar mensajes enviados y recibidos.
- Estilos **responsivos y modernos** con CSS.
- El **input del mensaje se limpia automáticamente** después de enviarlo.
- Se muestra la **hora del mensaje** y el **nombre del usuario**.

---

### ✨ Características Adicionales (Opcionales)

- Identificación del usuario mediante cookie (`username`).
- Alineación de mensajes tipo WhatsApp (izquierda/derecha).
- Colores distintos para mensajes propios y de otros usuarios.

---

## ▶️ Instrucciones de Ejecución

1. **Clona el repositorio:**

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio


Inicia el servidor:

bash
Copiar
Editar
node index.js
Abre el navegador en:
📍 http://localhost:3000


## 🖼️ Capturas de Pantalla

📸 A continuación, se muestran algunas capturas del funcionamiento del chat:

### 🧩 Interfaz del Chat

![Interfaz del chat](./screenshots/interfaz-chat.png)

### 💬 Mensajes tipo WhatsApp (enviados y recibidos)

![Mensajes WhatsApp style](./screenshots/mensajes-whatsapp.png)

---

## 🧠 Conclusiones

Durante el desarrollo de este proyecto aprendí a:

- Implementar un servidor de sockets con **Socket.IO**.
- Crear una interfaz en tiempo real funcional y moderna.
- Aplicar conceptos de **cookies**, **middleware** y **rutas en Express**.
- Diseñar una UI responsive al estilo **WhatsApp** para mejorar la experiencia de usuario.

---

## 😅 Dificultades encontradas

- Controlar el flujo de **cookies** para identificar quién envía cada mensaje.
- Aplicar **estilos condicionales** según el remitente del mensaje.
- Limpiar el input del mensaje automáticamente **sin recargar la página**.

---

## 📚 Referencias

- 🔗 [Socket.IO - Official Documentation](https://socket.io/docs/v4/)
- 🔗 [MDN Web Docs - Working with Cookies](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
- 🔗 [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 🔗 [WhatsApp UI Inspiration - Dribbble](https://dribbble.com/search/whatsapp)
