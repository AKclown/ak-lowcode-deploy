/*
 * 删除 node_modules
 * @Author: Jiyu Shao
 * @Date: 2022-01-11 18:34:06
 * @Last Modified by: Jiyu Shao
 * @Last Modified time: 2022-01-29 17:43:01
 */

import shell from "shelljs";

shell.rm("-rf", "core/**/{node_modules}");
shell.rm("-rf", "node_modules");
