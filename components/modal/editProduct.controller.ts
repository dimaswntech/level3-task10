import Vue from "vue";
import Component from "nuxt-class-component";

@Component({
  props: {
    show: Boolean,
    product: Object
  },
  data() {
    return {
      products: {
        nama_produk: '',
        keterangan: '',
        harga: null,
        jumlah: null
      },
      //state validation
      validation: [],
      idProd : this.$props.product.id
    }
  }
})

export default class editProduct extends Vue {

  toggleModal() {
    this.$emit("customModal")
  }

  async update() {

    //send data ke Rest API untuk update
    await this.$axios.put(`/api/products/${this.$props.product.id}`, {

      //data yang dikirim
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

        //assign error validasi
        this.$data.validation = error.response.data
      })
  }

}
