<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue'
import BrandSlider from '@/components/icons/BrandSlider.vue'
import NewProductShelf from '@/components/NewProductShelf.vue'
</script>

<template>
  <UserLayout>
    <!-- First Hero -->
    <div class="mx-10 mb-10">
      <div
        class="hero about min-h-screen relative border-solid border-4 border-black border-b-0"
        style="
          background-image: url(https://img.freepik.com/premium-vector/y2k-background-cool-simple-geometric-posters-set-checkerboard-backgrounds-pastel-colors_719432-345.jpg);
        "
      >
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w">
            <h1 class="mb-5 text-9xl font-bold text-primary drop-shadow-lg welcome-text relative">
              About Us
            </h1>
            <h2 class="z-10 text-7xl text-black opacity-40 absolute left-0 right-0">
              get to know us!
            </h2>
          </div>
        </div>
      </div>
      <!-- Get to know text -->
      <div class="bg-secondary/30 border-solid border-4 border-black border-t-0">
        <div class="flex flex-col justify-center items-center px-10 py-4">
          <h3 class="text-2xl pt-4 text-center">Welcome back to Y2K TH</h3>
          <p class="py-6 paragraph text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem sem, semper vitae
            ipsum eget, posuere tincidunt ligula. Cras blandit felis enim, ut volutpat augue maximus
            sit amet.
          </p>
        </div>
      </div>
    </div>
    <!-- <BrandSlider></BrandSlider> -->
    <div class="custom-bg">
      <!-- Second Hero -->
      <div class="flex py-10">
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
          <div class="flex-2 bg-primary/70 border-solid border-4 border-white border-l-0">
            <div class="flex flex-col px-10 py-4">
              <h3 class="text-2xl pt-4">Our Inspiration</h3>
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
      <div class="flex pb-10 justify-end">
        <div class="mx-10 mb-4 flex text-box">
          <div class="flex-2 bg-accent/70 border-solid border-4 border-white border-r-0">
            <div class="flex flex-col px-10 py-4">
              <h3 class="text-2xl pt-4">Our Goals</h3>
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
              background-image: url(https://i.pinimg.com/564x/c3/57/17/c35717fc1aedce9a06e611fcce904bad.jpg);
            "
          >
            <img
              class="border-white border-8 img-dec"
              src="https://images.summitmedia-digital.com/preview/images/2021/04/06/Sunnybeads.ph-.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');

.about {
  min-height: 80vh;
}

/* .inspiration {
  max-width: 70vw;
} */

/* .text-box {
  border-top: 3px solid rgba(242, 242, 242, 1);
  border-left: 3px solid rgba(242, 242, 242, 1);
  border-bottom: 3px solid rgba(159, 154, 154, 0.8);
  border-right: 3px solid rgba(159, 154, 154, 0.8);

  &:active {
    transform: scale(1);
    border-top: 4px solid rgba(97, 97, 97, 0.5);
    border-left: 4px solid rgba(97, 97, 97, 0.5);
    border-bottom: 1px solid rgba(97, 97, 97, 1);
    border-right: 1px solid rgba(97, 97, 97, 1);
  }
} */

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

.custom-bg {
  background-image: linear-gradient(#f0f0f0, rgba(254, 104, 168, 0.3), rgba(151, 88, 218, 0.3));
}

/* .background: rgb(254, 104, 168);
.background: linear-gradient(
  90deg,
  rgba(254, 104, 168, 0.29597776610644255) 0%,
  rgba(254, 104, 168, 0.3) 35%,
  rgba(151, 88, 218, 0.3) 100%
); */
</style>
