<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const activeMenu = ref('')

const menus = [
  {
    name: 'Home',
    routeName: 'home'
  },
  {
    name: 'Shop',
    routeName: 'shop'
  },
  {
    name: 'About',
    routeName: 'about'
  },
  {
    name: 'Contact',
    routeName: 'contact'
  }
]

onMounted(() => {
  activeMenu.value = route.name as string
})
</script>

<template>
  <!-- Announcement -->
  <div class="container mx-auto max-w-screen-2xl">
    <div class="announcement flex justify-center bg-primary text-base-100 py-1">
      <p class="text-lg drop-shadow">Discount 10% when shop in our online store</p>
    </div>
    <!-- Navbar -->
    <div>
      <div class="navbar px-10 relative">
        <div class="navbar-start flex gap-16">
          <li v-for="(menu, index) in menus" :key="index">
            <RouterLink
              :to="{ name: menu.routeName }"
              class="list-none"
              :class="menu.routeName === activeMenu ? 'active' : ''"
              >{{ menu.name }}</RouterLink
            >
          </li>
          <!-- <div><RouterLink :to="{ name: 'home' }">Home</RouterLink></div>
          <div><RouterLink :to="{ name: 'shop' }">Shop</RouterLink></div>
          <div><RouterLink :to="{ name: 'about' }">About</RouterLink></div>
          <div><RouterLink :to="{ name: 'contact' }">Contact Us</RouterLink></div> -->
          <!-- <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div> -->
        </div>
        <RouterLink :to="{ name: 'home' }">
          <div class="navbar-center text-xl hover:bg-[#f0f0f0]">
            <img
              class="w-36 absolute top-0 bottom-0 center-logo"
              src="/logo_y2k.png"
              alt="Y2K_logo"
            />
          </div>
        </RouterLink>
        <!-- Cart -->
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm badge-primary indicator-item">0</span>
            </div>
          </button>
          <!-- Toggle -->
          <div
            tabindex="0"
            class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow hidden"
          >
            <div class="card-body">
              <div class="card-actions">
                <a href="#" class="btn btn-primary btn-block">View cart</a>
              </div>
            </div>
          </div>
          <!-- User Profile -->
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost ml-4 btn-circle avatar">
              <div class="w-8 rounded-full">
                <img
                  alt="user-profile"
                  src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                />
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 mt-3 w-52 p-2 z-10 shadow"
            >
              <li>
                <a class="justify-between"> Login </a>
              </li>
              <li><a>Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Content -->
    <slot></slot>
    <!-- Footer -->
    <footer class="footer footer-center bg-primary text-primary-content p-6">
      <aside>
        <a class="btn btn-ghost text-xl hover:bg-primary mb-6"
          ><img class="w-36 object-scale-down" src="/logo_y2k.png" alt="Y2K_logo"
        /></a>
        <p class="font-bold">
          Y2K TH Ltd.
          <br />
          Time Machine Since 2010
        </p>
        <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
      </aside>
      <nav>
        <div class="grid grid-flow-col gap-4">
          <a href="https://x.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              ></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              ></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              ></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
@import '../scss/breakpoints.scss';

* {
  box-sizing: border-box;
}

li {
  list-style: none;
}

.center-logo {
  left: 0;
  right: 0;
  margin-inline: auto;
}

.active {
  color: #3869c8;
  font-weight: bolder;
}
</style>
