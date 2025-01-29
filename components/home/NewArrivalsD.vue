<script setup lang="ts">
import { defineComponent } from 'vue';
import Vue3Marquee from 'vue3-marquee';

defineComponent({
  components: {
    Vue3Marquee
  }
});

const config = useRuntimeConfig();

const show: any = ref(true);
const nuxtApp = useNuxtApp();

interface ProductType {
    [x: string]: any;
}

const { data: response, status }: ProductType = useAsyncData(
    "home-new-arrival",
    async () =>
        $fetch("/api/home-new-arrival", {
            query: {
                tag: config.public.tagFiltering,
                limit: "20",
                start: "0",
            },
        }),
    {
        default: () => [],
        lazy: true,
        deep: false,
        transform(input: any) {
            input.data = input.data.map((item: any) => ({
                acc_ledger_name: item.acc_ledger_name,
                fg_discount: item.fg_discount,
                fg_discount_end_date: item.fg_discount_end_date,
                fg_image: item.fg_image,
                fg_url: item.fg_url,
                fg_featured: item.fg_featured,
                fg_view: item.fg_view,
                fg_up_final: item.fg_up_final,
            }));

            if (input.data.length == 0) show.value = false;
            return {
                ...input,
                fetchedAt: new Date(),
            };
        },
        getCachedData(key: any) {
            const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
            if (!data) {
                return;
            }
            const expDate = new Date(data.fetchedAt);
            expDate.setTime(expDate.getTime() + config.public.cacheMinAge);
            const isExpired = expDate.getTime() < Date.now();
            if (isExpired) {
                return;
            }
            return data;
        },
    }
);

const avatarArray = [
    'https://avatars.dicebear.com/api/avataaars/1.svg',
    'https://avatars.dicebear.com/api/avataaars/2.svg',
    'https://avatars.dicebear.com/api/avataaars/3.svg',
]

