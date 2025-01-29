<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="sass">
/* Desktop Left Drawer Hover Effect */
.left-drawer
    .category-icon
        opacity: 60%
        transition-property: opacity
        transition-duration: 2s
.left-drawer:hover
    .category-icon
        opacity: 100%
/* For Card Border */
.border-all
  border: 0.5px solid #E0E0E0
.border-right
  border-right: 0.5px solid #E0E0E0
.border-bottom
  border-bottom: 0.5px solid #E0E0E0
/* For Gradient Palette */
.gradient
    background: linear-gradient(to top, #FAFAFA 20%, #F5F5F5 50%, #FAFAFA 80%)
.gradient-h
    background: linear-gradient(to right, #FAFAFA 10%, #F5F5F5 50%, #FAFAFA 90%)
.gradient-h2
    background: linear-gradient(to right, #F5F5F5 20%, #FAFAFA 50%, #F5F5F5 80%)
.gradient-v
    background: linear-gradient(to top, #F5F5F5 20%, #f5f5f5 50%, #FAFAFA 80%)
.gradient-bottom
    // background: linear-gradient(to bottom, #EEEEEE 20%, #f5f5f5 50%, #FFFFFF 80%)
    background: linear-gradient(to bottom, #F5F5F5 20%, #f5f5f5 50%, #FAFAFA 80%)
.gradient-top
    // background: linear-gradient(to bottom, #EEEEEE 20%, #f5f5f5 50%, #FFFFFF 80%)
    background: linear-gradient(to top, #F5F5F5 20%, #f5f5f5 50%, #FAFAFA 80%)
.gradient-right
    background: linear-gradient(to right, #F5F5F5 20%, #f5f5f5 50%, #FAFAFA 80%)
.gradient-left
    background: linear-gradient(to left, #F5F5F5 20%, #f5f5f5 50%, #FAFAFA 80%)

/* For Custom Scroll Bar */
*
    &::-webkit-scrollbar
        width: 4px
        height: 4px
    &::-webkit-scrollbar-track
        background: #f5f5f5
    &::-webkit-scrollbar-thumb
        background-color: #ED1C24
        border: 1px solid #ED1C24

    input
        &::-webkit-outer-spin-button, 
        &::-webkit-inner-spin-button
            -webkit-appearance: none
            margin: 0
</style>