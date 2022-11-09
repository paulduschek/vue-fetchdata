<template>
<div v-if="error">
    <h2>Error: {{ error }}</h2>
</div>
<div v-if="loading">
  <h2>Loading data...</h2>
</div>
<!--
<h2>Users</h2>
<span><b>Name<b></span><span><b>Username</b></span>
<ul>
  <li v-for="item in data" :key="item.id">
    <span> {{ item.name }}</span> 
    {{ item.username }}
  </li>
</ul>-->
<!--alternative-->
<h2>Users</h2>
<table id = "userdata">
  <thead>
    <tr>
      <th>Name</th>
      <th>Username</th>
      <th>ZIP</th>
      <th>City</th>
      <th>Street</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in data">
      <td>{{ item.name }}</td>
      <td>{{ item.username }} </td>
      <td>{{ item.address.zipcode}}</td>
      <td>{{ item.address.city}}</td>
      <td>{{ item.address.street}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
import {useFetch} from '../composeables/UseFetch.js';

export default {
  setup(){
    const{data, error, loading} = useFetch("https://jsonplaceholder.typicode.com/users", 
    {}
  );

  return {
      data,
      error,
      loading,
    };
  },
}
</script>

<style scoped>
span {
  display: inline-block;
  width: 200px;
}
ul {
  list-style-type: square;
}

#userdata{
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#userdata td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#userdata tr:nth-child(even){background-color: #f2f2f2;}

#userdata tr:hover {background-color: #ddd;}

#userdata th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>