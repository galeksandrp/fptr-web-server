window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  var URL_PREFIX = 'https://raw.githubusercontent.com/galeksandrp/fptr-web-server/refs/heads/master/';

  window.ui = SwaggerUIBundle({
    urls: FNAMES
      .split('\n')
      .filter(function(value, index, array){return value !== '';})
      .map(function(value, index, array){return {url: URL_PREFIX + value, name: value};}),
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
