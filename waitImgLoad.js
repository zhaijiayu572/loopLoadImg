/**
 * 轮询图片地址，直到请求成功或者达到设定次数上限
 * @param imgSrc {string} 需要轮询的图片地址
 * @param tryTime {number} 尝试的次数
 * @param interval {number} 每次尝试的间隔单位：ms
 * @return {Promise<boolean>} 规定次数内是否请求成功
 */
export const waitImageUrlAvailable = async function (imgSrc,tryTime,interval){
    let count = 0
    while (count < tryTime) {
        console.log('try: ' + (count +1))
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                const img = new Image()
                img.src = imgSrc
                img.onerror = function (){
                    count += 1
                    resolve()
                }
                img.onload = function (){
                    count = tryTime + 1
                    console.log('load')
                    resolve()
                }
            },interval)

        })
    }
    return count === tryTime + 1
}
