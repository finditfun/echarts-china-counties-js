(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('老边区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"210811","properties":{"name":"老边区","cp":[122.380087,40.680191],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@IAAASWOSWSYU@~@XAJCNARLDAFDBIRI@bpDFv\\d@BmTW_LG[egRiu[bGJNPuXLRdnGBC@AASOCIIKAKEIaN@X@D@DHBJ@@FJ@@DADADJ@@F@@@@F@B@@CF@@DC@@F@@H@@BA@ABDBD@@DCBA@@BD@DD@@FCBAD@B@NCAAAER@@LMD@A@EMD@BBDCBA@ABA@@@EFJHFDFEBB@@@B@@A@B@@DAB@@@BDB@@@@B@@DDFF@BDFABDEBBDA@BDA@GDB@@@@@@B@@A@@BBB@@BDDFBBBD@@DFDDFJD@HBD@DB@B@@@DBF@@@B@@DHJA@@@D@@F@@@@B@@D@BBB@@@HBB@HDBBLEB@@@DD@@D@B@@@@AB@@@@BBBB@B@B@DAAEGA@CFADC@@@@AABE@A@@@ADCA@@@@@@@A@@@@@A@@@@@A@@@@AAEFAF@@@@A@AB@BAD@B@@A@AB@AKLAD@DFBBB@BA@B@@BBDJRA@@@@CIFAFCDCDC@@@D@@B@F@@@HCBAB@DA@AA@@AAA@A@@@A@@@@A@@C@@B@B@BAHCB@@@B@DHB@B@B@BA@@B@B@B@B@@AHBD@B@D@B@DABA@@@A@C@A@C@@DADC@BBABA@AA@@A@A@A@@@AB@@C@@@@@C@C@@@A@@AA@@@A@A@AEC@A@@BC@AB@FCBA@A@@CC@@ABGDGGA@CCLCB@NC@AA@BECBAC@A@@FAFAD@BBA@@@@BH@B@B@B@B@@@@C@@DACEB@@A@@A@EA@@@G@@@A@A@@@@CA@@@ABABA@A@@@AAA@@@@A@AA@@ACA@AACBCBCEBAD@CCFAACA@@@@@@AAB@AA@AC@A@A@@@@@@@AAA@@C@AA@A@@A@A@ACH@BC@A@A@@@A@@AAA@ACHA@@@EC@CAA@B@@A@@BECALE@@GEAA@@B@N@D@B@IGEEIGBA@@BBBA@CE@EAOMQOCGEG@AYaBAH@@AB@BADAACEBAA@@@AACC@Q@ABMB"],"encodeOffsets":[[125322,41492]]}}],"UTF8Encoding":true});}));