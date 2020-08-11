<template>
  <div class id="app">
    <Darkmode></Darkmode>
    <ColorText></ColorText>
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="input-group mb-3">
        <input
          class="i form-control"
          v-model="list"
          v-on:keyup.enter="addList"
          type="text"
          placeholder="Добавить в список покупок..."
        />
        <button class="btn btn-outline-secondary" v-on:click="addList">Добавить</button>
        <div class="tt">
          <v-simple-table dark>
            <thead>
              <tr>
                <th>Название:</th>
                <th>Кол-во:</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in lists" :key="index">
                <td
                  v-on:click="doneList"
                  v-bind:class="{ checked: list.isComplete }"
                >{{ item.text }}</td>
                <td>{{ item.quantity }}</td>
                <button class="butt btn btn-outline-secondary" v-on:click="deleteList(index)">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "список покупок",
      list: "",
      lists: [{ text: "test", quantity: 1 }]
    };
  },
  methods: {
    addList() {
      if (this.lists.find(lists => lists.text === this.list)) {
        let i = this.lists.findIndex(lists => lists.text === this.list);
        this.lists[i].quantity++;
        this.list = "";
      } else {
        this.lists.push({
          text: this.list,
          quantity: 1
        });
        this.list = "";
      }
    },
    deleteList(index) {
      this.lists.splice(index, 1);
    },
    doneList(ev) {
      if (ev.target.tagName == "TD") {
        ev.target.classList.toggle("checked");
      }
    }
  }
};
</script>

<style>
.checked {
  color: silver;
  text-decoration: line-through;
}
.dark {
  margin-top: 2px;
  margin-left: 2px;
}
th {
  width: 1070px;
}
.butt {
  border-color: #1e1e1e;
  color: #1e1e1e;
  margin-top: 4.5px;
  margin-right: 5px;
}
.tt {
  margin-top: 15px;
}
</style>
