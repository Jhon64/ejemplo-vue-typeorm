import axios from "axios";

let personaServicio = {
  async listarUsuarios() {
    let lista = await axios({
      url: "/persona/listar",
      method: "GET",
    });
    return lista;
  },
  async registrarPersona(data) {
    let result = await axios({
      method: "POST",
      data: data,
      url: "/persona/registrar",
    });
    return result;
  },
  async eliminarPersona(id) {
    let result = await axios({
      method: "DELETE",
      url: `/persona/eliminar/${id}`,
    });
    return result;
  },
};

export default personaServicio;
