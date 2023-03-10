window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    validatorUrl : null,
    //url: "./swagger.json",
    url: "swagger.yaml",
    //url: "./swagger-gateway.yaml",
    //url: "https://petstore.swagger.io/v2/swagger.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    onComplete: function(a,b) {
      console.log(`On Complete function`, a,b);
      // "basicAuth" is the key name of the security scheme in securityDefinitions
      window.ui.preauthorizeBasic("basicAuth", "username", "password");
      
    },
    requestInterceptor: (req) => {
      console.log(`Request inspector`,req);
      if (! req.loadSpec) {
        // Add the header to "try it out" calls but not spec fetches
        var token = btoa("username" + ":" + "password");
        req.headers.Authorization = "Basic " + token;
      }
      return req;
    }
  });

  //</editor-fold>
};
