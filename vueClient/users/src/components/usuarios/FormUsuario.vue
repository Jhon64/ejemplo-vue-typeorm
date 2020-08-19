<template>
  <div>
    <div class="">
      <div class="card p-3">
        <div class="card-header">
          Usuario
        </div>
        <div class="card-body">
          <div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Nombre"
                v-model="nombre"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Apellido"
                v-model="apellido"
              />
            </div>
            <div class="form-group">
              <button
                type="submit"
                class=" btn btn-primary btn-block"
                @click="registarPersona()"
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import personaServicio from "../../servicio/UsuarioService";
export default {
  data() {
    return {
      apellido: "",
      nombre: ""
    };
  },
  props: ["actualizarTabla"],
  methods: {
    async registarPersona() {
      let apellido = this.apellido;
      let nombre = this.nombre;
      let data = { nombre: nombre, apellido: apellido };
      let registroPersona = await personaServicio.registrarPersona(data);
      this.actualizarTabla(true);
      console.log(registroPersona);
    }
  }
};
</script>
