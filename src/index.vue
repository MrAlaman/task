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
        </tr>
      </tbody>
    </table>

    <div class="col-3 offset-9 text-right my-3">
    </div>
  </div>
</template>

<script>
export default {

  name: 'kk',
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
}
}
</script>
