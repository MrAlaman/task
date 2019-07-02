<template>
  <div class="container mt-4">

    <table class="table table-bordered mt-4">
      <thead class="thead-light">
        <tr>
          <th width="5%">#</th>
          <th width="15%">Name</th>
          <th width="15%">Surname</th>
          <th width="15%">Phone</th>
          <th width="15%">Email</th>
          <th width="15%">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <span v-if="editIndex !== index">{{ user.name }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="user.name">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ user.surname }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="user.surname">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ user.number }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm"  v-model="user.number">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ user.email }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" type="email"  v-model="user.email">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">
              <button @click="edit(user, index)" class="btn btn-sm btn-outline-secondary mr-2">Edit</button>
              <button @click="remove(user, index)" class="btn btn-sm btn-outline-secondary mr-2">Remove</button>
            </span>
            <span v-else>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="cancel(user)">Cancel</button>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="save(user)">Save</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="col-3 offset-9 text-right my-3">
      <button v-show="!editIndex" @click="add" class="btn btn-sm btn-secondary">Add user</button>
    </div>
    <div class="row justify-content-center align-items-center">
      <label for="exampleFormControlTextarea1">Enter JSON</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ref="json"></textarea>
      <button v-show="!editIndex" @click="imp" class="btn btn-md-4 btn-secondary">Import JSON</button>
    </div>
  </div>
</template>

<script>
export default {

  name: 'edit',
  computed: {
    users() {
      return this.$store.state.users
    },
    editIndex: {
      get(){
        return this.$store.state.editIndex
      }
    },
    originalData: {
      get() {
        return this.state.originalData
      }
    }

  },
  methods: {

    add() {
      this.$store.dispatch('addUser')
    },

    edit(user, index) {
      this.$store.state.originalData = Object.assign({}, user)
      this.$store.state.editIndex = index
    },

    cancel(user) {
      this.$store.state.editIndex = null

      if (!this.$store.state.originalData) {
        this.$store.state.users.splice(this.$store.state.users.indexOf(user), 1)
        return
      }

      Object.assign(user, this.$store.state.originalData)
      this.$store.state.originalData = null
    },

    remove(user, index) {
      this.users.splice(index, 1)
    },

    save(user) {
      this.$store.dispatch('save')
    },

    imp() {
      var resp = JSON.parse(this.$refs.json.value)
        this.$store.state.users.push({ name: resp.name, surname: resp.surname, number: resp.number, email: resp.email})
      }
    }
}
</script>
