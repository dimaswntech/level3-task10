<template>
  <table>
    <thead>
    <tr>
      <td>No</td>
      <td>Nama Product</td>
      <td>Keterangan Product</td>
      <td>Harga Product</td>
      <td>Jumlah Product</td>
      <td>Actions</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(product, index) in dataProducts" :key="index">
      <td>{{ index + 1 }}</td>
      <td>{{ product.nama_produk }}</td>
      <td>{{ product.keterangan }}</td>
      <td>{{ product.harga }}</td>
      <td>{{ product.jumlah }}</td>
      <td>
        <nuxt-link :to="{name: 'update-id', params:{id:product.id}}">input</nuxt-link>
        || <p @click="deletePost(product.id)">Delete</p></td>
    </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
export {default} from './tableProduct.controller';
</script>
