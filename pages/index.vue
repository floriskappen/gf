<template>
  <div class="w-screen h-screen bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 relative" style="overflow: hidden">
    <!-- <div class="absolute top-0 left-0 bg-black opacity-50 w-full h-full"></div> -->
    <div id="confetti-wrapper" class="overflow-x-hidden overflow-y-hidden"></div>
    <div class="pt-28">
      <CodeInput v-if="showCodeInput" @input="handleCodeInput" />
      <PriceOutput :code-value="codeValue" v-if="showPriceOutput" @back="handlePriceOutput" />
    </div>
  </div>
</template>

<script>
const CodeInput = () => import('@/components/CodeInput');
const PriceOutput = () => import('@/components/PriceOutput');

export default {
  components: {
    CodeInput
  },
  data() {
    return {
      // CONSTANTS
      matchingCodes: {
        'YEA-LL': 'DISCOUNT €10,- 💸 FOR RESTAURANT',
        'UEE-YT': 'RINGU 💍',
        'ILY-SM': 'BEAR 🐻 WITH NOSE 👃',
      },

      // VARIABLES
      showCodeInput: true,
      showPriceOutput: false,
      codeValue: null,
    }
  },
  methods: {
    handleCodeInput(code) {
      this.codeValue = this.matchingCodes[code]
      this.showCodeInput = false
      this.showPriceOutput = true
      if (this.codeValue) {
        this.launchConfetti()
      }
    },
    handlePriceOutput() {
      this.showPriceOutput = false
      this.showCodeInput = true
      this.codeValue = null
      this.stopConfetti()
    },
    launchConfetti() {
      for(let i = 0; i < 100; i++) {
        // Random rotation
        var randomRotation = Math.floor(Math.random() * 360);
          // Random Scale
        var randomScale = Math.random() * 1;
        // Random width & height between 0 and viewport
        var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
        var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));

        // Random animation-delay
        var randomAnimationDelay = Math.floor(Math.random() * 15);

        // Random colors
        var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
        var randomColor = colors[Math.floor(Math.random() * colors.length)];

        // Create confetti piece
        var confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.top=randomHeight + 'px';
        confetti.style.right=randomWidth + 'px';
        confetti.style.backgroundColor=randomColor;
        // confetti.style.transform='scale(' + randomScale + ')';
        confetti.style.obacity=randomScale;
        confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
        confetti.style.animationDelay=randomAnimationDelay + 's';
        document.getElementById("confetti-wrapper").appendChild(confetti);
      }
    },
    stopConfetti() {
      const confettiWrapper = document.getElementById("confetti-wrapper")
      confettiWrapper.innerHTML = ''
      // for (let i = 0; i < confettiPieces.length; i++) {
      //   const element = confettiPieces[i];
      //   console.log(
      //     element
      //   )
      //   element.remove()
      // }
    }
  },
}
</script>

<style>
@keyframes confettiRain {
  0% {
    opacity: 1;
    margin-top: -100vh;
    margin-left: -200px;
  }

  100% {
    opacity: 1;
    margin-top: 100vh;
    margin-left: 200px;
  }
}

.confetti {
  opacity: 0;
  position: absolute;
  width: 1rem;
  height: 1.5rem;
  transition: 500ms ease;
  animation: confettiRain 5s infinite;
}

#confetti-wrapper {
   overflow: hidden !important;
}
</style>
