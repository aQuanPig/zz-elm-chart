
/**
 * 防抖函数
 * @param {*} fn 函数
 * @param {*} delay 延迟时间
 */
export function debounce(fn, delay = 400) {
  let timer = null
  return function () {
    const context = this
    const args = Array.from(arguments)
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}