// Variables
const block = document.querySelector('.block')
const text = document.querySelector('textarea')

const all = document.querySelector('.all')
const tl = document.querySelector('.tl')   
const tr = document.querySelector('.tr')   
const br = document.querySelector('.br')   
const bl = document.querySelector('.bl')   
const bw = document.querySelector('.bw') 

const bs = document.querySelector('.bs')
const bc = document.querySelector('.bc')
const bgc = document.querySelector('.bgc')

// Functions
const drawText = () => {
    text.innerText = `border-radius: ${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px;`
}

const allCorn = () => {
    block.style.borderRadius = all.value + 'px'
    
    tl.value = all.value
    tr.value = all.value
    br.value = all.value
    bl.value = all.value

    drawText()
}

const tlCorn = () => {
    block.style.borderTopLeftRadius = tl.value + 'px'
    drawText()
}

const trCorn = () => {
    block.style.borderTopRightRadius = tr.value + 'px'
    drawText()
}

const brCorn = () => {
    block.style.borderBottomRightRadius = br.value + 'px'
    drawText()
}

const blCorn = () => {
    block.style.borderBottomLeftRadius = bl.value + 'px'
    drawText()
}

const bWidth = () => {
    block.style.borderWidth = bw.value + 'px'
    drawText()
}

const bStyle = () => {
    block.style.borderStyle = bs.value
    drawText()
}

const bColor = () => {
    block.style.borderColor = bc.value
    drawText()
}

const bgColor = () => {
    block.style.backgroundColor = bgc.value
    drawText()
}

// Events
all.addEventListener('input', allCorn )
tl.addEventListener('input', tlCorn)
tr.addEventListener('input', trCorn)
br.addEventListener('input', brCorn)
bl.addEventListener('input', blCorn)
bw.addEventListener('input', bWidth)
bs.addEventListener('input', bStyle)
bc.addEventListener('input', bColor)
bgc.addEventListener('input', bgColor)
