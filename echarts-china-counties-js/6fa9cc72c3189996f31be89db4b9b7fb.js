(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('循化撒拉族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"630225","properties":{"name":"循化撒拉族自治县","cp":[102.489135,35.851152],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@AB@@A@@@@@@@AA@@@@@@A@A@@BA@A@@B@@A@@@@@@A@@A@@@@@A@@@@@A@@@@@A@@@A@@A@@A@A@A@ABA@@@A@AAA@@@A@@@@BA@A@A@@@A@A@@@@AAEAAAAGCGAOCKCCEI@ACA@@A@ABA@A@A@ACA@CAGACAEAA@AA@ADADA@C@A@AAIAMCGAIAECA@A@@@@@@A@@@A@@B@@@@AB@@@@@@@@@@AB@@@@A@@@@@@@@@A@@@@@@@@B@@A@@@@@@B@@@@@@@@A@@@@@@@@@CCAA@CBC@C@AAAE@C@AA@CACCK@A@AB@@@@A@AB@B@@@@A@A@AB@@@@@@B@@BABA@B@@BAB@F@B@B@@AAAI@IFCBGBQJEDCDODONCJDHHF\\RBDBFAD@FAFCF@J@FBF@D@DHZDHADCFCBIAGCICCBAJDJ@B@BCFKDWLOL[ZKJKJADAJER@FGDIDKDOFEBG@IDIDEBGBK@G@I@I@GAK@G@CBEBIFGDCDEFGBGJGDEDIFGFEFCFAFCFBJBHBJBFAJAFAJAHCFABAFEHADEBMBKAKGMKIGA@OEM@CBCDALKLCJBHNHDDJFFBBB@DEBMBQ@cBSHA@CFDFFDXDHD@FEHMLEPIJCDQRULSRINAB@@@BABCDADAD@BBBFN^PJCBABA@A@A@AAC@A@ABABA@@B@@@B@BBB@BDBDBFBHB@@BBBB@BBB@D@D@D@DABAB@@AB@@AB@@ABBB@B@@BDBBBBBBBB@FBFBD@F@H@LBF@BBB@BBB@@BBB@@AH@B@B@B@@BBBBBBDBFBFD@@BBDB@@BBB@D@F@FBB@HBLB@BD@BBB@BBBB@BBD@@@BB@@BD@B@B@DAD@B@@@BBBBB@BDFDDDBBFDFBDBD@FBH@B@H@D@BAB@DABAB@@@FAHABAF@DAFAB@BAB@@@@ABAB@FABAB@B@BBB@BBB@BDBF@@BB@@B@B@F@BAB@@@BADC@@BA@@B@@AB@B@FBBAH@FAB@BAD@BAB@BAFC@@BAD@B@B@BB@@BBB@DDHHBBBBDBBB@@BB@BDB@@B@B@B@D@BA@@B@BABAB@@ABCBA@@B@BAD@B@@@DB@@B@BB@BBB@D@B@B@BBBB@B@B@DABAB@@ABADEBA@@B@BAD@BA@@DABAD@D@B@BBD@BBHFBBB@@B@BBB@@DBFD@BAH@@@B@@@@@@AB@@@B@@@@@B@@@B@@@B@@@B@@B@@B@@B@@@@B@@@@@@@B@@@@BB@@A@@@@@@@@B@@@@@BBB@@@@@B@@@@@BBD@@@B@B@BBBBB@B@@@@@@@B@@@@@@@@B@@B@@@@A@@@@B@@DB@@@@B@B@@@B@@@@@BA@@B@D@@AB@@@B@@@@A@@B@B@@@B@@ABB@AB@B@B@@@@@BB@@B@@@@@@A@@@@@A@@@A@@B@@@@A@@@@@A@@@@BAA@B@@A@A@A@@@A@@@@@@@@A@@AB@DAB@B@B@DABBB@BBB@BBBB@BB@@BB@B@@@B@@@B@BBB@@@B@@@B@B@@B@@BB@@D@@@BB@@B@@@@@@@BBDBB@B@@@B@B@@@@@@@B@@B@@B@@BBA@B@@@@BA@@BA@@B@@@@@@@BA@@@C@@@AB@BA@AB@BBB@@@BBF@DBB@@@@@@@BB@@@@B@B@@@@BB@@@@B@@B@@B@@B@@@B@@BB@@@@@B@@BB@@@@@B@BB@@B@BB@@B@B@@@@@@A@@@@@A@@@A@ABAB@@@@A@@B@@@BAB@@@@@B@@@DA@@@A@@@@@A@@@A@@@A@@A@@ABA@@B@@@@A@A@A@A@@@@@AB@@@A@@@A@@@AA@@BA@A@@@@@AA@@A@@@@@@@AA@@@@@A@@A@AA@A@@@@AA@@@@@@@A@@@@A@@@@@@@A@@AA@@@@@C@@@AB@@@@A@@@A@@@A@A@A@A@@BB@@BBDBHJDB@B@@B@@@B@@@B@@@B@@@B@@@B@@@@@B@A@BB@@B@@@B@@@B@@A@@BAB@@ABAB@B@B@B@@@@@B@B@@@BAB@@@@@@@B@@@@@@@B@@AB@B@@@B@@@@@B@@@BAB@@@@@B@@@BABABA@@@AB@@@@@@AB@@B@@@BB@@@@@@BB@@AB@B@@@@A@@B@@A@@@@@@BA@@@@BA@@BA@@B@@@@@B@B@@@@A@@@@@AA@@@B@@A@@@@@@@@BABB@@B@B@@BBBBB@@D@@@BB@@BB@@@B@@@@@BB@@B@B@@B@@B@BB@@@@B@@AB@B@@@@BBA@BBA@@B@BA@@@@B@@@@AB@@@BAD@BB@BD@@@@AB@@@@@B@@@B@@@@AB@@@@BB@@@B@@@@@@@@BB@@@@B@@BA@@@@B@@@@@@BBB@@@B@@@B@BBBB@@B@@@@@@BB@@@@@B@@BB@@@@@@@BB@@B@@@@@B@B@@@@@B@BBB@@BB@@@B@@@B@@B@@B@@B@@@@BB@@@@B@@BB@@@@@B@@@@BBB@@@BB@@@@BB@B@B@@B@@@AB@@@B@@BB@@@B@BB@@BA@@B@DAB@@@@AB@@@@AB@B@@@@@B@BA@@@@BABA@@@AB@@A@A@@D@@@@@B@B@BA@@@@BA@@@@@A@@@@@A@@BA@@@@@@BA@@B@@@@A@@B@@@B@@@BA@@@@B@@@@@AA@@@@@A@AA@@A@@BA@A@ABA@A@@@AB@AA@@BA@@A@BA@@@A@@@A@@@@@AB@@@@@@AB@@A@@BB@@B@@BB@@B@@@@@B@@@@@@@@B@@@@@@@B@@@@BB@@@@@B@B@B@@B@@BB@@@@BABBB@@@@@B@B@@A@@B@@@@@BADA@@@A@@@@@AA@@A@A@AB@@@@A@@BA@AB@@@BA@@B@B@@A@@B@B@@@BABB@@BB@@B@@BDADB@@B@B@@A@@B@B@B@B@@@@AB@@@@@B@@@BA@@B@@AB@B@@@B@@BBA@AB@BA@@@@@A@@B@B@AA@@B@@AB@@@@@@A@A@@@@AA@@AA@@@AA@@@BA@@AC@@@@A@AA@A@@AA@@@@@A@@@@A@@@@A@@@@AA@@@@@@@@@AA@@@@@AA@@A@@AAAAA@@@A@A@AB@@A@@@AB@@@@@B@B@@AB@@@@AB@BA@@@@BA@BDABBBBB@B@B@BAFABA@@DA@@FCB@B@@@B@@ABA@@@A@ABC@A@@BABAD@BA@@BA@@@A@@AA@A@@@C@@BCB@BABCB@BABADCHBEAAEACAKCAIGCCQCAIDQAEMGCGBM@AN[DC@ABE@IBI@A@CBQDKBABELQPMNGHEL_DGDABE@CDCDGDCHAHAB@JANAFCBG@GBGCIEQCEBEDABC@@@AEC@A@CLGBCB@@C@AAABC@C@AFELMZMRKLMDOACEAE@KDC@C@CAIKCCCACBE@G@UGQ@A@E@EAAACACGIEA@KEA@CC@@@ABCBA@C@A@A@@DAD@HAD@D@B@DBBBBBDHHBnJ@@@@@@BBB@B@B@B@B@@A@A@@B@@@@@B@@@@@@A@@@A@@@@@@@A@@@@@@BA@A@@@A@@AAAA@@AAA@@@AA@@@C@@@AAA@@A@A@A@A@@@EACCA@@AA@@AA@@@@A@@AA@@AAA@A@AAA@AACA@A@A@AAA@@@@AEAAEEIGA@@@A@AB@@A@AFEDC@EDGDEFEDGDIFA@IJABMJIHKBEBC@EAG@KBA@WBQBMBQBA@ABABBH@@A@C@C@E@ABC@CAC@AAAAC@A@E@ABE@EBC@EAE@EBCBC@C@ABGF@@@@A@A@ABG@EBCBABABCFADABCDCD@@EDA@A@@@A@@CAAA@A@CBEDEFAJA@CDCB@@EBC@A@AB@D@B@D@BC@A@GAA@E@A@@@CBEDGHADE@CACA@A@ABAJEJK@C@C@AAAC@C@GDEDC@A@A@@@@A@@@@A@@@"],"encodeOffsets":[[104958,36426]]}}],"UTF8Encoding":true});}));