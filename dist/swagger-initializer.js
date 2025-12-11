var FNAMES=`
Business.Ru-check.business.ru-1.05-swagger.yaml
Business.Ru-check.business.ru-1.2-swagger.yaml
atol-dev-fptr-web-requests-1.0.0.0-swagger.yaml
atol-dev-fptr-web-requests-1.0.1.0-swagger.yaml
atol-dev-fptr-web-requests-1.0.2.0-swagger.yaml
atol-dev-fptr-web-requests-1.0.3.0-swagger.yaml
atol-dev-fptr-web-requests-1.0.4.0-swagger.yaml
atol-dev-fptr-web-server-10.7.0.0-swagger.yaml
atol-dev-fptr-web-server-10.8.0.0-swagger.yaml
atol-dev-fptr-web-server-10.8.1.0-swagger.yaml
atol-dev-fptr-web-server-10.9.1.0-swagger.yaml
atol-dev-fptr-web-server-10.9.2.0-swagger.yaml
atol-dev-fptr-web-server-10.9.2.3-swagger.yaml
atol-dev-fptr-web-server-10.9.3.1-swagger.yaml
atol-dev-fptr-web-server-10.9.4.0-swagger.yaml
atol-dev-fptr-web-server-10.9.4.X-swagger.yaml
eofd-e-ofd_client_web_api-1.07-swagger.yaml
stavtrack-online-2025-12-11/api-docs.json
stavtrack-online-2025-12-11/Authorization Service API.yaml
stavtrack-online-2025-12-11/User Server API.yaml
swagger.yaml
`
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
