<template>
  <div id="maind">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
         >
      <v-text-field id="text"
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
      <router-link to="/"><v-btn type="submit"  @click="postData" dark> Submit </v-btn></router-link>
    </v-form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "CreateEmp",
  data() {
    return {
      posts: {
        name: "",
        age: "",
        email: "",
        phone: "",
        address: "",
      },
    };
  },
  methods: {
    postData(){
        axios.post('http://localhost:3000/employee',this.posts).
        then(res=>{
            console.log(res);
        })
    }
  },
};
</script>
<style scoped>
#maind{
  width:70%;
  margin:0 auto;
}
</style>