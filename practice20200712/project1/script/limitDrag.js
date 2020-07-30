function limitDrag(id) {
    drag.call(this, id);
}

for (var i in drag.prototype){
    limitDrag.prototype[i] = drag.prototype[i];
}

limitDrag.prototype.fnMove = function (ev) {
    var oEvent = ev || event;

    var x = oEvent.clientX - this.disX;
    var y = oEvent.clientY - this.disY;

    if(x < 0){
        x = 0;
    }else if (x > (document.documentElement.clientWidth - this.oDiv.offsetWidth)){
        x = document.documentElement.clientWidth - this.oDiv.offsetWidth;
    }

    if(y < 0){
        y = 0;
    }else  if (y > document.documentElement.clientHeight - this.oDiv.offsetHeight)
    {
        y = document.documentElement.clientHeight - this.oDiv.offsetHeight;
    }
    this.oDiv.style.left = x + 'px';
    this.oDiv.style.top = y + 'px';
};