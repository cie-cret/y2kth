<script setup lang="ts">
import { ref } from 'vue'

import UserLayout from '@/layouts/UserLayout.vue'
// import BrandSlider from '@/components/icons/BrandSlider.vue'

// const greyText = ref(false)
</script>

<template>
  <UserLayout>
    <div
      class="bg-accent/90 border-b-4 border-t-4 border-black bg-cover"
      style="background-image: url(https://images7.alphacoders.com/116/1161622.png)"
    >
      <div class="form max-w-screen-lg mx-10 py-4 ml-auto mr-auto">
        <div class="bg-base-200 px-10 py-4 relative main-box">
          <div class="blue-bg absolute left-0 right-0 top-0" style="height: 100%; width: 100%">
            <div class="absolute text-base-100 contact-text">Contact Us</div>
            <div class="xp-button bg-base-200 absolute right-20 top-0">
              <div class="absolute minus-icon text-2xl select-none cursor-pointer">—</div>
            </div>
            <button class="xp-button bg-base-200 absolute right-10 top-0">
              <div class="absolute screen-icon select-none cursor-pointer"></div>
            </button>
            <div class="xp-button bg-base-200 absolute right-0 top-0">
              <div class="absolute x-icon text-2xl select-none cursor-pointer">X</div>
            </div>
          </div>
          <div class="grid grid-cols-2 mt-12">
            <div class="flex flex-col">
              <div class="heading">
                <h1 class="mb-6 text-8xl font-bold text-secondary drop-shadow-lg contact-text-main">
                  Contact Us
                </h1>
              </div>
              <p class="pb-4 sub-heading">
                Open Hours:<span class="paragraph-text"><br />Monday - Saturday: 9am - 6pm</span>
              </p>

              <p class="pb-4 sub-heading">
                Tel:<span class="paragraph-text"><br />+66 2-248-2510</span>
              </p>

              <p class="pb-4 sub-heading">
                Email:<span class="paragraph-text"><br />admin@y2kth.com</span>
              </p>

              <p class="pb-4 sub-heading">
                Address:<span class="paragraph-text"
                  ><br />98/76 Phayathai Road, Pathum Wan, Bangkok 10330</span
                >
              </p>
            </div>
            <div class="flex flex-col">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="First Name"
                    class="bg-base-100 input input-bordered input-md w-full rounded-none"
                    required
                  />
                </div>
                <div>
                  <label for="fullname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Last Name"
                    class="bg-base-100 input input-bordered input-md w-full rounded-none"
                    required
                  />
                </div>
              </div>
              <label for="lname">Your Email</label>
              <input
                type="text"
                id="useremail"
                name="useremail"
                placeholder="Email"
                class="bg-base-100 input input-bordered input-md w-full rounded-none"
                required
              />
              <label for="reason">Reason</label>
              <select
                id="reason"
                name="reason"
                class="bg-base-100 input input-bordered input-md w-full rounded-none"
                required
              >
                <option value="" disabled selected>Please select your reason</option>
                <option value="shipping">Shipping</option>
                <option value="return">Return</option>
                <option value="other">Other</option>
              </select>

              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please Explain"
                style="height: 100px"
                class="bg-base-100 input input-bordered input-md w-full rounded-none"
                required
              ></textarea>

              <button class="btn btn-secondary text-xl rounded-none my-4 mx-0.5 pixel-button">
                <span class="pixel-font">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>

<style scoped>
*:not(.contact-text-main) {
  font-family: 'Exo 2';
  font-weight: 500;
}

.main-box {
  min-height: 80vh;
  max-height: 80vh;
  border: 4px solid black;
  /* border-top: 12px solid rgba(242, 242, 242, 1);
  border-left: 12px solid rgba(242, 242, 242, 1);
  border-bottom: 12px solid rgba(159, 154, 154, 0.8);
  border-right: 12px solid rgba(159, 154, 154, 0.8); */
  /* outline: 8px solid black; */
}

h1 {
  font-family: 'Lobster', sans-serif;
  font-weight: 700;
  -webkit-text-stroke: 6px #000;
  paint-order: stroke fill;
  text-shadow: 12px 1px #000;
  /* Make inner glow / shadow again here */
}

.sub-heading:not(span) {
  font-weight: 800;
  font-size: 20px;
  line-height: 1.25;
}

.paragraph-text {
  color: #000;
  font-size: 16px;
}

label {
  margin: 6px 0;
}

textarea {
  resize: none;
}

.input:focus {
  outline: 2px solid #3869c8;
  outline-offset: 0px;
}

select:required:invalid {
  color: #999;
}
option[value=''][disabled] {
  display: none;
}
option {
  color: black;
}

.blue-bg {
  background: linear-gradient(to right, #3869c8, #87a5de);
  z-index: 10;
  /* margin-inline: auto; */
  border-bottom: 4px solid #000;
  max-height: 2rem;
  box-sizing: content-box;
}

.contact-text {
  left: 16px;
  top: 4px;
  font-weight: 700;
}

.xp-button {
  z-index: 20;
  height: 100%;
  width: 36px;
  max-height: 2rem;
  border-left: 4px solid #000;
  /* box-sizing: content-box; */
  border-top: 2px solid rgba(242, 242, 242, 1);
  border-left: 2px solid rgba(242, 242, 242, 1);
  border-bottom: 2px solid rgba(159, 154, 154, 0.8);
  border-right: 2px solid rgba(159, 154, 154, 0.8);
  box-shadow:
    -3px 0px 0px 0px black,
    3px 0px 0px 0px black;

  &:active {
    border-top: 2px solid rgba(97, 97, 97, 0.5);
    border-left: 2px solid rgba(97, 97, 97, 0.5);
    border-bottom: 1px solid rgba(97, 97, 97, 1);
    border-right: 1px solid rgba(97, 97, 97, 1);
  }
}

.minus-icon {
  bottom: -8px;
  left: 0.35rem;
  font-weight: 800;
  color: #999;
}

.screen-icon {
  height: 40%;
  width: 50%;
  z-index: 30;
  top: 0.25rem;
  left: 0.3rem;
  border: 3px solid #000;
  border-top: 6px solid #000;
  box-sizing: content-box;
}

.x-icon {
  bottom: -2px;
  left: 0.5rem;
  color: #999;
  font-weight: 600;
}

.pixel-font {
  font-family: 'Pixelify Sans', sans-serif;
  font-weight: 700;
  text-shadow: 1px 1px black;
}

.pixel-button {
  outline: 2px solid #000;

  &:active {
    transform: scale(1);
    border-top: 4px solid rgba(50, 50, 50, 0.5);
    border-left: 4px solid rgba(50, 50, 50, 0.5);
  }

  &:hover {
    background-color: #3869c8;
  }
}
</style>
