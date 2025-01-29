<template>
  <q-layout view="hHh LpR lFf">
    <q-header elevated class="gradient-v text-grey-10" height-hint="80">
      <q-toolbar style="height: 64px">
        <q-btn v-if="!leftDrawerOpenD" flat round color="primary" icon="menu" @click="toggleLeftDrawer" />
        <div class="row col">
          <q-toolbar-title class="justify-center cursor-pointer">
            <NuxtImg type="image/webp" loading="lazy" width="170" height="45" sizes="170px" src="/logo.webp"alt="BFL" title="BFL" @click="navigateTo('/')" />
          </q-toolbar-title>
        </div>
        <div class="row col-auto items-center">
          <q-tabs inline-label dense shadow-2 class="q-pa-none">
            <q-route-tab active-class="text-primary" icon="home" label="Home" name="home" to="/" aria-label="Home" />
            <q-route-tab active-class="text-primary" icon="category" label="Categories" name="categories" aria-label="Categories">
              <LayoutsMegaMenu />
            </q-route-tab>
            <q-route-tab :class="allDiscountMenu > 0 ? '' : 'hidden'" active-class="text-primary" icon="percent" label="Discounts" name="discounts" aria-label="Discounts" to="/all-discounted" />
            <q-route-tab active-class="text-primary" icon="newspaper" label="News" name="news" aria-label="News" to="/news" />
            <q-route-tab active-class="text-primary" icon="edit_note" label="Blog" name="blog" aria-label="Blog" to="/blog" />
            <q-route-tab active-class="text-primary" icon="place" label="Showrooms" name="showrooms" aria-label="Showrooms" to="/showroom" />
          </q-tabs>
        </div>
        <div class="row col q-gutter-xs justify-end items-center no-wrap">
          <q-btn flat round icon="search" title="Search" />
          <q-btn flat round icon="person" title="My Profile">
            <q-menu anchor="bottom left" self="top left" transition-show="jump-up" transition-hide="jump-down" class="text-secondary bg-grey-1" auto-close :offset="[2, 2]">
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon size="xs" name="person" />
                </q-item-section>
                <q-item-section> My Profile </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon size="xs" name="logout" />
                </q-item-section>
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-menu>
          </q-btn>
          <q-btn flat round icon="login" title="Login/Signup" aria-label="Login/Signup" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Left Drawer (Category Menu) -->
    <q-drawer elevated class="gradient-bottom left-drawer" v-model="leftDrawerOpenD" mini-to-overlay :mini="miniState" @mouseover="miniState = false" @mouseout="miniState = true" :width="320" :breakpoint="500">
      <q-list>
        <LayoutsCategoryMenu />
      </q-list>
    </q-drawer>
    <!-- //__page-container -->
    <q-page-container class="bg-grey-2">
      <q-page class="q-pa-md flex justify-center flex-start">
        <div style="max-width: 3780px; width: 100%;" class="bg-amber-2">
          <slot />
        </div>
      </q-page>
    </q-page-container>

    <q-footer elevated reveal height-hint="55" class="gradient-bottom text-grey-7">
      <q-toolbar class="q-gutter-xs" dense>
        <q-btn flat icon="copyright" dense size="14px" class="text-grey-10" label="Womanish" no-caps aria-label="website" />
        <q-space />
        <q-btn href="tel:+8809611777000" size="md" flat comfortable class="rounded-borders" icon="call" title="Call" color="indigo-10" aria-label="Call" />
        <q-btn href="https://wa.me/+8801926680888" size="md" flat comfortable class="rounded-borders q-pa-none q-px-sm" title="Whatsapp" aria-label="Whatsapp">
          <NuxtImg sizes="36px" width="36px" src="/service-icons/whatsapp.svg" alt="Whatsapp" />
        </q-btn>
        <q-btn href="mailto:info@brothersfurniture.com.bd" size="md" flat comfortable class="rounded-borders" icon="email" title="Email" color="deep-orange" />
        <q-btn href="https://www.youtube.com/@BrothersFurnitureLtd-official" target="_blank" rel="noopener" size="md" flat comfortable class="rounded-borders" icon="smart_display" title="Youtube" color="red-14" />
        <q-btn href="https://www.facebook.com/Brothersfurnitureltd" target="_blank" rel="noopener" size="md" flat comfortable class="rounded-borders" icon="facebook" title="Facebook" color="blue-8" />
        <q-btn to="/policy/affiliate-earning" size="md" flat comfortable class="rounded-borders" icon="monetization_on" title="Affiliate Earning" color="grey-10" />
        <q-btn to="/policy/terms-and-conditions" size="md" flat comfortable class="rounded-borders" icon="policy" title="Term & Conditions" color="primary" />
        <q-btn v-show="install" size="md" flat comfortable class="rounded-borders" icon="download" title="Download App" color="primary" @click="installApp()" />
        <q-space />
        <q-btn flat icon="code" dense size="14px" class="text-grey-10" label="Created By ICT Layer (V8)" no-caps href="https://www.ictlayer.com/" target="_blank" aria-label="website" />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const leftDrawerOpenD = ref(true);
const miniState = ref(true);
const leftDrawerOpen = ref(false);
const allDiscountMenu = ref(1);
const install = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpenD.value = !leftDrawerOpenD.value;
}


function installApp() {
  // Logic to install the app
}

function navigateTo(path: string) {
  // Logic to navigate to a specific path
}

</script>