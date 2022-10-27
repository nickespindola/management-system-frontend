<template>
  <section>
    <!-- <EditarUsuario
      v-if="editModel"
      @close="updateUser(), cancelEdition()"
      :userInfo="actualUser"
    /> -->
    <EditModal
      v-if="editModel"
      @close="cancelEdition()"
      :userInfo="actualItem"
    />
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">
            {{ header.label }}
          </th>
          <th class="actions-th" v-if="actions">Editar</th>
          <th class="actions-th" v-if="actions">Deletar</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td v-for="(header, index) in headers" :key="index">
            {{ item[header.value] }}
          </td>
          <td v-if="actions">
            <ph-note-pencil
              class="icon"
              :size="25"
              @click="tableEditClick(item)"
            />
          </td>
          <td v-if="actions">
            <ph-trash class="icon" :size="25" @click="tableRemoveClick(item)" />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { PhNotePencil, PhTrash } from "phosphor-vue";
import EditModal from "./EditModal.vue";

export default {
  name: "ComponentsTable",

  data() {
    return {
      items: [],
      actualItem: {},
      editModel: false,
    };
  },

  components: {
    PhNotePencil,
    PhTrash,
    EditModal,
  },

  props: {
    headers: {
      type: Array,
      default: () => {
        return [];
      },
    },
    actions: { type: Boolean, default: false },

    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  methods: {
    tableEditClick(item) {
      console.log(item, "clicou para editar");
      this.actualItem = item;
      this.editModel = true;
    },

    cancelEdition() {
      this.editModel = false;
      this.actualUser = {};
    },

    tableRemoveClick(item) {
      console.log(item, "clicou para deletar");
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 24px rgb(0 0 0 / 50%);
  margin-bottom: 50px;
}

th {
  padding: 1.5rem 2rem;
  background: var(--green500);
  text-align: left;
  font-size: 1rem;
}

td {
  text-align: left;
  padding: 1rem 2rem;
}

tr:nth-child(odd) {
  background: #ecedf1;
}

/* ============ ICON ============ */
.icon {
  text-align: center;
  padding: 0;
  margin-top: 5px;
}

.icon:hover {
  cursor: pointer;
  transform: scale(1.3);
  color: var(--green500);
}
</style>
