/** INFO
 * This is the client side root index.js file.
 * Path :/server-files/client_packages/[index]
 */
require("./ambients");
require("./rage-builder");
require("./events");

/**
 * This is the cef require list
 */
// require("./cef/Speedometer/script");
require("./cef/Speedometer2/script");
require("./cef/StreetLoc/script");
require("./cef/misc/index");
