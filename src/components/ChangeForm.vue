<template>
  <div>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          placeholder="Enter your name"
          v-model="posts.name"
        ></v-text-field>
        <v-text-field
          placeholder="Enter your Age"
          v-model="posts.age"
        ></v-text-field>
        <v-text-field
          placeholder="Enter your email"
          v-model="posts.email"
        ></v-text-field>
        <v-text-field
          placeholder="Enter your phone"
          v-model="posts.phone"
        ></v-text-field>
        <v-text-field
          placeholder="Enter your address"
          v-model="posts.address"
        ></v-text-field>
        <router-link to="/"
          ><v-btn type="submit" @click="change" dark>
            Update
          </v-btn></router-link
        >
      </v-form>
    
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "ChangeForm",
  data() {
    return {
      key: this.$route.params.id,
      posts: {
        name: "",
        age: "",
        email: "",
        phone: "",
        address: "",
      },
    };
  },
  methods:{
      async change() {
     await axios.put(`http://localhost:3000/employee/${this.key}`, this.posts)
  }
  }
}
</script>
