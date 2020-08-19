<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-5">
        <FormUsuario :actualizarTabla="refreshTabla"></FormUsuario>
      </div>
      <div class="col-sm-5 ">
        <div class="card p-3">
          <TablaUsuario
            v-bind:lista="listaPersonas"
            :actualizarTabla="refreshTabla"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormUsuario from "../components/usuarios/FormUsuario";
import TablaUsuario from "../components/usuarios/TablaUsuario";
import personaServicio from "../servicio/UsuarioService";

export default {
  components: {
    FormUsuario,
    TablaUsuario
  },
  data() {
    return {
      listaPersonas: []
    };
  },
  methods: {
    refreshTabla(estado) {
      if (estado) {
        this.cargarLista();
      } else {
        console.log("no actualizando");
      }
    },
    cargarLista() {
      let _vm = this;
      _vm.listaPersonas = [];
      personaServicio.listarUsuarios().then(result => {
        _vm.listaPersonas = result.data;
      });
    }
  },
  mounted() {
    this.cargarLista();
  }
};
</script>
