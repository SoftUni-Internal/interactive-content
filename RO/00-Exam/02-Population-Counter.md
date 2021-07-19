[slide hideTitle]
# Problemă: Population Counter
[code-task title="Population Counter" taskId="java-advanced-exam-Population-Counter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Descriere

Atat de mulți oameni! Este greu să îi numărați pe toți, dar în asta constă cariera voastră de statistician.

Veți primi date brute pentru un anumit oraș, pe care trebuie să le procesați.

Pe fiecare linie cu date de intrare veți primi date în formatul: **"city\|country\|population"**. 

Nu vor exista **spații redundante nicăieri** în datele introduse.

Agregați datele **în funcție de țară și de oraș** și imprimați-le pe consolă.

**Pentru fiecare** țară, tipăriți **populația totală**, iar pe linii separate datele pentru fiecare dintre orașele sale.

**Țările** trebuie să fie ordonate descrescător în funcție de **populația lor totală**, iar pentru fiecare țară, **orașele** trebuie ordonate după **același criteriu.**

Dacă două țări/orașe au aceeași populație, păstrați-le în **ordinea** în care au fost **introduse**.

## Intrare

- Datele de intrare trebuie citite de la consolă.

- Acestea constau dintr-un număr variabil de linii și se termină atunci când este recepționată comanda **"report"**.

- Datele de intrare vor fi întotdeauna valabile și vor respecta formatul descris. Nu este nevoie să verificați acest aspect în mod explicit.

## Ieșire

- Ieșirea trebuie imprimată pe consolă.

- Imprimați datele agregate pentru fiecare țară și oraș în formatul prezentat mai jos.

## Constrângeri

- Numele orașului, al țării și populația vor fi separate una de cealaltă printr-o bară verticală ("\|").

- **Numărul de linii din intrare** va fi în intervalul \[2… 50\].

- O pereche oraș-țară nu va fi repetată.

- **Populația** fiecărui oraș va fi un număr întreg în intervalul \[0… 2 000 000 000\].


## Exemple

|Intrare|Ieșire|
|---|---|
|Sofia\|Bulgaria\|1000000|Bulgaria (total population: 1000000)|
|report|=>Sofia: 1000000|

|Intrare|Ieșire|
|---|---|
|Sofia\|Bulgaria\|1|UK (total population: 4)| 
|Varna\|Bulgaria\|2|=>London: 4| 
|London\|UK\|4|Bulgaria (total population: 3)|
|Rome\|Italy\|3|=>Varna: 2| 
|report|=>Sofia: 1| 
||Italy (total population: 3)|
||=>Rome: 3|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Sofia\|Bulgaria\|1000000
report
[/input]
[output]
Bulgaria (total population: 1000000)
=\>Sofia: 1000000
[/output]
[/test]
[test open]
[input]
Sofia\|Bulgaria\|1
Varna\|Bulgaria\|2
London\|UK\|4
Rome\|Italy\|3
report
[/input]
[output]
UK (total population: 4)
=\>London: 4
Bulgaria (total population: 3)
=\>Varna: 2
=\>Sofia: 1
Italy (total population: 3)
=\>Rome: 3
[/output]
[/test]
[test]
[input]
Albury\|Russia\|654521985
Grenoble\|United Kingdom\|1531927399
Naples\|France\|954101852
Toulouse\|United States\|782480507
Toronto\|Bulgaria\|455044005
Sofia\|Bulgaria\|773739884
Cordoba\|Canada\|1884583444
Verona\|France\|315269521
Florence\|Argentina\|1501567638
Catania\|United States\|687235468
Plovdiv\|Spain\|783998291
Pleven\|Japan\|258548204
report
[/input]
[output]
Canada (total population: 1884583444)
=\>Cordoba: 1884583444
United Kingdom (total population: 1531927399)
=\>Grenoble: 1531927399
Argentina (total population: 1501567638)
=\>Florence: 1501567638
United States (total population: 1469715975)
=\>Toulouse: 782480507
=\>Catania: 687235468
France (total population: 1269371373)
=\>Naples: 954101852
=\>Verona: 315269521
Bulgaria (total population: 1228783889)
=\>Sofia: 773739884
=\>Toronto: 455044005
Spain (total population: 783998291)
=\>Plovdiv: 783998291
Russia (total population: 654521985)
=\>Albury: 654521985
Japan (total population: 258548204)
=\>Pleven: 258548204
[/output]
[/test]
[test]
[input]
Pernik\|United Kingdom\|1153523021
Cordoba\|Bulgaria\|899369979
Rimini\|France\|1600378510
Reims\|Russia\|434059958
Sydney\|France\|26170099
Bordeaux\|Italy\|187931875
Palermo\|Canada\|313884804
Genoa\|Spain\|1639663550
Grenoble\|United States\|1295694
Sapporo\|Japan\|1179355114
Yokohama\|Japan\|579616388
Toronto\|France\|117036690
Paris\|Australia\|1536964913
report
[/input]
[output]
Japan (total population: 1758971502)
=\>Sapporo: 1179355114
=\>Yokohama: 579616388
France (total population: 1743585299)
=\>Rimini: 1600378510
=\>Toronto: 117036690
=\>Sydney: 26170099
Spain (total population: 1639663550)
=\>Genoa: 1639663550
Australia (total population: 1536964913)
=\>Paris: 1536964913
United Kingdom (total population: 1153523021)
=\>Pernik: 1153523021
Bulgaria (total population: 899369979)
=\>Cordoba: 899369979
Russia (total population: 434059958)
=\>Reims: 434059958
Canada (total population: 313884804)
=\>Palermo: 313884804
Italy (total population: 187931875)
=\>Bordeaux: 187931875
United States (total population: 1295694)
=\>Grenoble: 1295694
[/output]
[/test]
[test]
[input]
Toulouse\|Bulgaria\|1681169054
Montpellier\|France\|1621943700
Lyon\|Germany\|1373592125
Genoa\|Russia\|1396104875
Nantes\|France\|148031054
Toulon\|Canada\|649131721
Bordeaux\|Russia\|1085945055
Modena\|Argentina\|1639876145
Sapporo\|Germany\|1649401846
Toronto\|Germany\|1017589270
Pernik\|Austria\|1628726701
Sofia\|Russia\|1068182372
Yokohama\|Australia\|1605202015
Ruse\|Spain\|40710212
Kobe\|Austria\|786943621
Ottawa\|Argentina\|1154915368
Sydney\|Austria\|1581589671
Rimini\|United States\|878443390
Albury\|France\|442892311
Buenos Aires\|Australia\|1836849553
Kawasaki\|Argentina\|113613160
Paris\|Canada\|1105795084
Bologna\|France\|1378045328
Strasbourg\|Canada\|540850078
Nice\|Austria\|1951259823
Bari\|United States\|1608116661
Nagoya\|Bulgaria\|935830041
Milan\|Austria\|508251358
Saint-Etienne\|Japan\|487832085
Florence\|Argentina\|695816147
Naples\|Canada\|13987623
report
[/input]
[output]
Austria (total population: 6456771174)
=\>Nice: 1951259823
=\>Pernik: 1628726701
=\>Sydney: 1581589671
=\>Kobe: 786943621
=\>Milan: 508251358
Germany (total population: 4040583241)
=\>Sapporo: 1649401846
=\>Lyon: 1373592125
=\>Toronto: 1017589270
Argentina (total population: 3604220820)
=\>Modena: 1639876145
=\>Ottawa: 1154915368
=\>Florence: 695816147
=\>Kawasaki: 113613160
France (total population: 3590912393)
=\>Montpellier: 1621943700
=\>Bologna: 1378045328
=\>Albury: 442892311
=\>Nantes: 148031054
Russia (total population: 3550232302)
=\>Genoa: 1396104875
=\>Bordeaux: 1085945055
=\>Sofia: 1068182372
Australia (total population: 3442051568)
=\>Buenos Aires: 1836849553
=\>Yokohama: 1605202015
Bulgaria (total population: 2616999095)
=\>Toulouse: 1681169054
=\>Nagoya: 935830041
United States (total population: 2486560051)
=\>Bari: 1608116661
=\>Rimini: 878443390
Canada (total population: 2309764506)
=\>Paris: 1105795084
=\>Toulon: 649131721
=\>Strasbourg: 540850078
=\>Naples: 13987623
Japan (total population: 487832085)
=\>Saint-Etienne: 487832085
Spain (total population: 40710212)
=\>Ruse: 40710212
[/output]
[/test]
[test]
[input]
Montpellier\|Australia\|495606858
Burgas\|Spain\|772145448
Naples\|United States\|1878853670
Ottawa\|France\|655721435
Toulouse\|Canada\|584844774
Varna\|Italy\|1477720896
Kobe\|France\|67501948
Pleven\|Canada\|458982123
Florence\|Spain\|1099855936
Rennes\|Spain\|1013021950
Plovdiv\|Russia\|364161185
Bordeaux\|Australia\|1835641221
Kyoto\|Spain\|1209210297
Kaspichan\|United States\|584627853
Sydney\|United Kingdom\|578332653
Toronto\|Russia\|1394126076
Marseille\|Germany\|584058382
Reims\|Germany\|1148876322
Pernik\|Austria\|1595152873
Buenos Aires\|Spain\|1982662003
Rimini\|Japan\|276015753
Nice\|Argentina\|1340640720
Paris\|Russia\|489726432
report
[/input]
[output]
Spain (total population: 6076895634)
=\>Buenos Aires: 1982662003
=\>Kyoto: 1209210297
=\>Florence: 1099855936
=\>Rennes: 1013021950
=\>Burgas: 772145448
United States (total population: 2463481523)
=\>Naples: 1878853670
=\>Kaspichan: 584627853
Australia (total population: 2331248079)
=\>Bordeaux: 1835641221
=\>Montpellier: 495606858
Russia (total population: 2248013693)
=\>Toronto: 1394126076
=\>Paris: 489726432
=\>Plovdiv: 364161185
Germany (total population: 1732934704)
=\>Reims: 1148876322
=\>Marseille: 584058382
Austria (total population: 1595152873)
=\>Pernik: 1595152873
Italy (total population: 1477720896)
=\>Varna: 1477720896
Argentina (total population: 1340640720)
=\>Nice: 1340640720
Canada (total population: 1043826897)
=\>Toulouse: 584844774
=\>Pleven: 458982123
France (total population: 723223383)
=\>Ottawa: 655721435
=\>Kobe: 67501948
United Kingdom (total population: 578332653)
=\>Sydney: 578332653
Japan (total population: 276015753)
=\>Rimini: 276015753
[/output]
[/test]
[test]
[input]
Rimini\|Germany\|1784669833
Pleven\|United Kingdom\|252292726
Ruse\|Italy\|477208227
Kobe\|Italy\|1579983847
Osaka\|Canada\|364875192
Nagoya\|Germany\|123324227
Brescia\|Australia\|12050698
Kyoto\|Argentina\|127693479
Sofia\|Japan\|777832979
Buenos Aires\|Australia\|460455041
Reims\|United States\|1549636645
Fukuoka\|Japan\|1167955089
Toulouse\|Argentina\|79072877
Rome\|Argentina\|771688701
Genoa\|Australia\|455122537
report
[/input]
[output]
Italy (total population: 2057192074)
=\>Kobe: 1579983847
=\>Ruse: 477208227
Japan (total population: 1945788068)
=\>Fukuoka: 1167955089
=\>Sofia: 777832979
Germany (total population: 1907994060)
=\>Rimini: 1784669833
=\>Nagoya: 123324227
United States (total population: 1549636645)
=\>Reims: 1549636645
Argentina (total population: 978455057)
=\>Rome: 771688701
=\>Kyoto: 127693479
=\>Toulouse: 79072877
Australia (total population: 927628276)
=\>Buenos Aires: 460455041
=\>Genoa: 455122537
=\>Brescia: 12050698
Canada (total population: 364875192)
=\>Osaka: 364875192
United Kingdom (total population: 252292726)
=\>Pleven: 252292726
[/output]
[/test]
[test]
[input]
Yokohama\|France\|835333378
Cordoba\|Russia\|1517452839
Winnipeg\|Austria\|324648545
Sydney\|Bulgaria\|1649305083
Rennes\|Italy\|1681052740
Marseille\|Italy\|182014960
Montpellier\|Argentina\|1997119705
Albury\|Canada\|1145595724
Toronto\|United States\|196605932
Burgas\|Argentina\|1573071787
Kawasaki\|Italy\|941664435
Buenos Aires\|Russia\|1821467395
Nagoya\|Canada\|1776977313
Ruse\|Bulgaria\|214664911
Bari\|Australia\|462040122
Toulon\|France\|1554317743
Naples\|Argentina\|1667073864
Strasbourg\|United Kingdom\|1223526238
Modena\|Canada\|126188360
Rimini\|United Kingdom\|1584615829
Le Havre\|Argentina\|335888235
Sapporo\|Argentina\|1271660155
Osaka\|Japan\|1746374976
Kobe\|United Kingdom\|543669520
Lyon\|Austria\|1458385182
Verona\|Germany\|499132218
Florence\|France\|1054034134
Pleven\|United Kingdom\|1947300751
Kyoto\|Germany\|1494891164
Brescia\|Australia\|718868388
Catania\|France\|915765576
Varna\|Japan\|399781003
Bologna\|Austria\|174436641
Bordeaux\|Canada\|1516253730
Genoa\|Canada\|328406426
Nice\|Bulgaria\|1303854765
Grenoble\|United States\|1757437817
Reims\|Germany\|848903863
Paris\|Canada\|424252169
Ottawa\|France\|1116303256
Saint-Etienne\|Germany\|1029426732
Pernik\|Australia\|887196608
Lille\|Australia\|1075515372
Rome\|United States\|636425816
report
[/input]
[output]
Argentina (total population: 6844813746)
=\>Montpellier: 1997119705
=\>Naples: 1667073864
=\>Burgas: 1573071787
=\>Sapporo: 1271660155
=\>Le Havre: 335888235
France (total population: 5475754087)
=\>Toulon: 1554317743
=\>Ottawa: 1116303256
=\>Florence: 1054034134
=\>Catania: 915765576
=\>Yokohama: 835333378
Canada (total population: 5317673722)
=\>Nagoya: 1776977313
=\>Bordeaux: 1516253730
=\>Albury: 1145595724
=\>Paris: 424252169
=\>Genoa: 328406426
=\>Modena: 126188360
United Kingdom (total population: 5299112338)
=\>Pleven: 1947300751
=\>Rimini: 1584615829
=\>Strasbourg: 1223526238
=\>Kobe: 543669520
Germany (total population: 3872353977)
=\>Kyoto: 1494891164
=\>Saint-Etienne: 1029426732
=\>Reims: 848903863
=\>Verona: 499132218
Russia (total population: 3338920234)
=\>Buenos Aires: 1821467395
=\>Cordoba: 1517452839
Bulgaria (total population: 3167824759)
=\>Sydney: 1649305083
=\>Nice: 1303854765
=\>Ruse: 214664911
Australia (total population: 3143620490)
=\>Lille: 1075515372
=\>Pernik: 887196608
=\>Brescia: 718868388
=\>Bari: 462040122
Italy (total population: 2804732135)
=\>Rennes: 1681052740
=\>Kawasaki: 941664435
=\>Marseille: 182014960
United States (total population: 2590469565)
=\>Grenoble: 1757437817
=\>Rome: 636425816
=\>Toronto: 196605932
Japan (total population: 2146155979)
=\>Osaka: 1746374976
=\>Varna: 399781003
Austria (total population: 1957470368)
=\>Lyon: 1458385182
=\>Winnipeg: 324648545
=\>Bologna: 174436641
[/output]
[/test]
[test]
[input]
Verona\|Italy\|42444719
Marseille\|Spain\|525910616
Plovdiv\|United States\|952165984
Ruse\|United States\|281274510
Sydney\|Germany\|815625727
Ottawa\|Spain\|1334638266
Rimini\|Japan\|1636932720
Florence\|Argentina\|950418014
Buenos Aires\|Italy\|627160781
Milan\|Japan\|624150377
Osaka\|Germany\|1000540153
Fukuoka\|United Kingdom\|1715660823
Kawasaki\|United States\|1873289107
Saint-Etienne\|Australia\|391835969
Toulouse\|Russia\|653588520
Nagoya\|Italy\|1559255360
Winnipeg\|Australia\|1918407180
Catania\|Spain\|919801596
Genoa\|Italy\|1173171043
Montpellier\|Bulgaria\|398321044
Kobe\|United Kingdom\|605516562
Toronto\|Australia\|1030308946
Palermo\|Australia\|1273433341
Nantes\|Australia\|1661817001
Reims\|Australia\|925609507
Bordeaux\|Australia\|482416584
Varna\|Japan\|19466462
Nice\|Australia\|1155042017
Yokohama\|Germany\|1419948281
Cordoba\|Australia\|554379342
Naples\|France\|1439020657
Toulon\|Spain\|580557305
Bologna\|Australia\|1331648244
Grenoble\|Russia\|1010054894
report
[/input]
[output]
Australia (total population: 10724898131)
=\>Winnipeg: 1918407180
=\>Nantes: 1661817001
=\>Bologna: 1331648244
=\>Palermo: 1273433341
=\>Nice: 1155042017
=\>Toronto: 1030308946
=\>Reims: 925609507
=\>Cordoba: 554379342
=\>Bordeaux: 482416584
=\>Saint-Etienne: 391835969
Italy (total population: 3402031903)
=\>Nagoya: 1559255360
=\>Genoa: 1173171043
=\>Buenos Aires: 627160781
=\>Verona: 42444719
Spain (total population: 3360907783)
=\>Ottawa: 1334638266
=\>Catania: 919801596
=\>Toulon: 580557305
=\>Marseille: 525910616
Germany (total population: 3236114161)
=\>Yokohama: 1419948281
=\>Osaka: 1000540153
=\>Sydney: 815625727
United States (total population: 3106729601)
=\>Kawasaki: 1873289107
=\>Plovdiv: 952165984
=\>Ruse: 281274510
United Kingdom (total population: 2321177385)
=\>Fukuoka: 1715660823
=\>Kobe: 605516562
Japan (total population: 2280549559)
=\>Rimini: 1636932720
=\>Milan: 624150377
=\>Varna: 19466462
Russia (total population: 1663643414)
=\>Grenoble: 1010054894
=\>Toulouse: 653588520
France (total population: 1439020657)
=\>Naples: 1439020657
Argentina (total population: 950418014)
=\>Florence: 950418014
Bulgaria (total population: 398321044)
=\>Montpellier: 398321044
[/output]
[/test]
[test]
[input]
Sofia\|Italy\|710802804
Plovdiv\|Russia\|1945425908
Lille\|Bulgaria\|1025141329
Kaspichan\|Spain\|933420623
Osaka\|Spain\|1726696842
Bologna\|Germany\|747562594
Catania\|United Kingdom\|1967802980
Toulouse\|Argentina\|1296662998
Nagoya\|United Kingdom\|1215423431
Rennes\|Russia\|213855828
Nantes\|Argentina\|821436292
Le Havre\|Australia\|1142323970
Albury\|Canada\|541920718
Sydney\|Australia\|632572118
report
[/input]
[output]
United Kingdom (total population: 3183226411)
=\>Catania: 1967802980
=\>Nagoya: 1215423431
Spain (total population: 2660117465)
=\>Osaka: 1726696842
=\>Kaspichan: 933420623
Russia (total population: 2159281736)
=\>Plovdiv: 1945425908
=\>Rennes: 213855828
Argentina (total population: 2118099290)
=\>Toulouse: 1296662998
=\>Nantes: 821436292
Australia (total population: 1774896088)
=\>Le Havre: 1142323970
=\>Sydney: 632572118
Bulgaria (total population: 1025141329)
=\>Lille: 1025141329
Germany (total population: 747562594)
=\>Bologna: 747562594
Italy (total population: 710802804)
=\>Sofia: 710802804
Canada (total population: 541920718)
=\>Albury: 541920718
[/output]
[/test]
[test]
[input]
Reims\|Argentina\|1377726115
Saint-Etienne\|United States\|1977413473
Nagoya\|United Kingdom\|1150081604
Sofia\|Bulgaria\|44987423
Naples\|Japan\|398271352
Paris\|Austria\|1783799296
Sydney\|Canada\|1768426721
Strasbourg\|Austria\|805939943
Bordeaux\|Austria\|615598856
Buenos Aires\|Germany\|43353551
Fukuoka\|France\|1005967037
Milan\|Spain\|1588549228
Brescia\|Russia\|1153685879
Rennes\|Argentina\|196086714
Florence\|Australia\|478464717
Varna\|United States\|1391771702
Grenoble\|United Kingdom\|601156190
Pleven\|United Kingdom\|1407355326
Kaspichan\|Australia\|1764041692
report
[/input]
[output]
United States (total population: 3369185175)
=\>Saint-Etienne: 1977413473
=\>Varna: 1391771702
Austria (total population: 3205338095)
=\>Paris: 1783799296
=\>Strasbourg: 805939943
=\>Bordeaux: 615598856
United Kingdom (total population: 3158593120)
=\>Pleven: 1407355326
=\>Nagoya: 1150081604
=\>Grenoble: 601156190
Australia (total population: 2242506409)
=\>Kaspichan: 1764041692
=\>Florence: 478464717
Canada (total population: 1768426721)
=\>Sydney: 1768426721
Spain (total population: 1588549228)
=\>Milan: 1588549228
Argentina (total population: 1573812829)
=\>Reims: 1377726115
=\>Rennes: 196086714
Russia (total population: 1153685879)
=\>Brescia: 1153685879
France (total population: 1005967037)
=\>Fukuoka: 1005967037
Japan (total population: 398271352)
=\>Naples: 398271352
Bulgaria (total population: 44987423)
=\>Sofia: 44987423
Germany (total population: 43353551)
=\>Buenos Aires: 43353551
[/output]
[/test]
[test]
[input]
Sydney\|Italy\|1552200708
Burgas\|United States\|466762961
Grenoble\|Argentina\|1514161857
Winnipeg\|Australia\|823119710
Milan\|Australia\|16130944
Montpellier\|Italy\|708073743
Albury\|Argentina\|313453179
Pleven\|United Kingdom\|557622716
Reims\|Russia\|1519176013
Paris\|Canada\|1032153773
Nice\|Spain\|1637488319
Naples\|France\|1104840614
Rennes\|Spain\|1780332372
Toulouse\|Italy\|1333560996
Yokohama\|Canada\|1693131324
Lille\|Japan\|1822438494
Kobe\|Austria\|1647213845
Rimini\|Russia\|1245888142
report
[/input]
[output]
Italy (total population: 3593835447)
=\>Sydney: 1552200708
=\>Toulouse: 1333560996
=\>Montpellier: 708073743
Spain (total population: 3417820691)
=\>Rennes: 1780332372
=\>Nice: 1637488319
Russia (total population: 2765064155)
=\>Reims: 1519176013
=\>Rimini: 1245888142
Canada (total population: 2725285097)
=\>Yokohama: 1693131324
=\>Paris: 1032153773
Argentina (total population: 1827615036)
=\>Grenoble: 1514161857
=\>Albury: 313453179
Japan (total population: 1822438494)
=\>Lille: 1822438494
Austria (total population: 1647213845)
=\>Kobe: 1647213845
France (total population: 1104840614)
=\>Naples: 1104840614
Australia (total population: 839250654)
=\>Winnipeg: 823119710
=\>Milan: 16130944
United Kingdom (total population: 557622716)
=\>Pleven: 557622716
United States (total population: 466762961)
=\>Burgas: 466762961
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
