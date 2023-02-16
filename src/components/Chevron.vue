<script setup>
    import chevron from '../assets/chevron.svg'
    defineProps(['className'])
    const emit = defineEmits(['updateSlide'])
    const handleClick = direction => emit('updateSlide', direction)
</script>

<template>
    <div class="left-chev chev" :class="className">
        <img :src="chevron" alt="left-chevron" @click="() => handleClick('left')">
    </div>
    <div class="right-chev chev" :class="className">
        <img :src="chevron" alt="right-chevron" @click="() => handleClick('right')">
    </div>
</template>

<style scoped lang="less">
    .chev{
        &.mobile{
            display: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            @media(max-width: 1034px){
                display: flex;
                top: 50%;
                transform: translateY(-25px);
            }
        }
        @media(max-width: 1034px){
            display: none;
        }
        position: absolute;
        z-index: 1;
        width: 60px;
        background: rgba(255, 0, 199, .3);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 50px;
            height: 50px;
            @media(max-width: 1034px){
                width: 25px;
                height: 25px;
            }
            cursor: pointer;
        }
    }
    .left-chev{
        top: 0;
        left: 0;
        border-radius: 6px 0 0 6px;
    }
    .right-chev{
        top: 0;
        right: 0;
        border-radius: 0 6px 6px 0;
        img{
            transform: rotate(180deg);
        }
    }
</style>