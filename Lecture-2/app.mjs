/* to import export we have two methods:
1) is to make extension of file as .mjs
2) is to add "type": "module" in package.json
*/

import {sum, sub} from "./file.mjs"; // named imports are in {}
import mult from "./file.mjs"; // default import
console.log(sum, sub);