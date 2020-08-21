<template>
  <v-data-table
    :headers="headers"
    :items="lista"
    :sort-by="['Nombre', 'Apellido']"
    :sort-desc="[true, true]"
    multi-sort
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template></v-data-table
  >
</template>
<script>
import servicioPersona from "../../servicio/PersonaService";
export default {
  props: ["lista", "actualizarTabla"],
  data() {
    return {
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "Index",
        },
        { text: "Nombre", value: "Nombre" },
        { text: "Apellido", value: "Apellido" },
        { text: "Fecha Creacion", value: "CreatedAt" },
        { text: "Opciones", value: "Opciones" },
      ],
    };
  },
  methods: {
    deleteItem(data) {
      console.log(data);
    },
    async eliminar(id) {
      let result = await servicioPersona.eliminarPersona(id);
      console.log(result);
      this.actualizarTabla(true);
    },
  },
};
</script>
