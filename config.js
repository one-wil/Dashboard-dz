/* StoreMaster central dashboard configuration.
   Load config.json as a fallback/backup; the authenticated Worker/KV is the durable source of truth. */
const storeMasterConfigPromise = fetch("./config.json", { cache: "no-store" })
  .then(response => response.ok ? response.json() : null)
  .catch(() => null);
window.STOREMASTER_CONFIG = Object.freeze({
  dataFile: "./config.json",
  dataApi: "/api/master/data",
  dataPromise: storeMasterConfigPromise,
  schemaVersion: 1
});
