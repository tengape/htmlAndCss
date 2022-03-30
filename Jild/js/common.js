
/* 选中所有的有字菜单的 a 标 */
var oA = document.getElementsByClassName('menu-nav');
var flag = true
for (let index = 0; index < oA.length; index++) {
    oA[index].onclick = function (e) {
        // let oUl = this.parentNode.children[1];
        for (let i = 0; i < oA.length; i++) {
            oA[i].parentNode.children[1].style.display = 'none';
            oA[i].children[1].src = './image/icon/arrow-left.png';
        }
        // oUl.style.display = 'block';
        // this.children[1].src = './image/icon/arrow-down.png';
        flag ? this.parentNode.children[1].style.display = 'block' : this.parentNode.children[1].style.display = 'none';
        flag ? this.children[1].src = './image/icon/arrow-down.png' : this.children[1].src = './image/icon/arrow-left.png';
        flag = !flag;
    }
}
