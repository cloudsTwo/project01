function move(obj, json, fnEnd) {
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {
        var s = true;  // 判断是否所有条件完成

        for (var name in json) {
            var value = 0;

            if (name == 'opacity') {
                value = Math.round(parseFloat(getStyle(obj, name)) * 100);
            } else {
                value = parseInt(getStyle(obj, name));
            }

            var speed = (json[name] - value) / 10;

            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if(value != json[name]){
                s = false;
            }

            if (name == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (value + speed) + ')';
                obj.style.opacity = (value + speed) / 100;
            } else {
                obj.style[name] = (value + speed) + 'px';
            }

        }

        if (s) {
            clearInterval(obj.timer);
            if (fnEnd) fnEnd();
        }
    }, 30)
}

function getStyle(obj, name) {
    if (obj.currentStyle){
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj, false)[name]
    }
}