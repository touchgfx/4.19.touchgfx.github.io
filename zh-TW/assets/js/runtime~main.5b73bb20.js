!function(){"use strict";var e,a,f,d,c,b={},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,n),f.loaded=!0,f.exports}n.m=b,n.c=t,e=[],n.O=function(a,f,d,c){if(!f){var b=1/0;for(u=0;u<e.length;u++){f=e[u][0],d=e[u][1],c=e[u][2];for(var t=!0,r=0;r<f.length;r++)(!1&c||b>=c)&&Object.keys(n.O).every((function(e){return n.O[e](f[r])}))?f.splice(r--,1):(t=!1,c<b&&(b=c));if(t){e.splice(u--,1);var o=d();void 0!==o&&(a=o)}}return a}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[f,d,c]},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,{a:a}),a},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var c=Object.create(null);n.r(c);var b={};a=a||[null,f({}),f([]),f(f)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((function(a){b[a]=function(){return e[a]}}));return b.default=function(){return e},n.d(c,b),c},n.d=function(e,a){for(var f in a)n.o(a,f)&&!n.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(a,f){return n.f[f](e,a),a}),[]))},n.u=function(e){return"assets/js/"+({3:"23407fb3",39:"a07c7efb",41:"b15627b5",53:"935f2afb",66:"16e413fc",72:"385c4476",78:"9d4fc56c",84:"460e717b",88:"c63ee249",90:"daff6b2d",117:"7e9ff4d7",139:"f9abf00f",207:"970aa6d9",217:"cd41fdc0",222:"4a6de492",231:"0049329e",268:"0120660c",300:"557269e0",320:"ef83f141",380:"e7c99b5d",441:"8c53953f",481:"640f3f1e",487:"7b0bcb1e",490:"ee393ddf",495:"59e2ce5b",497:"27130570",512:"216fb7f3",515:"7e4afc06",520:"65b7f032",548:"b617ede7",567:"eac0d30d",592:"ee3e9a55",603:"8402a4a6",617:"f9d638a0",619:"8c44e976",628:"b018a17f",639:"69df4d70",648:"99f596fc",687:"6981e3ac",710:"603eee8f",716:"aed9d842",733:"69c3866c",789:"450466e0",813:"f53ec3db",841:"2e85d049",843:"0bba519c",851:"f2d51172",859:"b32a877c",866:"6a7ef8b5",949:"b71ceab0",965:"08d01845",974:"861ba6d2",987:"4a67e737",1015:"30313bbf",1056:"cf1dfe19",1090:"53f6ab98",1098:"616e852c",1099:"36b93779",1106:"3f09f8af",1111:"c8b516d5",1158:"bb4016dd",1211:"3ed5ea71",1223:"e1e672be",1251:"2d57a8a2",1272:"c313f5f5",1292:"a8f4585e",1296:"ebcf67c1",1317:"59f865c0",1335:"771fac87",1342:"faf08f2d",1360:"4919feb1",1361:"52e410a6",1439:"d95661b0",1453:"46d36df2",1468:"74a52f00",1476:"1465bd70",1495:"b71da64d",1497:"b9324434",1506:"bd67ee2d",1608:"4ee63344",1657:"a7769684",1661:"1deb28d7",1712:"84bc7d93",1815:"4cbc1c11",1836:"4da08aa5",1869:"0816a3ae",1887:"296510d8",1893:"4f411304",1958:"e83714d4",2011:"d1b3a4a9",2015:"420da06c",2059:"446df646",2080:"7b6a6240",2126:"0fad6bea",2128:"06e1f018",2138:"cfb26125",2159:"600c8a13",2167:"3e65b7a7",2183:"33cde92a",2236:"8306361b",2246:"3ff74c7f",2266:"b96db529",2304:"714e361c",2374:"3dc411cb",2400:"d57f806f",2430:"1d54589c",2499:"abf334c8",2565:"36cba453",2573:"0e23c27c",2584:"2e514c65",2600:"a308880e",2609:"dc1befaf",2648:"5b6aa6d1",2678:"83784921",2702:"5860c098",2717:"d44afb5d",2720:"23e1b906",2723:"e3439559",2757:"0d079aa4",2780:"65e30163",2786:"52e20b7b",2808:"c01b1550",2835:"46129694",2845:"314e41ea",2853:"e988a298",2891:"fbe6c5f6",2904:"ddf84993",2926:"7437d38a",2948:"52fe8fd5",2950:"10973705",2975:"fcff58bd",2980:"b13a415c",2995:"05d1f97d",3021:"c270dbab",3028:"1aec40de",3168:"ed058aea",3190:"3f0dd5aa",3207:"04a6022f",3213:"0ee48416",3290:"81a5d003",3317:"6800c54e",3329:"4c0a9072",3365:"2fdf6922",3427:"613876b8",3486:"811ba24b",3487:"7dfc7253",3488:"1d66edd2",3502:"cb933696",3504:"cbe94da6",3510:"ee0743da",3515:"2cfb2e89",3517:"a6e97be6",3545:"41c3c6ab",3549:"93a250ca",3555:"57e88f21",3558:"45f26d41",3567:"cbc3a91f",3577:"475d42aa",3599:"0e75d824",3675:"55d807b2",3689:"050dac83",3706:"766ae12e",3725:"65820de3",3745:"a3c36b09",3757:"0a82eee5",3794:"ba91b2cc",3803:"aa13842e",3824:"ccd5d6a6",3847:"31d603ab",3856:"b34f28a3",3889:"808b2048",3890:"29c2da25",3948:"505e2596",3950:"7f217b36",3953:"7f63d1a8",3960:"3676ca78",3986:"42b9577c",4073:"cdc557a4",4131:"a573b271",4139:"10b0da0c",4159:"4e9f7470",4192:"4e9bd552",4211:"316b2a86",4216:"6117b587",4224:"ffa5ab1e",4251:"9933b217",4288:"a4b1cc7b",4326:"ffbdfedd",4334:"117aa051",4383:"be4832fc",4387:"b4979a91",4390:"9603b5ab",4399:"02e12299",4403:"826b4a15",4534:"f0a9a604",4536:"47d7ac54",4588:"ff061034",4591:"c2394415",4619:"189bcd11",4622:"5395b0aa",4644:"639dfede",4646:"a41418a1",4652:"54c8e2d2",4667:"6b2b114c",4681:"9f957c4a",4690:"77d4039c",4697:"d4fe5409",4701:"50138275",4749:"afde50d4",4766:"342832e4",4804:"50c1ad5f",4816:"d092804a",4820:"574a5675",4823:"eb5d9e95",4830:"4c9ba2ef",4867:"948393ba",4870:"69c017ff",4916:"6a37b1ac",4964:"372c02ca",4985:"ff079616",4987:"4dba5f3f",5049:"bdc925f4",5057:"4bc45af0",5068:"e49537b5",5071:"b1e71839",5073:"44f189d9",5114:"4d4a78ad",5158:"ce00a569",5192:"73bff006",5220:"48503e91",5246:"4d9072ac",5254:"8f29083c",5257:"5897af75",5261:"16b693ee",5275:"997d3e0c",5293:"4733ce4b",5337:"dc075be5",5372:"7afd1ebf",5387:"1339f42d",5394:"d33b6bb3",5395:"4e9e53c3",5407:"1b3e380a",5460:"7da8d63d",5467:"bf054acf",5469:"adc92131",5477:"430e29c5",5479:"d1529293",5482:"a44d54a2",5506:"7f36e24d",5533:"8cd7d457",5545:"b469e7a6",5549:"c326a0c5",5573:"030328bc",5596:"5e30d629",5619:"347f9548",5674:"b44c12c6",5676:"1523961d",5697:"910b6264",5737:"4f38a5c3",5780:"8b1f6b18",5787:"4c79040f",5788:"283dc9ca",5797:"aacde538",5847:"38c8bf15",5863:"96a01de2",5876:"a3ce9a4e",5882:"1678dce6",5904:"7a536274",5922:"8fdd805d",5945:"e54e6d94",5997:"0f6282d9",6e3:"1b59b1a6",6045:"ef388862",6062:"6eb390c4",6108:"aa8c7de9",6135:"a6669be5",6219:"524700c1",6258:"8826647e",6293:"ae4e6af0",6326:"b31bb912",6348:"a300dd14",6366:"6c4b7d19",6384:"013b82e0",6405:"60bdd2fb",6430:"a3adbb23",6439:"d22da5ad",6455:"152408de",6474:"53efd644",6498:"0334275d",6537:"ba0b5c0e",6594:"e0695e47",6601:"2cba3c15",6675:"998532a3",6685:"67678de5",6696:"0dfe9501",6722:"d62832a6",6732:"aabefc5d",6740:"c2f8d0b8",6743:"37e92a50",6750:"f52b1019",6764:"cc5034ef",6776:"5b3bea2a",6847:"37928f55",6872:"b24899c6",6886:"46a1f17b",6889:"a5aed0d4",6921:"4ae472f4",6922:"58b4db47",6925:"7878d5f2",6928:"b16505a9",6944:"9ee4e275",6951:"1fbba42c",6952:"4e968095",6986:"5eac6a0d",6988:"d56168e0",6989:"1d4bcc29",6992:"7e7b89ed",7016:"03402014",7022:"3ebab998",7068:"09ea0297",7071:"8d2ce98c",7172:"322e0b67",7182:"1a454bcd",7217:"82cf4a85",7249:"228300a4",7258:"3789a018",7302:"833b270c",7326:"db69d456",7368:"39a7a4a7",7402:"651c37da",7415:"5df93c4b",7447:"3e039a14",7470:"38bee2e4",7501:"b172ffbc",7505:"6f14bb03",7530:"fa60577e",7533:"5fa30c3e",7549:"4c86038c",7585:"fd53321c",7602:"09081007",7630:"a2c72581",7683:"b6a48679",7687:"f993aed9",7688:"6e6a9ee5",7689:"af1fcb28",7701:"53b991d8",7747:"736a6123",7763:"3694036e",7827:"5c1676b0",7829:"2952d6aa",7879:"c71b5243",7883:"1f86f5ac",7889:"4be08c27",7894:"dc19fd5c",7903:"5e066807",7918:"17896441",7920:"1a4e3797",7948:"b74dd890",7949:"e42d881e",7966:"7958e8ad",7969:"fe8c95ca",7984:"d96d0fc3",7995:"069353d5",8010:"77de5e01",8028:"47e98586",8050:"096121a1",8066:"d3f6e585",8071:"52af338f",8100:"97746d46",8166:"e66c27a9",8189:"fad0edd7",8216:"ef1ba873",8234:"7e64752b",8246:"ed92d27b",8277:"0da192b2",8290:"a43f1741",8308:"f14f8d1d",8317:"43e31cff",8321:"f714445a",8346:"0c144252",8372:"1963135f",8399:"f717796f",8400:"dccfe8b0",8456:"89a3134e",8542:"58a3a694",8545:"e6ddf0b5",8579:"6767ee63",8637:"4a4179c7",8664:"569da85a",8670:"997051e1",8694:"abeaa039",8724:"9ea59211",8747:"e78b943e",8770:"77e81cf0",8814:"0936f0f5",8820:"e68ce9eb",8901:"ba82ce85",8914:"f9b73b4f",8920:"00e7ba5b",8944:"776757ca",8952:"c19fe27b",8974:"da22c4d1",9037:"143ae93d",9041:"923dc8af",9091:"597a4243",9101:"05c44d96",9116:"86107fbe",9123:"bad53bdb",9152:"cec9ef43",9168:"0aa64dce",9214:"e77985c6",9223:"ada1fa0f",9231:"4c7daac7",9302:"fa4db6fc",9321:"5ee6a624",9359:"463d0316",9379:"0ce452f9",9391:"b565fe5e",9427:"3134e3ca",9449:"ee522d91",9456:"13ccc486",9482:"46fa7a6d",9486:"97a358ee",9500:"54df46f0",9514:"1be78505",9594:"f7502e0e",9606:"20cc033f",9614:"b5a21e25",9629:"2dfe76bb",9716:"2908211d",9780:"a2b17aaa",9805:"4c0f3ec1",9817:"14eb3368",9827:"c050ff5a",9865:"fc3c1fe3",9872:"c2b149e4",9884:"89694a53",9901:"e4bb945e",9913:"3b9e34ce",9925:"418a8953",9953:"ee631a03",9955:"c13a9068",9988:"bdfb44a0"}[e]||e)+"."+{3:"db0090f0",39:"6093539e",41:"f958038a",53:"25ddb5c8",66:"9a35f093",72:"b5f11010",78:"261d70e8",84:"370d3263",88:"84ee680a",90:"1b4b767a",117:"4f5d6a49",139:"55889287",207:"f984a2e1",217:"fd7396c0",222:"594ac6c2",231:"a36bb59f",268:"8fedf90b",300:"e5ab3970",320:"5e332600",380:"2d3c3215",441:"22dd2006",481:"1733c369",487:"389f6c61",490:"f189ec4c",495:"ea8af41e",497:"201da75f",512:"b7f2f93a",515:"e88457bd",520:"7d6f128e",548:"827c7503",567:"bd6da092",592:"18efd170",603:"7a4e4ef6",617:"ae3b99a1",619:"1bbdab50",628:"97c2d3ba",639:"e4db2713",648:"a9f08dc1",687:"97cd2da8",710:"f006771d",716:"7904556e",733:"76275a4e",789:"298a8715",813:"301cb8c9",841:"d6fb7fa6",843:"35df7976",851:"a283377e",859:"221db4af",866:"45f4b186",949:"9996d150",965:"96bb0c8b",974:"83759802",987:"841c9931",1015:"8cb20164",1056:"f611a7e0",1090:"59de5e21",1098:"838df754",1099:"69541443",1106:"2d010f9f",1111:"86fbf1f4",1158:"7986d5e0",1211:"4d6e4935",1223:"4e1e0da0",1251:"d3d2791c",1272:"c087b45f",1292:"beb9a6c6",1296:"f821484b",1317:"b6e31fe4",1335:"072604d9",1342:"f68241c3",1360:"a14462b2",1361:"98300585",1439:"56d2e95a",1453:"641019c8",1468:"6d5f2a57",1476:"d9a7287e",1495:"3cdd9906",1497:"8b007a93",1506:"20763ca9",1608:"8145ecc8",1657:"19028487",1661:"1bf92acd",1712:"4fcd4061",1815:"5d096766",1836:"4be00c3f",1869:"be36108b",1887:"b455703b",1893:"f11d19f9",1958:"8a748fcf",2011:"3b2275d1",2015:"98c14358",2059:"4ed7b706",2080:"607da19c",2126:"39778fbc",2128:"9e0d25a7",2138:"191c48f2",2159:"fcdd0ee3",2167:"c9a505b8",2183:"b1da2f4a",2236:"7bde2bfc",2246:"a8c2e347",2266:"6281c8f0",2304:"a97b6de3",2374:"8e68e527",2400:"bbd754e1",2430:"106427a2",2499:"d1ed9f99",2565:"7e954283",2573:"e80adb82",2584:"1e38b937",2600:"f03c42bb",2609:"83c84a4d",2648:"ae4908d8",2678:"fdb69317",2702:"f4176f71",2717:"69c019ac",2720:"1462ca16",2723:"7ebbe044",2757:"1d458b9a",2780:"47fec1c1",2786:"42dd690d",2808:"e7308123",2835:"5f39e2f9",2845:"147bfe5e",2853:"bb674dc0",2891:"10ddf393",2904:"2cad7afd",2926:"a5b2869b",2948:"7b18b3e2",2950:"a0991240",2975:"7ca39043",2980:"8788db3e",2995:"0fbe183d",3021:"9d8f9a52",3028:"f8924602",3168:"2bd1a1ac",3190:"3be38bff",3207:"f5ddd2ea",3213:"8e3e287c",3290:"541c0412",3317:"7b19c6ac",3329:"66733b8f",3365:"4e8d0064",3427:"a72e1370",3486:"f035b40f",3487:"d20f188b",3488:"3e12c3ab",3502:"04f0ddfa",3504:"ff137629",3510:"4748dd6c",3515:"d39b7729",3517:"4564153e",3545:"8000971b",3549:"8ccd0277",3555:"92fa81bc",3558:"62ee7581",3567:"18ec4a1a",3577:"d23b04a9",3599:"d731d487",3675:"df5f7031",3689:"669e1c96",3706:"3b972100",3725:"98f029a6",3745:"bb9abc39",3757:"97e33058",3794:"b5e7ddf2",3803:"32c33b56",3824:"b12aa256",3847:"dd3811a7",3856:"532aa3bd",3889:"c46bc447",3890:"4d09c9b8",3948:"cb44b190",3950:"7210a85a",3953:"85172a2d",3960:"d19d3d2f",3986:"b4ee984e",4073:"2e3530a6",4131:"7e88f565",4139:"c48adc18",4159:"d7c5050b",4192:"f0ad96d3",4211:"ee2ab1ae",4216:"f468b358",4224:"6ccd31b3",4251:"d5721fd8",4288:"1ed0e905",4326:"08320042",4334:"dd68fc1b",4383:"1fd61161",4387:"49d4cdf8",4390:"8fbaa80a",4399:"31767c8a",4403:"182e6cd1",4534:"04dcf2b1",4536:"8ce6db9a",4588:"9e09ed8c",4591:"59ef6977",4619:"c3d0f6f9",4622:"3e9ce261",4644:"06511762",4646:"b730c90b",4652:"df40ef11",4667:"e12be838",4681:"05967dbe",4690:"d1c29f08",4697:"41f7603a",4701:"a66942f5",4749:"25a3086c",4766:"23fbb072",4804:"a140c36c",4816:"ffb39d3f",4820:"85c2a8d1",4823:"e066dc2f",4830:"8aa7fe46",4867:"49a62f2f",4870:"2b9b5245",4916:"9b2060ce",4964:"64dbfeee",4985:"093939b5",4987:"d7380285",5049:"ebc03947",5057:"7b70bbb9",5068:"d73ca805",5071:"a27da0ea",5073:"32fa55fc",5114:"e30e9b0b",5158:"4399a17b",5192:"20a21c27",5220:"4c199b12",5246:"6bbe4107",5254:"032ce056",5257:"1f64d8bd",5261:"6f662b4b",5275:"800f7372",5293:"51577b92",5337:"b2d5f350",5372:"eac854c0",5387:"804525c9",5394:"7ab5d3f1",5395:"0ca9ead1",5407:"540e2da3",5460:"9c8008e1",5467:"5aa371c4",5469:"2665ea42",5477:"1d81bf73",5479:"eabb9421",5482:"afa58751",5506:"4d71fb98",5533:"3e924d59",5545:"790f5aee",5549:"8c5265bb",5573:"3dca2150",5596:"86778fd5",5619:"6806728d",5674:"098f2e5e",5676:"14c9dd67",5697:"397696d5",5737:"2bd68f9f",5780:"275a91b8",5787:"bdc2209f",5788:"0192737c",5797:"aa0ae096",5847:"c8043d83",5863:"9f78344f",5876:"07bc8fe3",5882:"72be84e1",5904:"7d0c66bf",5922:"5e6365fc",5945:"f09d314d",5997:"4d413218",6e3:"0077612e",6045:"5ea71e5a",6062:"e7b005c0",6108:"6976d536",6135:"154329e3",6219:"20b2e420",6258:"aa5df67b",6293:"eb923c25",6326:"dcd54dbc",6348:"bf55790e",6366:"9d1a5e43",6384:"65a1339a",6405:"7c0cb312",6430:"c87c245c",6439:"22495eca",6455:"835d1950",6474:"b0c5edb8",6498:"7dbc5eda",6529:"b6e027cc",6537:"e4ba1edf",6594:"80560fe3",6601:"99a59448",6675:"6aefb7af",6685:"84e290d9",6696:"b18a65f2",6722:"adb605bb",6732:"4fa66e33",6740:"6b302d38",6743:"11bf4276",6750:"c332513b",6764:"14bf6a0b",6776:"5ce4ba9a",6780:"6950c7e7",6847:"572eebe1",6872:"cc565a5b",6886:"53cd04d0",6889:"5fd84a61",6921:"7fcc64f8",6922:"5f491c67",6925:"6a48ad64",6928:"e8eb65b7",6944:"87c06789",6945:"b1e7c586",6951:"db751cd6",6952:"260ce7d7",6986:"6234c3ab",6988:"a5c58822",6989:"121426f9",6992:"1ab5da7e",7016:"4223ca28",7022:"e82ae28c",7068:"ec3afaa2",7071:"af5d211f",7172:"258ba23b",7182:"e6af44e4",7217:"28af61a7",7249:"6c855cfa",7258:"a810686b",7302:"8acaad71",7326:"3795dd72",7368:"8aa4b32d",7402:"a0e6801b",7415:"149a22c8",7447:"b3a27009",7470:"12f052f4",7501:"2752fa84",7505:"1ca4f7e6",7530:"753f9e94",7533:"55326545",7549:"6ef57af9",7585:"f84222e2",7602:"14c5bac4",7630:"d32a634d",7683:"b97308c5",7687:"ab035f35",7688:"55166a18",7689:"ebefd33e",7701:"464ab6df",7747:"19bcd09a",7763:"5c8feffa",7827:"a7e331bb",7829:"f2fafbc4",7879:"a7beb10d",7883:"ae3fef16",7889:"20e0ece4",7894:"ef9d6b1d",7903:"1c97e5c7",7918:"ab235b16",7920:"94bbc5c4",7948:"54124730",7949:"583ef37e",7966:"0b5a3174",7969:"22178dc9",7984:"c5c50dd0",7995:"30a70378",8010:"823d1d36",8028:"d6c0c20d",8050:"c5bf7f12",8066:"448556e9",8071:"8d530ccd",8100:"a477b2f4",8166:"466024b6",8189:"2e93ee91",8216:"6b8ca981",8234:"9fda6a2f",8246:"5ca8f445",8277:"5a7a286f",8290:"0a35fdf6",8308:"68b1576c",8317:"3c675566",8321:"24b19f01",8346:"1bacd2f0",8372:"7d428b8e",8399:"9ca40b6c",8400:"27720c03",8456:"f04df054",8542:"9506ef75",8545:"b636089a",8579:"d3ef94dc",8637:"368ed35a",8664:"79b15076",8670:"31d2cc3c",8694:"16e593e1",8724:"626e9013",8747:"80a9305a",8770:"912dee76",8814:"9fdae99e",8820:"0f9ba168",8901:"dc416ba2",8914:"a6ccefe7",8920:"67ae582e",8944:"80f36636",8952:"2899c49c",8974:"e0f4f036",9037:"c43d0c1b",9041:"ba0fb33c",9081:"d236d4f3",9091:"f0500263",9101:"51e25f60",9116:"98fce7a1",9123:"f26be1bc",9152:"7f1cf767",9168:"72e0fe4a",9214:"aef12daf",9223:"84229f9c",9231:"98115669",9302:"5d70cba2",9321:"40f01251",9359:"018a152c",9379:"77cd12a9",9391:"37012be4",9427:"26c39920",9449:"c16f0121",9456:"9b31330f",9482:"0195d3e7",9486:"745f1c11",9500:"d82fadc9",9514:"6e38206c",9594:"1198ac6f",9606:"f1a69788",9614:"853be9ba",9629:"555b4444",9716:"d2bbb138",9780:"9968bd7e",9805:"99a519e2",9817:"ac598a0c",9827:"f1ae3844",9846:"b0a6f4f6",9865:"a6edff95",9872:"a5bc0831",9884:"819edb38",9901:"77d128cc",9913:"2894da66",9925:"141605e8",9953:"af3c4a89",9955:"4936575b",9988:"ed8b89e0"}[e]+".js"},n.miniCssF=function(e){},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},d={},c="touchgfx-documentation:",n.l=function(e,a,f,b){if(d[e])d[e].push(a);else{var t,r;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==c+f){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",c+f),t.src=e),d[e]=[a];var l=function(a,f){t.onerror=t.onload=null,clearTimeout(s);var c=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((function(e){return e(f)})),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/4.19/zh-TW/",n.gca=function(e){return e={10973705:"2950",17896441:"7918",27130570:"497",46129694:"2835",50138275:"4701",83784921:"2678","23407fb3":"3",a07c7efb:"39",b15627b5:"41","935f2afb":"53","16e413fc":"66","385c4476":"72","9d4fc56c":"78","460e717b":"84",c63ee249:"88",daff6b2d:"90","7e9ff4d7":"117",f9abf00f:"139","970aa6d9":"207",cd41fdc0:"217","4a6de492":"222","0049329e":"231","0120660c":"268","557269e0":"300",ef83f141:"320",e7c99b5d:"380","8c53953f":"441","640f3f1e":"481","7b0bcb1e":"487",ee393ddf:"490","59e2ce5b":"495","216fb7f3":"512","7e4afc06":"515","65b7f032":"520",b617ede7:"548",eac0d30d:"567",ee3e9a55:"592","8402a4a6":"603",f9d638a0:"617","8c44e976":"619",b018a17f:"628","69df4d70":"639","99f596fc":"648","6981e3ac":"687","603eee8f":"710",aed9d842:"716","69c3866c":"733","450466e0":"789",f53ec3db:"813","2e85d049":"841","0bba519c":"843",f2d51172:"851",b32a877c:"859","6a7ef8b5":"866",b71ceab0:"949","08d01845":"965","861ba6d2":"974","4a67e737":"987","30313bbf":"1015",cf1dfe19:"1056","53f6ab98":"1090","616e852c":"1098","36b93779":"1099","3f09f8af":"1106",c8b516d5:"1111",bb4016dd:"1158","3ed5ea71":"1211",e1e672be:"1223","2d57a8a2":"1251",c313f5f5:"1272",a8f4585e:"1292",ebcf67c1:"1296","59f865c0":"1317","771fac87":"1335",faf08f2d:"1342","4919feb1":"1360","52e410a6":"1361",d95661b0:"1439","46d36df2":"1453","74a52f00":"1468","1465bd70":"1476",b71da64d:"1495",b9324434:"1497",bd67ee2d:"1506","4ee63344":"1608",a7769684:"1657","1deb28d7":"1661","84bc7d93":"1712","4cbc1c11":"1815","4da08aa5":"1836","0816a3ae":"1869","296510d8":"1887","4f411304":"1893",e83714d4:"1958",d1b3a4a9:"2011","420da06c":"2015","446df646":"2059","7b6a6240":"2080","0fad6bea":"2126","06e1f018":"2128",cfb26125:"2138","600c8a13":"2159","3e65b7a7":"2167","33cde92a":"2183","8306361b":"2236","3ff74c7f":"2246",b96db529:"2266","714e361c":"2304","3dc411cb":"2374",d57f806f:"2400","1d54589c":"2430",abf334c8:"2499","36cba453":"2565","0e23c27c":"2573","2e514c65":"2584",a308880e:"2600",dc1befaf:"2609","5b6aa6d1":"2648","5860c098":"2702",d44afb5d:"2717","23e1b906":"2720",e3439559:"2723","0d079aa4":"2757","65e30163":"2780","52e20b7b":"2786",c01b1550:"2808","314e41ea":"2845",e988a298:"2853",fbe6c5f6:"2891",ddf84993:"2904","7437d38a":"2926","52fe8fd5":"2948",fcff58bd:"2975",b13a415c:"2980","05d1f97d":"2995",c270dbab:"3021","1aec40de":"3028",ed058aea:"3168","3f0dd5aa":"3190","04a6022f":"3207","0ee48416":"3213","81a5d003":"3290","6800c54e":"3317","4c0a9072":"3329","2fdf6922":"3365","613876b8":"3427","811ba24b":"3486","7dfc7253":"3487","1d66edd2":"3488",cb933696:"3502",cbe94da6:"3504",ee0743da:"3510","2cfb2e89":"3515",a6e97be6:"3517","41c3c6ab":"3545","93a250ca":"3549","57e88f21":"3555","45f26d41":"3558",cbc3a91f:"3567","475d42aa":"3577","0e75d824":"3599","55d807b2":"3675","050dac83":"3689","766ae12e":"3706","65820de3":"3725",a3c36b09:"3745","0a82eee5":"3757",ba91b2cc:"3794",aa13842e:"3803",ccd5d6a6:"3824","31d603ab":"3847",b34f28a3:"3856","808b2048":"3889","29c2da25":"3890","505e2596":"3948","7f217b36":"3950","7f63d1a8":"3953","3676ca78":"3960","42b9577c":"3986",cdc557a4:"4073",a573b271:"4131","10b0da0c":"4139","4e9f7470":"4159","4e9bd552":"4192","316b2a86":"4211","6117b587":"4216",ffa5ab1e:"4224","9933b217":"4251",a4b1cc7b:"4288",ffbdfedd:"4326","117aa051":"4334",be4832fc:"4383",b4979a91:"4387","9603b5ab":"4390","02e12299":"4399","826b4a15":"4403",f0a9a604:"4534","47d7ac54":"4536",ff061034:"4588",c2394415:"4591","189bcd11":"4619","5395b0aa":"4622","639dfede":"4644",a41418a1:"4646","54c8e2d2":"4652","6b2b114c":"4667","9f957c4a":"4681","77d4039c":"4690",d4fe5409:"4697",afde50d4:"4749","342832e4":"4766","50c1ad5f":"4804",d092804a:"4816","574a5675":"4820",eb5d9e95:"4823","4c9ba2ef":"4830","948393ba":"4867","69c017ff":"4870","6a37b1ac":"4916","372c02ca":"4964",ff079616:"4985","4dba5f3f":"4987",bdc925f4:"5049","4bc45af0":"5057",e49537b5:"5068",b1e71839:"5071","44f189d9":"5073","4d4a78ad":"5114",ce00a569:"5158","73bff006":"5192","48503e91":"5220","4d9072ac":"5246","8f29083c":"5254","5897af75":"5257","16b693ee":"5261","997d3e0c":"5275","4733ce4b":"5293",dc075be5:"5337","7afd1ebf":"5372","1339f42d":"5387",d33b6bb3:"5394","4e9e53c3":"5395","1b3e380a":"5407","7da8d63d":"5460",bf054acf:"5467",adc92131:"5469","430e29c5":"5477",d1529293:"5479",a44d54a2:"5482","7f36e24d":"5506","8cd7d457":"5533",b469e7a6:"5545",c326a0c5:"5549","030328bc":"5573","5e30d629":"5596","347f9548":"5619",b44c12c6:"5674","1523961d":"5676","910b6264":"5697","4f38a5c3":"5737","8b1f6b18":"5780","4c79040f":"5787","283dc9ca":"5788",aacde538:"5797","38c8bf15":"5847","96a01de2":"5863",a3ce9a4e:"5876","1678dce6":"5882","7a536274":"5904","8fdd805d":"5922",e54e6d94:"5945","0f6282d9":"5997","1b59b1a6":"6000",ef388862:"6045","6eb390c4":"6062",aa8c7de9:"6108",a6669be5:"6135","524700c1":"6219","8826647e":"6258",ae4e6af0:"6293",b31bb912:"6326",a300dd14:"6348","6c4b7d19":"6366","013b82e0":"6384","60bdd2fb":"6405",a3adbb23:"6430",d22da5ad:"6439","152408de":"6455","53efd644":"6474","0334275d":"6498",ba0b5c0e:"6537",e0695e47:"6594","2cba3c15":"6601","998532a3":"6675","67678de5":"6685","0dfe9501":"6696",d62832a6:"6722",aabefc5d:"6732",c2f8d0b8:"6740","37e92a50":"6743",f52b1019:"6750",cc5034ef:"6764","5b3bea2a":"6776","37928f55":"6847",b24899c6:"6872","46a1f17b":"6886",a5aed0d4:"6889","4ae472f4":"6921","58b4db47":"6922","7878d5f2":"6925",b16505a9:"6928","9ee4e275":"6944","1fbba42c":"6951","4e968095":"6952","5eac6a0d":"6986",d56168e0:"6988","1d4bcc29":"6989","7e7b89ed":"6992","03402014":"7016","3ebab998":"7022","09ea0297":"7068","8d2ce98c":"7071","322e0b67":"7172","1a454bcd":"7182","82cf4a85":"7217","228300a4":"7249","3789a018":"7258","833b270c":"7302",db69d456:"7326","39a7a4a7":"7368","651c37da":"7402","5df93c4b":"7415","3e039a14":"7447","38bee2e4":"7470",b172ffbc:"7501","6f14bb03":"7505",fa60577e:"7530","5fa30c3e":"7533","4c86038c":"7549",fd53321c:"7585","09081007":"7602",a2c72581:"7630",b6a48679:"7683",f993aed9:"7687","6e6a9ee5":"7688",af1fcb28:"7689","53b991d8":"7701","736a6123":"7747","3694036e":"7763","5c1676b0":"7827","2952d6aa":"7829",c71b5243:"7879","1f86f5ac":"7883","4be08c27":"7889",dc19fd5c:"7894","5e066807":"7903","1a4e3797":"7920",b74dd890:"7948",e42d881e:"7949","7958e8ad":"7966",fe8c95ca:"7969",d96d0fc3:"7984","069353d5":"7995","77de5e01":"8010","47e98586":"8028","096121a1":"8050",d3f6e585:"8066","52af338f":"8071","97746d46":"8100",e66c27a9:"8166",fad0edd7:"8189",ef1ba873:"8216","7e64752b":"8234",ed92d27b:"8246","0da192b2":"8277",a43f1741:"8290",f14f8d1d:"8308","43e31cff":"8317",f714445a:"8321","0c144252":"8346","1963135f":"8372",f717796f:"8399",dccfe8b0:"8400","89a3134e":"8456","58a3a694":"8542",e6ddf0b5:"8545","6767ee63":"8579","4a4179c7":"8637","569da85a":"8664","997051e1":"8670",abeaa039:"8694","9ea59211":"8724",e78b943e:"8747","77e81cf0":"8770","0936f0f5":"8814",e68ce9eb:"8820",ba82ce85:"8901",f9b73b4f:"8914","00e7ba5b":"8920","776757ca":"8944",c19fe27b:"8952",da22c4d1:"8974","143ae93d":"9037","923dc8af":"9041","597a4243":"9091","05c44d96":"9101","86107fbe":"9116",bad53bdb:"9123",cec9ef43:"9152","0aa64dce":"9168",e77985c6:"9214",ada1fa0f:"9223","4c7daac7":"9231",fa4db6fc:"9302","5ee6a624":"9321","463d0316":"9359","0ce452f9":"9379",b565fe5e:"9391","3134e3ca":"9427",ee522d91:"9449","13ccc486":"9456","46fa7a6d":"9482","97a358ee":"9486","54df46f0":"9500","1be78505":"9514",f7502e0e:"9594","20cc033f":"9606",b5a21e25:"9614","2dfe76bb":"9629","2908211d":"9716",a2b17aaa:"9780","4c0f3ec1":"9805","14eb3368":"9817",c050ff5a:"9827",fc3c1fe3:"9865",c2b149e4:"9872","89694a53":"9884",e4bb945e:"9901","3b9e34ce":"9913","418a8953":"9925",ee631a03:"9953",c13a9068:"9955",bdfb44a0:"9988"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(a,f){var d=n.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise((function(f,c){d=e[a]=[f,c]}));f.push(d[2]=c);var b=n.p+n.u(a),t=new Error;n.l(b,(function(f){if(n.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var c=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+c+": "+b+")",t.name="ChunkLoadError",t.type=c,t.request=b,d[1](t)}}),"chunk-"+a,a)}},n.O.j=function(a){return 0===e[a]};var a=function(a,f){var d,c,b=f[0],t=f[1],r=f[2],o=0;if(b.some((function(a){return 0!==e[a]}))){for(d in t)n.o(t,d)&&(n.m[d]=t[d]);if(r)var u=r(n)}for(a&&a(f);o<b.length;o++)c=b[o],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(u)},f=self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))}()}();