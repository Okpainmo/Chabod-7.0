function particles() {
  alert("Page is loaded");
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load(
    "particlesJs",
    "../Scripts../Dist/particles.js-master/particles-config.json",
    function () {
      console.log("callback - particles.js config loaded");
    }
  );
}
