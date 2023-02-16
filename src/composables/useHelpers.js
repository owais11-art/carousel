export const useHelpers = () => {
    const slide = (idx, rightDirection, slideBy, visibleId,LOWER_LIMIT, UPPER_LIMIT) => {
        const canSlide = (!rightDirection && idx === LOWER_LIMIT) ||
                         (rightDirection && idx === UPPER_LIMIT)
        if(canSlide) return false
        slideBy.value = rightDirection ? slideBy.value - 100 : slideBy.value + 100
        visibleId.value = rightDirection ? visibleId.value + 1 : visibleId.value - 1
        return true
    }

    const updateImageVisibility = (id, rightDirection, carouselImages) => {
        let images = rightDirection ? carouselImages.value : carouselImages.value.reverse()
        let makeVisible = false
        images = images.map((image) => {
            if(makeVisible){
                image.isVisible = true
                makeVisible = false
            }
            if(image.id === id){
                image.isVisible = false
                makeVisible = true
            }
            return image
        })
        carouselImages.value = rightDirection ? images : images.reverse()
    }

    return {
        slide,
        updateImageVisibility
    }
}