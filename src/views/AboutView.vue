<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue'
import BrandSlider from '@/components/icons/BrandSlider.vue'
import NewProductShelf from '@/components/NewProductShelf.vue'
import MoveWave from '@/components/icons/MoveWave.vue'
</script>

<template>
  <UserLayout>
    <!-- First Hero -->
    <div>
      <div
        class="hero about min-h-screen relative border-solid border-t-4 border-black"
        style="
          background-image: url(https://img.freepik.com/premium-vector/y2k-background-cool-simple-geometric-posters-set-checkerboard-backgrounds-pastel-colors_719432-345.jpg);
        "
      >
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w">
            <h1 class="mb-5 text-9xl font-bold text-primary drop-shadow-lg relative about-us-text">
              About Us
            </h1>
            <h2 class="z-10 text-7xl text-black opacity-40 absolute left-0 right-0">
              get to know us!
            </h2>
          </div>
        </div>
      </div>
      <!-- Get to know text -->
      <div class="bg-secondary/30 border-solid border-b-4 border-black bg-yellow">
        <div class="flex flex-col justify-center items-center px-10 py-4">
          <h3 class="text-2xl pt-4 text-center text-base-200">Welcome back to Y2K TH</h3>
          <p class="py-6 paragraph text-center text-base-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem sem, semper vitae
            ipsum eget, posuere tincidunt ligula. Cras blandit felis enim, ut volutpat augue maximus
            sit amet.
          </p>
        </div>
      </div>
    </div>
    <!-- BG -->
    <div
      class="custom-bg relative"
      style="
        background-image: url(https://static.vecteezy.com/system/resources/previews/044/869/005/non_2x/y2k-aesthetic-retro-groovy-wavy-psychedelic-background-2000-background-illustration-vector.jpg);
      "
    >
      <!-- Radiant BG -->
      <div class="background-regt absolute" style="height: 100%; width: 80vw"></div>
      <!-- White BG -->
      <div
        class="white-bg bg-base-100 absolute left-0 right-0"
        style="height: 100%; width: 80vw"
      ></div>
      <!-- Second Hero -->
      <div class="flex py-10 justify-center drop-shadow-xl">
        <div class="mx-10 mt-4 flex text-box">
          <div
            class="hero flex-1 relative border-solid border-4 border-white p-8"
            style="
              background-image: url(https://i.pinimg.com/474x/79/e5/6f/79e56f5a34717ab8ea8967894c4a1c95.jpg);
            "
          >
            <img
              class="border-white border-8 img-dec"
              src="https://boogzelclothing.com/cdn/shop/products/H289e6eca66764207a9a0d934fedc7463C_800x.jpg?v=1678900321"
            />
          </div>
          <!-- Inspiration text -->
          <div class="flex-2 border-solid border-4 border-white border-l-0 pink-box">
            <div class="flex flex-col px-10 py-4">
              <h3 class="text-2xl pt-4 text-primary heading-3">Our Inspiration</h3>
              <p class="py-6 sub-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at magna nibh.
                Vestibulum nibh nisl, aliquam id enim quis, scelerisque fermentum magna. Aenean vel
                erat id risus ultrices pellentesque sed a lacus. Phasellus accumsan vitae purus ut
                euismod. Donec quis porta ipsum. In in erat eu eros venenatis luctus vel sed nunc.
                Donec porta congue accumsan. Nulla vitae convallis turpis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Third Hero -->
      <div class="flex pb-10 justify-center drop-shadow-xl">
        <div class="mx-10 mb-4 flex text-box">
          <div class="flex-2 border-solid border-4 border-white border-r-0 yellow-box">
            <div class="flex flex-col px-10 py-4">
              <h3 class="text-2xl pt-4 goal-text heading-3">Our Goals</h3>
              <p class="py-6 sub-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at magna nibh.
                Vestibulum nibh nisl, aliquam id enim quis, scelerisque fermentum magna. Aenean vel
                erat id risus ultrices pellentesque sed a lacus. Phasellus accumsan vitae purus ut
                euismod. Donec quis porta ipsum. In in erat eu eros venenatis luctus vel sed nunc.
                Donec porta congue accumsan. Nulla vitae convallis turpis.
              </p>
            </div>
          </div>
          <!-- Goal Image -->
          <div
            class="hero flex-1 relative border-solid border-4 border-white p-8"
            style="
              background-image: url(https://res.cloudinary.com/gimmersta-wallpaper/image/upload/c_fill,f_auto,fl_progressive,q_auto,h_1200/v1668159732/articles/R19419_product.jpg);
            "
          >
            <img
              class="border-white border-8 img-dec"
              src="https://img.alicdn.com/imgextra/i3/6000000001330/O1CN01gAgDbu1LhBTRPSbea_!!6000000001330-0-tbvideo.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
  <!-- <MoveWave></MoveWave> -->
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');

.about {
  min-height: 85vh;
}

.about-us-text {
  font-size: 10rem;
}

h1 {
  text-shadow: 4px 6px #fef9b5;
  font-family: 'Lobster', sans-serif;
  font-weight: 400;
}

h2 {
  font-family: 'Caveat', cursive;
  font-weight: 800;
  top: 20rem;
}

h3 {
  font-weight: 800;
  /* -webkit-text-stroke: 3px #fe68a8;
  paint-order: stroke fill; */
}

.paragraph {
  max-width: 36rem;
}

.sub-paragraph {
  max-width: 30.75rem;
}

.img-dec {
  max-width: 20rem;
  max-height: 20rem;
}

.background-regt {
  z-index: -1;
  left: 0;
  right: 0;
  margin-inline: auto;
  border-right: 4px solid #f2f2f2;
  border-left: 4px solid #f2f2f2;
  background-image: linear-gradient(rgba(249, 224, 118, 0.5), rgba(254, 104, 168, 0.5));
}

.white-bg {
  z-index: -2;
  margin-inline: auto;
}

.custom-bg {
  z-index: -10;
  border-bottom: 4px solid #f2f2f2;
}

.heading-3 {
  -webkit-text-stroke: 6px #fff;
  paint-order: stroke fill;
}

p {
  font-family: 'Exo 2';
  font-weight: 500;
}

.goal-text {
  color: #f9e076;
  -webkit-text-stroke: 6px #696969;
  paint-order: stroke fill;
}

.bg-yellow {
  background-color: rgb(121, 153, 148);
}

.yellow-box {
  background-color: rgb(255, 247, 210, 0.5);
}

.pink-box {
  background-color: rgba(254, 104, 168, 0.28);
}

/* .background: rgb(254, 104, 168);
.background: linear-gradient(
  90deg,
  rgba(254, 104, 168, 0.29597776610644255) 0%,
  rgba(254, 104, 168, 0.3) 35%,
  rgba(151, 88, 218, 0.3) 100%
); */
</style>
