import "./bootstrap";
import { createApp } from "vue";

let app = createApp({});

/**
 * Register components
 */
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => app.component(
	(<string>key.split('/').pop()).split('.')[0],
	files(key).default));

app.mount("#app");
