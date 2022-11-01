<template>
  <section>
    <!-- <EditarUsuario
      v-if="editModel"
      @close="updateUser(), cancelEdition()"
      :userInfo="actualUser"
    /> -->
    <CreateModal
      v-if="createModel"
      @cancelCreation="cancelCreation"
      @closeCreatedItem="createdItem"
      :userInfo="actualItem"
      :headersModal="headersModal"
      :buttonTitle="buttonTitle"
    />
    <EditModal
      v-if="editModel"
      @closeCancel="cancelEdition"
      @closeUpdate="updatedItem"
      :userInfo="actualItem"
      :headersModal="headersModal"
      :buttonTitle="buttonTitle"
    />

    <div class="title">
      <div class="title-nav">
        <router-link to="/admin"> Home </router-link>
        <p>></p>
        <h1>{{ pageTitle }}</h1>
      </div>
      <button class="btn" @click="openCreation">
        Adicionar {{ buttonTitle }}
      </button>
    </div>

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
import CreateModal from "./CreateModal.vue";
import EditModal from "./EditModal.vue";

export default {
  name: "ComponentsTable",

  data() {
    return {
      items: [],
      actualItem: {},
      editModel: false,
      createModel: false,
    };
  },

  components: {
    PhNotePencil,
    PhTrash,
    EditModal,
    CreateModal,
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

    headersModal: {
      type: Array,
      default: () => {
        return [];
      },
    },

    pageTitle: {},
    buttonTitle: {},
  },

  methods: {
    // Edit Item
    tableEditClick(item) {
      this.editModel = true;
      this.actualItem = item;
    },

    cancelEdition() {
      this.editModel = false;
      this.actualItem = {};
    },

    updatedItem(info) {
      this.editModel = false;
      this.$emit("closeUpdate", info);
    },

    // Create Item
    openCreation() {
      this.createModel = true;
    },

    cancelCreation() {
      this.createModel = false;
      console.log("teste");
    },

    createdItem(info) {
      this.createModel = false;
      console.log(info);
      this.$emit("closeCreation", info);
    },

    // Remove Item
    tableRemoveClick(item) {
      this.$emit("deleteItem", item);
    },
  },
};
</script>

<style scoped>
/* =============== TITLE =============== */
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.title-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

h1 {
  font-size: 1.8rem;
}

/* =============== TABLE =============== */
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