</script>
<template>
    <section class="q-mt-md">
        <q-card v-show="show" flat>
            <q-card-section class="row justify-center text-center gradient-h">
                <NuxtLink to="/new-arrivals" aria-label="New Arrivals" title="New Arrivals"
                    style="text-decoration: none">
                    <h3 class="text-h4 text-capitalize text-primary text-weight-medium q-my-none">
                        New Arrivals
                    </h3>
                </NuxtLink>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-pb-none q-px-none">
                <div class="row no-wrap justify-center items-center">
                    <div class="col-2 q-mr-md" style="width: auto">
                        <NuxtImg loading="lazy" placeholder="/placeholder.gif"
                            class="cursor-pointer rounded-borders shadow-5" format="webp" width="190px" height="367px"
                            quality="50" src="https://placehold.co/185x360" alt="New Arrivals" title="New Arrivals"
                            @click="navigateTo('/new-arrivals')" />
                    </div>
                    <div class="col q-pt-sm">
                        <!-- {{ response.data }} -->
                        <Vue3Marquee>
                            <div class="card" v-for="avatar in avatarArray" :key="avatar">
                                <img :src="avatar" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </Vue3Marquee>


                        <!-- <div v-if="status === 'pending'" v-bind="configCarousel" class="fit gradient" transition-prev="fade" transition-next="fade" animated infinite autoplay swipeable ref="carousel" height="100%">
              <Carousel v-for="itemSet in 1" :key="itemSet" :name="itemSet" class="column no-wrap" label="Next">
                <div class="row q-px-xl q-mx-md justify-center items-center q-py-lg q-gutter-x-lg no-wrap" style="padding-left: 25px">
                  <div v-for="item in 3" :key="item" class="col-10">
                    <q-card class="shadow-5 shadow-on-hover overflow-hidden">
                      <q-card-section class="q-pa-none border-bottom row">
                        <NuxtImg loading="lazy" src="/placeholder.gif" sizes="100vw sm:50vw md:410px" width="410" height="410" format="webp" quality="50" class="fit" />
                      </q-card-section>
                      <q-card-section class="q-gutter-xs">
                        <div class="text-body1 q-pt-sm text-weight-regular ellipsis-2-lines" style="height: 54px">
                          <q-skeleton v-if="status === 'pending'" type="text" width="120px" />
                        </div>
                        <div class="items-baseline justify-between row">
                          <q-space />
                          <div class="items-baseline row text-subtitle1 text-weight-medium">
                            <q-skeleton v-if="status === 'pending'" type="text" width="120px" />
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
              </Carousel>
            </div>
            <div v-else>
              <Carousel v-bind="configCarousel">
                <Slide v-for="products in response.data" :key="products">
                  <NuxtLink :to="`/product/${products.fg_url}`" :aria-label="products.acc_ledger_name" style="text-decoration: none" class="text-dark q-pb-md">
                    <div :style="`max-width: ${config.public.imgGridMediumWidth}`">
                      <q-card class="shadow-5 shadow-on-hover overflow-hidden q-px-none">
                        <q-card-section class="q-pa-none border-bottom row">
                          <NuxtImg loading="lazy" placeholder="/placeholder.gif" :width="config.public.imgGridMediumWidth" :height="config.public.imgGridMediumHeight" format="webp" quality="50" :src="products.fg_image" :alt="products.acc_ledger_name" :title="products.acc_ledger_name" />
                        </q-card-section>
                        <div v-if="products.fg_featured > 0" class="absolute bg-transparent" style="top: 12px; left: 12px">
                          <q-icon size="sm" name="bookmark" color="primary" style="opacity: 90%" />
                        </div>
                        <div v-if="products.fg_view > 0" size="sm" class="absolute row items-center bg-transparent text-caption text-weight-medium" style="top: 14px; right: 12px; opacity: 100%">
                          <q-icon size="xs" name="trending_up" color="primary" class="q-mr-xs" />
                          <span class="text-primary">
                            {{ viewCount(products.fg_view) }}
                          </span>
                        </div>
                        <q-card-section class="q-gutter-xs">
                          <q-chip v-if="
                            products.fg_discount > 0 &&
                            inDateRange(
                              products.fg_discount_start_date,
                              products.fg_discount_end_date
                            )
                          " rounded outline no-caps size="sm" color="grey-5 q-px-none" class="absolute text-weight-bold bg-white row justify-center" style="top: 0; right: 4px; transform: translateY(-50%)">
                            <q-icon right size="12px" class="q-pr-sm" name="schedule" color="primary" />
                            <div class="text-primary text-capitalize q-pr-sm" :title="'Ends ' + useTimeAgo(products.fg_discount_end_date)">
                              Ends
                              {{ useTimeAgo(products.fg_discount_end_date) }}
                            </div>
                          </q-chip>
                          <div class="ellipsis-2-lines" style="height: 48px" :title="products.acc_ledger_name">
                            <h4 class="text-subtitle2 text-left text-weight-regular q-ma-none">
                              <q-skeleton v-if="status === 'pending'" type="text" width="120px" />
                              <span v-else class="text-subtitle2">
                                {{ products.acc_ledger_name }}
                              </span>
                            </h4>
                          </div>
                          <div class="items-baseline justify-between row">
                            <div v-if="
                              products.fg_discount > 0 &&
                              inDateRange(
                                products.fg_discount_start_date,
                                products.fg_discount_end_date
                              )
                            " class="text-subtitle2 text-primary text-uppercase">
                              -{{ products.fg_discount }}%
                            </div>
                            <q-space />
                            <div class="items-baseline row text-body2 text-weight-medium">
                              {{ config.public.currencyBefore }}
                              {{ formatMoney(products.fg_up_final * 1.0) }}
                              {{ config.public.currencyAfter }}
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                  </NuxtLink>
                </Slide>
              </Carousel>
            </div> -->
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </section>
</template>
