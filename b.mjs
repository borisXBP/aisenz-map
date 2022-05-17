#!/usr/bin/env zx

import "zx/globals";

await $`scp -r /Users/aisenz/boris/work/aisenz-map/lib/** /Users/aisenz/boris/work/comet_fronted/node_modules/aisenz-map/`;
$`echo -e Success`;

/* setTimeout(() => {
  console.log($`echo -e '\033[0;31m好玩吧？\033[0m'`);
}); */

// 注意要获取权限： chmod +x ./boris.mjs
