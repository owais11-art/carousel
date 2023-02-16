<script setup>
    import Chevron from './Chevron.vue'
    import Slider from './Slider.vue'
    import ThumbnailSlider from './ThumbnailSlider.vue'
    import { useSlider } from '../composables/useSlider'
    const {
        carouselImages,
        slideBy,
        visibleId,
        updateSlide,
        updateSlideThumbnail
    } = useSlider()
</script>

<template>
    <main>
        <Chevron
            @updateSlide="updateSlide"
        />
        <Slider
            :carouselImages="carouselImages"
            :slideBy="slideBy"
            @updateSlide="updateSlide"
        />
        <ThumbnailSlider
            :carouselImages="carouselImages"
            :visibleId="visibleId"
            @updateSlideThumbnail="updateSlideThumbnail"
        />
    </main>
</template>

<style scoped lang="less">
    main{
        width: 60%;
        @media(max-width: 500px){
            width: 90%;
        }
        margin: 0 auto;
        margin-top: 5%;
        height: 500px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>