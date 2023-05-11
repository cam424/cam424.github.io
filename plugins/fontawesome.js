import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faWandSparkles, faWindowMinimize, faWindowMaximize, faXmark, faUpLong, faDownLong, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faWandSparkles);
library.add(faWindowMinimize);
library.add(faWindowMaximize);
library.add(faXmark);
library.add(faUpLong);
library.add(faDownLong);
library.add(faPlay);
library.add(faLinkedin);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});