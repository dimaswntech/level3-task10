<template>
  <div>
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
      <tr v-for="(post, index) in posts" :key="index">
        <td>{{ index+1 }}</td>
        <td>{{ post.nama_produk }}</td>
        <td>{{ post.keterangan }}</td>
        <td>{{ post.harga }}</td>
        <td>{{ post.jumlah }}</td>
        <td><nuxt-link :to="{name: 'edit-id', params:{id:post.id}}">input</nuxt-link> || <p @click="deletePost(post.id)">Delete</p></td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {

  data() {
    return {
      posts: [],
    }
  },

  mounted() {

    //fething ke Rest API
    this.$axios.get('/api/products')
      .then(response => {

        //assign response ke state "posts"
        this.posts = response.data.data

      })
      .catch(error => {
        console.log(error.response.data)
      })
  },
  methods: {

    async deletePost(row) {

      //delete data post by ID
      await this.$axios.delete(`/api/products/${row}`)
        .then(() => {

          //remove item array by index
          this.posts.splice(row.index, 1);

        })

    }
  }

}
</script>

<style>

</style>
