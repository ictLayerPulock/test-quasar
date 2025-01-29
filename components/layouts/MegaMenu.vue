<template>
  <q-menu
    :offset="$q.screen.md ? [350, 16] : [370, 16]"
    transition-show="fade"
    transition-hide="fade"
    auto-close
  >
    <q-card
      style="min-width: 1300px;"
      class="hide-scrollbar no-scroll gradient-bottom overflow-hidden"
    >
      <q-card-section
        horizontal
      >
        <q-card-section class="col-7">
          <q-list
            dense
            class="col rounded-borders"
          >
            <q-item
              :clickable="false"
              to="/category/home-furniture"
              active-class="bg-grey-4 text-primary rounded-borders"
            >
              <q-item-section class="text-bold text-uppercase text-h6 text-primary">
                Home Furniture
              </q-item-section>
            </q-item>
            <q-separator spaced />
          </q-list>
          <div class="row">
            <q-list
              dense
              class="col rounded-borders"
            >
              <div class="row">
                <q-list
                  dense
                  class="col rounded-borders"
                >
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/almirah"
                  >
                    <q-item-section>
                      Almirah
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/bed"
                  >
                    <q-item-section>
                      Bed
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/bed-side-table"
                  >
                    <q-item-section>
                      Bed Side Table
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/bed-room-chair"
                  >
                    <q-item-section>
                      Bed Room Chair
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/chest-of-drawer"
                  >
                    <q-item-section>
                      Chest Of Drawer
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/center-table"
                  >
                    <q-item-section>
                      Center Table
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/dressing-table"
                  >
                    <q-item-section>
                      Dressing Table
                    </q-item-section>
                  </q-item>
                </q-list>
                <q-separator vertical />
                <q-list
                  dense
                  class="col rounded-borders"
                >
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/dining-table"
                  >
                    <q-item-section>
                      Dining Table
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/dining-chair"
                  >
                    <q-item-section>
                      Dining Chair
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/divan"
                  >
                    <q-item-section>
                      Divan
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/showcase"
                  >
                    <q-item-section>
                      Showcase
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/sofa"
                  >
                    <q-item-section>
                      Sofa
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/tv-trolly"
                  >
                    <q-item-section>
                      TV Trolly
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/side-board"
                  >
                    <q-item-section>
                      Side Board
                    </q-item-section>
                  </q-item>
                </q-list>
                <q-separator vertical />
                <q-list
                  dense
                  class="col rounded-borders"
                >
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/rocking-chair"
                  >
                    <q-item-section>
                      Rocking Chair
                    </q-item-section>
                  </q-item>
                  <!-- <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/alna"
                  >
                    <q-item-section>
                      Alna
                    </q-item-section>
                  </q-item> -->
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/reading-table"
                  >
                    <q-item-section>
                      Reading Table
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/shoe-shelf"
                  >
                    <q-item-section>
                      Shoe Shelf
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/telephone-table"
                  >
                    <q-item-section>
                      Telephone Table
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/tea-trolly"
                  >
                    <q-item-section>
                      Tea Trolly
                    </q-item-section>
                  </q-item>
                </q-list>
                <q-separator vertical />
                <q-list
                  dense
                  class="col rounded-borders"
                >
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/oven-stand"
                  >
                    <q-item-section>
                      Oven Stand
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/coat-stand"
                  >
                    <q-item-section>
                      Coat Stand
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/iron-stand"
                  >
                    <q-item-section>
                      Iron Stand
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/magazine-shelf-trolly"
                  >
                    <q-item-section>
                      Magazine Shelf & Trolly
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/showpiece-stand"
                  >
                    <q-item-section>
                      Showpiece Stand
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/chair-seater"
                  >
                    <q-item-section>
                      Chair Seater
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/side-rack"
                  >
                    <q-item-section>
                      Side Rack
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-list>
          </div>
        </q-card-section>
        <q-separator
          inset
          vertical
        />
        <q-card-section class="col">
          <q-list
            dense
            class="col rounded-borders"
          >
            <q-item to="/category/office-furniture">
              <q-item-section class="text-bold text-uppercase text-h6 text-primary">
                Office Furniture
              </q-item-section>
            </q-item>
            <q-separator spaced />
          </q-list>
          <div class="row">
            <q-list
              dense
              class="col rounded-borders"
            >
              <div class="row">
                <q-list
                  dense
                  class="col rounded-borders"
                >
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/conference-table"
                  >
                    <q-item-section>
                      Conference Table
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/director-table"
                  >
                    <q-item-section>
                      Director Table
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/drawer-unit"
                  >
                    <q-item-section>
                      Drawer Unit
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/office-sofa"
                  >
                    <q-item-section>
                      Office Sofa
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/office-table"
                  >
                    <q-item-section>
                      Office Table
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-list>
            <q-separator vertical />
            <q-list
              dense
              class="col rounded-borders"
            >
              <div class="row">
                <q-list
                  dense
                  class="col rounded-borders"
                >
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/file-cabinet"
                  >
                    <q-item-section>
                      File Cabinet
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/work-station"
                  >
                    <q-item-section>
                      Work Station
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/computer-table"
                  >
                    <q-item-section>
                      Computer Table
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/executive-table"
                  >
                    <q-item-section>
                      Executive Table
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-list>
            <q-separator vertical />
            <q-list
              dense
              class="col rounded-borders"
            >
              <div class="row">
                <q-list
                  dense
                  class="col rounded-borders"
                >
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/visitor-chair"
                  >
                    <q-item-section>
                      Visitor Chair
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/swivel-chair"
                  >
                    <q-item-section>
                      Swivel Chair
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/waiting-chair"
                  >
                    <q-item-section>
                      Waiting Chair
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/auditorium-chair"
                  >
                    <q-item-section>
                      Auditorium Chair
                    </q-item-section>
                  </q-item>
                  <q-item
                    v-ripple
                    clickable
                    active-class="bg-grey-4 text-primary"
                    to="/category/classroom-chair"
                  >
                    <q-item-section>
                      Classroom Chair
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-list>
          </div>
          <q-list
            dense
            class="col row justify-between rounded-borders q-pt-lg"
          >
            <q-item to="/category/mattress-ton">
              <q-item-section class="text-bold text-uppercase text-h6 text-primary cursor-pointer">
                Mattress & Ton
              </q-item-section>
            </q-item>
            <q-item to="/category/steel-furniture">
              <q-item-section class="text-bold text-uppercase text-h6 text-primary cursor-pointer">
                Steel Furniture
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-separator
          inset
          vertical
        />
      </q-card-section>
      <q-separator inset />
      <q-card-actions class="justify-center">
        <q-btn
          size="12px"
          color="secondary"
          label="More Categories"
          to="/category"
        />
      </q-card-actions>
    </q-card>
  </q-menu>
</template>