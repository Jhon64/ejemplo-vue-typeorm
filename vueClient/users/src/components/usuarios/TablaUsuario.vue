<template>
  <table class=" table table-striped table-hover">
    <tr class="bg-info text-white">
      <td>
        ID
      </td>
      <td>
        Nombre
      </td>
      <td>
        Apellido
      </td>
      <td>
        Fecha Creacion
      </td>
      <td></td>
    </tr>
    <tr v-for="(item, index) in lista" :key="index">
      <td>
        {{ item.Id }}
      </td>
      <td>
        {{ item.Nombre }}
      </td>
      <td>
        {{ item.Apellido }}
      </td>
      <td>
        {{ item.CreatedAt }}
      </td>
      <td>
        <button class="btn btn-xs btn-danger" @click="eliminar(item.Id)">
          Eliminar
        </button>
      </td>
    </tr>
  </table>
</template>
<script>
import servicioPersona from "../../servicio/UsuarioService";
export default {
  props: ["lista", "actualizarTabla"],
  methods: {
    async eliminar(id) {
      let result = await servicioPersona.eliminarPersona(id);
      console.log(result);
      this.actualizarTabla(true);
    },
  },
};
</script>
