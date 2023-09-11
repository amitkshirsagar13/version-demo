import { get3dName } from "@amitkshirsagar/3d-name-provider"
import { getCamName } from "@amitkshirsagar/cam-name-provider"

export function get3dNameX() {
   return `Zelx-${get3dName()}`
};

export function getCamNameX() {
   return `Zelx-${getCamName()}`
};

