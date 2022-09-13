<template>
  <div>
    <!--    <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">-->
    <!--      Open small modal-->
    <!--    </button>-->
    <div v-if="show"
         class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto w-[50rem]">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Form Tambah Product
            </h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="toggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <!--            <p class="my-4 text-slate-500 text-lg leading-relaxed">-->
            <!--              I always felt like I could do anything. That’s the main-->
            <!--              thing people are controlled by! Thoughts- their perception-->
            <!--              of themselves! They're slowed down by their perception of-->
            <!--              themselves. If you're taught you can’t do anything, you-->
            <!--              won’t do anything. I was taught I could do everything.-->
            <!--            </p>-->
            <div class="mb-5 pt-0">
              <p class="mb-1">1. Nama Produk</p>
              <input v-model="products.nama_produk" type="text" placeholder="Nama ..."
                     class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
            <div class="mb-5 pt-0">
              <p class="mb-1">2. Keterangan Produk</p>
              <input v-model="products.keterangan" type="text" placeholder="Keterangan ..."
                     class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
            <div class="mb-5 pt-0">
              <p class="mb-1">3. Harga Produk</p>
              <input v-model="products.harga" type="number" placeholder="Harga ..."
                     class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
            <div class="mb-5 pt-0">
              <p class="mb-1">4. Jumlah Produk</p>
              <input v-model="products.jumlah" type="number" placeholder="jumlah ..."
                     class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" v-on:click="toggleModal()">
              Close
            </button>
            <button
              class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" v-on:click="store()">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="show" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script lang="ts">
export {default} from './tambahProduct.controller'
</script>

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      showModal: false-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    toggleModal: function(){-->
<!--      this.showModal = !this.showModal;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
