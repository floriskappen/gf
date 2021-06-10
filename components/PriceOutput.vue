<template>
  <div class="bg-white shadow sm:rounded-lg max-w-screen-sm mx-auto" :class="{ 'animate-bottom-top-in': !showOutAnimation, 'animate-bottom-top-out': showOutAnimation }">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-2xl leading-6 font-medium text-gray-900">
        {{ codeValueString }}
      </h3>
      <div class="mt-2 sm:flex sm:items-start sm:justify-between">
        <div class="max-w-xl text-sm text-gray-500">
          <p v-if="codeValue">
            You can now redeem your present! Show Floris to do so.
          </p>
          <p v-else>
            Make sure you spelled the code correctly. It is case-sensitive!
          </p>
        </div>
        <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
          <button @click="goBack" type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
            Go back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    codeValue: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {
      showOutAnimation: false
    }
  },
  computed: {
    codeValueString() {
      if (this.codeValue) {
        return this.codeValue
      } else {
        return 'Invalid code'
      }
    }
  },
  methods: {
    async goBack() {
      this.showOutAnimation = true
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 270)
      })
      this.$emit('back')
    }
  },
}
</script>
