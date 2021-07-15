# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Fill the Matrix
[code-task title="Fill the Matrix" taskId="java-advanced-multidimensional-arrays-Fill-the-Matrix" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți două **metode** care **completează** o **matrice** de dimensiune **N x N** în **două** moduri **diferite.** 

Ambele moduri sunt descrise mai jos:

[image assetsSrc="Fill-the-Matrix.png" /]

[hints]
[hint]
Realizați o metodă diferită pentru fiecare model:

```java
private static void fillPatternA(
  int size, 
  int[][] matrix, 
  int startNumber) {
    // use two nested for-loops
}

private static void fillPatternB(
  int size, 
  int[][] matrix, 
  int startNumber) {
    // ...
}
```
[/hint] 
[hint]
Realizați o metodă pentru imprimarea matricei:

```java
public static void printMatrix(
  int[][] matrix, 
  int rows, 
  int cols) {
  // ...
}
```
[/hint] 
[/hints] 


## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| 3, A | 1 4 7  |
|  | 2 5 8  |
|  | 3 6 9 |

| **Intrare** | **Ieșire** |
| --- | --- |
| 3, B | 1 6 7  |
|  | 2 5 8  |
|  | 3 4 9 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4, A
[/input]
[output]
1 5 9 13 
2 6 10 14 
3 7 11 15 
4 8 12 16
[/output]
[/test]
[test open]
[input]
4, B
[/input]
[output]
1 8 9 16 
2 7 10 15 
3 6 11 14 
4 5 12 13
[/output]
[/test]
[test]
[input]
3, A
[/input]
[output]
1 4 7 
2 5 8 
3 6 9
[/output]
[/test]
[test]
[input]
5, B
[/input]
[output]
1 10 11 20 21 
2 9 12 19 22 
3 8 13 18 23 
4 7 14 17 24 
5 6 15 16 25
[/output]
[/test]
[test]
[input]
6, A
[/input]
[output]
1 7 13 19 25 31 
2 8 14 20 26 32 
3 9 15 21 27 33 
4 10 16 22 28 34 
5 11 17 23 29 35 
6 12 18 24 30 36
[/output]
[/test]
[test]
[input]
8, A
[/input]
[output]
1 9 17 25 33 41 49 57 
2 10 18 26 34 42 50 58 
3 11 19 27 35 43 51 59 
4 12 20 28 36 44 52 60 
5 13 21 29 37 45 53 61 
6 14 22 30 38 46 54 62 
7 15 23 31 39 47 55 63 
8 16 24 32 40 48 56 64
[/output]
[/test]
[test]
[input]
50, B
[/input]
[output]
1 100 101 200 201 300 301 400 401 500 501 600 601 700 701 800 801 900 901 1000 1001 1100 1101 1200 1201 1300 1301 1400 1401 1500 1501 1600 1601 1700 1701 1800 1801 1900 1901 2000 2001 2100 2101 2200 2201 2300 2301 2400 2401 2500 
2 99 102 199 202 299 302 399 402 499 502 599 602 699 702 799 802 899 902 999 1002 1099 1102 1199 1202 1299 1302 1399 1402 1499 1502 1599 1602 1699 1702 1799 1802 1899 1902 1999 2002 2099 2102 2199 2202 2299 2302 2399 2402 2499 
3 98 103 198 203 298 303 398 403 498 503 598 603 698 703 798 803 898 903 998 1003 1098 1103 1198 1203 1298 1303 1398 1403 1498 1503 1598 1603 1698 1703 1798 1803 1898 1903 1998 2003 2098 2103 2198 2203 2298 2303 2398 2403 2498 
4 97 104 197 204 297 304 397 404 497 504 597 604 697 704 797 804 897 904 997 1004 1097 1104 1197 1204 1297 1304 1397 1404 1497 1504 1597 1604 1697 1704 1797 1804 1897 1904 1997 2004 2097 2104 2197 2204 2297 2304 2397 2404 2497 
5 96 105 196 205 296 305 396 405 496 505 596 605 696 705 796 805 896 905 996 1005 1096 1105 1196 1205 1296 1305 1396 1405 1496 1505 1596 1605 1696 1705 1796 1805 1896 1905 1996 2005 2096 2105 2196 2205 2296 2305 2396 2405 2496 
6 95 106 195 206 295 306 395 406 495 506 595 606 695 706 795 806 895 906 995 1006 1095 1106 1195 1206 1295 1306 1395 1406 1495 1506 1595 1606 1695 1706 1795 1806 1895 1906 1995 2006 2095 2106 2195 2206 2295 2306 2395 2406 2495 
7 94 107 194 207 294 307 394 407 494 507 594 607 694 707 794 807 894 907 994 1007 1094 1107 1194 1207 1294 1307 1394 1407 1494 1507 1594 1607 1694 1707 1794 1807 1894 1907 1994 2007 2094 2107 2194 2207 2294 2307 2394 2407 2494 
8 93 108 193 208 293 308 393 408 493 508 593 608 693 708 793 808 893 908 993 1008 1093 1108 1193 1208 1293 1308 1393 1408 1493 1508 1593 1608 1693 1708 1793 1808 1893 1908 1993 2008 2093 2108 2193 2208 2293 2308 2393 2408 2493 
9 92 109 192 209 292 309 392 409 492 509 592 609 692 709 792 809 892 909 992 1009 1092 1109 1192 1209 1292 1309 1392 1409 1492 1509 1592 1609 1692 1709 1792 1809 1892 1909 1992 2009 2092 2109 2192 2209 2292 2309 2392 2409 2492 
10 91 110 191 210 291 310 391 410 491 510 591 610 691 710 791 810 891 910 991 1010 1091 1110 1191 1210 1291 1310 1391 1410 1491 1510 1591 1610 1691 1710 1791 1810 1891 1910 1991 2010 2091 2110 2191 2210 2291 2310 2391 2410 2491 
11 90 111 190 211 290 311 390 411 490 511 590 611 690 711 790 811 890 911 990 1011 1090 1111 1190 1211 1290 1311 1390 1411 1490 1511 1590 1611 1690 1711 1790 1811 1890 1911 1990 2011 2090 2111 2190 2211 2290 2311 2390 2411 2490 
12 89 112 189 212 289 312 389 412 489 512 589 612 689 712 789 812 889 912 989 1012 1089 1112 1189 1212 1289 1312 1389 1412 1489 1512 1589 1612 1689 1712 1789 1812 1889 1912 1989 2012 2089 2112 2189 2212 2289 2312 2389 2412 2489 
13 88 113 188 213 288 313 388 413 488 513 588 613 688 713 788 813 888 913 988 1013 1088 1113 1188 1213 1288 1313 1388 1413 1488 1513 1588 1613 1688 1713 1788 1813 1888 1913 1988 2013 2088 2113 2188 2213 2288 2313 2388 2413 2488 
14 87 114 187 214 287 314 387 414 487 514 587 614 687 714 787 814 887 914 987 1014 1087 1114 1187 1214 1287 1314 1387 1414 1487 1514 1587 1614 1687 1714 1787 1814 1887 1914 1987 2014 2087 2114 2187 2214 2287 2314 2387 2414 2487 
15 86 115 186 215 286 315 386 415 486 515 586 615 686 715 786 815 886 915 986 1015 1086 1115 1186 1215 1286 1315 1386 1415 1486 1515 1586 1615 1686 1715 1786 1815 1886 1915 1986 2015 2086 2115 2186 2215 2286 2315 2386 2415 2486 
16 85 116 185 216 285 316 385 416 485 516 585 616 685 716 785 816 885 916 985 1016 1085 1116 1185 1216 1285 1316 1385 1416 1485 1516 1585 1616 1685 1716 1785 1816 1885 1916 1985 2016 2085 2116 2185 2216 2285 2316 2385 2416 2485 
17 84 117 184 217 284 317 384 417 484 517 584 617 684 717 784 817 884 917 984 1017 1084 1117 1184 1217 1284 1317 1384 1417 1484 1517 1584 1617 1684 1717 1784 1817 1884 1917 1984 2017 2084 2117 2184 2217 2284 2317 2384 2417 2484 
18 83 118 183 218 283 318 383 418 483 518 583 618 683 718 783 818 883 918 983 1018 1083 1118 1183 1218 1283 1318 1383 1418 1483 1518 1583 1618 1683 1718 1783 1818 1883 1918 1983 2018 2083 2118 2183 2218 2283 2318 2383 2418 2483 
19 82 119 182 219 282 319 382 419 482 519 582 619 682 719 782 819 882 919 982 1019 1082 1119 1182 1219 1282 1319 1382 1419 1482 1519 1582 1619 1682 1719 1782 1819 1882 1919 1982 2019 2082 2119 2182 2219 2282 2319 2382 2419 2482 
20 81 120 181 220 281 320 381 420 481 520 581 620 681 720 781 820 881 920 981 1020 1081 1120 1181 1220 1281 1320 1381 1420 1481 1520 1581 1620 1681 1720 1781 1820 1881 1920 1981 2020 2081 2120 2181 2220 2281 2320 2381 2420 2481 
21 80 121 180 221 280 321 380 421 480 521 580 621 680 721 780 821 880 921 980 1021 1080 1121 1180 1221 1280 1321 1380 1421 1480 1521 1580 1621 1680 1721 1780 1821 1880 1921 1980 2021 2080 2121 2180 2221 2280 2321 2380 2421 2480 
22 79 122 179 222 279 322 379 422 479 522 579 622 679 722 779 822 879 922 979 1022 1079 1122 1179 1222 1279 1322 1379 1422 1479 1522 1579 1622 1679 1722 1779 1822 1879 1922 1979 2022 2079 2122 2179 2222 2279 2322 2379 2422 2479 
23 78 123 178 223 278 323 378 423 478 523 578 623 678 723 778 823 878 923 978 1023 1078 1123 1178 1223 1278 1323 1378 1423 1478 1523 1578 1623 1678 1723 1778 1823 1878 1923 1978 2023 2078 2123 2178 2223 2278 2323 2378 2423 2478 
24 77 124 177 224 277 324 377 424 477 524 577 624 677 724 777 824 877 924 977 1024 1077 1124 1177 1224 1277 1324 1377 1424 1477 1524 1577 1624 1677 1724 1777 1824 1877 1924 1977 2024 2077 2124 2177 2224 2277 2324 2377 2424 2477 
25 76 125 176 225 276 325 376 425 476 525 576 625 676 725 776 825 876 925 976 1025 1076 1125 1176 1225 1276 1325 1376 1425 1476 1525 1576 1625 1676 1725 1776 1825 1876 1925 1976 2025 2076 2125 2176 2225 2276 2325 2376 2425 2476 
26 75 126 175 226 275 326 375 426 475 526 575 626 675 726 775 826 875 926 975 1026 1075 1126 1175 1226 1275 1326 1375 1426 1475 1526 1575 1626 1675 1726 1775 1826 1875 1926 1975 2026 2075 2126 2175 2226 2275 2326 2375 2426 2475 
27 74 127 174 227 274 327 374 427 474 527 574 627 674 727 774 827 874 927 974 1027 1074 1127 1174 1227 1274 1327 1374 1427 1474 1527 1574 1627 1674 1727 1774 1827 1874 1927 1974 2027 2074 2127 2174 2227 2274 2327 2374 2427 2474 
28 73 128 173 228 273 328 373 428 473 528 573 628 673 728 773 828 873 928 973 1028 1073 1128 1173 1228 1273 1328 1373 1428 1473 1528 1573 1628 1673 1728 1773 1828 1873 1928 1973 2028 2073 2128 2173 2228 2273 2328 2373 2428 2473 
29 72 129 172 229 272 329 372 429 472 529 572 629 672 729 772 829 872 929 972 1029 1072 1129 1172 1229 1272 1329 1372 1429 1472 1529 1572 1629 1672 1729 1772 1829 1872 1929 1972 2029 2072 2129 2172 2229 2272 2329 2372 2429 2472 
30 71 130 171 230 271 330 371 430 471 530 571 630 671 730 771 830 871 930 971 1030 1071 1130 1171 1230 1271 1330 1371 1430 1471 1530 1571 1630 1671 1730 1771 1830 1871 1930 1971 2030 2071 2130 2171 2230 2271 2330 2371 2430 2471 
31 70 131 170 231 270 331 370 431 470 531 570 631 670 731 770 831 870 931 970 1031 1070 1131 1170 1231 1270 1331 1370 1431 1470 1531 1570 1631 1670 1731 1770 1831 1870 1931 1970 2031 2070 2131 2170 2231 2270 2331 2370 2431 2470 
32 69 132 169 232 269 332 369 432 469 532 569 632 669 732 769 832 869 932 969 1032 1069 1132 1169 1232 1269 1332 1369 1432 1469 1532 1569 1632 1669 1732 1769 1832 1869 1932 1969 2032 2069 2132 2169 2232 2269 2332 2369 2432 2469 
33 68 133 168 233 268 333 368 433 468 533 568 633 668 733 768 833 868 933 968 1033 1068 1133 1168 1233 1268 1333 1368 1433 1468 1533 1568 1633 1668 1733 1768 1833 1868 1933 1968 2033 2068 2133 2168 2233 2268 2333 2368 2433 2468 
34 67 134 167 234 267 334 367 434 467 534 567 634 667 734 767 834 867 934 967 1034 1067 1134 1167 1234 1267 1334 1367 1434 1467 1534 1567 1634 1667 1734 1767 1834 1867 1934 1967 2034 2067 2134 2167 2234 2267 2334 2367 2434 2467 
35 66 135 166 235 266 335 366 435 466 535 566 635 666 735 766 835 866 935 966 1035 1066 1135 1166 1235 1266 1335 1366 1435 1466 1535 1566 1635 1666 1735 1766 1835 1866 1935 1966 2035 2066 2135 2166 2235 2266 2335 2366 2435 2466 
36 65 136 165 236 265 336 365 436 465 536 565 636 665 736 765 836 865 936 965 1036 1065 1136 1165 1236 1265 1336 1365 1436 1465 1536 1565 1636 1665 1736 1765 1836 1865 1936 1965 2036 2065 2136 2165 2236 2265 2336 2365 2436 2465 
37 64 137 164 237 264 337 364 437 464 537 564 637 664 737 764 837 864 937 964 1037 1064 1137 1164 1237 1264 1337 1364 1437 1464 1537 1564 1637 1664 1737 1764 1837 1864 1937 1964 2037 2064 2137 2164 2237 2264 2337 2364 2437 2464 
38 63 138 163 238 263 338 363 438 463 538 563 638 663 738 763 838 863 938 963 1038 1063 1138 1163 1238 1263 1338 1363 1438 1463 1538 1563 1638 1663 1738 1763 1838 1863 1938 1963 2038 2063 2138 2163 2238 2263 2338 2363 2438 2463 
39 62 139 162 239 262 339 362 439 462 539 562 639 662 739 762 839 862 939 962 1039 1062 1139 1162 1239 1262 1339 1362 1439 1462 1539 1562 1639 1662 1739 1762 1839 1862 1939 1962 2039 2062 2139 2162 2239 2262 2339 2362 2439 2462 
40 61 140 161 240 261 340 361 440 461 540 561 640 661 740 761 840 861 940 961 1040 1061 1140 1161 1240 1261 1340 1361 1440 1461 1540 1561 1640 1661 1740 1761 1840 1861 1940 1961 2040 2061 2140 2161 2240 2261 2340 2361 2440 2461 
41 60 141 160 241 260 341 360 441 460 541 560 641 660 741 760 841 860 941 960 1041 1060 1141 1160 1241 1260 1341 1360 1441 1460 1541 1560 1641 1660 1741 1760 1841 1860 1941 1960 2041 2060 2141 2160 2241 2260 2341 2360 2441 2460 
42 59 142 159 242 259 342 359 442 459 542 559 642 659 742 759 842 859 942 959 1042 1059 1142 1159 1242 1259 1342 1359 1442 1459 1542 1559 1642 1659 1742 1759 1842 1859 1942 1959 2042 2059 2142 2159 2242 2259 2342 2359 2442 2459 
43 58 143 158 243 258 343 358 443 458 543 558 643 658 743 758 843 858 943 958 1043 1058 1143 1158 1243 1258 1343 1358 1443 1458 1543 1558 1643 1658 1743 1758 1843 1858 1943 1958 2043 2058 2143 2158 2243 2258 2343 2358 2443 2458 
44 57 144 157 244 257 344 357 444 457 544 557 644 657 744 757 844 857 944 957 1044 1057 1144 1157 1244 1257 1344 1357 1444 1457 1544 1557 1644 1657 1744 1757 1844 1857 1944 1957 2044 2057 2144 2157 2244 2257 2344 2357 2444 2457 
45 56 145 156 245 256 345 356 445 456 545 556 645 656 745 756 845 856 945 956 1045 1056 1145 1156 1245 1256 1345 1356 1445 1456 1545 1556 1645 1656 1745 1756 1845 1856 1945 1956 2045 2056 2145 2156 2245 2256 2345 2356 2445 2456 
46 55 146 155 246 255 346 355 446 455 546 555 646 655 746 755 846 855 946 955 1046 1055 1146 1155 1246 1255 1346 1355 1446 1455 1546 1555 1646 1655 1746 1755 1846 1855 1946 1955 2046 2055 2146 2155 2246 2255 2346 2355 2446 2455 
47 54 147 154 247 254 347 354 447 454 547 554 647 654 747 754 847 854 947 954 1047 1054 1147 1154 1247 1254 1347 1354 1447 1454 1547 1554 1647 1654 1747 1754 1847 1854 1947 1954 2047 2054 2147 2154 2247 2254 2347 2354 2447 2454 
48 53 148 153 248 253 348 353 448 453 548 553 648 653 748 753 848 853 948 953 1048 1053 1148 1153 1248 1253 1348 1353 1448 1453 1548 1553 1648 1653 1748 1753 1848 1853 1948 1953 2048 2053 2148 2153 2248 2253 2348 2353 2448 2453 
49 52 149 152 249 252 349 352 449 452 549 552 649 652 749 752 849 852 949 952 1049 1052 1149 1152 1249 1252 1349 1352 1449 1452 1549 1552 1649 1652 1749 1752 1849 1852 1949 1952 2049 2052 2149 2152 2249 2252 2349 2352 2449 2452 
50 51 150 151 250 251 350 351 450 451 550 551 650 651 750 751 850 851 950 951 1050 1051 1150 1151 1250 1251 1350 1351 1450 1451 1550 1551 1650 1651 1750 1751 1850 1851 1950 1951 2050 2051 2150 2151 2250 2251 2350 2351 2450 2451
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Matrix of Palindromes
[code-task title="Matrix of Palindromes" taskId="java-advanced-multidimensional-arrays-Matrix-of-Palindromes" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
       // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care generează următoarea **matrice de palindroame**. 

Trebuie să existe un palindrom de **3 litere** pe fiecare poziție. 

Fiecare palindrom are **aceeași literă pe prima și pe ultima** poziție. 

**Litera din mijloc** a palindromului se schimbă **pe fiecare coloană**. 

**Rândurile** definesc **prima și ultima** literă. 

**Coloanele** definesc **litera din mijloc**.

De exemplu:
- Pe `rândul 0`, palindroamele încep și se termină cu **"a"**, pe `rândul 1` - **"b"**, pe `rândul 2` - **"c"** ...
- Pe `rândul 0 coloana 0`, litera din mijloc este **"a"**, pe `rândul 0 coloana 1` - **"b"**, pe `rândul 0 coloana 2` - **"c"** ...
- Pe `rândul 1 coloana 0`, litera din mijloc este **"b"**, pe `rândul 1 coloana 1` - **"c"**, pe `rândul 1 coloana 2` - **"d"** ... 

## Intrare

- Numerele **r** și **c** se află pe prima linie a datelor de intrare
- **r** și **c** sunt numere întregi din intervalul `[1 ... 26]`
- `r + c <= 27`

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| 4 6 | aaa aba aca ada aea afa |
|  | bbb bcb bdb beb bfb bgb |
|  | ccc cdc cec cfc cgc chc |
|  | ddd ded dfd dgd dhd did |
|  |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| 3 2 | aaa aba |
|  | bbb bcb |
|  | ccc cdc |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4 6
[/input]
[output]
aaa aba aca ada aea afa 
bbb bcb bdb beb bfb bgb 
ccc cdc cec cfc cgc chc 
ddd ded dfd dgd dhd did
[/output]
[/test]
[test open]
[input]
3 2
[/input]
[output]
aaa aba 
bbb bcb 
ccc cdc
[/output]
[/test]
[test]
[input]
3 8
[/input]
[output]
aaa aba aca ada aea afa aga aha 
bbb bcb bdb beb bfb bgb bhb bib 
ccc cdc cec cfc cgc chc cic cjc
[/output]
[/test]
[test]
[input]
1 26
[/input]
[output]
aaa aba aca ada aea afa aga aha aia aja aka ala ama ana aoa apa aqa ara asa ata aua ava awa axa aya aza
[/output]
[/test]
[test]
[input]
26 1
[/input]
[output]
aaa 
bbb 
ccc 
ddd 
eee 
fff 
ggg 
hhh 
iii 
jjj 
kkk 
lll 
mmm 
nnn 
ooo 
ppp 
qqq 
rrr 
sss 
ttt 
uuu 
vvv 
www 
xxx 
yyy 
zzz
[/output]
[/test]
[test]
[input]
13 14
[/input]
[output]
aaa aba aca ada aea afa aga aha aia aja aka ala ama ana 
bbb bcb bdb beb bfb bgb bhb bib bjb bkb blb bmb bnb bob 
ccc cdc cec cfc cgc chc cic cjc ckc clc cmc cnc coc cpc 
ddd ded dfd dgd dhd did djd dkd dld dmd dnd dod dpd dqd 
eee efe ege ehe eie eje eke ele eme ene eoe epe eqe ere 
fff fgf fhf fif fjf fkf flf fmf fnf fof fpf fqf frf fsf 
ggg ghg gig gjg gkg glg gmg gng gog gpg gqg grg gsg gtg 
hhh hih hjh hkh hlh hmh hnh hoh hph hqh hrh hsh hth huh 
iii iji iki ili imi ini ioi ipi iqi iri isi iti iui ivi 
jjj jkj jlj jmj jnj joj jpj jqj jrj jsj jtj juj jvj jwj 
kkk klk kmk knk kok kpk kqk krk ksk ktk kuk kvk kwk kxk 
lll lml lnl lol lpl lql lrl lsl ltl lul lvl lwl lxl lyl 
mmm mnm mom mpm mqm mrm msm mtm mum mvm mwm mxm mym mzm
[/output]
[/test]
[test]
[input]
14 13
[/input]
[output]
aaa aba aca ada aea afa aga aha aia aja aka ala ama 
bbb bcb bdb beb bfb bgb bhb bib bjb bkb blb bmb bnb 
ccc cdc cec cfc cgc chc cic cjc ckc clc cmc cnc coc 
ddd ded dfd dgd dhd did djd dkd dld dmd dnd dod dpd 
eee efe ege ehe eie eje eke ele eme ene eoe epe eqe 
fff fgf fhf fif fjf fkf flf fmf fnf fof fpf fqf frf 
ggg ghg gig gjg gkg glg gmg gng gog gpg gqg grg gsg 
hhh hih hjh hkh hlh hmh hnh hoh hph hqh hrh hsh hth 
iii iji iki ili imi ini ioi ipi iqi iri isi iti iui 
jjj jkj jlj jmj jnj joj jpj jqj jrj jsj jtj juj jvj 
kkk klk kmk knk kok kpk kqk krk ksk ktk kuk kvk kwk 
lll lml lnl lol lpl lql lrl lsl ltl lul lvl lwl lxl 
mmm mnm mom mpm mqm mrm msm mtm mum mvm mwm mxm mym 
nnn non npn nqn nrn nsn ntn nun nvn nwn nxn nyn nzn
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Diagonal Difference
[code-task title="Diagonal Difference" taskId="java-advanced-multidimensional-arrays-Diagonal-Difference" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care găsește **diferența dintre sumele diagonalelor unei matrice pătrate** (valoarea absolută).

[image assetsSrc="Java-Advanced-Multidimensional-Arrays-3.png" /]

## Intrare

- **Prima linie** conține un număr **n** – dimensiunea matricei
- Următoarele **n** **linii** conțin **valorile pentru fiecare rând** – **n** numere separate prin spațiu

[hints]
[hint]
Utilizați o **singură buclă** `i = [1 ... n]` pentru a determina suma diagonalelor:

```java
for (int i = 0; i < n; i++) {
   // ...
}
```
[/hint] 
[hint]
**Diagonala principală** conține toate celulele `{rând,coloană}` unde `rând == coloană == i`:

```java
primaryDiagonal += matrix[i][i];
```
[/hint] 
[hint]
**Diagonala secundară** conține toate celulele `{rând,coloană}` unde `rând == i` și `coloană == n - 1 - i`:

```java
secondaryDiagonal += matrix[i][matrix[i].length - 1 - i];
```
[/hint] 
[/hints] 


## Exemple
| **Intrare** | **Ieșire** | **Comentarii** |
| --- | --- | --- |
| 3 | 15 | **Diagonala principală:** `sum = 11 + 5 + (-12) = 4`  |
| 11 2 4 |  | **Diagonala secundară:** `sum = 4 + 5 + 10 = 19`  |
| 4 5 6 |  | **Diferența:** `4 - 19 = 15`  |
| 10 8 -12 |  |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
11 2 4
4 5 6
10 8 -12
[/input]
[output]
15
[/output]
[/test]
[test open]
[input]
4
-7 14 9 -20
3 4 9 21
-14 6 8 44
30 9 7 -14
[/input]
[output]
34
[/output]
[/test]
[test]
[input]
7
-8 -46 -34 -10 -17 28 -1 
30 -7 -48 50 22 50 47 
47 -40 -48 33 43 -19 9 
36 20 -33 -33 34 -28 -7 
46 42 1 41 -41 41 45 
21 0 -38 -10 -3 30 28 
-19 -13 30 -48 45 27 -50
[/input]
[output]
198
[/output]
[/test]
[test]
[input]
2
13 -34 
41 48
[/input]
[output]
54
[/output]
[/test]
[test]
[input]
10
47 -21 12 6 27 -11 39 -26 -44 -22 
-24 26 45 -18 -30 12 17 -12 -29 -27 
21 -42 33 33 26 27 32 7 -41 -3 
-21 -13 -26 -25 4 13 36 19 2 -40 
25 24 27 -2 -27 -7 -15 -37 23 20 
40 -12 -44 -26 -43 -4 21 -46 -25 48 
-18 15 49 3 -17 -43 46 31 28 -28 
25 16 49 -9 49 4 50 13 11 -32 
26 -36 32 -11 8 -48 12 24 -44 27 
11 -44 17 2 26 -10 -20 -31 -39 -41
[/input]
[output]
55
[/output]
[/test]
[test]
[input]
5
-36 -20 -5 39 -21 
28 32 21 27 -19 
35 33 -34 29 -13 
47 40 -3 25 28 
-15 26 42 18 48
[/input]
[output]
38
[/output]
[/test]
[test]
[input]
20
-16 4 45 -41 -1 10 45 -7 13 28 41 46 10 18 13 -13 48 49 -21 17 
13 -4 -18 14 18 6 14 7 -8 23 -45 6 -50 -38 -25 39 9 7 49 -2 
-13 -27 45 -42 37 -24 -18 -19 -27 -22 0 -32 -23 31 -31 -46 -9 -41 -1 -45 
26 -21 -32 36 5 37 -20 -48 49 -50 -39 21 -9 -43 33 -13 39 0 29 5 
40 -36 -29 23 1 -1 17 9 25 -19 36 43 31 18 -43 -10 -29 0 -31 4 
-49 16 1 -28 46 0 5 16 37 -8 44 1 17 14 -43 -16 31 -6 45 48 
36 20 -27 4 -25 29 -39 30 -38 -46 11 2 -7 14 42 -9 17 -3 44 25 
-25 -4 -36 -26 -6 38 50 43 -7 -9 -44 -3 -35 -20 18 48 10 29 9 -12 
-42 7 -27 -11 -20 -12 -14 18 -20 -20 20 -3 22 -2 11 -45 -9 -22 -39 11 
39 36 46 -6 -19 45 37 -49 -42 50 36 50 -39 -25 46 40 15 31 6 18 
31 -16 35 -23 -32 46 49 43 41 2 29 6 47 0 -23 -11 45 10 -2 -41 
-36 27 3 -5 24 27 38 -26 -34 49 41 21 0 46 9 1 47 -1 -23 -38 
8 13 -21 21 18 -43 8 -28 50 -14 36 -11 -37 24 15 -45 -11 -4 -29 39 
-1 40 8 -46 -40 -1 -32 18 -37 23 -49 -19 32 -7 -42 1 3 23 -21 -38 
30 -39 19 -40 -27 14 -17 -22 40 39 -17 36 0 -14 30 15 38 -50 46 -11 
16 -7 34 1 -31 27 -9 15 40 -32 -24 41 32 -43 24 -15 39 -4 -38 41 
-24 -34 -24 -41 -43 -30 -16 17 -12 -6 36 25 11 45 21 12 -37 48 -45 35 
41 39 24 -47 43 4 22 -11 -16 44 46 -42 -49 44 6 -5 9 -48 -48 -1 
8 33 -8 24 42 -49 -9 -16 -26 11 -30 -43 31 23 -47 -39 46 -29 -9 -5 
-42 -17 18 36 -15 -13 -36 -42 5 -37 2 -46 -35 -36 37 -36 -7 23 32 44
[/input]
[output]
179
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Maximal Sum
[code-task title="Maximal Sum" taskId="java-advanced-multidimensional-arrays-Maximal-Sum" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește o matrice dreptunghiulară de numere întregi de dimensiune **N x M** și găsește în interiorul ei matricea de dimensiune **3 x 3** care **are suma maximă a elementelor**.

## Intrare

- Pe prima linie veți primi numărul de rânduri, **N**, și de coloane, **M**
- Pe următoarele **N linii** veți primi **fiecare rând cu elementele aferente acestuia**

Imprimați **elementele** pătratului 3 x 3 sub forma unei matrice, împreună cu **suma acestora**. Vedeți formatul datelor de ieșire mai jos:

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 4 5 | Sum = 75 |
| 1 5 5 2 4 | 1 4 14 |
| 2 1 4 14 3 | 7 11 2 |
| 3 7 11 2 8 | 8 12 16 |
| 4 8 12 16 4 |  |

## Comentarii

[image assetsSrc="Java-Advanced-Multidimensional-Arrays-4.png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4 5
1 5 5 2 4
2 1 4 14 3
3 7 11 2 8
4 8 12 16 4
[/input]
[output]
Sum = 75
1 4 14
7 11 2
8 12 16
[/output]
[/test]
[test open]
[input]
5 6
1 0 4 3 1 1 
1 3 1 3 0 4 
6 4 1 2 5 6 
2 2 1 5 4 1 
3 3 3 6 0 5
[/input]
[output]
Sum = 34
2 5 6 
5 4 1 
6 0 5
[/output]
[/test]
[test]
[input]
20 10
4 1 4 1 4 1 3 0 2 1 
2 1 1 3 0 4 4 0 4 3 
3 1 3 1 1 0 4 3 0 2 
4 0 4 0 2 1 1 2 2 1 
2 3 0 3 4 1 3 1 2 4 
0 4 4 2 3 0 3 2 1 4 
4 4 0 4 0 3 4 0 1 2 
0 3 1 3 1 2 4 3 0 2 
3 0 1 1 2 2 4 1 0 2 
1 2 1 1 1 4 2 4 4 3 
4 0 4 0 1 1 4 2 0 4 
1 2 0 2 2 3 0 3 0 2 
0 1 1 1 1 4 0 2 2 1 
3 2 3 0 3 3 2 2 4 3 
2 1 0 1 2 0 4 2 4 3 
3 4 3 1 4 2 1 4 3 4 
3 4 0 4 1 3 2 0 0 4 
4 3 0 0 0 0 2 0 3 2 
0 3 0 2 4 0 2 0 3 2 
4 2 1 2 2 3 2 4 1 2
[/input]
[output]
Sum = 29
2 4 3 
2 4 3 
4 3 4
[/output]
[/test]
[test]
[input]
20 10
1 1 1 2 2 0 1 0 0 0 
1 0 1 0 2 1 2 2 0 2 
0 0 0 1 0 0 2 0 2 1 
1 2 0 0 2 0 2 1 0 1 
0 2 1 2 0 1 1 0 2 2 
1 1 1 0 0 1 2 2 1 1 
0 2 2 1 2 0 1 1 2 2 
0 2 0 2 0 0 1 0 1 0 
0 0 2 2 1 2 2 1 0 1 
2 1 2 1 1 0 0 2 1 2 
2 0 1 0 2 2 0 1 2 1 
1 2 0 2 0 2 1 1 1 1 
2 2 0 2 1 1 2 0 0 0 
2 0 0 0 2 1 1 1 2 2 
2 2 0 1 0 0 2 0 0 0 
0 0 0 1 2 1 2 1 0 1 
2 1 1 0 1 0 1 2 0 1 
0 0 0 2 0 1 0 1 2 1 
0 0 0 2 1 2 0 0 1 2 
1 0 1 2 0 1 1 2 1 1
[/input]
[output]
Sum = 13
0 2 2 
2 1 1 
1 2 2
[/output]
[/test]
[test]
[input]
20 10
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0
[/input]
[output]
Sum = 0
0 0 0 
0 0 0 
0 0 0
[/output]
[/test]
[test]
[input]
5 6
1 1 1 0 1 1 
0 1 1 1 0 0 
1 0 1 0 0 1 
0 0 0 1 1 1 
1 1 1 0 1 0
[/input]
[output]
Sum = 7
1 1 1 
0 1 1 
1 0 1
[/output]
[/test]
[test]
[input]
20 20
18 17 8 10 17 10 1 13 11 5 5 19 11 9 5 16 10 1 18 5 
16 10 12 2 17 16 16 12 13 12 14 0 9 4 18 13 15 6 0 10 
2 5 9 8 17 15 19 14 18 12 8 19 15 19 10 15 2 1 15 18 
0 6 4 18 5 4 7 17 6 16 12 8 19 6 18 8 16 19 19 18 
1 4 8 13 1 10 14 0 0 3 1 2 14 4 15 2 8 7 4 5 
12 19 14 4 8 19 10 17 17 0 0 19 1 9 17 17 10 16 0 7 
19 0 4 16 18 16 17 6 0 3 9 4 7 6 2 6 17 16 19 4 
8 16 17 10 13 17 1 12 0 13 6 3 5 16 6 7 13 11 18 8 
7 8 16 5 2 12 13 11 12 18 11 9 8 7 19 8 16 17 5 19 
10 17 16 4 18 11 8 12 6 19 14 9 2 6 3 0 19 4 1 18 
4 13 5 17 6 2 6 0 13 8 14 1 4 8 16 6 2 11 2 12 
4 12 16 16 5 15 10 1 2 18 18 2 0 17 1 12 4 19 0 3 
13 18 3 14 19 7 7 15 3 11 11 5 9 5 8 7 18 5 1 6 
6 7 13 5 2 17 11 16 5 10 1 3 10 16 15 2 6 18 18 16 
15 3 9 1 16 16 4 7 0 7 19 6 8 6 8 9 0 8 12 12 
10 16 5 12 4 18 19 17 3 9 0 12 1 0 13 19 12 10 13 0 
0 2 11 1 7 2 9 12 14 7 6 12 11 17 1 3 15 17 13 11 
7 1 3 11 15 8 12 16 19 11 19 19 0 11 7 15 4 10 8 1 
16 17 10 11 14 2 16 16 13 14 18 3 10 15 15 1 12 1 2 5 
10 19 15 18 10 5 11 9 8 12 10 3 15 18 1 18 17 12 6 3
[/input]
[output]
Sum = 132
17 16 19 
13 11 18 
16 17 5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Matrix Shuffling
[code-task title="Matrix Shuffling" taskId="java-advanced-multidimensional-arrays-Matrix-Shuffling" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește o matrice de șiruri de la consolă și realizează anumite operații cu elementele sale.

Datele de la utilizator provin în mod similar cu cele de la problemele anterioare – mai întâi citiți **dimensiunile** și mai apoi **datele**.

Programul vostru trebuie să primească comenzile în următorul format: `swap rând1 coloană1 rând2 coloană2`, unde rând1, rând2, coloană1, coloană2 sunt **coordonatele** matricei. 

Pentru ca o comandă să fie validă, aceasta trebuie să înceapă cu cuvântul-cheie **"swap"**, urmat de **4 coordonate valide**. 

Trebuie să **inversați valorile** coordonatelor date \(`celula [rând1, coloană1] cu celula [rând2, coloană2]`\) **și să imprimați matricea după fiecare pas** (astfel veți putea verifica dacă operația s-a realizat corect).

Dacă **comanda nu este validă** (aceasta nu conține cuvântul-cheie `swap`, are mai puține sau mai multe coordonate introduse sau coordonatele date nu există), imprimați `Invalid input!` și treceți la următoarea comandă. 

Programul trebuie să se termine odată cu introducerea șirului `END`.


[hints]
[hint]
Gândiți-vă la tratarea excepțiilor:

```java
 try {
   String temp = matrix[row1][col1];
   matrix[row1][col1] = matrix[row2][col2];
   matrix[row2][col2] = temp;
   print(matrix);
 } catch (IndexOutOfBoundsException iob) {
   System.out.println("Invalid input!");
 }
```
[/hint] 
[/hints] 


## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 3 | 5 2 3 |
| 1 2 3 | 4 1 6 |
| 4 5 6 | Invalid input! |
| swap 0 0 1 1 | 5 4 3 |
| swap 10 9 8 7 | 2 1 6 |
| swap 0 1 1 0 |  |
| END |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| 1 2 | Invalid input! |
| Hello World | World Hello |
| 0 0 0 1 | Hello World |
| swap 0 0 0 1 |  |
| swap 0 1 0 0 |  |
| END |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 3
1 2 3
4 5 6
swap 0 0 1 1
swap 10 9 8 7
swap 0 1 1 0
END
[/input]
[output]
5 2 3 
4 1 6 
Invalid input!
5 4 3 
2 1 6
[/output]
[/test]
[test open]
[input]
1 2
Hello World
0 0 0 1
swap 0 0 0 1
swap 0 1 0 0
END
[/input]
[output]
Invalid input!
World Hello 
Hello World
[/output]
[/test]
[test]
[input]
12 11
4 1 4 1 4 1 3 0 2 1 4 
2 1 1 3 0 4 4 0 4 3 2
3 1 3 1 1 0 4 3 0 2 1 
4 0 4 0 2 1 1 2 2 1 2 
2 3 0 3 4 1 3 1 2 4 2 
0 4 4 2 3 0 3 2 1 4 3 
4 4 0 4 0 3 4 0 1 2 2 
0 3 1 3 1 2 4 3 0 2 4 
3 0 1 1 2 2 4 1 0 2 1 
1 2 1 1 1 4 2 4 4 3 2 
4 0 4 0 1 1 4 2 0 4 0 
1 2 0 2 2 3 0 3 0 2 3 
swap 0 0 1 1
swap 10 9 8 7
swap 0 1 1 0
swap 0 0 1 1
swap 10 9 8 7
swap 0 1 1 0
END
[/input]
[output]
1 1 4 1 4 1 3 0 2 1 4 
2 4 1 3 0 4 4 0 4 3 2 
3 1 3 1 1 0 4 3 0 2 1 
4 0 4 0 2 1 1 2 2 1 2 
2 3 0 3 4 1 3 1 2 4 2 
0 4 4 2 3 0 3 2 1 4 3 
4 4 0 4 0 3 4 0 1 2 2 
0 3 1 3 1 2 4 3 0 2 4 
3 0 1 1 2 2 4 1 0 2 1 
1 2 1 1 1 4 2 4 4 3 2 
4 0 4 0 1 1 4 2 0 4 0 
1 2 0 2 2 3 0 3 0 2 3 
1 1 4 1 4 1 3 0 2 1 4 
2 4 1 3 0 4 4 0 4 3 2 
3 1 3 1 1 0 4 3 0 2 1 
4 0 4 0 2 1 1 2 2 1 2 
2 3 0 3 4 1 3 1 2 4 2 
0 4 4 2 3 0 3 2 1 4 3 
4 4 0 4 0 3 4 0 1 2 2 
0 3 1 3 1 2 4 3 0 2 4 
3 0 1 1 2 2 4 4 0 2 1 
1 2 1 1 1 4 2 4 4 3 2 
4 0 4 0 1 1 4 2 0 1 0 
1 2 0 2 2 3 0 3 0 2 3 
1 2 4 1 4 1 3 0 2 1 4 
1 4 1 3 0 4 4 0 4 3 2 
3 1 3 1 1 0 4 3 0 2 1 
4 0 4 0 2 1 1 2 2 1 2 
2 3 0 3 4 1 3 1 2 4 2 
0 4 4 2 3 0 3 2 1 4 3 
4 4 0 4 0 3 4 0 1 2 2 
0 3 1 3 1 2 4 3 0 2 4 
3 0 1 1 2 2 4 4 0 2 1 
1 2 1 1 1 4 2 4 4 3 2 
4 0 4 0 1 1 4 2 0 1 0 
1 2 0 2 2 3 0 3 0 2 3 
4 2 4 1 4 1 3 0 2 1 4 
1 1 1 3 0 4 4 0 4 3 2 
3 1 3 1 1 0 4 3 0 2 1 
4 0 4 0 2 1 1 2 2 1 2 
2 3 0 3 4 1 3 1 2 4 2 
0 4 4 2 3 0 3 2 1 4 3 
4 4 0 4 0 3 4 0 1 2 2 
0 3 1 3 1 2 4 3 0 2 4 
3 0 1 1 2 2 4 4 0 2 1 
1 2 1 1 1 4 2 4 4 3 2 
4 0 4 0 1 1 4 2 0 1 0 
1 2 0 2 2 3 0 3 0 2 3 
4 2 4 1 4 1 3 0 2 1 4 
1 1 1 3 0 4 4 0 4 3 2 
3 1 3 1 1 0 4 3 0 2 1 
4 0 4 0 2 1 1 2 2 1 2 
2 3 0 3 4 1 3 1 2 4 2 
0 4 4 2 3 0 3 2 1 4 3 
4 4 0 4 0 3 4 0 1 2 2 
0 3 1 3 1 2 4 3 0 2 4 
3 0 1 1 2 2 4 1 0 2 1 
1 2 1 1 1 4 2 4 4 3 2 
4 0 4 0 1 1 4 2 0 4 0 
1 2 0 2 2 3 0 3 0 2 3 
4 1 4 1 4 1 3 0 2 1 4 
2 1 1 3 0 4 4 0 4 3 2 
3 1 3 1 1 0 4 3 0 2 1 
4 0 4 0 2 1 1 2 2 1 2 
2 3 0 3 4 1 3 1 2 4 2 
0 4 4 2 3 0 3 2 1 4 3 
4 4 0 4 0 3 4 0 1 2 2 
0 3 1 3 1 2 4 3 0 2 4 
3 0 1 1 2 2 4 1 0 2 1 
1 2 1 1 1 4 2 4 4 3 2 
4 0 4 0 1 1 4 2 0 4 0 
1 2 0 2 2 3 0 3 0 2 3
[/output]
[/test]
[test]
[input]
20 10
1 1 1 2 2 0 1 0 0 0 
1 0 1 0 2 1 2 2 0 2 
0 0 0 1 0 0 2 0 2 1 
1 2 0 0 2 0 2 1 0 1 
0 2 1 2 0 1 1 0 2 2 
1 1 1 0 0 1 2 2 1 1 
0 2 2 1 2 0 1 1 2 2 
0 2 0 2 0 0 1 0 1 0 
0 0 2 2 1 2 2 1 0 1 
2 1 2 1 1 0 0 2 1 2 
2 0 1 0 2 2 0 1 2 1 
1 2 0 2 0 2 1 1 1 1 
2 2 0 2 1 1 2 0 0 0 
2 0 0 0 2 1 1 1 2 2 
2 2 0 1 0 0 2 0 0 0 
0 0 0 1 2 1 2 1 0 1 
2 1 1 0 1 0 1 2 0 1 
0 0 0 2 0 1 0 1 2 1 
0 0 0 2 1 2 0 0 1 2 
1 0 1 2 0 1 1 2 1 1 
END
[/input]
[output]

[/output]
[/test]
[test]
[input]
11 10
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
swap 0 0 1 1
swap 10 9 8 7
swap 0 1 1 0
END
[/input]
[output]
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0
[/output]
[/test]
[test]
[input]
5 6
1 1 1 0 1 1 
0 1 1 1 0 0 
1 0 1 0 0 1 
0 0 0 1 1 1 
1 1 1 0 1 0 
swap 0 0 1 1
swap 10 9 8 7
swap 0 1 1 0swap 0 0 1 1
swap 10 9 8 7
swap 0 1 1 0
END
[/input]
[output]
1 1 1 0 1 1 
0 1 1 1 0 0 
1 0 1 0 0 1 
0 0 0 1 1 1 
1 1 1 0 1 0 
Invalid input!
Invalid input!
Invalid input!
1 0 1 0 1 1 
1 1 1 1 0 0 
1 0 1 0 0 1 
0 0 0 1 1 1 
1 1 1 0 1 0
[/output]
[/test]
[test]
[input]
5 20
18 17 8 10 17 10 1 13 11 5 5 19 11 9 5 16 10 1 18 5 
16 10 12 2 17 16 16 12 13 12 14 0 9 4 18 13 15 6 0 10 
2 5 9 8 17 15 19 14 18 12 8 19 15 19 10 15 2 1 15 18 
0 6 4 18 5 4 7 17 6 16 12 8 19 6 18 8 16 19 19 18 
1 4 8 13 1 10 14 0 0 3 1 2 14 4 15 2 8 7 4 5 
swap 0 0 15 3
swap 3 9 8 7
swap 0 1 1 4
swap 0 0 1 1
swap 4 9 8 7
swap 0 5 1 0
swap 4 0 7 8
swap 1 9 8 7
swap 0 1 1 2
END
[/input]
[output]
Invalid input!
Invalid input!
18 17 8 10 17 10 1 13 11 5 5 19 11 9 5 16 10 1 18 5 
16 10 12 2 17 16 16 12 13 12 14 0 9 4 18 13 15 6 0 10 
2 5 9 8 17 15 19 14 18 12 8 19 15 19 10 15 2 1 15 18 
0 6 4 18 5 4 7 17 6 16 12 8 19 6 18 8 16 19 19 18 
1 4 8 13 1 10 14 0 0 3 1 2 14 4 15 2 8 7 4 5 
10 17 8 10 17 10 1 13 11 5 5 19 11 9 5 16 10 1 18 5 
16 18 12 2 17 16 16 12 13 12 14 0 9 4 18 13 15 6 0 10 
2 5 9 8 17 15 19 14 18 12 8 19 15 19 10 15 2 1 15 18 
0 6 4 18 5 4 7 17 6 16 12 8 19 6 18 8 16 19 19 18 
1 4 8 13 1 10 14 0 0 3 1 2 14 4 15 2 8 7 4 5 
Invalid input!
10 17 8 10 17 16 1 13 11 5 5 19 11 9 5 16 10 1 18 5 
10 18 12 2 17 16 16 12 13 12 14 0 9 4 18 13 15 6 0 10 
2 5 9 8 17 15 19 14 18 12 8 19 15 19 10 15 2 1 15 18 
0 6 4 18 5 4 7 17 6 16 12 8 19 6 18 8 16 19 19 18 
1 4 8 13 1 10 14 0 0 3 1 2 14 4 15 2 8 7 4 5 
Invalid input!
Invalid input!
10 12 8 10 17 16 1 13 11 5 5 19 11 9 5 16 10 1 18 5 
10 18 17 2 17 16 16 12 13 12 14 0 9 4 18 13 15 6 0 10 
2 5 9 8 17 15 19 14 18 12 8 19 15 19 10 15 2 1 15 18 
0 6 4 18 5 4 7 17 6 16 12 8 19 6 18 8 16 19 19 18 
1 4 8 13 1 10 14 0 0 3 1 2 14 4 15 2 8 7 4 5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: String Matrix Rotation
[code-task title="String Matrix Rotation" taskId="java-advanced-multidimensional-arrays-String-Matrix-Rotation" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Se dă o **secvență de linii de text**.

Presupuneți că aceste linii de text formează o **matrice de caractere** (introduceți spații pe pozițiile lipsă pentru a crea o matrice dreptunghiulară).

Scrieți un program care **rotește matricea** cu 90, 180, 270, 360, … de grade.

După întâlnirea comenzii `END`, imprimați rezultatul pe consolă sub forma unei secvențe de șiruri.

## Exemplu

[image assetsSrc="Java-Advanced-Multidimensional-Arrays-5.png" /]

## Intrare

Datele de intrare sunt citite de la consolă:

- Prima linie conține comanda în formatul `Rotate(X)`, unde **X** reprezintă numărul de grade al rotației cerute
- Următoarele linii conțin **liniile matricei** care trebuie rotită
- Datele de intrare se termină după introducerea comenzii `END`

Datele de intrare vor fi mereu valide și vor respecta formatul descris. 

Nu trebuie să le validați în mod explicit.

## Ieșire

Tipăriți pe consolă **matricea rotită**, sub forma unei secvențe de linii de text.

## Constrângeri

- Numărul care reprezintă **gradele rotației** este un număr întreg pozitiv din intervalul `[0 ... 90000]` și este un **multiplu de 90**
- Numărul de linii al matricei se află în intervalul `[1 ... 1 000]`
- Liniile matricei sunt **șiruri** de lungime `[1 ... 1 000]`


## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| Rotate(90) | esh |
| hello | xoe |
| softuni | afl |
| exam | mtl |
| END |  uo |
|  |  n  |
|  |  i  |

| **Intrare** | **Ieșire** |
| --- | --- |
| Rotate(180) |    maxe |
| hello | inutfos |
| softuni |   olleh |
| exam |  |
| END |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| Rotate(270) |  i  |
| hello |  n  |
| softuni | ou  |
| exam | ltm |
| END | lfa |
|  | eox |
|  | hse |

| **Intrare** | **Ieșire** |
| --- | --- |
| Rotate(720) | js |
| js | exam |
| exam |  |
| END |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| Rotate(810) | ej |
| js | xs |
| exam | a |
| END | m |
|  |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| Rotate(0) | js |
| js | exam |
| exam |  |
| END |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Rotate(90)
hello
softuni
exam
END
[/input]
[output]
esh
xoe
afl
mtl
 uo
 n 
 i
[/output]
[/test]
[test open]
[input]
Rotate(180)
hello
softuni
exam
END
[/input]
[output]
maxe
inutfos
  olleh
[/output]
[/test]
[test open]
[input]
Rotate(270)
hello
softuni
exam
END
[/input]
[output]
i 
 n 
ou 
ltm
lfa
eox
hse
[/output]
[/test]
[test open]
[input]
Rotate(720)
js
exam
END
[/input]
[output]
js  
exam
[/output]
[/test]
[test open]
[input]
Rotate(810)
js
exam
END
[/input]
[output]
ej
xs
a 
m
[/output]
[/test]
[test open]
[input]
Rotate(0)
js
exam
END
[/input]
[output]
js  
exam
[/output]
[/test]
[test]
[input]
Rotate(90)
a
abc
abcdef
fadjkjerjghjhfgfs
gfsjkgfjjgfjgfjgfsjhgjfhsjhkfsd
safsfsfgfffgd
f
afggfagfgfa
fgffgdfgdfsgfgdsgfssfd
END
[/input]
[output]
fafsgfaaa
gf afabb
fg fsdcc
fg sjjd  
gf fkke  
da sgjf  
fg ffe
gf gjr
dg fjj
ff fgg
sa ffh
g  gjj
f  dgh
g   ff
d   jg
s   gf
g   fs
f   s
s   j
s   h
f   g
d   j
    f
    h
    s
    j
    h
    k
    f
    s
    d
[/output]
[/test]
[test]
[input]
Rotate(180)
a
abc
abcdef
fadjkjerjghjhfgfs
gfsjkgfjjgfjgfjgfsjhgjfhsjhkfsd
safsfsfgfffgd
f
afggfagfgfa
fgffgdfgdfsgfgdsgfssfd
END
[/input]
[output]
dfssfgsdgfgsfdgfdgffgf
                    afgfgafggfa
                              f
                  dgfffgfsfsfas
dsfkhjshfjghjsfgjfgjfgjjfgkjsfg
              sfgfhjhgjrejkjdaf
                         fedcba
                            cba
                              a
[/output]
[/test]
[test]
[input]
Rotate(270)
a
abc
abcdef
fadjkjerjghjhfgfs
gfsjkgfjjgfjgfjgfsjhgjfhsjhkfsd
safsfsfgfffgd
f
afggfagfgfa
fgffgdfgdfsgfgdsgfssfd
END
[/input]
[output]
d    
    s    
    f    
    k    
    h    
    j    
    s    
    h    
    f    
    j   d
    g   f
    h   s
    j   s
    s   f
   sf   g
   fg   s
   gj   d
   ff   g
   hgd  f
   jjg  g
   hff as
   ggf ff
   jjf gd
   rjg fg
   eff gf
  fjgs ad
  ekkf fg
  djjs gf
 ccdsf gf
 bbafa fg
aaafgsfaf
[/output]
[/test]
[test]
[input]
Rotate(450)
JavaScript (JS) is a dynamic computer programming language.
It is most commonly used as part of web browsers,
whose implementations allow client-side scripts
to interact with the user, control the browser,
communicate asynchronously,
and alter the document content that is displayed.
It is also being used in server-side network
programming (with Node.js),
game development and the
creation of desktop and mobile applications.
END
[/input]
[output]
cgpIactwIJ
rartnoohta
emo dm o v
aegi misia
t rsaunesS
ida lnt  c
oematieimr
nvmlecrmoi
 eisraapsp
olno tcltt
fog tete  
 p bh  mc(
dm(eeaweoJ
eewi sinmS
snindyttm)
kttgonhao 
t h cc tni
oa uuhtils
pnNsmrhoy 
 doeeoen a
a ddnn su 
nte tou sd
dh.i usaey
 ejncseldn
m s olrl a
o )sny,oam
b ,et, wsi
i  re c  c
l  vn ocp 
e  et nlac
   r  tiro
a  -t retm
p  sh on p
p  ia ltou
l  dt  -ft
i  e  ts e
c   i hiwr
a  ns ede 
t  e   ebp
i  td b  r
o  wi rsbo
n  os ocrg
s  rp wror
.  kl siwa
    a epsm
    y rtem
    e ,sri
    d   sn
    .   ,g
          
         l
         a
         n
         g
         u
         a
         g
         e
         .
[/output]
[/test]
[test]
[input]
Rotate(540)
JavaScript (JS) is a dynamic computer programming language.
It is most commonly used as part of web browsers,
whose implementations allow client-side scripts
to interact with the user, control the browser,
communicate asynchronously,
and alter the document content that is displayed.
It is also being used in server-side network
programming (with Node.js),
game development and the
creation of desktop and mobile applications.
END
[/input]
[output]
.snoitacilppa elibom dna potksed fo noitaerc
                                   eht dna tnempoleved emag
                                ,)sj.edoN htiw( gnimmargorp
               krowten edis-revres ni desu gnieb osla si tI
          .deyalpsid si taht tnetnoc tnemucod eht retla dna
                                ,ylsuonorhcnysa etacinummoc
            ,resworb eht lortnoc ,resu eht htiw tcaretni ot
            stpircs edis-tneilc wolla snoitatnemelpmi esohw
          ,sresworb bew fo trap sa desu ylnommoc tsom si tI
.egaugnal gnimmargorp retupmoc cimanyd a si )SJ( tpircSavaJ
[/output]
[/test]
[test]
[input]
Rotate(720)
JavaScript (JS) is a dynamic computer programming language.
It is most commonly used as part of web browsers,
whose implementations allow client-side scripts
to interact with the user, control the browser,
communicate asynchronously,
and alter the document content that is displayed.
It is also being used in server-side network
programming (with Node.js),
game development and the
creation of desktop and mobile applications.
END
[/input]
[output]
JavaScript (JS) is a dynamic computer programming language.
It is most commonly used as part of web browsers,          
whose implementations allow client-side scripts            
to interact with the user, control the browser,            
communicate asynchronously,                                
and alter the document content that is displayed.          
It is also being used in server-side network               
programming (with Node.js),                                
game development and the                                   
creation of desktop and mobile applications.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Crossfire
[code-task title="Crossfire" taskId="java-advanced-multidimensional-arrays-Crossfire" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Veți primi **2 numere întregi** care reprezintă **dimensiunile** unei **matrice**.

Apoi, trebuie să **completați matricea** cu **numere întregi crescătoare**, începând de la 1 și continuând cu fiecare rând, în felul următor:

**Primul** rând: `1, 2, 3, ..., n`
Al **doilea** rând: `n + 1, n + 2, n + 3, ..., n + n`
Al **treilea** rând: `2 * n + 1, 2 * n + 2, ..., 2 * n + n`

Veți primi de asemenea câteva comenzi sub forma a **3 numere întregi** separate printr-un spațiu. 

Cele 3 numere întregi vor reprezenta un **rând** din matrice, o **coloană** și o **rază**. 

Apoi, trebuie să **distrugeți** celulele care corespund acelor argumente, **în model de cruce**.

**Distrugerea** unei celule înseamnă că **celula curentă** devine complet **inexistentă** în matrice.

Distrugerea celulelor **în model de cruce** înseamnă că formați **o cruce** cu un punct central - echivalent cu celula cu coordonatele date – **rândul dat** și **coloana**, și **liniile** de lungime egală cu **raza dată**. 

Observați exemplele de mai jos pentru mai multe informații.

**Datele de intrare se sfârșesc** când întâlniți comanda `Nuke it from orbit`.

Când se întâmplă asta, trebuie să imprimați ceea ce a rămas din matricea inițială.

## Intrare

- Pe prima linie veți primi dimensiunile matricei; apoi, trebuie să completați matricea cu elemente, conform dimensiunilor date
- Pe următoarele linii veți începe să primiți **3 numere întregi** separate de un singur **spațiu**, care reprezintă rândul, coloana și raza
  
Apoi, trebuie să distrugeți celulele conform coordonatelor respective.

- Când primiți comanda `Nuke it from orbit`, datele de intrare se sfârșesc

## Ieșire

- Trebuie să imprimați ce rămâne din matrice
- Fiecare rând trebuie să fie imprimat pe o linie nouă și fiecare coloană a unui rând trebuie separată prin spațiu

## Constrângeri

- Dimensiunile matricei vor fi numere întregi din intervalul `[2, 100]`
- Rândurile și coloanele date vor fi numere întregi valide, aflate în intervalul `[-2 ^ 31 + 1, 2 ^ 31 - 1]`
- Raza va fi un număr din intervalul `[0, 2 ^ 31 - 1]`


## Exemple
| **Intrare** | **Ieșire** |
| --- | --- | 
| 5 5 | 1 2 3 4 5 |
| 3 3 2 | 6 7 8 10 |
| 4 3 2 | 11 12 13 |
| Nuke it from orbit | 16 |
|  | 21 |

### Comentarii

[image assetsSrc="Java-Advanced-Multidimensional-Arrays-6.png" /]


| **Intrare** | **Ieșire** |
| --- | --- |
| 5 5 | 1 2 3 4 |
| 4 4 4 | 6 7 8 9 |
| Nuke it from orbit | 11 12 13 14 |
|  | 16 17 18 19 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5 5
3 3 2
4 3 2
Nuke it from orbit
[/input]
[output]
1 2 3 4 5
6 7 8 10
11 12 13
16
21
[/output]
[/test]
[test open]
[input]
5 5
4 4 4
Nuke it from orbit
[/input]
[output]
1 2 3 4
6 7 8 9
11 12 13 14
16 17 18 19
[/output]
[/test]
[test]
[input]
2 5
1 9 5
Nuke it from orbit
[/input]
[output]
1 2 3 4 5
6 7 8 9
[/output]
[/test]
[test]
[input]
50 50
195 149 416
-120 -84 103
-117 -55 392
-16 -91 350
-189 -101 308
-3 -129 194
-42 -60 471
-142 47 310
-164 -97 272
157 163 461
-109 -175 24
-30 92 294
77 140 369
-114 -183 217
-102 44 87
61 -52 223
11 184 208
133 -139 158
-60 136 127
-116 -156 16
64 -74 227
145 -108 105
60 41 259
-189 120 163
59 -129 154
2 160 3
-22 -25 443
-162 -55 473
1 -42 454
92 -171 445
-67 -8 370
82 21 363
191 -47 190
185 -200 384
171 0 79
-164 -127 487
-197 137 470
-102 106 336
-142 26 476
3 -57 417
-80 167 264
51 77 158
34 176 311
33 10 257
50 -8 217
-154 -133 431
114 -35 105
173 89 114
179 -166 358
-173 24 494
109 -12 12
18 64 41
-105 -80 403
136 1 121
-60 -30 158
-30 48 141
-105 -189 198
-165 88 471
49 -53 97
-80 71 303
40 7 190
53 123 27
Nuke it from orbit
[/input]
[output]
1 2 3 4 5 6 7 9 10 12 13 14 15 16 17 18 19 20 21 23 24 25 26 29 30 31 32 33 34 35 36 37 38 39 40 41 43 44 45 46 47 49 50
101 102 103 104 105 106 107 109 110 112 113 114 115 116 117 118 119 120 121 123 124 125 126 129 130 131 132 133 134 135 136 137 138 139 140 141 143 144 145 146 147 149 150
151 152 153 154 155 156 157 159 160 162 163 164 165 166 167 168 169 170 171 173 174 175 176 179 180 181 182 183 184 185 186 187 188 189 190 191 193 194 195 196 197 199 200
251 252 253 254 255 256 257 259 260 262 263 264 265 266 267 268 269 270 271 273 274 275 276 279 280 281 282 283 284 285 286 287 288 289 290 291 293 294 295 296 297 299 300
301 302 303 304 305 306 307 309 310 312 313 314 315 316 317 318 319 320 321 323 324 325 326 329 330 331 332 333 334 335 336 337 338 339 340 341 343 344 345 346 347 349 350
351 352 353 354 355 356 357 359 360 362 363 364 365 366 367 368 369 370 371 373 374 375 376 379 380 381 382 383 384 385 386 387 388 389 390 391 393 394 395 396 397 399 400
401 402 403 404 405 406 407 409 410 412 413 414 415 416 417 418 419 420 421 423 424 425 426 429 430 431 432 433 434 435 436 437 438 439 440 441 443 444 445 446 447 449 450
451 452 453 454 455 456 457 459 460 462 463 464 465 466 467 468 469 470 471 473 474 475 476 479 480 481 482 483 484 485 486 487 488 489 490 491 493 494 495 496 497 499 500
501 502 503 504 505 506 507 509 510 512 513 514 515 516 517 518 519 520 521 523 524 525 526 529 530 531 532 533 534 535 536 537 538 539 540 541 543 544 545 546 547 549 550
601 602 603 604 605 606 607 609 610 612 613 614 615 616 617 618 619 620 621 623 624 625 626 629 630 631 632 633 634 635 636 637 638 639 640 641 643 644 645 646 647 649 650
651 652 653 654 655 656 657 659 660 662 663 664 665 666 667 668 669 670 671 673 674 675 676 679 680 681 682 683 684 685 686 687 688 689 690 691 693 694 695 696 697 699 700
701 702 703 704 705 706 707 709 710 712 713 714 715 716 717 718 719 720 721 723 724 725 726 729 730 731 732 733 734 735 736 737 738 739 740 741 743 744 745 746 747 749 750
751 752 753 754 755 756 757 759 760 762 763 764 765 766 767 768 769 770 771 773 774 775 776 779 780 781 782 783 784 785 786 787 788 789 790 791 793 794 795 796 797 799 800
801 802 803 804 805 806 807 809 810 812 813 814 815 816 817 818 819 820 821 823 824 825 826 829 830 831 832 833 834 835 836 837 838 839 840 841 843 844 845 846 847 849 850
851 852 853 854 855 856 857 859 860 862 863 864 865 866 867 868 869 870 871 873 874 875 876 879 880 881 882 883 884 885 886 887 888 889 890 891 893 894 895 896 897 899 900
901 903 904 905 906 907 908 910 912 913 914 915 916 917 918 919 920 921 923 924 925 926 929 930 931 932 933 934 935 936 937 938 939 940 941 943 944 945 946 947 949 950
951 953 954 955 956 957 958 960 962 963 964 965 966 967 968 969 970 971 973 974 975 976 979 980 981 982 983 984 985 986 987 988 989 990 991 993 994 995 996 997 999 1000
1001 1003 1004 1005 1006 1007 1008 1010 1012 1013 1014 1015 1016 1017 1018 1019 1020 1021 1023 1024 1025 1026 1029 1030 1031 1032 1033 1034 1035 1036 1037 1038 1039 1040 1041 1043 1044 1045 1046 1047 1049 1050
1051 1053 1054 1055 1056 1057 1058 1060 1062 1063 1064 1065 1066 1067 1068 1069 1070 1071 1073 1074 1075
1101 1103 1104 1105 1106 1107 1108 1110 1112 1113 1114 1115 1116 1117 1118 1119 1120 1121 1123 1124 1125 1126 1129 1130 1131 1132 1133 1134 1135 1136 1137 1138 1139 1140 1141 1143 1144 1145 1146 1147 1149 1150
1151 1153 1154 1155 1156 1157 1158 1160 1162 1163 1164 1165 1166 1167 1168 1169 1170 1171 1173 1174 1175 1176 1179 1180 1181 1182 1183 1184 1185 1186 1187 1188 1189 1190 1191 1193 1194 1195 1196 1197 1199 1200
1201 1203 1204 1205 1206 1207 1208 1210 1212 1213 1214 1215 1216 1217 1218 1219 1220 1221 1223 1224 1225 1226 1229 1230 1231 1232 1233 1234 1235 1236 1237 1238 1239 1240 1241 1243 1244 1245 1246 1247 1249 1250
1251 1253 1254 1255 1256 1257 1258 1260 1262 1263 1264 1265 1266 1267 1268 1269 1270 1271 1273 1274 1275 1276 1279 1280 1281 1282 1283 1284 1285 1286 1287 1288 1289 1290 1291 1293 1294 1295 1296 1297 1299 1300
1301 1303 1304 1305 1306 1307 1308 1310 1312 1313 1314 1315 1316 1317 1318 1319 1320 1321 1323 1324 1325 1326 1329 1330 1331 1332 1333 1334 1335 1336 1337 1338 1339 1340 1341 1343 1344 1345 1346 1347 1349 1350
1351 1353 1354 1355 1356 1357 1358 1360 1362 1363 1364 1365 1366 1367 1368 1369 1370 1371 1373 1374 1375 1376 1379 1380 1381 1382 1383 1384 1385 1386 1387 1388 1389 1390 1391 1393 1394 1395 1396 1397 1399 1400
1401 1403 1404 1405 1406 1407 1408 1410 1412 1413 1414 1415 1416 1417 1418 1419 1420 1421 1423 1424 1425 1426 1429 1430 1431 1432 1433 1434 1435 1436 1437 1438 1439 1440 1441 1443 1444 1445 1446 1447 1449 1450
1451 1453 1454 1455 1456 1457 1458 1460 1462 1463 1464 1465 1466 1467 1468 1469 1470 1471 1473 1474 1475 1476 1479 1480 1481 1482 1483 1484 1485 1486 1487 1488 1489 1490 1491 1493 1494 1495 1496 1497 1499 1500
1501 1503 1504 1505 1506 1507 1508 1510 1512 1513 1514 1515 1516 1517 1518 1519 1520 1521 1523 1524 1525 1526 1529 1530 1531 1532 1533 1534 1535 1536 1537 1538 1539 1540 1541 1543 1544 1545 1546 1547 1549 1550
1551 1553 1554 1555 1556 1557 1558 1560 1562 1563 1564 1565 1566 1567 1568 1569 1570 1571 1573 1574 1575 1576 1579 1580 1581 1582 1583 1584 1585 1586 1587 1588 1589 1590 1591 1593 1594 1595 1596 1597 1599 1600
1601 1603 1604 1605 1606 1607 1608 1610 1612 1613 1614 1615 1616 1617 1618 1619 1620 1621 1623 1624 1625 1626 1629 1630 1631 1632 1633 1634 1635 1636 1637 1638 1639 1640 1641 1643 1644 1645 1646 1647 1649 1650
1651 1653 1654 1655 1656 1657 1658 1660 1662 1663 1664 1665 1666 1667 1668 1669 1670 1671 1673 1674 1675 1676 1679 1680 1681 1682 1683 1684 1685 1686 1687 1688 1689 1690 1691 1693 1694 1695 1696 1697 1699 1700
1701 1703 1704 1705 1706 1707 1708 1710 1712 1713 1714 1715 1716 1717 1718 1719 1720 1721 1723 1724 1725 1726 1729 1730 1731 1732 1733 1734 1735 1736 1737 1738 1739 1740 1741 1743 1744 1745 1746 1747 1749 1750
1751 1753 1754 1755 1756 1757 1758 1760 1762 1763 1764 1765 1766 1767 1768 1769 1770 1771 1773 1774 1775 1776 1779 1780 1781 1782 1783 1784 1785 1786 1787 1788 1789 1790 1791 1793 1794 1795 1796 1797 1799 1800
1901 1903 1904 1905 1906 1907 1908 1910 1912 1913 1914 1915 1916 1917 1918 1919 1920 1921 1923 1924 1925 1926 1929 1930 1931 1932 1933 1934 1935 1936 1937 1938 1939 1940 1941 1943 1944 1945 1946 1947 1949 1950
1951 1953 1954 1955 1956 1957 1958 1960 1962 1963 1964 1965 1966 1967 1968 1969 1970 1971 1973 1974 1975 1976 1979 1980 1981 1982 1983 1984 1985 1986 1987 1988 1989 1990 1991 1993 1994 1995 1996 1997 1999 2000
2001 2003 2004 2005 2006 2007 2008 2010 2012 2013 2014 2015 2016 2017 2018 2019 2020 2021 2023 2024 2025 2026 2029 2030 2031 2032 2033 2034 2035 2036 2037 2038 2039 2040 2041 2043 2044 2045 2046 2047 2049 2050
2051 2053 2054 2055 2056 2057 2058 2060 2062 2063 2064 2065 2066 2067 2068 2069 2070 2071 2073 2074 2075 2076 2079 2080 2081 2082 2083 2084 2085 2086 2087 2088 2089 2090 2091 2093 2094 2095 2096 2097 2099 2100
2101 2103 2104 2105 2106 2107 2108 2110 2112 2113 2114 2115 2116 2117 2118 2119 2120 2121 2123 2124 2125 2126 2129 2130 2131 2132 2133 2134 2135 2136 2137 2138 2139 2140 2141 2143 2144 2145 2146 2147 2149 2150
2151 2153 2154 2155 2156 2157 2158 2160 2162 2163 2164 2165 2166 2167 2168 2169 2170 2171 2173 2174 2175 2176 2179 2180 2181 2182 2183 2184 2185 2186 2187 2188 2189 2190 2191 2193 2194 2195 2196 2197 2199 2200
2201 2203 2204 2205 2206 2207 2208 2210 2212 2213 2214 2215 2216 2217 2218 2219 2220 2221 2223 2224 2225 2226 2229 2230 2231 2232 2233 2234 2235 2236 2237 2238 2239 2240 2241 2243 2244 2245 2246 2247 2249 2250
2301 2303 2304 2305 2306 2307 2308 2310 2312 2313 2314 2315 2316 2317 2318 2319 2320 2321 2323 2324 2325 2326 2329 2330 2331 2332 2333 2334 2335 2336 2337 2338 2339 2340 2341 2343 2344 2345 2346 2347 2349 2350
2351 2353 2354 2355 2356 2357 2358 2360 2362 2363 2364 2365 2366 2367 2368 2369 2370 2371 2373 2374 2375 2376 2379 2380 2381 2382 2383 2384 2385 2386 2387 2388 2389 2390 2391 2393 2394 2395 2396 2397 2399 2400
2401 2403 2404 2405 2406 2407 2408 2410 2412 2413 2414 2415 2416 2417 2418 2419 2420 2421 2423 2424 2425 2426 2429 2430 2431 2432 2433 2434 2435 2436 2437 2438 2439 2440 2441 2443 2444 2445 2446 2447 2449 2450
2451 2453 2454 2455 2456 2457 2458 2460 2462 2463 2464 2465 2466 2467 2468 2469 2470 2471 2473 2474 2475 2476 2479 2480 2481 2482 2483 2484 2485 2486 2487 2488 2489 2490 2491 2493 2494 2495 2496 2497 2499 2500
[/output]
[/test]
[test]
[input]
20 20
8 -2 12
-8 2 33
-7 -20 9
-14 -6 20
-16 -4 32
-3 -1 43
12 -1 9
15 -12 36
17 11 31
19 16 48
Nuke it from orbit
[/input]
[output]
1 2 4 5 6 7 8 9 10 11 12 14 15 16 17 18 20
21 22 24 25 26 27 28 29 30 31 32 34 35 36 37 38 40
41 42 44 45 46 47 48 49 50 51 52 54 55 56 57 58 60
61 62 64 65 66 67 68 69 70 71 72 74 75 76 77 78 80
81 82 84 85 86 87 88 89 90 91 92 94 95 96 97 98 100
101 102 104 105 106 107 108 109 110 111 112 114 115 116 117 118 120
121 122 124 125 126 127 128 129 130 131 132 134 135 136 137 138 140
141 142 144 145 146 147 148 149 150 151 152 154 155 156 157 158 160
172 173 175 176 177 178 179 180
181 182 184 185 186 187 188 189 190 191 192 194 195 196 197 198 200
201 202 204 205 206 207 208 209 210 211 212 214 215 216 217 218 220
221 222 224 225 226 227 228 229 230 231 232 234 235 236 237 238 240
251 252 253 254 255 256 257 258 259 260
261 262 264 265 266 267 268 269 270 271 272 274 275 276 277 278 280
281 282 284 285 286 287 288 289 290 291 292 294 295 296 297 298 300
321 322 324 325 326 327 328 329 330 331 332 334 335 336 337 338 340
341 342 344 345 346 347 348 349 350 351 352 354 355 356 357 358 360
381 382 384 385 386 387 388 389 390 391 392 394 395 396 397 398 400
[/output]
[/test]
[test]
[input]
5 5
-10 2 14
9 2 8
-2 -5 2
-6 4 5
7 -8 13
-8 -8 4
5 2 14
-9 4 13
-3 0 14
8 4 12
1 8 8
-6 3 13
Nuke it from orbit
[/input]
[output]
2 5
12
17
22
[/output]
[/test]
[test]
[input]
2 2
0 1 0
1 0 0
Nuke it from orbit
[/input]
[output]
1
4
[/output]
[/test]
[test]
[input]
5 5
-1 5 7
5 -1 7
Nuke it from orbit
[/input]
[output]
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25
[/output]
[/test]
[test]
[input]
2 2
0 0 0
0 1 0
Nuke it from orbit
[/input]
[output]
2
3 4
[/output]
[/test]
[test]
[input]
2 3
0 0 0
0 0 0
0 0 0
Nuke it from orbit
[/input]
[output]
4 5 6
[/output]
[/test]
[test]
[input]
5 5
0 -1 4
1 5 4
2 -1 4
3 5 4
4 -1 4
Nuke it from orbit
[/input]
[output]
5
6
15
16
25
[/output]
[/test]
[test]
[input]
100 100
927 199 303
228 411 578
77 467 414
697 -820 1205
211 -827 1575
583 -916 648
681 321 1971
-235 -381 377
535 215 234
122 -932 1097
147 279 466
-94 -981 1576
-62 148 1541
654 268 322
532 -121 1483
-325 -140 1306
405 -234 1771
775 -950 225
-206 161 773
944 193 261
-242 455 1864
487 -451 534
53 -695 205
998 -356 582
330 -974 71
736 -267 1654
170 -141 473
195 217 1070
494 -129 1639
-320 -888 477
102 -507 1939
459 -104 1751
-157 -956 439
211 121 739
325 -94 162
392 -555 31
-385 -443 569
339 -226 445
841 62 316
95 492 1570
Nuke it from orbit
[/input]
[output]
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100
101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200
201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 217 218 219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 255 256 257 258 259 260 261 262 263 264 265 266 267 268 269 270 271 272 273 274 275 276 277 278 279 280 281 282 283 284 285 286 287 288 289 290 291 292 293 294 295 296 297 298 299 300
301 302 303 304 305 306 307 308 309 310 311 312 313 314 315 316 317 318 319 320 321 322 323 324 325 326 327 328 329 330 331 332 333 334 335 336 337 338 339 340 341 342 343 344 345 346 347 348 349 350 351 352 353 354 355 356 357 358 359 360 361 362 363 364 365 366 367 368 369 370 371 372 373 374 375 376 377 378 379 380 381 382 383 384 385 386 387 388 389 390 391 392 393 394 395 396 397 398 399 400
401 402 403 404 405 406 407 408 409 410 411 412 413 414 415 416 417 418 419 420 421 422 423 424 425 426 427 428 429 430 431 432 433 434 435 436 437 438 439 440 441 442 443 444 445 446 447 448 449 450 451 452 453 454 455 456 457 458 459 460 461 462 463 464 465 466 467 468 469 470 471 472 473 474 475 476 477 478 479 480 481 482 483 484 485 486 487 488 489 490 491 492 493 494 495 496 497 498 499 500
501 502 503 504 505 506 507 508 509 510 511 512 513 514 515 516 517 518 519 520 521 522 523 524 525 526 527 528 529 530 531 532 533 534 535 536 537 538 539 540 541 542 543 544 545 546 547 548 549 550 551 552 553 554 555 556 557 558 559 560 561 562 563 564 565 566 567 568 569 570 571 572 573 574 575 576 577 578 579 580 581 582 583 584 585 586 587 588 589 590 591 592 593 594 595 596 597 598 599 600
601 602 603 604 605 606 607 608 609 610 611 612 613 614 615 616 617 618 619 620 621 622 623 624 625 626 627 628 629 630 631 632 633 634 635 636 637 638 639 640 641 642 643 644 645 646 647 648 649 650 651 652 653 654 655 656 657 658 659 660 661 662 663 664 665 666 667 668 669 670 671 672 673 674 675 676 677 678 679 680 681 682 683 684 685 686 687 688 689 690 691 692 693 694 695 696 697 698 699 700
701 702 703 704 705 706 707 708 709 710 711 712 713 714 715 716 717 718 719 720 721 722 723 724 725 726 727 728 729 730 731 732 733 734 735 736 737 738 739 740 741 742 743 744 745 746 747 748 749 750 751 752 753 754 755 756 757 758 759 760 761 762 763 764 765 766 767 768 769 770 771 772 773 774 775 776 777 778 779 780 781 782 783 784 785 786 787 788 789 790 791 792 793 794 795 796 797 798 799 800
801 802 803 804 805 806 807 808 809 810 811 812 813 814 815 816 817 818 819 820 821 822 823 824 825 826 827 828 829 830 831 832 833 834 835 836 837 838 839 840 841 842 843 844 845 846 847 848 849 850 851 852 853 854 855 856 857 858 859 860 861 862 863 864 865 866 867 868 869 870 871 872 873 874 875 876 877 878 879 880 881 882 883 884 885 886 887 888 889 890 891 892 893 894 895 896 897 898 899 900
901 902 903 904 905 906 907 908 909 910 911 912 913 914 915 916 917 918 919 920 921 922 923 924 925 926 927 928 929 930 931 932 933 934 935 936 937 938 939 940 941 942 943 944 945 946 947 948 949 950 951 952 953 954 955 956 957 958 959 960 961 962 963 964 965 966 967 968 969 970 971 972 973 974 975 976 977 978 979 980 981 982 983 984 985 986 987 988 989 990 991 992 993 994 995 996 997 998 999 1000
1001 1002 1003 1004 1005 1006 1007 1008 1009 1010 1011 1012 1013 1014 1015 1016 1017 1018 1019 1020 1021 1022 1023 1024 1025 1026 1027 1028 1029 1030 1031 1032 1033 1034 1035 1036 1037 1038 1039 1040 1041 1042 1043 1044 1045 1046 1047 1048 1049 1050 1051 1052 1053 1054 1055 1056 1057 1058 1059 1060 1061 1062 1063 1064 1065 1066 1067 1068 1069 1070 1071 1072 1073 1074 1075 1076 1077 1078 1079 1080 1081 1082 1083 1084 1085 1086 1087 1088 1089 1090 1091 1092 1093 1094 1095 1096 1097 1098 1099 1100
1101 1102 1103 1104 1105 1106 1107 1108 1109 1110 1111 1112 1113 1114 1115 1116 1117 1118 1119 1120 1121 1122 1123 1124 1125 1126 1127 1128 1129 1130 1131 1132 1133 1134 1135 1136 1137 1138 1139 1140 1141 1142 1143 1144 1145 1146 1147 1148 1149 1150 1151 1152 1153 1154 1155 1156 1157 1158 1159 1160 1161 1162 1163 1164 1165 1166 1167 1168 1169 1170 1171 1172 1173 1174 1175 1176 1177 1178 1179 1180 1181 1182 1183 1184 1185 1186 1187 1188 1189 1190 1191 1192 1193 1194 1195 1196 1197 1198 1199 1200
1201 1202 1203 1204 1205 1206 1207 1208 1209 1210 1211 1212 1213 1214 1215 1216 1217 1218 1219 1220 1221 1222 1223 1224 1225 1226 1227 1228 1229 1230 1231 1232 1233 1234 1235 1236 1237 1238 1239 1240 1241 1242 1243 1244 1245 1246 1247 1248 1249 1250 1251 1252 1253 1254 1255 1256 1257 1258 1259 1260 1261 1262 1263 1264 1265 1266 1267 1268 1269 1270 1271 1272 1273 1274 1275 1276 1277 1278 1279 1280 1281 1282 1283 1284 1285 1286 1287 1288 1289 1290 1291 1292 1293 1294 1295 1296 1297 1298 1299 1300
1301 1302 1303 1304 1305 1306 1307 1308 1309 1310 1311 1312 1313 1314 1315 1316 1317 1318 1319 1320 1321 1322 1323 1324 1325 1326 1327 1328 1329 1330 1331 1332 1333 1334 1335 1336 1337 1338 1339 1340 1341 1342 1343 1344 1345 1346 1347 1348 1349 1350 1351 1352 1353 1354 1355 1356 1357 1358 1359 1360 1361 1362 1363 1364 1365 1366 1367 1368 1369 1370 1371 1372 1373 1374 1375 1376 1377 1378 1379 1380 1381 1382 1383 1384 1385 1386 1387 1388 1389 1390 1391 1392 1393 1394 1395 1396 1397 1398 1399 1400
1401 1402 1403 1404 1405 1406 1407 1408 1409 1410 1411 1412 1413 1414 1415 1416 1417 1418 1419 1420 1421 1422 1423 1424 1425 1426 1427 1428 1429 1430 1431 1432 1433 1434 1435 1436 1437 1438 1439 1440 1441 1442 1443 1444 1445 1446 1447 1448 1449 1450 1451 1452 1453 1454 1455 1456 1457 1458 1459 1460 1461 1462 1463 1464 1465 1466 1467 1468 1469 1470 1471 1472 1473 1474 1475 1476 1477 1478 1479 1480 1481 1482 1483 1484 1485 1486 1487 1488 1489 1490 1491 1492 1493 1494 1495 1496 1497 1498 1499 1500
1501 1502 1503 1504 1505 1506 1507 1508 1509 1510 1511 1512 1513 1514 1515 1516 1517 1518 1519 1520 1521 1522 1523 1524 1525 1526 1527 1528 1529 1530 1531 1532 1533 1534 1535 1536 1537 1538 1539 1540 1541 1542 1543 1544 1545 1546 1547 1548 1549 1550 1551 1552 1553 1554 1555 1556 1557 1558 1559 1560 1561 1562 1563 1564 1565 1566 1567 1568 1569 1570 1571 1572 1573 1574 1575 1576 1577 1578 1579 1580 1581 1582 1583 1584 1585 1586 1587 1588 1589 1590 1591 1592 1593 1594 1595 1596 1597 1598 1599 1600
1601 1602 1603 1604 1605 1606 1607 1608 1609 1610 1611 1612 1613 1614 1615 1616 1617 1618 1619 1620 1621 1622 1623 1624 1625 1626 1627 1628 1629 1630 1631 1632 1633 1634 1635 1636 1637 1638 1639 1640 1641 1642 1643 1644 1645 1646 1647 1648 1649 1650 1651 1652 1653 1654 1655 1656 1657 1658 1659 1660 1661 1662 1663 1664 1665 1666 1667 1668 1669 1670 1671 1672 1673 1674 1675 1676 1677 1678 1679 1680 1681 1682 1683 1684 1685 1686 1687 1688 1689 1690 1691 1692 1693 1694 1695 1696 1697 1698 1699 1700
1701 1702 1703 1704 1705 1706 1707 1708 1709 1710 1711 1712 1713 1714 1715 1716 1717 1718 1719 1720 1721 1722 1723 1724 1725 1726 1727 1728 1729 1730 1731 1732 1733 1734 1735 1736 1737 1738 1739 1740 1741 1742 1743 1744 1745 1746 1747 1748 1749 1750 1751 1752 1753 1754 1755 1756 1757 1758 1759 1760 1761 1762 1763 1764 1765 1766 1767 1768 1769 1770 1771 1772 1773 1774 1775 1776 1777 1778 1779 1780 1781 1782 1783 1784 1785 1786 1787 1788 1789 1790 1791 1792 1793 1794 1795 1796 1797 1798 1799 1800
1801 1802 1803 1804 1805 1806 1807 1808 1809 1810 1811 1812 1813 1814 1815 1816 1817 1818 1819 1820 1821 1822 1823 1824 1825 1826 1827 1828 1829 1830 1831 1832 1833 1834 1835 1836 1837 1838 1839 1840 1841 1842 1843 1844 1845 1846 1847 1848 1849 1850 1851 1852 1853 1854 1855 1856 1857 1858 1859 1860 1861 1862 1863 1864 1865 1866 1867 1868 1869 1870 1871 1872 1873 1874 1875 1876 1877 1878 1879 1880 1881 1882 1883 1884 1885 1886 1887 1888 1889 1890 1891 1892 1893 1894 1895 1896 1897 1898 1899 1900
1901 1902 1903 1904 1905 1906 1907 1908 1909 1910 1911 1912 1913 1914 1915 1916 1917 1918 1919 1920 1921 1922 1923 1924 1925 1926 1927 1928 1929 1930 1931 1932 1933 1934 1935 1936 1937 1938 1939 1940 1941 1942 1943 1944 1945 1946 1947 1948 1949 1950 1951 1952 1953 1954 1955 1956 1957 1958 1959 1960 1961 1962 1963 1964 1965 1966 1967 1968 1969 1970 1971 1972 1973 1974 1975 1976 1977 1978 1979 1980 1981 1982 1983 1984 1985 1986 1987 1988 1989 1990 1991 1992 1993 1994 1995 1996 1997 1998 1999 2000
2001 2002 2003 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025 2026 2027 2028 2029 2030 2031 2032 2033 2034 2035 2036 2037 2038 2039 2040 2041 2042 2043 2044 2045 2046 2047 2048 2049 2050 2051 2052 2053 2054 2055 2056 2057 2058 2059 2060 2061 2062 2063 2064 2065 2066 2067 2068 2069 2070 2071 2072 2073 2074 2075 2076 2077 2078 2079 2080 2081 2082 2083 2084 2085 2086 2087 2088 2089 2090 2091 2092 2093 2094 2095 2096 2097 2098 2099 2100
2101 2102 2103 2104 2105 2106 2107 2108 2109 2110 2111 2112 2113 2114 2115 2116 2117 2118 2119 2120 2121 2122 2123 2124 2125 2126 2127 2128 2129 2130 2131 2132 2133 2134 2135 2136 2137 2138 2139 2140 2141 2142 2143 2144 2145 2146 2147 2148 2149 2150 2151 2152 2153 2154 2155 2156 2157 2158 2159 2160 2161 2162 2163 2164 2165 2166 2167 2168 2169 2170 2171 2172 2173 2174 2175 2176 2177 2178 2179 2180 2181 2182 2183 2184 2185 2186 2187 2188 2189 2190 2191 2192 2193 2194 2195 2196 2197 2198 2199 2200
2201 2202 2203 2204 2205 2206 2207 2208 2209 2210 2211 2212 2213 2214 2215 2216 2217 2218 2219 2220 2221 2222 2223 2224 2225 2226 2227 2228 2229 2230 2231 2232 2233 2234 2235 2236 2237 2238 2239 2240 2241 2242 2243 2244 2245 2246 2247 2248 2249 2250 2251 2252 2253 2254 2255 2256 2257 2258 2259 2260 2261 2262 2263 2264 2265 2266 2267 2268 2269 2270 2271 2272 2273 2274 2275 2276 2277 2278 2279 2280 2281 2282 2283 2284 2285 2286 2287 2288 2289 2290 2291 2292 2293 2294 2295 2296 2297 2298 2299 2300
2301 2302 2303 2304 2305 2306 2307 2308 2309 2310 2311 2312 2313 2314 2315 2316 2317 2318 2319 2320 2321 2322 2323 2324 2325 2326 2327 2328 2329 2330 2331 2332 2333 2334 2335 2336 2337 2338 2339 2340 2341 2342 2343 2344 2345 2346 2347 2348 2349 2350 2351 2352 2353 2354 2355 2356 2357 2358 2359 2360 2361 2362 2363 2364 2365 2366 2367 2368 2369 2370 2371 2372 2373 2374 2375 2376 2377 2378 2379 2380 2381 2382 2383 2384 2385 2386 2387 2388 2389 2390 2391 2392 2393 2394 2395 2396 2397 2398 2399 2400
2401 2402 2403 2404 2405 2406 2407 2408 2409 2410 2411 2412 2413 2414 2415 2416 2417 2418 2419 2420 2421 2422 2423 2424 2425 2426 2427 2428 2429 2430 2431 2432 2433 2434 2435 2436 2437 2438 2439 2440 2441 2442 2443 2444 2445 2446 2447 2448 2449 2450 2451 2452 2453 2454 2455 2456 2457 2458 2459 2460 2461 2462 2463 2464 2465 2466 2467 2468 2469 2470 2471 2472 2473 2474 2475 2476 2477 2478 2479 2480 2481 2482 2483 2484 2485 2486 2487 2488 2489 2490 2491 2492 2493 2494 2495 2496 2497 2498 2499 2500
2501 2502 2503 2504 2505 2506 2507 2508 2509 2510 2511 2512 2513 2514 2515 2516 2517 2518 2519 2520 2521 2522 2523 2524 2525 2526 2527 2528 2529 2530 2531 2532 2533 2534 2535 2536 2537 2538 2539 2540 2541 2542 2543 2544 2545 2546 2547 2548 2549 2550 2551 2552 2553 2554 2555 2556 2557 2558 2559 2560 2561 2562 2563 2564 2565 2566 2567 2568 2569 2570 2571 2572 2573 2574 2575 2576 2577 2578 2579 2580 2581 2582 2583 2584 2585 2586 2587 2588 2589 2590 2591 2592 2593 2594 2595 2596 2597 2598 2599 2600
2601 2602 2603 2604 2605 2606 2607 2608 2609 2610 2611 2612 2613 2614 2615 2616 2617 2618 2619 2620 2621 2622 2623 2624 2625 2626 2627 2628 2629 2630 2631 2632 2633 2634 2635 2636 2637 2638 2639 2640 2641 2642 2643 2644 2645 2646 2647 2648 2649 2650 2651 2652 2653 2654 2655 2656 2657 2658 2659 2660 2661 2662 2663 2664 2665 2666 2667 2668 2669 2670 2671 2672 2673 2674 2675 2676 2677 2678 2679 2680 2681 2682 2683 2684 2685 2686 2687 2688 2689 2690 2691 2692 2693 2694 2695 2696 2697 2698 2699 2700
2701 2702 2703 2704 2705 2706 2707 2708 2709 2710 2711 2712 2713 2714 2715 2716 2717 2718 2719 2720 2721 2722 2723 2724 2725 2726 2727 2728 2729 2730 2731 2732 2733 2734 2735 2736 2737 2738 2739 2740 2741 2742 2743 2744 2745 2746 2747 2748 2749 2750 2751 2752 2753 2754 2755 2756 2757 2758 2759 2760 2761 2762 2763 2764 2765 2766 2767 2768 2769 2770 2771 2772 2773 2774 2775 2776 2777 2778 2779 2780 2781 2782 2783 2784 2785 2786 2787 2788 2789 2790 2791 2792 2793 2794 2795 2796 2797 2798 2799 2800
2801 2802 2803 2804 2805 2806 2807 2808 2809 2810 2811 2812 2813 2814 2815 2816 2817 2818 2819 2820 2821 2822 2823 2824 2825 2826 2827 2828 2829 2830 2831 2832 2833 2834 2835 2836 2837 2838 2839 2840 2841 2842 2843 2844 2845 2846 2847 2848 2849 2850 2851 2852 2853 2854 2855 2856 2857 2858 2859 2860 2861 2862 2863 2864 2865 2866 2867 2868 2869 2870 2871 2872 2873 2874 2875 2876 2877 2878 2879 2880 2881 2882 2883 2884 2885 2886 2887 2888 2889 2890 2891 2892 2893 2894 2895 2896 2897 2898 2899 2900
2901 2902 2903 2904 2905 2906 2907 2908 2909 2910 2911 2912 2913 2914 2915 2916 2917 2918 2919 2920 2921 2922 2923 2924 2925 2926 2927 2928 2929 2930 2931 2932 2933 2934 2935 2936 2937 2938 2939 2940 2941 2942 2943 2944 2945 2946 2947 2948 2949 2950 2951 2952 2953 2954 2955 2956 2957 2958 2959 2960 2961 2962 2963 2964 2965 2966 2967 2968 2969 2970 2971 2972 2973 2974 2975 2976 2977 2978 2979 2980 2981 2982 2983 2984 2985 2986 2987 2988 2989 2990 2991 2992 2993 2994 2995 2996 2997 2998 2999 3000
3001 3002 3003 3004 3005 3006 3007 3008 3009 3010 3011 3012 3013 3014 3015 3016 3017 3018 3019 3020 3021 3022 3023 3024 3025 3026 3027 3028 3029 3030 3031 3032 3033 3034 3035 3036 3037 3038 3039 3040 3041 3042 3043 3044 3045 3046 3047 3048 3049 3050 3051 3052 3053 3054 3055 3056 3057 3058 3059 3060 3061 3062 3063 3064 3065 3066 3067 3068 3069 3070 3071 3072 3073 3074 3075 3076 3077 3078 3079 3080 3081 3082 3083 3084 3085 3086 3087 3088 3089 3090 3091 3092 3093 3094 3095 3096 3097 3098 3099 3100
3101 3102 3103 3104 3105 3106 3107 3108 3109 3110 3111 3112 3113 3114 3115 3116 3117 3118 3119 3120 3121 3122 3123 3124 3125 3126 3127 3128 3129 3130 3131 3132 3133 3134 3135 3136 3137 3138 3139 3140 3141 3142 3143 3144 3145 3146 3147 3148 3149 3150 3151 3152 3153 3154 3155 3156 3157 3158 3159 3160 3161 3162 3163 3164 3165 3166 3167 3168 3169 3170 3171 3172 3173 3174 3175 3176 3177 3178 3179 3180 3181 3182 3183 3184 3185 3186 3187 3188 3189 3190 3191 3192 3193 3194 3195 3196 3197 3198 3199 3200
3201 3202 3203 3204 3205 3206 3207 3208 3209 3210 3211 3212 3213 3214 3215 3216 3217 3218 3219 3220 3221 3222 3223 3224 3225 3226 3227 3228 3229 3230 3231 3232 3233 3234 3235 3236 3237 3238 3239 3240 3241 3242 3243 3244 3245 3246 3247 3248 3249 3250 3251 3252 3253 3254 3255 3256 3257 3258 3259 3260 3261 3262 3263 3264 3265 3266 3267 3268 3269 3270 3271 3272 3273 3274 3275 3276 3277 3278 3279 3280 3281 3282 3283 3284 3285 3286 3287 3288 3289 3290 3291 3292 3293 3294 3295 3296 3297 3298 3299 3300
3301 3302 3303 3304 3305 3306 3307 3308 3309 3310 3311 3312 3313 3314 3315 3316 3317 3318 3319 3320 3321 3322 3323 3324 3325 3326 3327 3328 3329 3330 3331 3332 3333 3334 3335 3336 3337 3338 3339 3340 3341 3342 3343 3344 3345 3346 3347 3348 3349 3350 3351 3352 3353 3354 3355 3356 3357 3358 3359 3360 3361 3362 3363 3364 3365 3366 3367 3368 3369 3370 3371 3372 3373 3374 3375 3376 3377 3378 3379 3380 3381 3382 3383 3384 3385 3386 3387 3388 3389 3390 3391 3392 3393 3394 3395 3396 3397 3398 3399 3400
3401 3402 3403 3404 3405 3406 3407 3408 3409 3410 3411 3412 3413 3414 3415 3416 3417 3418 3419 3420 3421 3422 3423 3424 3425 3426 3427 3428 3429 3430 3431 3432 3433 3434 3435 3436 3437 3438 3439 3440 3441 3442 3443 3444 3445 3446 3447 3448 3449 3450 3451 3452 3453 3454 3455 3456 3457 3458 3459 3460 3461 3462 3463 3464 3465 3466 3467 3468 3469 3470 3471 3472 3473 3474 3475 3476 3477 3478 3479 3480 3481 3482 3483 3484 3485 3486 3487 3488 3489 3490 3491 3492 3493 3494 3495 3496 3497 3498 3499 3500
3501 3502 3503 3504 3505 3506 3507 3508 3509 3510 3511 3512 3513 3514 3515 3516 3517 3518 3519 3520 3521 3522 3523 3524 3525 3526 3527 3528 3529 3530 3531 3532 3533 3534 3535 3536 3537 3538 3539 3540 3541 3542 3543 3544 3545 3546 3547 3548 3549 3550 3551 3552 3553 3554 3555 3556 3557 3558 3559 3560 3561 3562 3563 3564 3565 3566 3567 3568 3569 3570 3571 3572 3573 3574 3575 3576 3577 3578 3579 3580 3581 3582 3583 3584 3585 3586 3587 3588 3589 3590 3591 3592 3593 3594 3595 3596 3597 3598 3599 3600
3601 3602 3603 3604 3605 3606 3607 3608 3609 3610 3611 3612 3613 3614 3615 3616 3617 3618 3619 3620 3621 3622 3623 3624 3625 3626 3627 3628 3629 3630 3631 3632 3633 3634 3635 3636 3637 3638 3639 3640 3641 3642 3643 3644 3645 3646 3647 3648 3649 3650 3651 3652 3653 3654 3655 3656 3657 3658 3659 3660 3661 3662 3663 3664 3665 3666 3667 3668 3669 3670 3671 3672 3673 3674 3675 3676 3677 3678 3679 3680 3681 3682 3683 3684 3685 3686 3687 3688 3689 3690 3691 3692 3693 3694 3695 3696 3697 3698 3699 3700
3701 3702 3703 3704 3705 3706 3707 3708 3709 3710 3711 3712 3713 3714 3715 3716 3717 3718 3719 3720 3721 3722 3723 3724 3725 3726 3727 3728 3729 3730 3731 3732 3733 3734 3735 3736 3737 3738 3739 3740 3741 3742 3743 3744 3745 3746 3747 3748 3749 3750 3751 3752 3753 3754 3755 3756 3757 3758 3759 3760 3761 3762 3763 3764 3765 3766 3767 3768 3769 3770 3771 3772 3773 3774 3775 3776 3777 3778 3779 3780 3781 3782 3783 3784 3785 3786 3787 3788 3789 3790 3791 3792 3793 3794 3795 3796 3797 3798 3799 3800
3801 3802 3803 3804 3805 3806 3807 3808 3809 3810 3811 3812 3813 3814 3815 3816 3817 3818 3819 3820 3821 3822 3823 3824 3825 3826 3827 3828 3829 3830 3831 3832 3833 3834 3835 3836 3837 3838 3839 3840 3841 3842 3843 3844 3845 3846 3847 3848 3849 3850 3851 3852 3853 3854 3855 3856 3857 3858 3859 3860 3861 3862 3863 3864 3865 3866 3867 3868 3869 3870 3871 3872 3873 3874 3875 3876 3877 3878 3879 3880 3881 3882 3883 3884 3885 3886 3887 3888 3889 3890 3891 3892 3893 3894 3895 3896 3897 3898 3899 3900
3901 3902 3903 3904 3905 3906 3907 3908 3909 3910 3911 3912 3913 3914 3915 3916 3917 3918 3919 3920 3921 3922 3923 3924 3925 3926 3927 3928 3929 3930 3931 3932 3933 3934 3935 3936 3937 3938 3939 3940 3941 3942 3943 3944 3945 3946 3947 3948 3949 3950 3951 3952 3953 3954 3955 3956 3957 3958 3959 3960 3961 3962 3963 3964 3965 3966 3967 3968 3969 3970 3971 3972 3973 3974 3975 3976 3977 3978 3979 3980 3981 3982 3983 3984 3985 3986 3987 3988 3989 3990 3991 3992 3993 3994 3995 3996 3997 3998 3999 4000
4001 4002 4003 4004 4005 4006 4007 4008 4009 4010 4011 4012 4013 4014 4015 4016 4017 4018 4019 4020 4021 4022 4023 4024 4025 4026 4027 4028 4029 4030 4031 4032 4033 4034 4035 4036 4037 4038 4039 4040 4041 4042 4043 4044 4045 4046 4047 4048 4049 4050 4051 4052 4053 4054 4055 4056 4057 4058 4059 4060 4061 4062 4063 4064 4065 4066 4067 4068 4069 4070 4071 4072 4073 4074 4075 4076 4077 4078 4079 4080 4081 4082 4083 4084 4085 4086 4087 4088 4089 4090 4091 4092 4093 4094 4095 4096 4097 4098 4099 4100
4101 4102 4103 4104 4105 4106 4107 4108 4109 4110 4111 4112 4113 4114 4115 4116 4117 4118 4119 4120 4121 4122 4123 4124 4125 4126 4127 4128 4129 4130 4131 4132 4133 4134 4135 4136 4137 4138 4139 4140 4141 4142 4143 4144 4145 4146 4147 4148 4149 4150 4151 4152 4153 4154 4155 4156 4157 4158 4159 4160 4161 4162 4163 4164 4165 4166 4167 4168 4169 4170 4171 4172 4173 4174 4175 4176 4177 4178 4179 4180 4181 4182 4183 4184 4185 4186 4187 4188 4189 4190 4191 4192 4193 4194 4195 4196 4197 4198 4199 4200
4201 4202 4203 4204 4205 4206 4207 4208 4209 4210 4211 4212 4213 4214 4215 4216 4217 4218 4219 4220 4221 4222 4223 4224 4225 4226 4227 4228 4229 4230 4231 4232 4233 4234 4235 4236 4237 4238 4239 4240 4241 4242 4243 4244 4245 4246 4247 4248 4249 4250 4251 4252 4253 4254 4255 4256 4257 4258 4259 4260 4261 4262 4263 4264 4265 4266 4267 4268 4269 4270 4271 4272 4273 4274 4275 4276 4277 4278 4279 4280 4281 4282 4283 4284 4285 4286 4287 4288 4289 4290 4291 4292 4293 4294 4295 4296 4297 4298 4299 4300
4301 4302 4303 4304 4305 4306 4307 4308 4309 4310 4311 4312 4313 4314 4315 4316 4317 4318 4319 4320 4321 4322 4323 4324 4325 4326 4327 4328 4329 4330 4331 4332 4333 4334 4335 4336 4337 4338 4339 4340 4341 4342 4343 4344 4345 4346 4347 4348 4349 4350 4351 4352 4353 4354 4355 4356 4357 4358 4359 4360 4361 4362 4363 4364 4365 4366 4367 4368 4369 4370 4371 4372 4373 4374 4375 4376 4377 4378 4379 4380 4381 4382 4383 4384 4385 4386 4387 4388 4389 4390 4391 4392 4393 4394 4395 4396 4397 4398 4399 4400
4401 4402 4403 4404 4405 4406 4407 4408 4409 4410 4411 4412 4413 4414 4415 4416 4417 4418 4419 4420 4421 4422 4423 4424 4425 4426 4427 4428 4429 4430 4431 4432 4433 4434 4435 4436 4437 4438 4439 4440 4441 4442 4443 4444 4445 4446 4447 4448 4449 4450 4451 4452 4453 4454 4455 4456 4457 4458 4459 4460 4461 4462 4463 4464 4465 4466 4467 4468 4469 4470 4471 4472 4473 4474 4475 4476 4477 4478 4479 4480 4481 4482 4483 4484 4485 4486 4487 4488 4489 4490 4491 4492 4493 4494 4495 4496 4497 4498 4499 4500
4501 4502 4503 4504 4505 4506 4507 4508 4509 4510 4511 4512 4513 4514 4515 4516 4517 4518 4519 4520 4521 4522 4523 4524 4525 4526 4527 4528 4529 4530 4531 4532 4533 4534 4535 4536 4537 4538 4539 4540 4541 4542 4543 4544 4545 4546 4547 4548 4549 4550 4551 4552 4553 4554 4555 4556 4557 4558 4559 4560 4561 4562 4563 4564 4565 4566 4567 4568 4569 4570 4571 4572 4573 4574 4575 4576 4577 4578 4579 4580 4581 4582 4583 4584 4585 4586 4587 4588 4589 4590 4591 4592 4593 4594 4595 4596 4597 4598 4599 4600
4601 4602 4603 4604 4605 4606 4607 4608 4609 4610 4611 4612 4613 4614 4615 4616 4617 4618 4619 4620 4621 4622 4623 4624 4625 4626 4627 4628 4629 4630 4631 4632 4633 4634 4635 4636 4637 4638 4639 4640 4641 4642 4643 4644 4645 4646 4647 4648 4649 4650 4651 4652 4653 4654 4655 4656 4657 4658 4659 4660 4661 4662 4663 4664 4665 4666 4667 4668 4669 4670 4671 4672 4673 4674 4675 4676 4677 4678 4679 4680 4681 4682 4683 4684 4685 4686 4687 4688 4689 4690 4691 4692 4693 4694 4695 4696 4697 4698 4699 4700
4701 4702 4703 4704 4705 4706 4707 4708 4709 4710 4711 4712 4713 4714 4715 4716 4717 4718 4719 4720 4721 4722 4723 4724 4725 4726 4727 4728 4729 4730 4731 4732 4733 4734 4735 4736 4737 4738 4739 4740 4741 4742 4743 4744 4745 4746 4747 4748 4749 4750 4751 4752 4753 4754 4755 4756 4757 4758 4759 4760 4761 4762 4763 4764 4765 4766 4767 4768 4769 4770 4771 4772 4773 4774 4775 4776 4777 4778 4779 4780 4781 4782 4783 4784 4785 4786 4787 4788 4789 4790 4791 4792 4793 4794 4795 4796 4797 4798 4799 4800
4801 4802 4803 4804 4805 4806 4807 4808 4809 4810 4811 4812 4813 4814 4815 4816 4817 4818 4819 4820 4821 4822 4823 4824 4825 4826 4827 4828 4829 4830 4831 4832 4833 4834 4835 4836 4837 4838 4839 4840 4841 4842 4843 4844 4845 4846 4847 4848 4849 4850 4851 4852 4853 4854 4855 4856 4857 4858 4859 4860 4861 4862 4863 4864 4865 4866 4867 4868 4869 4870 4871 4872 4873 4874 4875 4876 4877 4878 4879 4880 4881 4882 4883 4884 4885 4886 4887 4888 4889 4890 4891 4892 4893 4894 4895 4896 4897 4898 4899 4900
4901 4902 4903 4904 4905 4906 4907 4908 4909 4910 4911 4912 4913 4914 4915 4916 4917 4918 4919 4920 4921 4922 4923 4924 4925 4926 4927 4928 4929 4930 4931 4932 4933 4934 4935 4936 4937 4938 4939 4940 4941 4942 4943 4944 4945 4946 4947 4948 4949 4950 4951 4952 4953 4954 4955 4956 4957 4958 4959 4960 4961 4962 4963 4964 4965 4966 4967 4968 4969 4970 4971 4972 4973 4974 4975 4976 4977 4978 4979 4980 4981 4982 4983 4984 4985 4986 4987 4988 4989 4990 4991 4992 4993 4994 4995 4996 4997 4998 4999 5000
5001 5002 5003 5004 5005 5006 5007 5008 5009 5010 5011 5012 5013 5014 5015 5016 5017 5018 5019 5020 5021 5022 5023 5024 5025 5026 5027 5028 5029 5030 5031 5032 5033 5034 5035 5036 5037 5038 5039 5040 5041 5042 5043 5044 5045 5046 5047 5048 5049 5050 5051 5052 5053 5054 5055 5056 5057 5058 5059 5060 5061 5062 5063 5064 5065 5066 5067 5068 5069 5070 5071 5072 5073 5074 5075 5076 5077 5078 5079 5080 5081 5082 5083 5084 5085 5086 5087 5088 5089 5090 5091 5092 5093 5094 5095 5096 5097 5098 5099 5100
5101 5102 5103 5104 5105 5106 5107 5108 5109 5110 5111 5112 5113 5114 5115 5116 5117 5118 5119 5120 5121 5122 5123 5124 5125 5126 5127 5128 5129 5130 5131 5132 5133 5134 5135 5136 5137 5138 5139 5140 5141 5142 5143 5144 5145 5146 5147 5148 5149 5150 5151 5152 5153 5154 5155 5156 5157 5158 5159 5160 5161 5162 5163 5164 5165 5166 5167 5168 5169 5170 5171 5172 5173 5174 5175 5176 5177 5178 5179 5180 5181 5182 5183 5184 5185 5186 5187 5188 5189 5190 5191 5192 5193 5194 5195 5196 5197 5198 5199 5200
5201 5202 5203 5204 5205 5206 5207 5208 5209 5210 5211 5212 5213 5214 5215 5216 5217 5218 5219 5220 5221 5222 5223 5224 5225 5226 5227 5228 5229 5230 5231 5232 5233 5234 5235 5236 5237 5238 5239 5240 5241 5242 5243 5244 5245 5246 5247 5248 5249 5250 5251 5252 5253 5254 5255 5256 5257 5258 5259 5260 5261 5262 5263 5264 5265 5266 5267 5268 5269 5270 5271 5272 5273 5274 5275 5276 5277 5278 5279 5280 5281 5282 5283 5284 5285 5286 5287 5288 5289 5290 5291 5292 5293 5294 5295 5296 5297 5298 5299 5300
5301 5302 5303 5304 5305 5306 5307 5308 5309 5310 5311 5312 5313 5314 5315 5316 5317 5318 5319 5320 5321 5322 5323 5324 5325 5326 5327 5328 5329 5330 5331 5332 5333 5334 5335 5336 5337 5338 5339 5340 5341 5342 5343 5344 5345 5346 5347 5348 5349 5350 5351 5352 5353 5354 5355 5356 5357 5358 5359 5360 5361 5362 5363 5364 5365 5366 5367 5368 5369 5370 5371 5372 5373 5374 5375 5376 5377 5378 5379 5380 5381 5382 5383 5384 5385 5386 5387 5388 5389 5390 5391 5392 5393 5394 5395 5396 5397 5398 5399 5400
5401 5402 5403 5404 5405 5406 5407 5408 5409 5410 5411 5412 5413 5414 5415 5416 5417 5418 5419 5420 5421 5422 5423 5424 5425 5426 5427 5428 5429 5430 5431 5432 5433 5434 5435 5436 5437 5438 5439 5440 5441 5442 5443 5444 5445 5446 5447 5448 5449 5450 5451 5452 5453 5454 5455 5456 5457 5458 5459 5460 5461 5462 5463 5464 5465 5466 5467 5468 5469 5470 5471 5472 5473 5474 5475 5476 5477 5478 5479 5480 5481 5482 5483 5484 5485 5486 5487 5488 5489 5490 5491 5492 5493 5494 5495 5496 5497 5498 5499 5500
5501 5502 5503 5504 5505 5506 5507 5508 5509 5510 5511 5512 5513 5514 5515 5516 5517 5518 5519 5520 5521 5522 5523 5524 5525 5526 5527 5528 5529 5530 5531 5532 5533 5534 5535 5536 5537 5538 5539 5540 5541 5542 5543 5544 5545 5546 5547 5548 5549 5550 5551 5552 5553 5554 5555 5556 5557 5558 5559 5560 5561 5562 5563 5564 5565 5566 5567 5568 5569 5570 5571 5572 5573 5574 5575 5576 5577 5578 5579 5580 5581 5582 5583 5584 5585 5586 5587 5588 5589 5590 5591 5592 5593 5594 5595 5596 5597 5598 5599 5600
5601 5602 5603 5604 5605 5606 5607 5608 5609 5610 5611 5612 5613 5614 5615 5616 5617 5618 5619 5620 5621 5622 5623 5624 5625 5626 5627 5628 5629 5630 5631 5632 5633 5634 5635 5636 5637 5638 5639 5640 5641 5642 5643 5644 5645 5646 5647 5648 5649 5650 5651 5652 5653 5654 5655 5656 5657 5658 5659 5660 5661 5662 5663 5664 5665 5666 5667 5668 5669 5670 5671 5672 5673 5674 5675 5676 5677 5678 5679 5680 5681 5682 5683 5684 5685 5686 5687 5688 5689 5690 5691 5692 5693 5694 5695 5696 5697 5698 5699 5700
5701 5702 5703 5704 5705 5706 5707 5708 5709 5710 5711 5712 5713 5714 5715 5716 5717 5718 5719 5720 5721 5722 5723 5724 5725 5726 5727 5728 5729 5730 5731 5732 5733 5734 5735 5736 5737 5738 5739 5740 5741 5742 5743 5744 5745 5746 5747 5748 5749 5750 5751 5752 5753 5754 5755 5756 5757 5758 5759 5760 5761 5762 5763 5764 5765 5766 5767 5768 5769 5770 5771 5772 5773 5774 5775 5776 5777 5778 5779 5780 5781 5782 5783 5784 5785 5786 5787 5788 5789 5790 5791 5792 5793 5794 5795 5796 5797 5798 5799 5800
5801 5802 5803 5804 5805 5806 5807 5808 5809 5810 5811 5812 5813 5814 5815 5816 5817 5818 5819 5820 5821 5822 5823 5824 5825 5826 5827 5828 5829 5830 5831 5832 5833 5834 5835 5836 5837 5838 5839 5840 5841 5842 5843 5844 5845 5846 5847 5848 5849 5850 5851 5852 5853 5854 5855 5856 5857 5858 5859 5860 5861 5862 5863 5864 5865 5866 5867 5868 5869 5870 5871 5872 5873 5874 5875 5876 5877 5878 5879 5880 5881 5882 5883 5884 5885 5886 5887 5888 5889 5890 5891 5892 5893 5894 5895 5896 5897 5898 5899 5900
5901 5902 5903 5904 5905 5906 5907 5908 5909 5910 5911 5912 5913 5914 5915 5916 5917 5918 5919 5920 5921 5922 5923 5924 5925 5926 5927 5928 5929 5930 5931 5932 5933 5934 5935 5936 5937 5938 5939 5940 5941 5942 5943 5944 5945 5946 5947 5948 5949 5950 5951 5952 5953 5954 5955 5956 5957 5958 5959 5960 5961 5962 5963 5964 5965 5966 5967 5968 5969 5970 5971 5972 5973 5974 5975 5976 5977 5978 5979 5980 5981 5982 5983 5984 5985 5986 5987 5988 5989 5990 5991 5992 5993 5994 5995 5996 5997 5998 5999 6000
6001 6002 6003 6004 6005 6006 6007 6008 6009 6010 6011 6012 6013 6014 6015 6016 6017 6018 6019 6020 6021 6022 6023 6024 6025 6026 6027 6028 6029 6030 6031 6032 6033 6034 6035 6036 6037 6038 6039 6040 6041 6042 6043 6044 6045 6046 6047 6048 6049 6050 6051 6052 6053 6054 6055 6056 6057 6058 6059 6060 6061 6062 6063 6064 6065 6066 6067 6068 6069 6070 6071 6072 6073 6074 6075 6076 6077 6078 6079 6080 6081 6082 6083 6084 6085 6086 6087 6088 6089 6090 6091 6092 6093 6094 6095 6096 6097 6098 6099 6100
6101 6102 6103 6104 6105 6106 6107 6108 6109 6110 6111 6112 6113 6114 6115 6116 6117 6118 6119 6120 6121 6122 6123 6124 6125 6126 6127 6128 6129 6130 6131 6132 6133 6134 6135 6136 6137 6138 6139 6140 6141 6142 6143 6144 6145 6146 6147 6148 6149 6150 6151 6152 6153 6154 6155 6156 6157 6158 6159 6160 6161 6162 6163 6164 6165 6166 6167 6168 6169 6170 6171 6172 6173 6174 6175 6176 6177 6178 6179 6180 6181 6182 6183 6184 6185 6186 6187 6188 6189 6190 6191 6192 6193 6194 6195 6196 6197 6198 6199 6200
6201 6202 6203 6204 6205 6206 6207 6208 6209 6210 6211 6212 6213 6214 6215 6216 6217 6218 6219 6220 6221 6222 6223 6224 6225 6226 6227 6228 6229 6230 6231 6232 6233 6234 6235 6236 6237 6238 6239 6240 6241 6242 6243 6244 6245 6246 6247 6248 6249 6250 6251 6252 6253 6254 6255 6256 6257 6258 6259 6260 6261 6262 6263 6264 6265 6266 6267 6268 6269 6270 6271 6272 6273 6274 6275 6276 6277 6278 6279 6280 6281 6282 6283 6284 6285 6286 6287 6288 6289 6290 6291 6292 6293 6294 6295 6296 6297 6298 6299 6300
6301 6302 6303 6304 6305 6306 6307 6308 6309 6310 6311 6312 6313 6314 6315 6316 6317 6318 6319 6320 6321 6322 6323 6324 6325 6326 6327 6328 6329 6330 6331 6332 6333 6334 6335 6336 6337 6338 6339 6340 6341 6342 6343 6344 6345 6346 6347 6348 6349 6350 6351 6352 6353 6354 6355 6356 6357 6358 6359 6360 6361 6362 6363 6364 6365 6366 6367 6368 6369 6370 6371 6372 6373 6374 6375 6376 6377 6378 6379 6380 6381 6382 6383 6384 6385 6386 6387 6388 6389 6390 6391 6392 6393 6394 6395 6396 6397 6398 6399 6400
6401 6402 6403 6404 6405 6406 6407 6408 6409 6410 6411 6412 6413 6414 6415 6416 6417 6418 6419 6420 6421 6422 6423 6424 6425 6426 6427 6428 6429 6430 6431 6432 6433 6434 6435 6436 6437 6438 6439 6440 6441 6442 6443 6444 6445 6446 6447 6448 6449 6450 6451 6452 6453 6454 6455 6456 6457 6458 6459 6460 6461 6462 6463 6464 6465 6466 6467 6468 6469 6470 6471 6472 6473 6474 6475 6476 6477 6478 6479 6480 6481 6482 6483 6484 6485 6486 6487 6488 6489 6490 6491 6492 6493 6494 6495 6496 6497 6498 6499 6500
6501 6502 6503 6504 6505 6506 6507 6508 6509 6510 6511 6512 6513 6514 6515 6516 6517 6518 6519 6520 6521 6522 6523 6524 6525 6526 6527 6528 6529 6530 6531 6532 6533 6534 6535 6536 6537 6538 6539 6540 6541 6542 6543 6544 6545 6546 6547 6548 6549 6550 6551 6552 6553 6554 6555 6556 6557 6558 6559 6560 6561 6562 6563 6564 6565 6566 6567 6568 6569 6570 6571 6572 6573 6574 6575 6576 6577 6578 6579 6580 6581 6582 6583 6584 6585 6586 6587 6588 6589 6590 6591 6592 6593 6594 6595 6596 6597 6598 6599 6600
6601 6602 6603 6604 6605 6606 6607 6608 6609 6610 6611 6612 6613 6614 6615 6616 6617 6618 6619 6620 6621 6622 6623 6624 6625 6626 6627 6628 6629 6630 6631 6632 6633 6634 6635 6636 6637 6638 6639 6640 6641 6642 6643 6644 6645 6646 6647 6648 6649 6650 6651 6652 6653 6654 6655 6656 6657 6658 6659 6660 6661 6662 6663 6664 6665 6666 6667 6668 6669 6670 6671 6672 6673 6674 6675 6676 6677 6678 6679 6680 6681 6682 6683 6684 6685 6686 6687 6688 6689 6690 6691 6692 6693 6694 6695 6696 6697 6698 6699 6700
6701 6702 6703 6704 6705 6706 6707 6708 6709 6710 6711 6712 6713 6714 6715 6716 6717 6718 6719 6720 6721 6722 6723 6724 6725 6726 6727 6728 6729 6730 6731 6732 6733 6734 6735 6736 6737 6738 6739 6740 6741 6742 6743 6744 6745 6746 6747 6748 6749 6750 6751 6752 6753 6754 6755 6756 6757 6758 6759 6760 6761 6762 6763 6764 6765 6766 6767 6768 6769 6770 6771 6772 6773 6774 6775 6776 6777 6778 6779 6780 6781 6782 6783 6784 6785 6786 6787 6788 6789 6790 6791 6792 6793 6794 6795 6796 6797 6798 6799 6800
6801 6802 6803 6804 6805 6806 6807 6808 6809 6810 6811 6812 6813 6814 6815 6816 6817 6818 6819 6820 6821 6822 6823 6824 6825 6826 6827 6828 6829 6830 6831 6832 6833 6834 6835 6836 6837 6838 6839 6840 6841 6842 6843 6844 6845 6846 6847 6848 6849 6850 6851 6852 6853 6854 6855 6856 6857 6858 6859 6860 6861 6862 6863 6864 6865 6866 6867 6868 6869 6870 6871 6872 6873 6874 6875 6876 6877 6878 6879 6880 6881 6882 6883 6884 6885 6886 6887 6888 6889 6890 6891 6892 6893 6894 6895 6896 6897 6898 6899 6900
6901 6902 6903 6904 6905 6906 6907 6908 6909 6910 6911 6912 6913 6914 6915 6916 6917 6918 6919 6920 6921 6922 6923 6924 6925 6926 6927 6928 6929 6930 6931 6932 6933 6934 6935 6936 6937 6938 6939 6940 6941 6942 6943 6944 6945 6946 6947 6948 6949 6950 6951 6952 6953 6954 6955 6956 6957 6958 6959 6960 6961 6962 6963 6964 6965 6966 6967 6968 6969 6970 6971 6972 6973 6974 6975 6976 6977 6978 6979 6980 6981 6982 6983 6984 6985 6986 6987 6988 6989 6990 6991 6992 6993 6994 6995 6996 6997 6998 6999 7000
7001 7002 7003 7004 7005 7006 7007 7008 7009 7010 7011 7012 7013 7014 7015 7016 7017 7018 7019 7020 7021 7022 7023 7024 7025 7026 7027 7028 7029 7030 7031 7032 7033 7034 7035 7036 7037 7038 7039 7040 7041 7042 7043 7044 7045 7046 7047 7048 7049 7050 7051 7052 7053 7054 7055 7056 7057 7058 7059 7060 7061 7062 7063 7064 7065 7066 7067 7068 7069 7070 7071 7072 7073 7074 7075 7076 7077 7078 7079 7080 7081 7082 7083 7084 7085 7086 7087 7088 7089 7090 7091 7092 7093 7094 7095 7096 7097 7098 7099 7100
7101 7102 7103 7104 7105 7106 7107 7108 7109 7110 7111 7112 7113 7114 7115 7116 7117 7118 7119 7120 7121 7122 7123 7124 7125 7126 7127 7128 7129 7130 7131 7132 7133 7134 7135 7136 7137 7138 7139 7140 7141 7142 7143 7144 7145 7146 7147 7148 7149 7150 7151 7152 7153 7154 7155 7156 7157 7158 7159 7160 7161 7162 7163 7164 7165 7166 7167 7168 7169 7170 7171 7172 7173 7174 7175 7176 7177 7178 7179 7180 7181 7182 7183 7184 7185 7186 7187 7188 7189 7190 7191 7192 7193 7194 7195 7196 7197 7198 7199 7200
7201 7202 7203 7204 7205 7206 7207 7208 7209 7210 7211 7212 7213 7214 7215 7216 7217 7218 7219 7220 7221 7222 7223 7224 7225 7226 7227 7228 7229 7230 7231 7232 7233 7234 7235 7236 7237 7238 7239 7240 7241 7242 7243 7244 7245 7246 7247 7248 7249 7250 7251 7252 7253 7254 7255 7256 7257 7258 7259 7260 7261 7262 7263 7264 7265 7266 7267 7268 7269 7270 7271 7272 7273 7274 7275 7276 7277 7278 7279 7280 7281 7282 7283 7284 7285 7286 7287 7288 7289 7290 7291 7292 7293 7294 7295 7296 7297 7298 7299 7300
7301 7302 7303 7304 7305 7306 7307 7308 7309 7310 7311 7312 7313 7314 7315 7316 7317 7318 7319 7320 7321 7322 7323 7324 7325 7326 7327 7328 7329 7330 7331 7332 7333 7334 7335 7336 7337 7338 7339 7340 7341 7342 7343 7344 7345 7346 7347 7348 7349 7350 7351 7352 7353 7354 7355 7356 7357 7358 7359 7360 7361 7362 7363 7364 7365 7366 7367 7368 7369 7370 7371 7372 7373 7374 7375 7376 7377 7378 7379 7380 7381 7382 7383 7384 7385 7386 7387 7388 7389 7390 7391 7392 7393 7394 7395 7396 7397 7398 7399 7400
7401 7402 7403 7404 7405 7406 7407 7408 7409 7410 7411 7412 7413 7414 7415 7416 7417 7418 7419 7420 7421 7422 7423 7424 7425 7426 7427 7428 7429 7430 7431 7432 7433 7434 7435 7436 7437 7438 7439 7440 7441 7442 7443 7444 7445 7446 7447 7448 7449 7450 7451 7452 7453 7454 7455 7456 7457 7458 7459 7460 7461 7462 7463 7464 7465 7466 7467 7468 7469 7470 7471 7472 7473 7474 7475 7476 7477 7478 7479 7480 7481 7482 7483 7484 7485 7486 7487 7488 7489 7490 7491 7492 7493 7494 7495 7496 7497 7498 7499 7500
7501 7502 7503 7504 7505 7506 7507 7508 7509 7510 7511 7512 7513 7514 7515 7516 7517 7518 7519 7520 7521 7522 7523 7524 7525 7526 7527 7528 7529 7530 7531 7532 7533 7534 7535 7536 7537 7538 7539 7540 7541 7542 7543 7544 7545 7546 7547 7548 7549 7550 7551 7552 7553 7554 7555 7556 7557 7558 7559 7560 7561 7562 7563 7564 7565 7566 7567 7568 7569 7570 7571 7572 7573 7574 7575 7576 7577 7578 7579 7580 7581 7582 7583 7584 7585 7586 7587 7588 7589 7590 7591 7592 7593 7594 7595 7596 7597 7598 7599 7600
7601 7602 7603 7604 7605 7606 7607 7608 7609 7610 7611 7612 7613 7614 7615 7616 7617 7618 7619 7620 7621 7622 7623 7624 7625 7626 7627 7628 7629 7630 7631 7632 7633 7634 7635 7636 7637 7638 7639 7640 7641 7642 7643 7644 7645 7646 7647 7648 7649 7650 7651 7652 7653 7654 7655 7656 7657 7658 7659 7660 7661 7662 7663 7664 7665 7666 7667 7668 7669 7670 7671 7672 7673 7674 7675 7676 7677 7678 7679 7680 7681 7682 7683 7684 7685 7686 7687 7688 7689 7690 7691 7692 7693 7694 7695 7696 7697 7698 7699 7700
7701 7702 7703 7704 7705 7706 7707 7708 7709 7710 7711 7712 7713 7714 7715 7716 7717 7718 7719 7720 7721 7722 7723 7724 7725 7726 7727 7728 7729 7730 7731 7732 7733 7734 7735 7736 7737 7738 7739 7740 7741 7742 7743 7744 7745 7746 7747 7748 7749 7750 7751 7752 7753
7801 7802 7803 7804 7805 7806 7807 7808 7809 7810 7811 7812 7813 7814 7815 7816 7817 7818 7819 7820 7821 7822 7823 7824 7825 7826 7827 7828 7829 7830 7831 7832 7833 7834 7835 7836 7837 7838 7839 7840 7841 7842 7843 7844 7845 7846 7847 7848 7849 7850 7851 7852 7853 7854 7855 7856 7857 7858 7859 7860 7861 7862 7863 7864 7865 7866 7867 7868 7869 7870 7871 7872 7873 7874 7875 7876 7877 7878 7879 7880 7881 7882 7883 7884 7885 7886 7887 7888 7889 7890 7891 7892 7893 7894 7895 7896 7897 7898 7899 7900
7901 7902 7903 7904 7905 7906 7907 7908 7909 7910 7911 7912 7913 7914 7915 7916 7917 7918 7919 7920 7921 7922 7923 7924 7925 7926 7927 7928 7929 7930 7931 7932 7933 7934 7935 7936 7937 7938 7939 7940 7941 7942 7943 7944 7945 7946 7947 7948 7949 7950 7951 7952 7953 7954 7955 7956 7957 7958 7959 7960 7961 7962 7963 7964 7965 7966 7967 7968 7969 7970 7971 7972 7973 7974 7975 7976 7977 7978 7979 7980 7981 7982 7983 7984 7985 7986 7987 7988 7989 7990 7991 7992 7993 7994 7995 7996 7997 7998 7999 8000
8001 8002 8003 8004 8005 8006 8007 8008 8009 8010 8011 8012 8013 8014 8015 8016 8017 8018 8019 8020 8021 8022 8023 8024 8025 8026 8027 8028 8029 8030 8031 8032 8033 8034 8035 8036 8037 8038 8039 8040 8041 8042 8043 8044 8045 8046 8047 8048 8049 8050 8051 8052 8053 8054 8055 8056 8057 8058 8059 8060 8061 8062 8063 8064 8065 8066 8067 8068 8069 8070 8071 8072 8073 8074 8075 8076 8077 8078 8079 8080 8081 8082 8083 8084 8085 8086 8087 8088 8089 8090 8091 8092 8093 8094 8095 8096 8097 8098 8099 8100
8101 8102 8103 8104 8105 8106 8107 8108 8109 8110 8111 8112 8113 8114 8115 8116 8117 8118 8119 8120 8121 8122 8123 8124 8125 8126 8127 8128 8129 8130 8131 8132 8133 8134 8135 8136 8137 8138 8139 8140 8141 8142 8143 8144 8145 8146 8147 8148 8149 8150 8151 8152 8153 8154 8155 8156 8157 8158 8159 8160 8161 8162 8163 8164 8165 8166 8167 8168 8169 8170 8171 8172 8173 8174 8175 8176 8177 8178 8179 8180 8181 8182 8183 8184 8185 8186 8187 8188 8189 8190 8191 8192 8193 8194 8195 8196 8197 8198 8199 8200
8201 8202 8203 8204 8205 8206 8207 8208 8209 8210 8211 8212 8213 8214 8215 8216 8217 8218 8219 8220 8221 8222 8223 8224 8225 8226 8227 8228 8229 8230 8231 8232 8233 8234 8235 8236 8237 8238 8239 8240 8241 8242 8243 8244 8245 8246 8247 8248 8249 8250 8251 8252 8253 8254 8255 8256 8257 8258 8259 8260 8261 8262 8263 8264 8265 8266 8267 8268 8269 8270 8271 8272 8273 8274 8275 8276 8277 8278 8279 8280 8281 8282 8283 8284 8285 8286 8287 8288 8289 8290 8291 8292 8293 8294 8295 8296 8297 8298 8299 8300
8301 8302 8303 8304 8305 8306 8307 8308 8309 8310 8311 8312 8313 8314 8315 8316 8317 8318 8319 8320 8321 8322 8323 8324 8325 8326 8327 8328 8329 8330 8331 8332 8333 8334 8335 8336 8337 8338 8339 8340 8341 8342 8343 8344 8345 8346 8347 8348 8349 8350 8351 8352 8353 8354 8355 8356 8357 8358 8359 8360 8361 8362 8363 8364 8365 8366 8367 8368 8369 8370 8371 8372 8373 8374 8375 8376 8377 8378 8379 8380 8381 8382 8383 8384 8385 8386 8387 8388 8389 8390 8391 8392 8393 8394 8395 8396 8397 8398 8399 8400
8401 8402 8403 8404 8405 8406 8407 8408 8409 8410 8411 8412 8413 8414 8415 8416 8417 8418 8419 8420 8421 8422 8423 8424 8425 8426 8427 8428 8429 8430 8431 8432 8433 8434 8435 8436 8437 8438 8439 8440 8441 8442 8443 8444 8445 8446 8447 8448 8449 8450 8451 8452 8453 8454 8455 8456 8457 8458 8459 8460 8461 8462 8463 8464 8465 8466 8467 8468 8469 8470 8471 8472 8473 8474 8475 8476 8477 8478 8479 8480 8481 8482 8483 8484 8485 8486 8487 8488 8489 8490 8491 8492 8493 8494 8495 8496 8497 8498 8499 8500
8501 8502 8503 8504 8505 8506 8507 8508 8509 8510 8511 8512 8513 8514 8515 8516 8517 8518 8519 8520 8521 8522 8523 8524 8525 8526 8527 8528 8529 8530 8531 8532 8533 8534 8535 8536 8537 8538 8539 8540 8541 8542 8543 8544 8545 8546 8547 8548 8549 8550 8551 8552 8553 8554 8555 8556 8557 8558 8559 8560 8561 8562 8563 8564 8565 8566 8567 8568 8569 8570 8571 8572 8573 8574 8575 8576 8577 8578 8579 8580 8581 8582 8583 8584 8585 8586 8587 8588 8589 8590 8591 8592 8593 8594 8595 8596 8597 8598 8599 8600
8601 8602 8603 8604 8605 8606 8607 8608 8609 8610 8611 8612 8613 8614 8615 8616 8617 8618 8619 8620 8621 8622 8623 8624 8625 8626 8627 8628 8629 8630 8631 8632 8633 8634 8635 8636 8637 8638 8639 8640 8641 8642 8643 8644 8645 8646 8647 8648 8649 8650 8651 8652 8653 8654 8655 8656 8657 8658 8659 8660 8661 8662 8663 8664 8665 8666 8667 8668 8669 8670 8671 8672 8673 8674 8675 8676 8677 8678 8679 8680 8681 8682 8683 8684 8685 8686 8687 8688 8689 8690 8691 8692 8693 8694 8695 8696 8697 8698 8699 8700
8701 8702 8703 8704 8705 8706 8707 8708 8709 8710 8711 8712 8713 8714 8715 8716 8717 8718 8719 8720 8721 8722 8723 8724 8725 8726 8727 8728 8729 8730 8731 8732 8733 8734 8735 8736 8737 8738 8739 8740 8741 8742 8743 8744 8745 8746 8747 8748 8749 8750 8751 8752 8753 8754 8755 8756 8757 8758 8759 8760 8761 8762 8763 8764 8765 8766 8767 8768 8769 8770 8771 8772 8773 8774 8775 8776 8777 8778 8779 8780 8781 8782 8783 8784 8785 8786 8787 8788 8789 8790 8791 8792 8793 8794 8795 8796 8797 8798 8799 8800
8801 8802 8803 8804 8805 8806 8807 8808 8809 8810 8811 8812 8813 8814 8815 8816 8817 8818 8819 8820 8821 8822 8823 8824 8825 8826 8827 8828 8829 8830 8831 8832 8833 8834 8835 8836 8837 8838 8839 8840 8841 8842 8843 8844 8845 8846 8847 8848 8849 8850 8851 8852 8853 8854 8855 8856 8857 8858 8859 8860 8861 8862 8863 8864 8865 8866 8867 8868 8869 8870 8871 8872 8873 8874 8875 8876 8877 8878 8879 8880 8881 8882 8883 8884 8885 8886 8887 8888 8889 8890 8891 8892 8893 8894 8895 8896 8897 8898 8899 8900
8901 8902 8903 8904 8905 8906 8907 8908 8909 8910 8911 8912 8913 8914 8915 8916 8917 8918 8919 8920 8921 8922 8923 8924 8925 8926 8927 8928 8929 8930 8931 8932 8933 8934 8935 8936 8937 8938 8939 8940 8941 8942 8943 8944 8945 8946 8947 8948 8949 8950 8951 8952 8953 8954 8955 8956 8957 8958 8959 8960 8961 8962 8963 8964 8965 8966 8967 8968 8969 8970 8971 8972 8973 8974 8975 8976 8977 8978 8979 8980 8981 8982 8983 8984 8985 8986 8987 8988 8989 8990 8991 8992 8993 8994 8995 8996 8997 8998 8999 9000
9001 9002 9003 9004 9005 9006 9007 9008 9009 9010 9011 9012 9013 9014 9015 9016 9017 9018 9019 9020 9021 9022 9023 9024 9025 9026 9027 9028 9029 9030 9031 9032 9033 9034 9035 9036 9037 9038 9039 9040 9041 9042 9043 9044 9045 9046 9047 9048 9049 9050 9051 9052 9053 9054 9055 9056 9057 9058 9059 9060 9061 9062 9063 9064 9065 9066 9067 9068 9069 9070 9071 9072 9073 9074 9075 9076 9077 9078 9079 9080 9081 9082 9083 9084 9085 9086 9087 9088 9089 9090 9091 9092 9093 9094 9095 9096 9097 9098 9099 9100
9101 9102 9103 9104 9105 9106 9107 9108 9109 9110 9111 9112 9113 9114 9115 9116 9117 9118 9119 9120 9121 9122 9123 9124 9125 9126 9127 9128 9129 9130 9131 9132 9133 9134 9135 9136 9137 9138 9139 9140 9141 9142 9143 9144 9145 9146 9147 9148 9149 9150 9151 9152 9153 9154 9155 9156 9157 9158 9159 9160 9161 9162 9163 9164 9165 9166 9167 9168 9169 9170 9171 9172 9173 9174 9175 9176 9177 9178 9179 9180 9181 9182 9183 9184 9185 9186 9187 9188 9189 9190 9191 9192 9193 9194 9195 9196 9197 9198 9199 9200
9201 9202 9203 9204 9205 9206 9207 9208 9209 9210 9211 9212 9213 9214 9215 9216 9217 9218 9219 9220 9221 9222 9223 9224 9225 9226 9227 9228 9229 9230 9231 9232 9233 9234 9235 9236 9237 9238 9239 9240 9241 9242 9243 9244 9245 9246 9247 9248 9249 9250 9251 9252 9253 9254 9255 9256 9257 9258 9259 9260 9261 9262 9263 9264 9265 9266 9267 9268 9269 9270 9271 9272 9273 9274 9275 9276 9277 9278 9279 9280 9281 9282 9283 9284 9285 9286 9287 9288 9289 9290 9291 9292 9293 9294 9295 9296 9297 9298 9299 9300
9301 9302 9303 9304 9305 9306 9307 9308 9309 9310 9311 9312 9313 9314 9315 9316 9317 9318 9319 9320 9321 9322 9323 9324 9325 9326 9327 9328 9329 9330 9331 9332 9333 9334 9335 9336 9337 9338 9339 9340 9341 9342 9343 9344 9345 9346 9347 9348 9349 9350 9351 9352 9353 9354 9355 9356 9357 9358 9359 9360 9361 9362 9363 9364 9365 9366 9367 9368 9369 9370 9371 9372 9373 9374 9375 9376 9377 9378 9379 9380 9381 9382 9383 9384 9385 9386 9387 9388 9389 9390 9391 9392 9393 9394 9395 9396 9397 9398 9399 9400
9401 9402 9403 9404 9405 9406 9407 9408 9409 9410 9411 9412 9413 9414 9415 9416 9417 9418 9419 9420 9421 9422 9423 9424 9425 9426 9427 9428 9429 9430 9431 9432 9433 9434 9435 9436 9437 9438 9439 9440 9441 9442 9443 9444 9445 9446 9447 9448 9449 9450 9451 9452 9453 9454 9455 9456 9457 9458 9459 9460 9461 9462 9463 9464 9465 9466 9467 9468 9469 9470 9471 9472 9473 9474 9475 9476 9477 9478 9479 9480 9481 9482 9483 9484 9485 9486 9487 9488 9489 9490 9491 9492 9493 9494 9495 9496 9497 9498 9499 9500
9601 9602 9603 9604 9605 9606 9607 9608 9609 9610 9611 9612 9613 9614 9615 9616 9617 9618 9619 9620 9621 9622 9623 9624 9625 9626 9627 9628 9629 9630 9631 9632 9633 9634 9635 9636 9637 9638 9639 9640 9641 9642 9643 9644 9645 9646 9647 9648 9649 9650 9651 9652 9653 9654 9655 9656 9657 9658 9659 9660 9661 9662 9663 9664 9665 9666 9667 9668 9669 9670 9671 9672 9673 9674 9675 9676 9677 9678 9679 9680 9681 9682 9683 9684 9685 9686 9687 9688 9689 9690 9691 9692 9693 9694 9695 9696 9697 9698 9699 9700
9701 9702 9703 9704 9705 9706 9707 9708 9709 9710 9711 9712 9713 9714 9715 9716 9717 9718 9719 9720 9721 9722 9723 9724 9725 9726 9727 9728 9729 9730 9731 9732 9733 9734 9735 9736 9737 9738 9739 9740 9741 9742 9743 9744 9745 9746 9747 9748 9749 9750 9751 9752 9753 9754 9755 9756 9757 9758 9759 9760 9761 9762 9763 9764 9765 9766 9767 9768 9769 9770 9771 9772 9773 9774 9775 9776 9777 9778 9779 9780 9781 9782 9783 9784 9785 9786 9787 9788 9789 9790 9791 9792 9793 9794 9795 9796 9797 9798 9799 9800
9801 9802 9803 9804 9805 9806 9807 9808 9809 9810 9811 9812 9813 9814 9815 9816 9817 9818 9819 9820 9821 9822 9823 9824 9825 9826 9827 9828 9829 9830 9831 9832 9833 9834 9835 9836 9837 9838 9839 9840 9841 9842 9843 9844 9845 9846 9847 9848 9849 9850 9851 9852 9853 9854 9855 9856 9857 9858 9859 9860 9861 9862 9863 9864 9865 9866 9867 9868 9869 9870 9871 9872 9873 9874 9875 9876 9877 9878 9879 9880 9881 9882 9883 9884 9885 9886 9887 9888 9889 9890 9891 9892 9893 9894 9895 9896 9897 9898 9899 9900
9901 9902 9903 9904 9905 9906 9907 9908 9909 9910 9911 9912 9913 9914 9915 9916 9917 9918 9919 9920 9921 9922 9923 9924 9925 9926 9927 9928 9929 9930 9931 9932 9933 9934 9935 9936 9937 9938 9939 9940 9941 9942 9943 9944 9945 9946 9947 9948 9949 9950 9951 9952 9953 9954 9955 9956 9957 9958 9959 9960 9961 9962 9963 9964 9965 9966 9967 9968 9969 9970 9971 9972 9973 9974 9975 9976 9977 9978 9979 9980 9981 9982 9983 9984 9985 9986 9987 9988 9989 9990 9991 9992 9993 9994 9995 9996 9997 9998 9999 10000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Parking System
[code-task title="Parking System" taskId="java-advanced-multidimensional-arrays-Parking-System" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru un sistem de parcare automat.

Parcarea este reprezentată de o **matrice dreptunghiulară** în care **prima** coloană este **întotdeauna** goală, iar toate celelalte celule reprezintă locuri de parcare. 

O mașină poate intra din **orice celulă** a **primei coloane**, iar apoi decide să meargă spre un anumit loc de parcare. 

Dacă acel loc **nu** este gol, mașina caută **cel mai apropiat** loc gol de parcare aflat pe **același** rând. 

Dacă **toate** celulele de pe acel rând sunt deja ocupate, mașina nu poate parca și trebuie să plece. 

Dacă **două** celule goale se găsesc la **aceeași** distanță față de locul de parcare **inițial**, va fi aleasă celula care se află **mai aproape** de intrare. 

O mașină poate **traversa** un loc de parcare ocupat.

Sarcina voastră este să calculați distanța parcursă de fiecare mașină până la găsirea unui loc de parcare.

Exemplu: O mașină intră în parcare la rândul 1. Aceasta intenționează să meargă la celula 2, 2, deci traversează **exact patru** celule pentru a ajunge la locul său de parcare.

[image assetsSrc="Java-Advanced-Multidimensional-Arrays-7.png" /]

## Intrare

- Pe prima linie cu date de intrare vi se dau numerele întregi **R** și **C**, numere ce definesc dimensiunile parcării
- Pe următoarele linii vi se dau numerele întregi **Z, X, Y**, unde **Z** este rândul de intrare, iar **X, Y** sunt coordonatele locului de parcare dorit
- Datele de intrare sunt introduse până la comanda `stop` 

Toate numerele întregi sunt separate printr-un **singur** spațiu.

## Ieșire

- Pentru fiecare mașină, tipăriți distanța parcursă până la locul de parcare dorit sau până la primul loc liber valabil
- Dacă o mașină nu poate parca nicăieri, tipăriți mesajul `Row {row number} full`

## Constrângeri

- `2 <= R,C <= 10000`
- Z, X, Y se află în interiorul dimensiunilor matricei; Y nu poate fi niciodată pe prima coloană
- Nu există mai mult de 1000 de linii cu date de intrare

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 4 4 | 4 |
| 1 2 2 | 2 |
| 2 2 2 | 4 |
| 2 2 2 | Row 2 full |
| 3 2 2 |  |
| stop |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4 4
1 2 2
2 2 2
2 2 2
3 2 2
stop
[/input]
[output]
4
2
4
Row 2 full
[/output]
[/test]
[test]
[input]
2 2
0 0 1
0 1 1
0 0 1
0 1 1
0 0 1
0 1 1
0 0 1
0 1 1
stop
[/input]
[output]
2
3
Row 0 full
Row 1 full
Row 0 full
Row 1 full
Row 0 full
Row 1 full
[/output]
[/test]
[test]
[input]
2 10
0 0 1
0 0 1
0 0 1
0 0 1
0 0 1
0 0 1
0 0 1
0 0 1
0 0 1
0 0 1
stop
[/input]
[output]
2
3
4
5
6
7
8
9
10
Row 0 full
[/output]
[/test]
[test]
[input]
2 10
0 0 5
0 0 5
0 0 4
0 0 3
0 0 2
0 0 1
0 0 1
0 0 1
0 0 1
0 0 1
stop
[/input]
[output]
6
5
4
3
2
7
8
9
10
Row 0 full
[/output]
[/test]
[test]
[input]
10 10
5 7 6
4 2 2
0 9 9
1 8 8
5 4 2
9 0 9
8 0 1
7 9 9
6 6 6
3 3 7
2 8 8
2 8 7
2 8 6
stop
[/input]
[output]
9
5
19
16
4
19
10
11
7
8
14
13
12
[/output]
[/test]
[test]
[input]
10000 10000
6788 1283 9898
1983 1231 9898
1287 127 1273
768 188 8182
1298 1249 1290
2989 1290 1230
1093 3123 1233
1209 2309 13
9888 1238 1212
8888 11 11
0 9999 9999
6787 1283 9898
1983 1221 9898
1287 127 1278
768 188 8182
1298 1409 1299
2988 1293 1290
1092 3123 1233
1209 2309 213
9898 1238 1232
8888 11 11
0 9999 9999
6788 1283 9888
1983 1231 9898
1287 127 1278
768 188 8182
1298 1240 1290
2989 1930 1930
1023 3123 1233
1209 2309 23
9988 1238 1231
8888 11 11
0 9999 9999
6787 1287 9988
1983 1231 9898
1287 127 1278
768 188 8182
1298 1249 1290
2898 1290 1290
1023 3123 1233
1209 2309 124
9898 1238 1231
8888 11 11
0 9999 9999
stop
[/input]
[output]
15404
10651
2434
8763
1340
2930
3264
1114
9863
8889
19999
15402
10661
2439
8762
1411
2986
3264
1314
9893
8888
19998
15394
10650
2438
8764
1349
2990
3335
1124
9982
8890
19997
15489
10652
2440
8761
1339
2899
3332
1225
9891
8887
19996
[/output]
[/test]
[test]
[input]
11 11
0 0 1
1 1 1
2 2 2
3 3 3
4 4 4
5 5 5
6 6 6
7 7 7
8 8 8
9 9 9
10 10 10
stop
[/input]
[output]
2
2
3
4
5
6
7
8
9
10
11
[/output]
[/test]
[test]
[input]
10 2
0 0 1
0 0 1
0 1 1
0 1 1
0 2 1
0 2 1
0 3 1
0 3 1
0 4 1
0 4 1
0 5 1
0 5 1
0 6 1
0 6 1
0 7 1
0 7 1
0 8 1
0 8 1
0 9 1
0 9 1
stop
[/input]
[output]
2
Row 0 full
3
Row 1 full
4
Row 2 full
5
Row 3 full
6
Row 4 full
7
Row 5 full
8
Row 6 full
9
Row 7 full
10
Row 8 full
11
Row 9 full
[/output]
[/test]
[test]
[input]
5 5
4 0 4
4 0 3
4 0 2
4 0 1
3 1 4
3 1 3
3 1 2
3 1 1
2 2 4
2 2 3
2 2 2
2 2 1
1 3 4
1 3 3
1 3 2
1 3 1
0 4 4
0 4 3
0 4 2
0 4 1
stop
[/input]
[output]
9
8
7
6
7
6
5
4
5
4
3
2
7
6
5
4
9
8
7
6
[/output]
[/test]
[test]
[input]
10000 10000
0 9999 9999
9999 0 9999
stop
[/input]
[output]
19999
19999
[/output]
[/test]
[test]
[input]
50 50
16 12 12
42 42 24
42 42 42
42 42 42
42 42 43
42 42 42
42 42 42
42 24 24
42 42 24
42 42 42
42 42 42
42 42 43
42 42 42
42 42 42
42 42 24
42 42 42
42 42 42
42 42 43
42 42 42
42 42 42
42 42 24
42 42 42
42 42 42
42 42 43
42 42 42
42 42 42
stop
[/input]
[output]
17
25
43
42
44
41
45
43
24
40
46
47
39
38
26
48
37
49
36
50
23
35
34
33
32
31
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Radioactive Mutant Vampire Bunnies
[code-task title="Radioactive Mutant Vampire Bunnies" taskId="java-advanced-multidimensional-arrays-Radioactive-Mutant-Vampire-Bunnies" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Mai întâi, veți primi o linie care conține numerele întregi **N** și **M**, care reprezintă rândurile și coloanele din vizuină. 

Apoi, vi se dau **N** șiruri care pot consta **doar** în caracterele `.`, `B` și `P`.

**Iepurii** sunt marcați cu litera `B`, **jucătorul** este marcat cu litera `P`, iar **orice altceva** este spațiu gol, marcat cu un punct `.`. 

Aceste marcaje reprezintă starea inițială a vizuinei. 

Apoi, veți primi un șir cu **comenzi**, precum `LLRRUUDD` – unde fiecare literă reprezintă următoarea **mișcare** a jucătorului (Stânga - Left, Dreapta - Right, Sus - Up, Jos - Down).

**După** fiecare pas al jucătorului, fiecare iepure merge în sus, jos, la stânga și apoi la dreapta (celulele învecinate marcate cu "." **își schimbă** valoarea în `B`). 

Dacă jucătorul **se mută** pe o celulă care conține un iepure sau dacă un iepure **ajunge** la jucător, jucătorul moare. 

Dacă jucătorul **iese** din vizuină **fără** a întâlni un iepure, acesta câștigă.

Când jucătorul **moare** sau **câștigă**, jocul se sfârșește. 

Toate activitățile **acestei** rundei finale continuă (e.g. toți iepurașii se răspândesc în mod normal), dar nu mai există alte runde. 

**Nu** va fi niciun caz în care mișcările jucătorului iau sfârșit înainte ca acesta să moară sau să câștige.

La final, imprimați starea finală a vizuinei, fiecare rând fiind imprimat pe o linie separată. 

Pe ultima linie, tipăriți `dead: {rând} {coloană}` sau `won: {rând} {coloană}`. 

"rând" și "coloană" reprezintă coordonatele celulei în care jucătorul a murit sau ultima celulă în care acesta s-a aflat înainte de a scăpa din vizuină.

## Intrare 

- Pe prima linie cu date de intrare, se dau numerele **N** și **M** – numărul de **rânduri** și de **coloane** din vizuină
- Pe următoarele N linii, fiecare rând este primit sub formă de șir de caractere; șirul va conține doar caracterele `.`, `B`, `P`
  
Toate șirurile vor avea aceeași lungime.

Va exista doar un caracter `P` pentru toate datele de intrare.

- Pe ultima linie, direcțiile sunt primite sub forma unui șir care conține caracterele `R`, `L`, `U`, `D`
  
## Ieșire

- Pe primele N linii, imprimați starea finală a vizuinii iepurilor
- Pe ultima linie, imprimați rezultatul final – `won:` sau `dead:` + `{rând} {coloană}`

## Constrângeri

- Dimensiunile vizuinii se află în intervalul `[3 ... 20]`
- Dimensiunile șirului care indică direcțiile se află în intervalul `[1 ... 20]`

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 5 8 | BBBBBBBB |
| .......B | BBBBBBBB |
| ...B.... | BBBBBBBB |
| ....B..B | .BBBBBBB |
| ........ | ..BBBBBB |
| ..P..... | won: 3 0 |
| ULLL |  |

[hints]
[hint]
Implementați metoda `isDead` care returnează o valoare booleană:

```java
private static boolean isDead(Integer[] currBunny, 
  int rowPlayer, int colPlayer, 
  int up, int down, int left, int right) {
  return (rowPlayer == currBunny[0] && colPlayer == left) ||
    (rowPlayer == currBunny[0] && colPlayer == right) ||
    (colPlayer == currBunny[1] && rowPlayer == up) ||
    (colPlayer == currBunny[1] && rowPlayer == down);
}

```
[/hint] 
[hint]
Împrăștiați iepurașii după cum urmează:

```java
private static void spreadBunnies(
  char[][] lair, Integer[] currBunny, 
  int up, int down, int left, int right) {

  int rowLair = lair.length;
  int colLair = lair[0].length;

  if (up >= 0) {
    lair[up][currBunny[1]] = 'B';
  }
  if (down < rowLair) {
    lair[down][currBunny[1]] = 'B';
  }
  if (left >= 0) {
    lair[currBunny[0]][left] = 'B';
  }
  if (right < colLair) {
    lair[currBunny[0]][right] = 'B';
  }
}
```
[/hint] 
[hint]
Nu uitați să realizați celelalte validări:

```java
private static boolean isCellFree(
  int row, int col, char[][] matrix) {
      
  return matrix[row][col] == '.';
}

private static boolean isInLair(
  int row, int col, char[][] matrix) {

  return row < 0 || 
    row >= matrix.length || 
    col < 0 || 
    col >= matrix[row].length;
}
```
[/hint] 
[/hints] 

| **Intrare** | **Ieșire** |
| --- | --- |
| 4 5 | .B... |
| ..... | BBB.. |
| ..... | BBBB. |
| .B... | BBB.. |
| ...P. | dead: 3 1 |
| LLLLLLLL |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5 8
.......B
...B....
....B..B
........
..P.....
ULLL
[/input]
[output]
BBBBBBBB
BBBBBBBB
BBBBBBBB
.BBBBBBB
..BBBBBB
won: 3 0
[/output]
[/test]
[test open]
[input]
4 5
.....
.....
.B...
...P.
LLLLLLLL
[/input]
[output]
.B...
BBB..
BBBB.
BBB..
dead: 3 1
[/output]
[/test]
[test]
[input]
8 11
...........
...........
.....B.....
...........
...........
....B.....P
...........
..B........
LDRR
[/input]
[output]
...BBBBB...
..BBBBBBB..
.BBBBBBBBB.
..BBBBBBB..
.BBBBBBB...
BBBBBBBBB..
BBBBBBBB...
BBBBBBB....
won: 6 10
[/output]
[/test]
[test]
[input]
3 3
..B
...
P..
UUU
[/input]
[output]
BBB
.BB
..B
dead: 0 0
[/output]
[/test]
[test]
[input]
4 8
........
........
....B...
.......P
R
[/input]
[output]
........
....B...
...BBB..
....B...
won: 3 7
[/output]
[/test]
[test]
[input]
5 5
.....
BP...
.....
B....
.....
RRRR
[/input]
[output]
BBBB.
BBBBB
BBBB.
BBBBB
BBBB.
won: 1 4
[/output]
[/test]
[test]
[input]
20 20
...B................
....................
..........B.........
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
P...................
....................
....................
....................
....................
....................
....................
RRRRDDDLLLLL
[/input]
[output]
BBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBB.
BBBBBBBBBBBBBBBBBB..
BBBBBBBBBBBBBBBBB...
BBBBBBBBBBBBBBBB....
.BBBBBBBBBBBBBB.....
..BBB..BBBBBBB......
...B....BBBBB.......
.........BBB........
..........B.........
....................
....................
....................
....................
....................
won: 16 0
[/output]
[/test]
[test]
[input]
5 5
P....
.....
...B.
.....
.....
RDRD
[/input]
[output]
..BBB
.BBBB
BBBBB
.BBBB
..BBB
dead: 1 2
[/output]
[/test]
[test]
[input]
3 3
...
PB.
...
R
[/input]
[output]
.B.
BBB
.B.
dead: 1 1
[/output]
[/test]
[test]
[input]
7 3
...
.B.
.P.
...
...
...
...
DDDDDDD
[/input]
[output]
BBB
BBB
BBB
BBB
BBB
BBB
.B.
won: 6 1
[/output]
[/test]
[test]
[input]
10 10
B........B
..........
..........
..........
..........
.....P....
..........
..........
..........
B........B
LLLLLLLLL
[/input]
[output]
BBBBBBBBBB
BBBBBBBBBB
BBBB..BBBB
BBB....BBB
BB......BB
BB......BB
BBB....BBB
BBBB..BBBB
BBBBBBBBBB
BBBBBBBBBB
dead: 5 0
[/output]
[/test]
[test]
[input]
4 15
...............
...............
B.............P
...............
LLLLLLLLLLLLL
[/input]
[output]
BBBBBB.........
BBBBBBB........
BBBBBBBB.......
BBBBBBB........
dead: 2 7
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: Reverse Matrix Diagonals
[code-task title="Reverse Matrix Diagonals" taskId="java-advanced-multidimensional-arrays-Reverse-Matrix-Diagonals" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Se dă o matrice 2D de numere întregi.

Trebuie să imprimați diagonalele matricei, dar în ordine inversă.

Tipăriți fiecare diagonală pe o linie nouă.

## Intrare

Pe prima linie se găsește un singur număr întreg, **R**, care reprezintă numărul de rânduri din matrice. 

Pe fiecare dintre următoarele **R** linii se găsesc **C** numere, separate prin spațiu. 

Țineți cont de faptul că **R** și **C** pot avea valori diferite.

## Ieșire

Datele de ieșire constau în diagonalele inversate ale matricei, unde numerele sunt separate printr-un spațiu, iar fiecare diagonală este scrisă pe o linie nouă.

## Constrângeri

Toate numerele întregi se află în intervalul `[1 ... 1000]`.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| 3 4 | 10 |
| 21 20 18 15 | 11 12 |
| 19 17 14 12 | 13 14 15 |
| 16 13 11 10 | 16 17 18 |
|  | 19 20 |
|  | 21 |

| **Intrare** | **Ieșire** |
| --- | --- |
| 1 3 | 1 |
| 3 2 1 | 2 |
|  | 3 |

| **Intrare** | **Ieșire** |
| --- | --- |
| 3 3 | 10 |
| 18 17 15 | 11 12 |
| 16 14 12 | 13 14 15 |
| 13 11 10 | 16 17 |
|  | 18 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3 4
21 20 18 15
19 17 14 12
16 13 11 10
[/input]
[output]
10
11 12
13 14 15
16 17 18
19 20
21
[/output]
[/test]
[test open]
[input]
1 3
3 2 1
[/input]
[output]
1
2
3
[/output]
[/test]
[test open]
[input]
3 3
18 17 15
16 14 12
13 11 10
[/input]
[output]
10
11 12
13 14 15
16 17
18
[/output]
[/test]
[test]
[input]
1 1
3
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
3 7
9 1 3 6 8 2 2
7 4 5 4 7 2 4
4 2 3 6 2 7 9
[/input]
[output]
9
7 4
2 2 2
6 7 2
3 4 8
2 5 6
4 4 3
7 1
9
[/output]
[/test]
[test]
[input]
9 7
4 3 9 7 4 2 4
3 5 5 8 6 4 9
5 6 9 6 8 6 9
9 3 5 9 8 9 8
6 4 9 7 5 1 4
7 5 4 4 2 3 8
4 1 7 5 5 1 8
2 9 9 3 2 6 3
8 5 2 1 1 8 8
[/input]
[output]
8
8 3
1 6 8
1 2 1 8
2 3 5 3 4
5 9 5 2 1 8
8 9 7 4 5 9 9
2 1 4 7 8 6 9
4 5 9 9 8 4 4
7 4 5 6 6 2
6 3 9 8 4
9 6 5 7
5 5 9
3 3
4
[/output]
[/test]
[test]
[input]
2 4
1 6 6 3
7 6 9 5
[/input]
[output]
5
9 3
6 6
7 6
1
[/output]
[/test]
[test]
[input]
2 7
5 9 5 5 9 1 2
3 9 4 3 8 9 5
[/input]
[output]
5
9 2
8 1
3 9
4 5
9 5
3 9
5
[/output]
[/test]
[test]
[input]
7 3
4 7 6
8 2 3
9 2 5
7 3 7
8 3 9
8 5 9
9 7 3
[/input]
[output]
3
7 9
9 5 9
8 3 7
8 3 5
7 2 3
9 2 6
8 7
4
[/output]
[/test]
[test]
[input]
3 1
6
5
3
[/input]
[output]
3
5
6
[/output]
[/test]
[test]
[input]
1 6
8 8 3 1 4 1
[/input]
[output]
1
4
1
3
8
8
[/output]
[/test]
[test]
[input]
2 6
4 6 7 3 9 9
1 5 1 2 3 8
[/input]
[output]
8
3 9
2 9
1 3
5 7
1 6
4
[/output]
[/test]
[test]
[input]
7 89
40 20 31 18 29 74 55 86 92 87 73 13 20 13 87 46 30 41 26 59 41 10 81 31 32 59 91 31 81 57 31 94 41 63 34 55 55 70 98 31 90 41 87 70 16 24 54 78 82 87 40 40 45 22 65 33 41 29 93 62 31 90 52 38 76 29 16 70 81 80 47 86 82 74 72 67 75 24 46 96 21 20 58 20 10 42 76 97 89 
24 75 52 76 51 93 33 30 38 49 66 26 55 18 71 70 54 45 56 98 41 99 14 73 14 29 33 32 84 48 66 92 58 40 64 87 38 42 51 79 10 54 56 33 52 13 73 18 72 79 28 56 18 53 69 23 76 35 48 71 34 30 82 86 48 62 34 10 46 33 68 41 60 44 53 27 82 80 60 28 67 14 88 74 40 53 71 51 27 
47 44 54 83 83 51 79 96 99 63 77 83 55 77 12 14 44 83 13 86 24 16 76 25 75 29 26 67 83 80 40 87 34 94 33 74 55 37 80 32 48 50 21 60 16 90 70 29 46 55 76 82 19 34 34 11 24 54 34 72 81 28 96 74 64 36 44 75 56 51 98 83 58 74 50 98 86 90 34 68 54 54 26 71 67 76 24 85 99 
69 73 67 72 19 65 55 14 41 88 47 30 81 25 96 65 32 26 12 88 11 96 24 35 50 33 99 21 60 30 97 62 54 66 18 34 58 92 18 48 12 84 56 70 73 56 35 31 84 34 85 67 41 39 16 26 20 84 98 88 61 75 30 43 32 94 84 85 32 35 99 70 55 89 20 99 52 18 36 45 45 79 67 21 77 20 50 11 65 
21 78 12 37 45 85 80 69 51 85 62 39 40 32 81 65 46 28 15 72 69 91 38 86 74 97 34 77 67 85 98 11 71 42 77 20 95 10 20 15 66 30 84 13 23 80 90 81 36 70 22 41 98 34 90 57 84 45 81 97 98 64 14 61 54 14 23 30 11 81 88 10 50 68 51 32 57 43 30 83 28 19 59 45 79 61 38 72 61 
53 14 75 13 23 84 74 38 27 95 23 70 90 73 95 28 55 53 50 73 70 13 18 11 42 93 81 92 33 89 56 47 69 62 30 49 43 62 80 64 56 56 84 24 80 67 77 78 11 69 84 91 12 65 11 12 21 60 28 56 79 19 23 81 53 45 54 27 38 13 42 24 40 88 90 53 10 54 35 75 47 92 62 55 20 92 10 47 44 
92 11 43 29 24 65 35 72 15 19 79 51 36 25 64 44 59 97 55 98 84 41 21 21 20 61 65 48 30 52 29 66 71 42 92 12 87 72 39 92 57 48 75 34 15 77 93 78 70 27 99 26 18 30 73 51 85 35 77 33 23 14 72 85 12 17 63 47 83 59 24 55 76 29 74 17 34 57 22 85 29 54 78 61 37 41 96 95 40
[/input]
[output]
40 
95 44 
96 47 61 
41 10 72 65 
37 92 38 11 99 
61 20 61 50 85 27 
78 55 79 20 24 51 89 
54 62 45 77 76 71 97 
29 92 59 21 67 53 76 
85 47 19 67 71 40 42 
22 75 28 79 26 74 10 
57 35 83 45 54 88 20 
34 54 30 45 54 14 58 
17 10 43 36 68 67 20 
74 53 57 18 34 28 21 
29 90 32 52 90 60 96 
76 88 51 99 86 80 46 
55 40 68 20 98 82 24 
24 24 50 89 50 27 75 
59 42 10 55 74 53 67 
83 13 88 70 58 44 72 
47 38 81 99 83 60 74 
63 27 11 35 98 41 82 
17 54 30 32 51 68 86 
12 45 23 85 56 33 47 
85 53 14 84 75 46 80 
72 81 54 94 44 10 81 
14 23 61 32 36 34 70 
23 19 14 43 64 62 16 
33 79 64 30 74 48 29 
77 56 98 75 96 86 76 
35 28 97 61 28 82 38 
85 60 81 88 81 30 52 
51 21 45 98 72 34 90 
73 12 84 84 34 71 31 
30 11 57 20 54 48 62 
18 65 90 26 24 35 93 
26 12 34 16 11 76 29 
99 91 98 39 34 23 41 
27 84 41 41 34 69 33 
70 69 22 67 19 53 65 
78 11 70 85 82 18 22 
93 78 36 34 76 56 45 
77 77 81 84 55 28 40 
15 67 90 31 46 79 40 
34 80 80 35 29 72 87 
75 24 23 56 70 18 82 
48 84 13 73 90 73 78 
57 56 84 70 16 13 54 
92 56 30 56 60 52 24 
39 64 66 84 21 33 16 
72 80 15 12 50 56 70 
87 62 20 48 48 54 87 
12 43 10 18 32 10 41 
92 49 95 92 80 79 90 
42 30 20 58 37 51 31 
71 62 77 34 55 42 98 
66 69 42 18 74 38 70 
29 47 71 66 33 87 55 
52 56 11 54 94 64 55 
30 89 98 62 34 40 34 
48 33 85 97 87 58 63 
65 92 67 30 40 92 41 
61 81 77 60 80 66 94 
20 93 34 21 83 48 31 
21 42 97 99 67 84 57 
21 11 74 33 26 32 81 
41 18 86 50 29 33 31 
84 13 38 35 75 29 91 
98 70 91 24 25 14 59 
55 73 69 96 76 73 32 
97 50 72 11 16 14 31 
59 53 15 88 24 99 81 
44 55 28 12 86 41 10 
64 28 46 26 13 98 41 
25 95 65 32 83 56 59 
36 73 81 65 44 45 26 
51 90 32 96 14 54 41 
79 70 40 25 12 70 30 
19 23 39 81 77 71 46 
15 95 62 30 55 18 87 
72 27 85 47 83 55 13 
35 38 51 88 77 26 20 
65 74 69 41 63 66 13 
24 84 80 14 99 49 73 
29 23 85 55 96 38 87 
43 13 45 65 79 30 92 
11 75 37 19 51 33 86 
92 14 12 72 83 93 55 
53 78 67 83 51 74 
21 73 54 76 29 
69 44 52 18 
47 75 31 
24 20 
40
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă: The Matrix
[code-task title="The Matrix" taskId="java-advanced-multidimensional-arrays-The-Matrix" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Se dă o matrice (un tablou bidimensional) cu caractere alfanumerice minuscule (`a-z`, `0-9`), o poziție de start – definită de un rând de start `startRow` și o coloană de start `startCol` – precum și un simbol de înlocuire `fillChar`.

Simbolul corespunzător coordonatelor `startRow` și `startCol` va fi numit `startChar`.

Scrieți un program care, începând de la rândul `startRow` și coloana `startCol`, schimbă în `fillChar` fiecare simbol din matrice care:

- este echivalent cu `startChar`
- poate fi atins de la `startChar` mergând în sus (`row – 1`), în jos (`row + 1`), la stânga (`col – 1`) și la dreapta (`col + 1`) și `traversând` DOAR simbolurile echivalente cu `startChar`

Începeți de la `startRow` și `startCol` și deplasați-vă schimbând **rândul** sau **coloana** (nu ambele deodată, i.e. nu puteți merge pe diagonală) cu **1**. Puteți traversa doar pozițiile care conțin `startChar`. 

Odată ce găsiți toate acele poziții, trebuie să le schimbați valoarea cu simbolul `fillChar`.

## Intrare

Pe prima linie vor fi introduse 2 numere întregi - numărul de rânduri **R** și numărul de coloane **C**.

Pe fiecare dintre următoarele **R** linii vor fi introduse **C** caractere, separate prin spațiu – simbolurile de pe rândul matricei, începând cu coloana **0**, până la coloana **C - 1**.

Pe următoarea linie va fi introdus un singur caracter – simbolul `fillChar`.

Pe ultima linie vor fi introduse 2 numere întregi – `startRow` și `startCol` – separate prin spațiu.

## Ieșire

Datele de ieșire constau în **R** linii, fiecare având exact **C** caractere, **nefiind separate** prin spații. Cele **R** rânduri reprezintă matricea după finalizarea operației de înlocuire.

## Constrângeri

- `0 < R, C < 20`
- `0 <= startRow < R`
- `0 <= startCol < C`

Toate simbolurile din matricea cu date de intrare vor fi caractere alfanumerice minuscule (`a-z`, `0-9`). Simbolul `fillChar` va fi tot un caracter alfanumeric de tip literă mică.


[hints]
[hint]
Pentru unele teste, puteți rezolva problema utilizând o abordare simplă. Soluția completă însă poate fi obținută utilizând **Stack**, **Queue**, **DFS** sau **BFS**.
[/hint] 
[/hints] 



## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| 5 3 | xxx |
| a a a | xxx |
| a a a | xbx |
| a b a | xbx |
| a b a | xbx |
| a b a |  |
| x |  |
| 0 0 |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| 5 3 | aaa |
| a a a | aaa |
| a a a | axa |
| a b a | axa |
| a b a | axa |
| a b a |  |
| x |  |
| 2 1 |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| 5 6 | oo11oo |
| o o 1 1 o o | o1331o |
| o 1 o o 1 o | 133331 |
| 1 o o o o 1 | o1331o |
| o 1 o o 1 o | oo11oo |
| o o 1 1 o o |  |
| 3 |  |
| 2 1 |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| 5 6 | oooooo |
| o o o o o o | ooo1oo |
| o o o 1 o o | oo1o11 |
| o o 1 o 1 1 | o11w1z |
| o 1 1 w 1 o | 1zzzzz |
| 1 o o o o o |  |
| z |  |
| 4 1 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5 3
a a a
a a a
a b a
a b a
a b a
x
0 0
[/input]
[output]
xxx
xxx
xbx
xbx
xbx
[/output]
[/test]
[test open]
[input]
5 3
a a a
a a a
a b a
a b a
a b a
x
2 1
[/input]
[output]
aaa
aaa
axa
axa
axa
[/output]
[/test]
[test open]
[input]
5 6
o o 1 1 o o
o 1 o o 1 o
1 o o o o 1
o 1 o o 1 o
o o 1 1 o o
3
2 1
[/input]
[output]
oo11oo
o1331o
133331
o1331o
oo11oo
[/output]
[/test]
[test open]
[input]
5 6
o o o o o o
o o o 1 o o
o o 1 o 1 1
o 1 1 w 1 o
1 o o o o o
z
4 1
[/input]
[output]
oooooo
ooo1oo
oo1o11
o11w1z
1zzzzz
[/output]
[/test]
[test open]
[input]
5 6
o 1 o o 1 o
o 1 o o 1 o
o 1 1 1 1 o
o 1 o w 1 o
o o o o o o
z
4 0
[/input]
[output]
z1oo1z
z1oo1z
z1111z
z1zw1z
zzzzzz
[/output]
[/test]
[test]
[input]
19 19
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 1 1 1 1 1 1 0 0 0 0 0 0 0 0
0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0
0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0
0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0
0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0
0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0
0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0
0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
h
8 6
[/input]
[output]
0000000000000000000
0000000000000000000
0000011111100000000
000001hhhh100000000
000001hhhh100000000
000001hhhh100000000
000001hhhh100000000
000001hhhh100000000
000001hhhh100000000
0000011111000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
0000000000000000000
[/output]
[/test]
[test]
[input]
19 19
0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 1 1 0 0
0 0 0 0 0 1 1 1 1 1 1 0 1 1 0 0 1 1 0
0 0 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1
0 0 0 0 0 1 0 0 0 0 1 0 0 0 1 1 0 0 1
0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 1
0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 1
0 0 0 0 0 1 0 0 0 0 1 1 1 1 1 1 0 0 1
0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1
0 0 0 0 0 1 1 1 1 1 1 0 0 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 1 1
0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0 0
0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 1 1 0 0
0 0 0 0 0 0 1 0 0 0 0 0 0 0 1 1 0 0 0
0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
y
3 5
[/input]
[output]
000000000000yyyy000
000000000000y00yy00
00000yyyyyy0yy00yy0
00000y0000y00yy00yy
00000y0000y000yy00y
00000y0000y0000yy0y
00000y0000y0000y00y
00000y0000yyyyyy00y
00000y000000000000y
00000yyyyyy0000000y
0000000000y00000000
0000000000y00000000
0000000000y00000yyy
0000000000y00000y00
000000yyyyy0000yy00
000000y0000000yy000
000000yyyyyyyyy0000
0000000000000000000
0000000000000000000
[/output]
[/test]
[test]
[input]
19 19
0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 1 0 0 0
0 0 0 0 0 1 1 1 1 1 1 0 0 1 0 0 1 0 0
0 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0 0 1 0
0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 1
0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 1 0 1
0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 1
0 0 0 0 0 1 0 0 0 0 1 1 1 1 1 0 0 0 1
0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1
0 0 0 0 0 1 1 1 1 1 1 0 0 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 1 1
0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0 0
0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 1 0 0 0
0 0 0 0 0 0 1 0 0 0 0 0 0 0 1 0 0 0 0
0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
z
2 14
[/input]
[output]
0000000000000110000
0000000000001zz1000
00000111111001zz100
000001zzzz10001zz10
000001zzzz100001zz1
000001zzzz1000001z1
000001zzzz100001zz1
000001zzzz11111zzz1
000001zzzzzzzzzzzz1
00000111111zzzzzzz1
00000000001zzzzzzzz
00000000001zzzzzzzz
00000000001zzzzzz11
00000000001zzzzz100
00000011111zzzz1000
0000001zzzzzzz10000
0000001111111100000
0000000000000000000
0000000000000000000
[/output]
[/test]
[test]
[input]
4 10
s x x s s s s s s s
a s s x s s s s s s
s a s s x s s s s s
s a s s s x s s s s
f
1 2
[/input]
[output]
sxxsssssss
affxssssss
saffxsssss
safffxssss
[/output]
[/test]
[test]
[input]
1 1
a
b
0 0
[/input]
[output]
b
[/output]
[/test]
[test]
[input]
7 1
u
u
u
u
u
d
u
d
5 0
[/input]
[output]
u
u
u
u
u
d
u
[/output]
[/test]
[test]
[input]
7 1
u
u
u
u
u
d
u
d
6 0
[/input]
[output]
u
u
u
u
u
d
d
[/output]
[/test]
[test]
[input]
1 3
a b 0
0
0 1
[/input]
[output]
a00
[/output]
[/test]
[test]
[input]
4 2
a b
c a
a b
b a
i
0 0
[/input]
[output]
ib
ca
ab
ba
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
