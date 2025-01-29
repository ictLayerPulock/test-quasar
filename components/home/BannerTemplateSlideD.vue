<!-- Desktop -->
<template>
  <section>
    <div class="row q-gutter-x-md wrap">
      <!-- Banner Left -->
      <div v-if="template.left" class="col-3">
        <q-card>
          <q-skeleton v-if="status == 'pending'" class="col" height="500px" />
          <q-carousel v-else ref="carousel" v-model="slideLeft" class="col cursor-pointer" swipeable keep-alive animated
            :autoplay="5000" transition-next="jump-left" transition-previous="jump-right" infinite height="auto">
            <q-carousel-slide v-for="(banner, index) in template.left" :name="index + 1" class="q-pa-none" label="Next">
              <q-card class="q-pa-none">
                <NuxtImg class="fit" :src="img(src, { height: Number(height), quality: 70 })" :srcset="_srcset.srcset"
                  :height="height" :sizes="_srcset.sizes">
                </NuxtImg>
              </q-card>
            </q-carousel-slide>
          </q-carousel>
        </q-card>
      </div>
      <!-- Banner Main With Left Or Right -->
      <div v-if="template.left || template.right" class="col">
        <q-card>
          <q-skeleton v-if="status == 'pending'" class="col" height="543px" />
          <q-carousel v-else ref="carousel" v-model="slide" class="col cursor-pointer" swipeable keep-alive animated
            navigation :autoplay="5000" transition-next="jump-left" transition-previous="jump-right" infinite
            height="auto">
            <q-carousel-slide v-for="(banner, index) in template.main" :name="index + 1" class="q-pa-none" label="Next">
              <!-- <q-img :src="img(banner.img, {
                height: 500,
              })
                " no-spinner no-transition fetchpriority="high" loading="eager" :alt="banner.title"
                :title="banner.title">
                <template #loading>
                  <q-skeleton height="100%" width="100%" />
                </template>
              </q-img> -->
              <!-- <q-card class="q-pa-none">
                <NuxtImg :src="banner.img" :srcset="_srcset.srcset"
                  :height="height" :sizes="_srcset.sizes">
                </NuxtImg>
              </q-card> -->
              <q-card>
                <NuxtImg loading="lazy" class="fit" placeholder="/placeholder.gif" height="500" width="900" format="webp"
                quality="50" :src="banner.img" :alt="banner.title" :title="banner.title" />
              </q-card>
            </q-carousel-slide>
            <template v-slot:navigation-icon="{ active, btnProps, onClick }">
              <q-btn v-if="active" size="sm" :icon="btnProps.icon" color="white" aria-label="Previous" flat round dense
                @click="onClick" />
              <q-btn v-else size="sm" :icon="btnProps.icon" color="grey-1" aria-label="Next" flat round dense
                @click="onClick" />
            </template>
          </q-carousel>
        </q-card>
      </div>
      <!-- Banner Main Without Left & Right -->
      <div v-else class="col">
        <q-card>
          <q-skeleton v-if="status == 'pending'" height="auto" />
          <q-carousel v-else ref="carousel" v-model="slide" swipeable animated :autoplay="true" transition-next="scale"
            transition-previous="rotate" infinite height="540px" @mouseenter="autoplay = false"
            @mouseleave="autoplay = true">
            <q-carousel-slide v-for="(banner, index) in template.main" :name="index + 1" no-spinner loading="lazy"
              :alt="banner.title" :title="banner.title" :img-src="img(banner.img, {
                sizes: 'md:100vw lg:100vw xl:100vw',
              })
                " />
          </q-carousel>
        </q-card>
      </div>
      <!-- Banner Right -->
      <div v-if="template.right" class="col-3">
        <q-card>
          <q-skeleton v-if="status == 'pending'" class="col" height="500px" />
          <q-carousel v-else ref="carousel" v-model="slideRight" class="col cursor-pointer" swipeable keep-alive
            animated :autoplay="5000" transition-next="jump-left" transition-previous="jump-right" infinite
            height="auto">
            <q-carousel-slide v-for="(banner, index) in template.right" :name="index + 1" class="q-pa-none"
              label="Next">
              <!-- <q-card>
                <NuxtImg loading="lazy" placeholder="/placeholder.gif" height="500" width="450" format="webp"
                quality="50" :src="banner.img" :alt="banner.title" :title="banner.title" />
              </q-card> -->
              <q-card class="q-pa-none">
                <NuxtImg class="fit" :src="img(src, { height: Number(height), quality: 70 })" :srcset="_srcset.srcset"
                  :height="height" :sizes="_srcset.sizes">
                </NuxtImg>
              </q-card>
              <!-- <q-img :src="img('https://placehold.co/440x500', {
                height: 500,
              })
                " no-spinner no-transition fetchpriority="high" loading="eager" :alt="banner.title"
                :title="banner.title">
                <template #loading>
                  <q-skeleton height="100%" width="100%" />
                </template>
              </q-img> -->
            </q-carousel-slide>
          </q-carousel>
        </q-card>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {
  QCard,
  QSkeleton,
  QCarousel,
  QCarouselSlide,
  QBtn,
  QImg,
} from "quasar";
const config = useRuntimeConfig();
const nuxtApp = useNuxtApp();
// const img = useImage();
const slide = ref(1);
const autoplay = ref(true);
const slideRight = ref(1);
const slideLeft = ref(1);

const { data: template, status }: any = await useAsyncData(
  "template-slide",
  async () => $fetch("/api/template-slide/"),
  {
    default: () => [],
    // lazy: true,
    deep: false,
    transform(template: any) {
      return {
        ...template.data.desktop,
        fetchedAt: new Date(),
      };
    },
    getCachedData(key: any) {
      const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
      if (!data) {
        return;
      }
      const expDate = new Date(data.fetchedAt);
      expDate.setTime(expDate.getTime() + config.public.cacheMaxAge);
      const isExpired = expDate.getTime() < Date.now();
      if (isExpired) {
        return;
      }
      return data;
    },
  }
);

const props = defineProps({
  height: { type: [Number, String], default: 500 },
  src: {
    type: String,
    default: 'https://placehold.co/440x500'
  }
})
const img = useImage()
const _srcset = computed(() => {
  return img.getSizes(props.src, {
    sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
    modifiers: {
      format: 'webp',
      quality: 70,
      height: typeof props.height === 'string' ? parseInt(props.height, 10) : props.height
    }
  })
})
</script>
