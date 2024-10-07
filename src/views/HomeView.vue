<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue'
import PinkSlide from '@/components/icons/PinkSlide.vue'
import NewProductShelf from '@/components/NewProductShelf.vue'
import BlackSlide from '@/components/icons/BlackSlide.vue'
import BestProductShelf from '@/components/BestProductShelf.vue'
import BrandSlider from '@/components/icons/BrandSlider.vue'
import { useUserProductStore } from '@/stores/UserProduct'

const userProductStore = useUserProductStore()
const productList = userProductStore.productList
</script>

<template>
  <UserLayout>
    <!-- Hero -->
    <div class="mx-10 mb-4">
      <div
        class="hero relative border-solid border-4 border-black"
        style="
          background-image: url(https://favim.com/pd/s11/orig/8/895/8954/89541/header-hearts-instagram-Favim.com-8954199.jpg);
        "
      >
        <div class="hero z-0 absolute opacity-90 background">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a48258b9-7987-4575-a224-8b347a70dc34/dh9ui8b-914b7ca7-d9f4-4dd5-863e-335ec4bdc0f3.png/v1/fill/w_1280,h_1568/the_powerpuff_girls_2016___powerpuff_pose__remade__by_mfsjst_dh9ui8b-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU2OCIsInBhdGgiOiJcL2ZcL2E0ODI1OGI5LTc5ODctNDU3NS1hMjI0LThiMzQ3YTcwZGMzNFwvZGg5dWk4Yi05MTRiN2NhNy1kOWY0LTRkZDUtODYzZS0zMzVlYzRiZGMwZjMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.CSQjJ95X1-EaPDYX4XXAjtKRHB7InuptZE81C_c2t3I"
            alt="y2k-cartoon"
          />
        </div>
        <!-- <div class="hero-overlay bg-opacity-60"></div> -->
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w">
            <h1 class="mb-5 text-9xl font-bold text-secondary drop-shadow-lg welcome-text">
              Back to Y2K!
            </h1>

            <button class="btn btn-primary text-xl text-base-100 rounded-none hover:bg-primary">
              <RouterLink :to="{ name: 'shop' }">
                <div class="px-2">
                  <p class="shop-button text-white">Travel In Time!</p>
                </div>
              </RouterLink>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- How to make the scrolling loading -->
    <!-- New -->
    <div
      style="
        background-image: url(https://img.freepik.com/premium-vector/retro-groovy-psychedelic-tile-pattern-y2k-90s-repeat-pattern-funny-cute-texture-surface-design_731370-168.jpg);
      "
    >
      <PinkSlide message="new collection"></PinkSlide>
      <div class="px-10 py-4">
        <NewProductShelf :products="productList"></NewProductShelf>
      </div>
    </div>
    <!-- Best -->
    <div
      class="bg-cover"
      style="
        background-image: url(https://static.vecteezy.com/system/resources/previews/027/204/474/non_2x/grainy-mesh-gradient-with-white-retro-stars-abstract-background-in-y2k-aesthetic-free-vector.jpg);
      "
    >
      <BlackSlide message="best seller"></BlackSlide>
      <div class="px-10 py-4"><BestProductShelf :products="productList"></BestProductShelf></div>
    </div>
    <BrandSlider></BrandSlider>
  </UserLayout>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.shop-button {
  font-family: 'Pixelify Sans', sans-serif;
  font-weight: 700;
}

.btn {
  // box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 1);
  border-top: 3px solid rgba(242, 242, 242, 1);
  border-left: 3px solid rgba(242, 242, 242, 1);
  border-bottom: 3px solid rgba(159, 154, 154, 0.8);
  border-right: 3px solid rgba(159, 154, 154, 0.8);
  outline: 4px solid black;

  &:active {
    transform: scale(1);
    border-top: 4px solid rgba(97, 97, 97, 0.5);
    border-left: 4px solid rgba(97, 97, 97, 0.5);
    border-bottom: 1px solid rgba(97, 97, 97, 1);
    border-right: 1px solid rgba(97, 97, 97, 1);
  }
}

.welcome-text {
  font-family: 'VT323', monospace;
  font-weight: 700;
}

.hero {
  min-height: 84vh;
}

h1 {
  -webkit-text-stroke: 10px #fff;
  paint-order: stroke fill;
  text-transform: uppercase;
}

.background {
  width: 80%;
  top: 100%;
  animation: flyaway 3.5s;
}

@keyframes flyaway {
  from {
    top: 100%;
  }
  to {
    top: -450%;
  }
}

div {
  .hero {
    overflow: hidden;
  }
}
</style>
