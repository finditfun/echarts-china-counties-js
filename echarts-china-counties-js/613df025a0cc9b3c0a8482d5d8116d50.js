(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('港口区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"450602","properties":{"name":"港口区","cp":[108.380143,21.643383],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@IAoEgEkDI@SDª@@B@@@@B@DB@AB@D@@@BADA@A@A@@@@@A@@LNC@@BHBJBF@@BB@BBB@B@B@@B@@B@A@@B@@@@@@@@@@@B@B@B@@@B@@BB@BB@@@@@@B@@B@@@B@@BB@B@@BB@@@B@@@B@@A@@@AA@@A@@@A@@BBB@B@@@@@BB@@B@B@B@BBB@F@L@B@BBDBD@DFHFHBBDJBB@B@FADAD@BGFABGFEDEFCDEHADAB@B@@@B@BBB@@BD@@DJBBDDBB@@BA@A@ABE@@BB@@B@B@BB@@BB@@B@BB@AHD@DB@B@@CB@AD@@B@B@@@A@BB@BB@BB@@BAAA@AB@A@BA@B@A@ABC@AB@B@@@@DBB@BB@B@ABBBB@@BBAB@@@@B@@B@@B@B@BDC@ABAB@BABABA@ADB@B@@@BD@BBBB@@@ABAB@BBB@@@B@BA@@@A@@B@@ABABA@A@@BBB@BAB@@CB@@@@BDABA@@B@@@B@@BABA@@BD@B@@@B@@B@@B@@@@D@@@@BAB@@@@BB@@ABBB@BADCB@@AB@ABB@@AB@BB@B@B@BD@@@B@@@B@@@@@@@@B@@AB@@@@ABB@@B@@@B@@@@@@@@BA@BB@@@@BAB@@A@@B@@AB@B@@@BA@@B@@B@B@@@@@@@@B@@@@@@@B@@@@@B@@@@BBA@@B@@@BBBBA@@B@BA@BB@@@DB@@B@@@@B@@BD@@@@@B@@@@@B@@@@@@B@@A@@@AB@@B@@@BB@@@@B@@BA@@BA@A@@B@@@@AB@@@@@@@BA@@@AB@@@B@ADAB@@B@@@B@BBCD@BADBBBB@@BABA@A@@BB@@@@@B@BBCB@B@@@B@@B@B@B@ABBBA@@BBABB@@B@@@@B@@@B@@B@@@@B@@B@B@@BBBAB@B@@B@BDA@@@B@@@@B@@@@B@@@BB@BA@AA@@AB@B@@@@@@B@@ABF@B@@@BA@@AC@@@@BA@AD@BABBB@BAB@B@BC@ABB@@B@@@@BBCB@B@@BB@@BB@@AB@BB@@@@DA@C@D@@DABABAB@DBB@@@DCLGB@B@D@BAB@@ABG@@@@DCB@@@@A@@DCDCDCBCB@@@@@B@@@B@B@BAB@B@B@BBB@DB@@B@BB@@B@@@@@@@@@@B@@@@A@BBB@@@FPFBLF@C@CDAB@@A@@BB@@@AB@@@B@@A@@DAB@B@@AB@DADADABAB@BADA@ABA@@DA@KN@@@BA@@@@@@B@@@@AA@@A@@EI@AFABADCBAB@BABC@A@@BA@A@@@@@@AB@@@@@@A@@A@@BAAA@@BAACAAAEAA@C@ABC@@@A@CF@CCWYA@YiMMGGEEECACAA@AAE@GAEAICC@@ECECCC@CACAECCmWCC@CBE@GAE@@A@CEKGOGYIA@WEO@"],"encodeOffsets":[[111049,22057]]}}],"UTF8Encoding":true});}));