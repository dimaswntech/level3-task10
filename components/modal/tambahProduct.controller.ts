import Vue from "vue";
import Component from "nuxt-class-component";

@Component({
  props: {
    show: Boolean
  },
  data() {
    return {
      products: {
        nama_produk: '',
        keterangan: '',
        harga: null,
        jumlah: null
      },
    }
  }
})

export default class tambahProduct extends Vue {
  toggleModal() {
    this.$emit("customModal")
  }
  //method "store"
  async store() {

    //send data ke Rest API
    await this.$axios.post('/api/products', {

      //data yang dikirim ke server
      nama_produk: this.$data.products.nama_produk,
      keterangan: this.$data.products.keterangan,
      harga: this.$data.products.harga,
      jumlah: this.$data.products.jumlah,

    })
      .then(() => {
        this.$emit("customModal")
        this.$emit("successAdd")

      })
      .catch(error => {
        //assign validation
        this.$data.validation = error.response.data
      })
  }


}
