/**
 * Function for getting an icon according to the type.
 * @param {"cargo" | "passenger" | "special"} type - Type of vehicle. Has the type "cargo" | "passenger" | "special".
 */
export const getTransportIcon = (type: "cargo" | "passenger" | "special") => {
  let pathToIcon = undefined;
  switch (type) {
    case "cargo":
      pathToIcon = require("../icons/map_icons/cargo.png");
      break;
    case "passenger":
      pathToIcon = require("../icons/map_icons/passenger.png");
      break;
    case "special":
      pathToIcon = require("../icons/map_icons/special.png");
      break;
    default:
      pathToIcon = require("../icons/map_icons/special.png");
      break;
  }
  return pathToIcon;
};
