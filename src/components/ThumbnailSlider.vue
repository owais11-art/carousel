<script setup>
    import { ref, watch } from 'vue'
    const props = defineProps(['carouselImages', 'visibleId'])
    const emit = defineEmits(['updateSlideThumbnail'])
    const container = ref()
    let x = 0 // how much to scroll horizontally if thumbnail image is not in viewport
    const SCROLL_BY = 120 // used to update 'x' whenever thumbnail image is not in viewport
    const handleClick = id => emit('updateSlideThumbnail', id)
    const dragVisibleImageToViewport = () => {
        const visible = container.value.querySelector('.slider-item.visible')
        const contRect = container.value.getBoundingClientRect()
        const visibleRect = visible.getBoundingClientRect()
        const viewport = contRect.x + contRect.width
        const scrollContainer = x => {
            container.value.scrollTo({
                top: 0,
                left: x,
                behavior: 'smooth'
            })
        }

        // when image is outside viewport to the right 
        if(visibleRect.x > viewport){
            x += SCROLL_BY
            scrollContainer(x)
        }

        // when image is outside viewport to the left
        if(visibleRect.x < contRect.x){
            x -= SCROLL_BY
            scrollContainer(x)
        }
    }
    watch(
        () => props.visibleId,
        dragVisibleImageToViewport,
        {
            flush: 'post' // to run callback(dragVisibleImageToViewport) after component is updated
        }
    )
</script>

<template>
    <div class="thumbnail-slider">
        <div class="slider-container" ref="container">
            <div class="slider-track">
                <div 
                    v-for="item in carouselImages"
                    :class="{'slider-item': 'slider-item', visible: item.isVisible}"
                    :key="item.id"
                    @click="() => handleClick(item.id)"
                >
                    <img :src="item.img" :alt="`${item.alt}-thumbnail`">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .thumbnail-slider{
        .slider-container{
            overflow: scroll;
            &::-webkit-scrollbar{
                display: none;
            }
            .slider-track{
                width: 100%;
                display: flex;
                gap: 20px;
                transition: all 0.5s;
                .slider-item{
                    flex-shrink: 0;
                    width: 100px;
                    height: 100px;
                    cursor: pointer;
                    &.visible{
                        border: 5px solid #FF00C7;
                    }
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>