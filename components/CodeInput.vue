<template>
  <div class="bg-white shadow sm:rounded-lg max-w-screen-sm mx-auto" :class="{ 'animate-bottom-top-in': !showOutAnimation, 'animate-bottom-top-out': showOutAnimation }">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Fill in your code
      </h3>
      <div class="mt-2 max-w-xl text-sm text-gray-500">
        <p>
          There are 3 codes. To get the code you should write down the last letter of each word on the piece of paper. The format is XXX-XX, X being a letter.
        </p>
      </div>
      <form @submit.prevent="submit" autocomplete="off" class="mt-5 sm:flex sm:items-center">
        <div class="w-full sm:max-w-xs">
          <label for="email" class="sr-only">Code</label>
          <input v-model="code" type="text" autocomplete="false" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="XXX-XX">
        </div>
        <button type="submit" class="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOutAnimation: false,
      code: ''
    }
  },
  methods: {
    async submit() {
      this.showOutAnimation = true
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 250)
      })
      this.$emit('input', this.code)
    }
  },
}
</script>
