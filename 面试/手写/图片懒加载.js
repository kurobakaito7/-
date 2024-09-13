// 选择所有带有data-src属性的img元素
const images = document.querySelectorAll('img[data-src]')
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // 如果元素进入视口，entry.target表示被观察的目标元素
            // 获取目标元素
            const img = entry.target;
            // 在data-src属性中获取真正的src
            const src = img.getAttribute('data-src')
            // 将图片src设置为真正的src
            img.src = src
            // 当图片加载完成回调给图片元素添加上lazyloaded属性
            img.onload = () => {
                img.classList.add('lazyloaded')
            };
            // 结束观察
            observer.unobserve(img)
        }
    })
})

// 观察所有img
images.forEach(image => {
    observer.observe(image)
})