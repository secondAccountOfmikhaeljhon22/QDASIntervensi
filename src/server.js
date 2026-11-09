const { loadEnv } = require("./config");
const { createApp } = require("./app");

const config = loadEnv();
const app = createApp({ corsOrigin: config.corsOrigin });

app.listen(config.port, () => {
  console.log(`QDAS Intervensi Pemerintah API berjalan di port ${config.port}.`);
});

