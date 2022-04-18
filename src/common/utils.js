export function debounce(func,delay){
  let timer = null
  // console.log('wwwww')


  return function(...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this,args)
    },delay)
  }
}