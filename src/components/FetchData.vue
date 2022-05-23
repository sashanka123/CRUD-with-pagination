<template>
  <div>
      <h4>Fetching the data</h4>
      <div v-for="item in list" :key="item.id">
      <p>{{item.id}}</p>
      <p>{{item.title}}</p>
      <p>{{item.body}}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'FetchData',
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        let fetch=async()=>{
            let data=await axios.get('https://jsonplaceholder.typicode.com/posts');
            let fdata=data.data;
            console.log(fdata);
            this.list=fdata;
        }
        fetch();
    }
}
</script>

<style>

</style>