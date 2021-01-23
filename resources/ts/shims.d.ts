import { AxiosStatic } from "axios";
import Lodash from "lodash";
import Popper from "popper.js";

declare global {
	interface Window {
		axios: AxiosStatic,
		Popper: typeof Popper,
		_: Lodash
	}
}
