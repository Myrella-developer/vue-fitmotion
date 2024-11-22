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
      <li><strong>Integración con Firebase:</strong> La aplicación se conecta a una base de datos de Firebase para
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
    </ul>
  </div>
</template>

<script>

</script>