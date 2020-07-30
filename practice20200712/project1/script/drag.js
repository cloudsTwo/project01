function drag(id) {
    var _this = this;
    this.oDiv = document.getElementById(id);

    this.disX = 0;
    this.disY = 0;

    this.oDiv.onmousedown = function (ev) {
        _this.fnDown(ev);
        return false;
    };
}

drag.prototype.fnDown = function (ev) {
    var _this = this;
    var oEvent = ev || event;

    this.disX = oEvent.clientX - this.oDiv.offsetLeft;
    this.disY = oEvent.clientY - this.oDiv.offsetTop;

    document.onmousemove = function(ev){
        _this.fnMove(ev);
    };

    document.onmouseup = function () {
        _this.fnUp();
    };
};

drag.prototype.fnUp = function () {
    document.onmousemove = null;
    document.onmouseup = null;
};

drag.prototype.fnMove = function (ev) {
    var oEvent = ev || event;

    var x = oEvent.clientX - this.disX;
    var y = oEvent.clientY - this.disY;

    this.oDiv.style.left = x + 'px';
    this.oDiv.style.top = y + 'px';
};