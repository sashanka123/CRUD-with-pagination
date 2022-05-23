<template>
  <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name <v-btn id="sbtn" @click="sort">Sort</v-btn></th>
            <th class="text-left">Age</th>
            <th class="text-left">Email</th>
            <th class="text-left">Phone</th>
            <th class="text-left">Address</th>
            <th class="text-left">Delete</th>
            <th class="text-left">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in thedata" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.address }}</td>
            <td>
              <v-btn @click="deleteit(item.id)" id="dbtn" elevation="2">Delete</v-btn>
            </td>
            <td>
              <v-btn @click="change(item.id)" id="ebtn" elevation="2">EDIT</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
</template>

<script>
import axios from "axios";
export default {
    name:'TableIt',
    props:['thedata'],
    data(){
        return {
             list: [],
        }
    }, 
  methods: {
    change(val) {
      this.$router.push(`/change/${val}`);
    },
    deleteit(val) {
      axios.delete(`http://localhost:3000/employee/${val}`);
      this.list = this.list.filter(e => e.id !== val);
    },
    sort() {
      this.list.sort((a, b) => {
        let fa = a.name.toLowerCase();
        let fb = b.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    },
  },
    
}
</script>

<style>

</style>