<template>
  <div class="navbar bg-transparent container mx-auto mt-10">
    <div class="navbar-start">
      <!-- hamburger menu -->
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#1FA7FF"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a><NuxtLink to="/v2/home">Beranda</NuxtLink></a>
          </li>
          <li>
            <a><NuxtLink to="/v2/about">Tentang Kita</NuxtLink></a>
          </li>
          <li>
            <a><NuxtLink to="/v2/news">Berita</NuxtLink></a>
          </li>
          <li>
            <a><NuxtLink to="/v2/gallery">Galeri</NuxtLink></a>
          </li>
          <li>
            <a><NuxtLink to="/v2/contact">Kontak</NuxtLink></a>
          </li>
        </ul>
      </div>

      <!-- logo -->
      <a class="btn btn-ghost normal-case text-xl">
        <img src="~/assets/schools.png" alt="schools" class="w-[158px]" />
      </a>
    </div>

    <!-- desktop navbar -->
    <div class="navbar-center hidden lg:flex">
      <ul
        class="menu menu-horizontal p-0 gap-10 font-medium text-xl text-[#fff]"
      >
        <li>
          <NuxtLink to="/v2/home" class="relative">Beranda</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/v2/about" class="relative">Tentang Kita</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/v2/news" class="relative">Berita</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/v2/gallery" class="relative">Galeri</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/v2/contact" class="relative">Kontak</NuxtLink>
        </li>
      </ul>
    </div>

    <!-- button-ppob -->
    <div class="navbar-end">
      <a class="btn-style-9">PPOB</a>
    </div>
  </div>
</template>
