<script setup>
    import Chevron from './Chevron.vue'
    defineProps(['carouselImages', 'slideBy'])
    const emit = defineEmits(['updateSlide'])
    const updateSlide = direction => emit('updateSlide', direction)
</script>

<template>
    <div class="slider">
        <div class="slider-container">
            <Chevron className="mobile" @updateSlide="updateSlide"/>
            <div class="slider-track" :style="{transform: `translateX(${slideBy}%)`}">
                <div 
                    class="slider-item"
                    v-for="item in carouselImages"
                    :key="item.id"
                >
                    <img :src="item.img" :alt="item.alt">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .slider{
        width: 100%;
        height: 300px;
        padding-top: 15px;
        .slider-container{
            position: relative;
            height: 300px;
            width: 500px;
            @media(max-width: 850px){
                width: 100%;
                height: 300px;
            }
            margin: 0 auto;
            overflow: hidden;
            .slider-track{
                display: flex;
                width: 100%;
                height: 100%;
                transition: all .5s;
                .slider-item{
                    width: 100%;
                    flex-grow: 1;
                    flex-shrink: 0;
                    img{
                        width: 100%;
                        height: auto;
                        display: block;
                        @media(max-width: 1034px){
                            width: 100%;
                            height: 300px;
                        }
                    }
                }
            }
        }
    }
</style>