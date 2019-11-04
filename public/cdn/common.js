(function(doc, win) {
 
  var docEl = doc.documentElement,
    wid = 1080,
    K,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = wid
      if (docEl.clientWidth <= wid) {
        clientWidth = docEl.clientWidth
        if (docEl.clientWidth < 320) {
          clientWidth = 320
        }
      }
      if (!clientWidth) {
        return
      }
      docEl.style.fontSize = 50 * (clientWidth / (wid / 2)) + 'px'
    }
  win.addEventListener(
    resizeEvt,
    function() {

      clearTimeout(K), (K = setTimeout(recalc, 300))
    },
    !1
  )
  doc.addEventListener('DOMContentLoaded', recalc, false)
  recalc()

})(document, window)
