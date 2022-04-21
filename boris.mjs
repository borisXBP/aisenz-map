#!/usr/bin/env zx

import "zx/globals";

await $`scp -r /Users/aisenz/boris/work/aisenz-map/lib/** /Users/aisenz/boris/home_assistance/frontend/node_modules/aisenz-map/`;
$`scp -r /Users/aisenz/boris/work/aisenz-map/lib/** /Users/aisenz/boris/home_assistance/frontend/hass_frontend/static/map/`;
$`echo -e Success`;

/* setTimeout(() => {
  console.log($`echo -e '\033[0;31m好玩吧？\033[0m'`);
}); */

// 注意要获取权限： chmod +x ./boris.mjs
