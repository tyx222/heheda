function clock() {
    var rtn = setInterval(function () {
        var bar = document.getElementById("bar")
        var barWidth = bar.offsetWidth;
        var box = document.getElementById("box")
        var boxwidth = box.offsetWidth;
        var size = document.getElementById("indesize")
        $("#bar").animate({
            width: boxwidth + "px",
        }, 3000)
        var j = boxwidth / 100
        size.innerHTML = `${Math.floor(barWidth/j)}%`
        if (barWidth == boxwidth) {
            setTimeout(function () {
                window.location.href = "http://htmlpreview.github.io/?https://github.com/tyx222/heheda/blob/master/h5%E6%A8%A1%E6%8B%9F%E4%B8%8B%E8%BD%BD/html/index2.html";
            }, 2000)
            return clearInterval(rtn)
        }
    }, 50)
}




