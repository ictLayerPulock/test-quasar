<template>
    <Vue3Marquee
        :pause-on-hover="true"
        @on-pause="playState = 'paused'"
        @on-resume="playState = 'playing'"
    >
        <div class="card" v-for="avatar in avatarArray" :key="avatar">
            <img :src="avatar" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </Vue3Marquee>
    <p>
        This animation is {{ playState }}.
    </p>
</template>

<script setup>
const playState = ref('playing')

const avatarArray = [
    'https://avatars.dicebear.com/api/avataaars/1.svg',
    'https://avatars.dicebear.com/api/avataaars/2.svg',
    'https://avatars.dicebear.com/api/avataaars/3.svg'
]
</script>
