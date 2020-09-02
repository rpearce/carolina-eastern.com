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

  function handleLoad(type) {
    return function (data) {
      // todo store in localStorage
      //console.log({ [type]: data })

      if (!data || !data.dataset) {
        return
      }

      var el = d.querySelector('[data-crop="' + type + '"]');
      var ds = data.dataset;
      var ths = (ds.column_names || []).slice(0, 9);
      var tds = (ds.data[0] || []).slice(0, 9);

      var table = '<table class="bcc bse0e0dc bw1001 fs18 lh17 ffss mw100p w100p">' +
        '<thead>' +
          '<caption class="mb1 tal">' + ds.name + '</caption>' +
          '<tr>' +
            ths.map(function (x) {
              return '<th class="bge4eaee bse0e0dc bw0110 fwn mw18 p6x8 tal vat">' +
                x +
              '</th>'
            }).join('') +
          '</tr>' +
        '</thead>' +
        '<tbody>' +
          '<tr>' +
            tds.map(function (x) {
              return '<td class="bse0e0dc bw0110 p6x8">' +
                (x != null ? x : 'n/a') +
              '</td>'
            }).join('') +
          '</tr>' +
        '</tbody>' +
      '</table>'

      el.innerHTML = table
    }
  }

  get(
    handleError,
    handleLoad('corn'),
    { url: 'https://www.quandl.com/api/v3/datasets/CHRIS/CME_C1.json?api_key=Yr8iCRc9Rz_x9k4LyNw3&limit=1' }
  )

  get(
    handleError,
    handleLoad('wheat'),
    { url: 'https://www.quandl.com/api/v3/datasets/CHRIS/CME_W1.json?api_key=Yr8iCRc9Rz_x9k4LyNw3&limit=1' }
  )

  get(
    handleError,
    handleLoad('soybeans'),
    { url: 'https://www.quandl.com/api/v3/datasets/CHRIS/CME_S1.json?api_key=Yr8iCRc9Rz_x9k4LyNw3&limit=1' }
  )

  get(
    handleError,
    handleLoad('cotton'),
    { url: 'https://www.quandl.com/api/v3/datasets/CHRIS/ICE_CT1.json?api_key=Yr8iCRc9Rz_x9k4LyNw3&limit=1' }
  )
})(window, document);
