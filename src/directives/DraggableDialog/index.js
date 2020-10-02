/**
* @file 拖拽移动
* @date 2020-10-02
* @author Yahui Li
*/

export const DraggableDialog = {
    update(el, params, vnode) {
        // 不开启拖拽
        if (!params.value) {
            return false
        }
        
        const dragDom = el.querySelector('.el-dialog')
        const dialogHeader = el.querySelector('.el-dialog__header')
    
        dragDom.style.cssText += ';top:0px;'
        dialogHeader.style.cssText += ';cursor:move;'
        
        dialogHeader.onmousedown = e => {
    
            const disX = e.clientX - dialogHeader.offsetLeft
            const disY = e.clientY - dialogHeader.offsetTop
    
            const dragDomWidth = dragDom.offsetWidth
            const dragDomHeight = dragDom.offsetHeight
    
            const screenWidth = document.body.clientWidth
            const screenHeight = document.body.clientHeight
    
            const minDragDomLeft = dragDom.offsetLeft
            const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth
    
            const minDragDomTop = dragDom.offsetTop
            const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight
    
            let styleLeftStr = getComputedStyle(dragDom)['left']
            let styleTopStr = getComputedStyle(dragDom)['top']
            if (!styleLeftStr || !styleTopStr) {
                return
            }
    
            let styleLeft,styleTop
    
            // Format may be "##%" or "##px"
            if (styleLeftStr.includes('%')) {
                styleLeft = +document.body.clientWidth * (+styleLeftStr.replace(/%/g, '') / 100)
                styleTop = +document.body.clientHeight * (+styleTopStr.replace(/%/g, '') / 100)
            } else {
                styleLeft = +styleLeftStr.replace(/px/g, '')
                styleTop = +styleTopStr.replace(/px/g, '')
            }
    
            document.onmousemove = (e) => {
                let left = e.clientX - disX
                let top = e.clientY - disY
        
                // Handle edge cases
                if (-(left) > minDragDomLeft) {
                    left = -minDragDomLeft
                } else if (left > maxDragDomLeft) {
                    left = maxDragDomLeft
                }
                if (-(top) > minDragDomTop) {
                    top = -minDragDomTop
                } else if (top > maxDragDomTop) {
                    top = maxDragDomTop
                }
        
                
                dragDom.style.cssText += `;left:${left + styleLeft}px;top:${top + styleTop}px;`
        
                if (vnode.componentInstance) {
                    vnode.componentInstance.$emit('onDialogDrag')
                } else if (vnode.elm) {
                    vnode.elm.dispatchEvent(new CustomEvent('onDialogDrag'))
                }
            }
    
            document.onmouseup = () => {
                document.onmousemove = null
                document.onmouseup = null
            }
        }
    },
}
