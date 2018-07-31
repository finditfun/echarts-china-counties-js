(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('睢宁县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"320324","properties":{"name":"睢宁县","cp":[117.941563,33.912597],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DFHBFBD@DFDFDBBFBDBD@@@FBD@HBD@B@BBH@DBHDHBFBF@DBF@D@FBD@H@@@@EJEL@DB@@BFB@BBN@DBP@BBBBBBB@@@D@BAHAFAHF@@@BHBFDJAH@B@B@@@F@B@BADADEDCBA@EBC@EAC@GCCACACCGEC@CACCGAC@CBCBABABEDEFABCH@@ADADAFABAFCFAD@BABAFADCDADADCDEDADEDCDEH@D@D@H@D@@@FBFADEFCBADADCD@F@@@DABBHBFFH@BB@B@DN@B@D@FADEBAB@B@BCB@BEDCBEDCBADKFCDABA@CB@HYTC@KDIDGCECBCDCDCDEBE@E@A@G@AAEAEECEACAE@GAEAIC@AAACECCGCCAIACAGBEBADCDCFAF@BAD@DCFADABCDGBEDEDCBAJAHBF@DBH@DBFABADED@BEFCDEDCDCDEDCBEDEDEDA@@BDAD@@@@@BABFFEBDB@BA@BBBBDHABDHAF@@CHA@A@@@CPA@@F@BB@DHABD@B@@BD@BA@AD@@@FB@BFC@BDA@@B@@@@@@B@AB@BB@@BB@BDB@@D@@@BBB@@B@D@HABFE@@BA@@BCBBB@@G@BF@@@@J@@BDA@BB@@AB@@ANABFH@@DD@FA@DD@BFH@BDB@@AB@@AB@@@DAB@@@@BF@@AFA@BD@@@D@@@J@@DB@H@@@H@@@@@@BF@@@F@B@D@B@BC@ABCBA@AA@@C@@B@@@@A@@@@FA@@B@FB@@@@@@B@@BB@B@@DD@B@B@@BB@B@@BH@@AFBDC@@B@B@B@D@DBDBBB@@@@DBD@BBB@@AB@BBNDBDB@@B@@A@@BAAC@@@DBA@C@@@FBABCA@BA@@@@@@@@@@@@@A@DB@@@B@@AA@B@@A@@AA@AB@B@BDBA@DB@B@@@@@B@@@@A@B@@@@@AB@@@@@BB@@@@BB@DBBABB@@A@BABBBB@A@@BB@@B@@@AAB@BB@@A@@BDB@@B@AB@@@@@B@@@@B@@B@@@@@@@@BB@@@@@@B@@BB@ADD@@@FB@CB@@@@DB@NBHB@B@@@@ADDBADHDJDFDFBB@@@BB@DA@B@D@VC@A@C@IC@BC@@@AB@@E@@@@BAB@@AA@@@D@@@@A@CA@CABA@A@@@A@@@A@@B@@@DD@@@@B@BBB@B@BB@CB@@AD@@AB@@@B@@A@@@@@A@A@@@ABB@@@@B@@@BBB@@B@B@@@BB@@B@@AB@@B@@@@@BABBBA@A@A@@@@B@B@@@DB@@@@@@A@BBB@B@BAFBADB@@@B@@@F@@BJ@F@J@@@@BD@@@D@@@B@@@@@@CL@BB@@@BDB@@@@@BBD@B@@FAD@F@RCAEH@F@@@@DD@@DB@BAB@@@@NBB@JB@@@@D@@@BAB@@BDA@@@@@@@@BB@@F@@H@B@B@B@F@D@@FD@@@J@@@@@HBBADBAH@DB@@@BAB@@@B@@@ABB@@@B@@BB@@A@@@BB@BA@@B@D@D@@@BB@@@@BD@@B@B@B@@@B@B@BD@BB@B@B@B@B@B@B@BB@@BB@D@@BA@@B@@@DABAB@B@D@FAJ@@CC@@A@@ACA@A@ACA@@A@@@ADA@@B@B@@@@@DADD@@HCBBDAACA@@@AAAC@@ABAE@@AA@@HA@@FA@@B@BD@@BBD@AAH@@BDA@@F@@AA@@ADA@@DA@@DB@AAA@@BBB@@@AAB@AAB@@A@@@@B@@@D@@BC@BBB@@C@@@@@@@AC@AEA@@A@@@C@@BAB@DAB@@BB@DBDBB@F@B@DBD@BBD@B@B@HDF@@BC@@@B@@@B@@@B@@DFA@@@@CB@DB@HB@A@@@CB@@AF@B@BA@E@@F@@A@A@AF@B@@BB@@@BFBAB@@BHBB@DA@AAB@AH@@@BA@@@@@@FA@BB@@CAI@AA@@A@AC@@C@@COD@@AACD@@CEB@O@@@ELBB@@CB@B@@@BABA@@A@@EB@D@BA@@@@@A@@@@E@BK@ABABCB@@@@A@CJBFBF@HBPFJBDBB@FBHBB@BCDG@A@@BABA@AB@@@BCBEB@HSFBBA@CE@BCF@BEC@@BAADGEABC@C@A@C@@@@A@@@EB@@CABCAA@@BC@A@@BA@A@@BA@A@@@AB@D@AEBB@AB@@@B@@@@@BGGAA@@@@GBE@@BE@@@C@@BBBAB@BE@A@A@@EAGCA@@@CA@@@@AA@AA@AA@@ABAA@@AA@@AB@BCD@@BB@BCAAB@@@AI@@@@@@@AB@@A@@B@@A@A@@@@@@@@BA@AE@A@@B@@@AC@ACB@BABA@@@@CA@@@ACDA@@BA@C@A@@@AA@BA@@AAAAAAC@@EBCDGBABA@GB@DBJ@LAD@@@@@@I@A@@AA@@B@@AB@B@@BD@AMJ@@DP@@CB@@AB@B@H@B@AGFABB@DN@D@@ED@@G@A@C@OE@A@@A@GAEN@@@B@@@@@FBBED@@@B@D@@@J@@A@ABA@A@ABA@@D@@A@AD@@BD@@BB@@BJ@B@@BA@@N@@@D@@BH@H@@@@@BB@@B@@H@@BF@@@FCBAB@DEBADG@ABAB@@AHKBA@ABI@CBA@AD@@ABA@CBEE@BEBGBEDMBCDEFIBABCJEDAFABA@AB@@CBC@CBIBC@@BC@@C@@A@@@AFUBA@@BC@A@AA@@CB@@A@@B@@AB@B@@AB@@BB@@B@@B@@BB@@D@@@CDB@@@A@@BCB@B@@ICBAIB@@@AED@B@@AA@@E@@@CBAAAB@@CAE@A@AA@AA@@@AA@@@@AA@@@OFIB@AA@@CA@@C@@@CA@@AA@@@@@@@@BA@@CD@@AB@@E@@C@@CC@AI@@@C@@ACA@@CC@@AA@A@BEC@@@D@@A@@J@D@@AB@BAB@@AB@@@B@BA@E@EB@@AF@@@@@@@@C@C@@BCA@@ACBBIB@@@B@@A@@DEBAB@@@@AB@EA@@BAAA@@ADA@AA@AB@GAA@@C@@@@AA@@AF@ABCEADG@@@C@@@@A@EBA@@@@@A@A@AAE@EAEACAA@@@A@A@C@CBA@A@@@ABEBEDA@@@CD@@A@ABABADA@@@@@@@@B@@@@A@AD@@EFA@@BEDCBCBA@CAEAAAAA@BA@A@A@E@C@E@A@A@A@A@@@A@A@C@A@@@A@CBG@C@E@A@E@A@C@C@AE@CAA@AA@@@AA@@IC@BMGECBAA@C@BEB@@CE@@FCAADB@@BEAA@EAE@E@BAC@@ADK@@GA@AE@@BA@AAC@@DA@@FA@BDC@C@C@@FA@A@A@@@A@@ECB@AC@AB@CEBA@GB@BC@@F@@EAEACAE@A@A@A@A@C@@@A@ABA@CB@@@@A@@B@BAJ@@@@@B@@AB@BABAB@@ABCB@@@@AAEEEAAECCAC@@@E@CCG@E@@@CAACEECGAEAEAGBGBGBCBE@CB@@ADA@AF@@KABCIA@BI@@CEA@GDCDG@EMAIFC@ALA@A@G@A@A@GDA@@@A@C@@@ABC@CBC@CBA@A@@@ABA@ABC@C@GBC@C@C@A@AAA@E@AA@@A@A@@@ABA@A@A@@@A@@BCBA@@@CBCAC@A@@@CCC@C@A@A@@A@BA@@@ABA@G@A@C@EA@@C@A@AAA@C@CA@@A@@A@A@AA@@ACAA@AA@@AAA@CCGCA@C@E@E@A@A@AACEAAE@A@A@@@AEE@@EA@@B@@AAC@AAC@EBBLCBB@EBBBMD@CAB@DA@BBA@DH@@AFADABAB@@C@@BA@CBA@AB@@CB@B@B@@@B@BBB@B@BAB@@"],"encodeOffsets":[[120549,34557]]}}],"UTF8Encoding":true});}));