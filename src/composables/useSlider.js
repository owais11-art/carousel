import { ref } from "vue"
import { useHelpers } from './useHelpers'
import { data } from '../data/siteData'

export const useSlider = () => {
    const carouselImages = ref(data)
    const LOWER_LIMIT = 0
    const UPPER_LIMIT = carouselImages.value.length-1
    const slideBy = ref(0) // used to slideBy the main slider everytime user clicks on any chevron
    const visibleId = ref(1) // used to scroll thumbnail slider so that active image is in viewport

    const updateSlide = direction => {
        const { slide, updateImageVisibility } = useHelpers()
        const rightDirection = direction === 'right'
        let current = null // stores id and index of current visible image
        carouselImages.value.forEach((item, index) => {
            if(item.isVisible) {
                current = {
                    id: item.id,
                    idx: index
                }
                return
            }
        })
        const canSlide = slide(current.idx, rightDirection, slideBy, visibleId, LOWER_LIMIT, UPPER_LIMIT) // used to decide whether to update visibility or not
        canSlide && updateImageVisibility(current.id, rightDirection, carouselImages)
    }

    const updateSlideThumbnail = id => {
        carouselImages.value = carouselImages.value
                                .map(item => item.isVisible 
                                        ? {...item, isVisible: false} : item)
                                .map(item => item.id === id 
                                        ? {...item, isVisible: true} : item)
        carouselImages.value.forEach((item, index) => {
            if(item.isVisible) slideBy.value = index * 100 * -1
        })
        
    }

    return {
        carouselImages,
        updateSlide,
        updateSlideThumbnail,
        slideBy,
        visibleId
    }
}