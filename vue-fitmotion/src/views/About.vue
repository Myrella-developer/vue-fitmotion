<template>
  <div>
    <h2>Este código implementa una aplicación de fitness con las siguientes características:</h2>
    <ul>
      <li><strong>Visualización de ejercicios:</strong> Los usuarios pueden ver una lista completa de ejercicios,
        organizados por niveles de intensidad.</li>
      <li><strong>Gestión de ejercicios:</strong>
        <ul>
          <li><strong>Agregar nuevos ejercicios:</strong> Se pueden incorporar nuevos ejercicios a la lista a través de
            un formulario modal.</li>
          <li><strong>Editar ejercicios existentes:</strong> Los ejercicios ya registrados se pueden modificar
            utilizando el mismo formulario modal.</li>
        </ul>
      </li>
      <li><strong>Seguimiento de progreso:</strong> Los ejercicios pueden marcarse como completados para llevar un
        registro del entrenamiento.</li>
      <li><strong>Filtrado personalizado:</strong> La lista de ejercicios se puede filtrar según el nivel de intensidad,
        lo que permite enfocarse en objetivos específicos.</li>
      <hr>

      <li><strong>API - Firebase:</strong> La aplicación se conecta a una base de datos de Firebase para
        almacenar y recuperar de forma segura toda la información relacionada con los ejercicios.</li>
      <li><strong>Pinia:</strong>
        <ul>
          <li>Gestión de ejercicios:
            <ul>
              <li>Almacena una lista de ejercicios.</li>
              <li>Permite agregar nuevos ejercicios.</li>
              <li>Facilita la edición de ejercicios existentes.</li>
              <li>Permite eliminar ejercicios.</li>
            </ul>
          </li>
          <li>Interacción con Firebase:
            <ul>
              <li>Obtiene los ejercicios de una base de datos Firebase.</li>
              <li>Guarda los cambios en los ejercicios en Firebase.</li>
              <li>Elimina ejercicios de Firebase.</li>
            </ul>
          </li>
          <li>Estado reactivo:
            <ul>
              <li>Mantiene un estado actualizado de los ejercicios, la carga y los errores.</li>
              <li>Los cambios en el estado se reflejan automáticamente en la interfaz de usuario.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li> 
        <strong>Routing:</strong>
        <ul>
          <li>Routing para Home y About.</li>
          <li>Dynamic Routing para ampliar información de ejercicios.</li>
        </ul>
      </li>
    </ul>

    <!-- NUEVA SECCIÓN -->
    <h3>Arquitectura basada en componentes: Ventajas y motivos</h3>
    <p>
      La aplicación está diseñada en componentes para garantizar un <strong>código modular, reutilizable y mantenible</strong>.
      Esta estructura permite dividir la funcionalidad de la aplicación en piezas pequeñas, independientes y específicas,
      lo que facilita el desarrollo y la colaboración en equipo.
    </p>
    <p>
      <strong>Ventajas clave:</strong>
    </p>
    <ul>
      <li><strong>Reutilización:</strong> Los componentes como <code>ExerciseList</code>, <code>ExerciseForm</code> y 
        <code>FilterDropdown</code> pueden ser utilizados en diferentes partes de la aplicación sin duplicar código.</li>
      <li><strong>Escalabilidad:</strong> Al trabajar con componentes, es más sencillo agregar nuevas funcionalidades o modificar
        las existentes sin afectar otras partes del sistema.</li>
      <li><strong>Mantenibilidad:</strong> La separación lógica hace que el código sea más fácil de leer, depurar y actualizar,
        especialmente en proyectos de mayor tamaño.</li>
      <li><strong>Reactividad:</strong> Cada componente puede manejar su propio estado y reaccionar a los cambios de forma eficiente,
        lo que mejora la experiencia del usuario y el rendimiento de la aplicación.</li>
      <li><strong>Colaboración:</strong> Los desarrolladores pueden trabajar en diferentes componentes al mismo tiempo, reduciendo
        conflictos y acelerando el desarrollo.</li>
    </ul>
    <p>
      Por estas razones, el enfoque basado en componentes es una práctica recomendada en frameworks como Vue.js, Angular o React, 
      y es ideal para construir aplicaciones dinámicas como esta.
    </p>
    
    <h3>Estructura de carpetas</h3>
    <img src="../assets/carpetas.jpg" alt="estructura carpetas">
  </div>
</template>

<script>

</script>
<style scoped>
/* Estilos para el componente About.vue */

/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilos globales */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.6;
  padding: 20px;
}

/* Títulos principales */
h2 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.2rem; 
}

h3 {
  color: #e67e22;
  margin-top: 30px;
  font-size: 1.1rem; 
  font-weight: bold;
  text-transform: uppercase;
}

/* Párrafos */
p {
  margin-bottom: 20px;
  font-size: 1rem;
}

/* Listas */
ul {
  list-style-type: disc;
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}

strong {
  color: #3498db;
}

/* Estilo para las imágenes */
img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-top: 15px;
}

/* Sección principal */
div {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Estilos para los elementos de la lista */
li > ul {
  margin-top: 10px;
  margin-left: 20px;
}

/* Espaciado entre secciones */
hr {
  border: 1px solid #ecf0f1;
  margin: 20px 0;
}

/* Estilos para las listas de ventajas */
ul li {
  margin-bottom: 12px;
}

/* Estilo de los códigos */
code {
  background-color: #f0f0f0;
  padding: 3px 5px;
  border-radius: 4px;
  font-size: 0.9rem;
}
</style>
