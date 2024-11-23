# FitMotion

Esta es una aplicación de fitness desarrollada con Vue, Vite, Pinia y Firebase. Permite gestionar ejercicios, realizar un seguimiento del progreso y personalizar la experiencia según las necesidades del usuario.

## Características principales

### Visualización de ejercicios
- Los usuarios pueden ver una lista completa de ejercicios organizados por niveles de intensidad.

### Gestión de ejercicios
- **Agregar ejercicios:** A través de un formulario modal, se pueden incorporar nuevos ejercicios a la lista.
- **Editar ejercicios:** Permite modificar los detalles de ejercicios existentes utilizando el mismo formulario modal.

### Seguimiento de progreso
- Los ejercicios pueden marcarse como completados, ayudando a llevar un registro del entrenamiento.

### Filtrado personalizado
- Filtra la lista de ejercicios por nivel de intensidad o categoría, ayudando a enfocarse en objetivos específicos.

### Conexión con Firebase
- La aplicación utiliza Firebase para almacenar y recuperar de forma segura toda la información relacionada con los ejercicios.

### Integración con Pinia
- **Gestión de estado:**
  - Almacena y gestiona una lista de ejercicios.
  - Permite agregar, editar y eliminar ejercicios.
- **Interacción con Firebase:**
  - Obtiene, guarda y elimina datos directamente desde la base de datos de Firebase.
- **Estado reactivo:**
  - Mantiene un estado actualizado de ejercicios, manejo de errores y carga en tiempo real.

### Routing
- Navegación estructurada con rutas para:
  - **Home** y **About**.
  - **Dynamic Routing** para mostrar información detallada sobre ejercicios específicos.

## Arquitectura basada en componentes

La aplicación sigue un diseño modular y basado en componentes para garantizar:
- **Reutilización:** Componentes como `ExerciseList`, `ExerciseForm` y `FilterDropdown` se pueden usar en diferentes partes de la aplicación.
- **Escalabilidad:** Fácil de extender o modificar sin impactar otras partes del sistema.
- **Mantenibilidad:** Estructura clara y organizada que facilita la depuración y actualización del código.
- **Reactividad:** Cada componente maneja su estado y reacciona a cambios de manera eficiente.
- **Colaboración:** Permite que varios desarrolladores trabajen simultáneamente en diferentes componentes.

## Tecnologías utilizadas

- **Vue.js:** Framework principal para la construcción de la interfaz de usuario.
- **Vite:** Herramienta para un desarrollo rápido y eficiente.
- **Pinia:** Gestión de estado avanzada.
- **Firebase:** Base de datos en tiempo real para almacenamiento de datos.
- **CSS:** Diseño y estilo responsivo.