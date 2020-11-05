/*eslint-disable*/

! function (e) {
  var t, n, o, i, l, a, d = '<svg><symbol id="iconfeeds-fill" viewBox="0 0 1024 1024"><path d="M810.667 298.667a64 64 0 0 1 64 64v426.666a64 64 0 0 1-64 64l-81.131 0.022a127.275 127.275 0 0 0 16.981-57.707l0.15-6.315V298.667h64zM640 170.667a64 64 0 0 1 64 64v554.666a64 64 0 0 1-64 64H213.333a64 64 0 0 1-64-64V234.667a64 64 0 0 1 64-64H640z m-192 320H277.333v64H448v-64z m128-128H277.333v64H576v-64z" fill="#FFFFFF" ></path></symbol><symbol id="iconhome-fill" viewBox="0 0 1024 1024"><path d="M556.587 159.36l288.49 183.915a64 64 0 0 1 29.59 53.973v392.747a64 64 0 0 1-64 64l-224-0.022v-256.64H448v256.64l-213.333 0.043a64 64 0 0 1-64-64V391.68a64 64 0 0 1 30.272-54.4l287.53-178.347a64 64 0 0 1 68.139 0.427z" fill="#FFFFFF" ></path></symbol><symbol id="iconnight-mode-fill" viewBox="0 0 1024 1024"><path d="M490.667 170.667c14.549 0 28.885 0.981 42.922 2.858a194.283 194.283 0 1 0 274.219 274.24 323.206 323.206 0 0 1 2.859 42.902c0 176.725-143.275 320-320 320-176.726 0-320-143.275-320-320 0-176.726 143.274-320 320-320z m224.277 0v72.853h72.875v60.01l-72.875-0.02v72.874h-59.99l-0.02-72.875H582.1V243.52h72.832v-72.853h60.011z" fill="#FFFFFF" ></path></symbol></svg>',
    c = (c = document.getElementsByTagName("script"))[c.length - 1].getAttribute("data-injectcss");
  if (c && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
    } catch (e) {
      console && console.log(e)
    }
  }

  function s() {
    l || (l = !0, o())
  }
  t = function () {
    var e, t, n, o;
    (o = document.createElement("div")).innerHTML = d, d = null, (n = o.getElementsByTagName("svg")[0]) && (n.setAttribute("aria-hidden", "true"), n.style.position = "absolute", n.style.width = 0, n.style.height = 0, n.style.overflow = "hidden", e = n, (t = document.body).firstChild ? (o = e, (n = t.firstChild).parentNode.insertBefore(o, n)) : t.appendChild(e))
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (n = function () {
    document.removeEventListener("DOMContentLoaded", n, !1), t()
  }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = t, i = e.document, l = !1, (a = function () {
    try {
      i.documentElement.doScroll("left")
    } catch (e) {
      return void setTimeout(a, 50)
    }
    s()
  })(), i.onreadystatechange = function () {
    "complete" == i.readyState && (i.onreadystatechange = null, s())
  })
}(window);