/** 删除 node_modules*/

import shell from "shelljs";

shell.rm("-rf", "core/**/{node_modules}");
shell.rm("-rf", "node_modules");
