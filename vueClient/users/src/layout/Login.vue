<template
  ><div>
    <v-container>
      <v-row dense>
        <v-col cols="6" class="mx-auto pt-5">
          <v-card color="#385F73" dark>
            <v-card-title
              class="headline text-center text-white"
              :style="{ display: 'block' }"
              >LOGIN</v-card-title
            >

            <v-divider></v-divider>
            <v-card-text>
              <v-text-field
                label="Usuario"
                hide-details="auto"
                v-model="usuario"
              ></v-text-field>
              <v-text-field label="Clave" v-model="clave"> </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn small color="primary" block dark @click="logear()"
                >Entrar</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import usuarioService from "../servicio/UsuarioService";
export default {
  data() {
    return {
      usuario: "",
      clave: "",
    };
  },
  methods: {
    async logear() {
      let data = {
        usuario: this.usuario,
        clave: this.clave,
      };
      let result = await usuarioService.login(data);
      if (result.status == 200) {
        let token = result.data.token;
        localStorage.setItem("tokenAuth", token);
      } else {
        localStorage.removeItem("tokenAuth");
      }
    },
  },
};
</script>
