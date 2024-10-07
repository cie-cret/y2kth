<template>
  <div class="badge rounded-none mx-1 parallelogram">NEW!</div>
</template>

<style scoped lang="scss">
.parallelogram {
  font-family: 'Pixelify Sans', sans-serif;
  font-weight: 700;
  border: none;
  transform: skew(-20deg);
  animation: flicker 1s infinite linear;
}

@keyframes flicker {
  0% {
    background-color: #9758da;
    color: #fff;
    border: black solid 2px;
  }
  20% {
    background-color: #9758da;
    color: #fff;
    border: black solid 2px;
  }
  40% {
    background-color: #9758da;
    color: #fff;
    border: black solid 2px;
  }
  50% {
    background-color: white;
    color: #fe68a8;
    border: yellow solid 2px;
  }
  80% {
    background-color: white;
    color: #fe68a8;
    border: yellow solid 2px;
  }
  100% {
    background-color: white;
    color: #fe68a8;
    border: yellow solid 2px;
  }
}
</style>
