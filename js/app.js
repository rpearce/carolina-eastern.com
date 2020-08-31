;(function(w, d) {
  function get(onError, cb, data) {
    var req = new XMLHttpRequest();

    function handleLoad() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          cb(JSON.parse(this.response))
        } else {
          onError()
        }
      }
    }

    req.addEventListener('load', handleLoad);
    req.open('GET', data.url);
    req.send();
  }

  function handleError() {
    console.log('get error')
  }

  function handleCornLoad(data) {
    // todo store in localStorage
    console.log({ corn: data })
  }

  function handleWheatLoad(data) {
    // todo store in localStorage
    console.log({ wheat: data })
  }

  function handleSoybeanLoad(data) {
    // todo store in localStorage
    console.log({ soybean: data })
  }

  function handleCottonLoad(data) {
    // todo store in localStorage
    console.log({ cotton: data })
  }

  get(
    handleError,
    handleCornLoad,
    { url: 'https://www.quandl.com/api/v3/datasets/CHRIS/CME_C1.json?api_key=Yr8iCRc9Rz_x9k4LyNw3&limit=1' }
  )

  get(
    handleError,
    handleWheatLoad,
    { url: 'https://www.quandl.com/api/v3/datasets/CHRIS/CME_W1.json?api_key=Yr8iCRc9Rz_x9k4LyNw3&limit=1' }
  )

  get(
    handleError,
    handleSoybeanLoad,
    { url: 'https://www.quandl.com/api/v3/datasets/CHRIS/CME_S1.json?api_key=Yr8iCRc9Rz_x9k4LyNw3&limit=1' }
  )

  get(
    handleError,
    handleCottonLoad,
    { url: 'https://www.quandl.com/api/v3/datasets/CHRIS/ICE_CT1.json?api_key=Yr8iCRc9Rz_x9k4LyNw3&limit=1' }
  )
})(window, document);
