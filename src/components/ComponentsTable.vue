<template>
  <section>
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
            <ph-pencil
              class="icon"
              :size="25"
              @click="tableRemoveClick(item)"
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
import { PhPencil, PhTrash } from "phosphor-vue";

export default {
  name: "ComponentsTable",

  components: {
    PhPencil,
    PhTrash,
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
  transform: scale(1.3);
  color: var(--green500);
}
</style>
