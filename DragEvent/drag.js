const list = document.querySelector('.list')

let picked = null;

list.addEventListener('dragstart', (e) => {
    const obj = e.target
    picked = obj
    pickedIndex = [...obj.parentNode.children].indexOf(obj)
})

list.addEventListener('dragover', (e) => {
    e.preventDefault()
    
})

list.addEventListener('drop', (e) => {
    const obj = e.target
    const index = [...obj.parentNode.children].indexOf(obj)

    if(index > pickedIndex){
        obj.after(picked)
    } else {
        obj.before(picked)
    }

    index > pickedIndex ? obj.after(picked) : obj.before(picked)
})

