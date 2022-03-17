<template>
  <o-field label="Título">
    <o-input value=""></o-input>
  </o-field>

  <o-field label="Descripción">
    <o-input type="textarea" value=""></o-input>
  </o-field>
  <o-field label="Contenido">
    <o-input type="textarea" value=""></o-input>
  </o-field>
  <o-field label="Categoría">
    <o-select placeholder="Seleccione una categoría">
      <option value="">Cate 1</option>
    </o-select>
  </o-field>
  <o-field label="Posted">
    <o-select placeholder="Seleccione un estado">
      <option value="yes">Si</option>
      <option value="nost">No</option>
    </o-select>
  </o-field>

  <o-button variant="primary">Enviar</o-button>
</template>