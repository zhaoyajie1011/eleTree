import { copy, paste, emitEvent } from '~/methods/copy'
import remove from '~/methods/remove'
import getCurrentNodeData from '~/opera/getCurrentNodeData'

let count = 0
let thisTree = null
let v = null
let that = null
let isOnce = false
let isDrag = false
// 一次性函数
function once(callback) {
    if(isOnce) return
    callback()
    isOnce = true
}
export function mousedown(tree, item) {
    thisTree = tree
    v = item
    that = this
    count = 0
    isOnce = false
    isDrag = false
    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', mouseup)
}

export function mousemove() {
    let options = thisTree.config
    count++
    if(count < 3) return
    isDrag = true
    let rootEl = document.querySelector(options.el)
    let x  = event.clientX + window.pageXOffset - rootEl.offsetLeft
    let y = event.clientY + window.pageYOffset - rootEl.offsetTop
    once(()=>{
        document.body.style['user-select'] = 'none'
        let text = that.elm.querySelector('.eleTree-text').innerText
        let cloneEl = document.createElement('span')
        cloneEl.innerText = text
        cloneEl.classList.add('eleTree-cloneElm')
        cloneEl.style['top'] = y + 'px'
        cloneEl.style['left'] = x + 'px'
        rootEl.appendChild(cloneEl)
        
        thisTree.rightMenuPasteData = v
        copy.call(thisTree, null, '', v)
    })
    
    let cloneEl = rootEl.querySelector('.eleTree-cloneElm')
    if(cloneEl){
        cloneEl.style['top'] = y + 3 + 'px'
        cloneEl.style['left'] = x + 3 + 'px'
    }
}

export function mouseup(tree, item) {
    let options = thisTree.config
    let {name, key, isOpen, checked, children, disabled, isLeaf } = options.request
    let rootEl = document.querySelector(options.el)
    if(isDrag){
        let cloneEl = document.querySelector('.eleTree-cloneElm')
        cloneEl && cloneEl.remove()
        if(this.elm && options.el === thisTree.config.el){
            // 开始移动和停止移动不是同一个
            if(tree.rightMenuPasteData && v[key] !== item[key]){
                emitEvent.call(tree, v, 'drag', ()=>{
                    remove.call(tree, null, [tree.rightMenuPasteData[key]])
                    paste.call(tree, null, '', 'children', item, 'move')
                }, {
                    endData: getCurrentNodeData.call(tree, item),
                    range: 'inner'
                })
            }
        }else if(event.target.isEqualNode(rootEl)){
            // 移动到根节点
            let item = options.data[options.data.length - 1]
            emitEvent.call(thisTree, v, 'drag', ()=>{
                remove.call(thisTree, null, [thisTree.rightMenuPasteData[key]])
                paste.call(thisTree, null, '', 'after', item, 'move')
            }, {
                endData: getCurrentNodeData.call(thisTree, item),
                range: 'outer'
            })
        }
        document.body.style['user-select'] = 'auto'
    }

    document.removeEventListener('mousemove', mousemove)
    document.removeEventListener('mouseup', mouseup)
}