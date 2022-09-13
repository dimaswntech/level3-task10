<template>
  <div>
    <table class="text-center table-auto opacity-75 shadow-lg">
      <thead class="border-b bg-gray-50">
      <tr>
        <th class="text-sm font-medium text-gray-900 px-6 py-4">No</th>
        <th class="text-sm font-medium text-gray-900 px-6 py-4">Nama Product</th>
        <th class="text-sm font-medium text-gray-900 px-6 py-4">Keterangan Product</th>
        <th class="text-sm font-medium text-gray-900 px-6 py-4">Harga Product</th>
        <th class="text-sm font-medium text-gray-900 px-6 py-4">Jumlah Product</th>
        <th class="text-sm font-medium text-gray-900 px-6 py-4">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, index) in dataProducts" :key="index" class="bg-white border-b">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ index + 1 }}</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ product.nama_produk }}</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ product.keterangan }}</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Rp. {{ product.harga }},00</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ product.jumlah }}</td>
        <td class="flex text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <p @click="toggleModal(product)" class="py-1 px-5 bg-yellow-100 mr-3 active:shadow-lg hover:bg-yellow-300 cursor-pointer">EDIT</p>
          <p @click="deletePost(product.id)" class="py-1 px-5 bg-red-100 active:shadow-lg hover:bg-red-300 cursor-pointer">DELETE</p>
        </td>
      </tr>
      </tbody>
    </table>
    <modal-editProduct :show="showModal" :product="idVal" @customModal="valueShow" @successAdd="refreshPage"></modal-editProduct>
  </div>
</template>
<script lang="ts">
export {default} from './tableProduct.controller';
</script>
