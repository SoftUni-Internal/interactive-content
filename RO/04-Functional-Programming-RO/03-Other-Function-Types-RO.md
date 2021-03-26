# Other Function Types

[slide hideTitle]

# Funcții Speciale

## Consumator \<T\>

În Java `Consumer<T>` este **interfață funcțională** care acceptă un singur argument și nu returnează nimic.

Metoda funcțională a **Consumatorului** este `accept(T t)`.

Putem utiliza funcția **Consumer** cu the `.accept()` method.

``` java
import java.util.function.Consumer;

public class ConsumerAccept {
  public static void main(String[] args) {
    Consumer<String> nameConsumer = s -> System.out.println(s); 
    
    nameConsumer.accept("George");
    nameConsumer.accept("Peter");
  }
} 
```


## Supplier\<T\>

`Supplier<T>` este o **interfață funcțională** încorporată care reprezintă furnizorului rezultate.

Interfața furnizorului nu ia niciun parametru.

``` java
int genRandomInt() {
  Random rnd = new Random();
  return rnd.nextInt(28);
}

```

Metoda funcțională a a unei interfețe  `Supplier<T>` este `.get()` method.


``` java
Supplier<Integer> genRandomInt = () -> new Random().nextInt(28);
int rnd = genRandomInt.get();
```


## Predicate\<T\>

În Java `Predicate<T>` este o **interfață funcțională** care reprezintă un predicat (funcție booleană) a unui argument.

Este folosit pentru a **evalua** o condiție.


```java
boolean isEven(int number) {
    return number % 2 == 0;
}
```

Folosim `Predicate` cu metoda `.test()`.

```java
Predicate<Integer> isEven = number -> number % 2 == 0;
System.out.println(isEven.test(6)); // true
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Count Uppercase Words

[code-task title="Count Uppercase Words" taskId="oop-basics-java-functional-programming-lab-Count-Uppercase-Words" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.function.Consumer;
import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Scrieți un program care citește un rând de **text** de pe consolă.

Imprimați **numărul** de cuvinte care încep cu o literă **Majusculă**, după care imprimați toate aceste **cuvinte** în **aceeași ordine**, așa cum le-ați găsit în text.

## Sugestii

Utilizați un `Predicate<String>` ca **if-condition**.



## Exemple


| **Intrare**|**Ieșire**|
| --- | --- |
| The following example shows how to use Predicate | 2
|  | The |  
|  | Predicate |



| **Intrare**|**Ieșire**|
| --- | --- |
| Write a program that reads one line of text from console. 
Print count of words that start with Uppercase, after that print all those words in the same order like you find them in text. | 3 |
|  | Write |
|  | Print |
|  | Uppercase |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
The following example shows how to use Predicate
[/input]
[output]
2
The
Predicate
[/output]
[/test]
[test open]
[input]
Write a program that reads one line of text from console. Print count of words that start with Uppercase, after that print all those words in the same order like you find them in text.
[/input]
[output]
3
Write
Print
Uppercase,
[/output]
[/test]
[test]
[input]
Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented,\[14\] and specifically designed to have as few implementation dependencies as possible.
[/input]
[output]
1
Java
[/output]
[/test]
[test]
[input]
The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.
[/input]
[output]
3
The
C
C++,
[/output]
[/test]
[test]
[input]
Sun generated revenue from Java through the selling of licenses for specialized products such as the Java Enterprise System.
[/input]
[output]
5
Sun
Java
Java
Enterprise
System.
[/output]
[/test]
[test]
[input]
Sun renamed new J2 versions as Java EE, Java ME, and Java SE, respectively.
[/input]
[output]
8
Sun
J2
Java
EE,
Java
ME,
Java
SE,
[/output]
[/test]
[test]
[input]
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
[/input]
[output]
3
The
Lorem
Ipsum
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problemă cu Soluție: Add VAT

[code-task title="Add VAT" taskId="oop-basics-java-functional-programming-lab-Add-VAT" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.List;
import java.util.function.UnaryOperator;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care citește un rând de prețuri **Dublu** separate prin **a comma and a space** `, `. 

Imprimați prețurile adăugand TVA pentru toate acestea.

Formatați-le la **a doua** cifră după punctul zecimal. 

Ordinea prețurilor trebuie să rămână aceeași.



## Exemples


| **Intrare**|**Ieșire**|
| --- | --- |
| 1.38, 2.56, 4.4 | Prices with VAT:
|  | 1.66 |  
|  | 3.07 |
|  | 5.28 |


| **Intrare**|**Ieșire**|
| --- | --- |
| 1, 3, 5, 7 | Prices with VAT: |
|  | 1.20 |
|  | 3.60 |
|  | 6.00 |
|  | 8.40 |


## Sugestii

- Use a `UnaryOperator<Double>`:

``` java
UnaryOperator<Double> addVat = value -> value * 1.2;
//TODO: Foreach price:
double priceWithVat = addVat.apply(price);
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1.38, 2.56, 4.4
[/input]
[output]
Prices with VAT:
1.66
3.07
5.28
[/output]
[/test]
[test open]
[input]
1, 3, 5, 7
[/input]
[output]
Prices with VAT:
1.20
3.60
6.00
8.40
[/output]
[/test]
[test]
[input]
83.52457890914305, 92.20316861915288
[/input]
[output]
Prices with VAT:
100.23
110.64
[/output]
[/test]
[test]
[input]
68.70699302393652, 44.813847691296, 69.2100891468367, 82.85872312552117, 54.67973238858007
[/input]
[output]
Prices with VAT:
82.45
53.78
83.05
99.43
65.62
[/output]
[/test]
[test]
[input]
82.01566187578474, 39.80415601383676, 95.7125411003021, 69.23984073363428, 95.77464133830732
[/input]
[output]
Prices with VAT:
98.42
47.76
114.86
83.09
114.93
[/output]
[/test]
[test]
[input]
99.0189274536154, 99.98490740019213, 24.85288973066883, 96.52688451346008, 65.33384534677324, 4.765097328635246, 23.71352757928993, 75.07843944360755, 2.218148856425528, 39.89784157476908, 95.82656018850724, 48.69831437021264, 72.18647017638595, 83.1463144794435, 51.4342811969589
[/input]
[output]
Prices with VAT:
118.82
119.98
29.82
115.83
78.40
5.72
28.46
90.09
2.66
47.88
114.99
58.44
86.62
99.78
61.72
[/output]
[/test]
[test]
[input]
58.67233554552486, 48.46452900280763, 3.784792794926844, 81.56732713050631, 29.134864363356055, 66.74196223196004, 93.02288256703922, 78.59729318386965, 84.90061500413557, 79.31970862562288, 60.700212525952445, 28.8607462679686, 79.20639076285464, 69.68758328088167, 22.930698543490205, 87.17838102022684, 76.68905571565546, 43.472099378218026, 72.45837763482427, 61.021023188203536, 48.29327463113091, 91.94774943298366, 33.61623992299765, 51.92589234069089, 20.960418377751566, 24.80711767407849, 70.43023813304175, 20.197988828043467, 36.39028184085065, 88.73623730309912, 63.03188762168424, 66.7169248665994, 51.071949474978, 68.10518968710578, 64.60541246917526, 40.11426794052465, 46.54115308538161, 99.05157216840254, 22.69165231610404, 54.47276890486631, 27.899001828414573, 93.02274183547087, 63.91981056765268, 83.04121074689769, 90.39553234028784, 13.864103379127327, 6.866532446371213, 19.091035361706957, 77.54198527826875, 30.312819403167154, 67.14546982940166, 93.38180386068785, 61.59601021757859, 35.800194044236974, 78.9719574276988, 2.515540734065559, 72.53993009583819, 76.65941341665545, 8.687626160830764, 77.45825733854889, 2.4909513331301056, 10.558112780186374, 33.87139560114582, 16.63456701669033, 13.103325551142836, 90.38757912839168, 12.931488212887587, 68.8357064511524, 92.97511512177483, 67.7542009904389, 25.907795645031136, 96.02170015966001, 21.357053530178455, 70.63988908156291, 75.42678110734151, 40.14430017245419, 6.3265943998022, 84.3114704770829, 98.18144609375145, 94.08088314820246, 60.24382186548562, 27.52286200303627, 73.67778265273644, 36.52581126167509, 73.70387584448765, 86.64338254931587, 31.226380899590964, 61.92087254058038, 36.39573225600791, 22.732113382537268, 11.71021213611443, 19.785484028533983, 20.224745745899114, 97.76926017950815, 25.170602299753476, 91.54387592480347, 76.80396417722588, 38.93583749070296, 38.365101157077284, 89.12094452095684, 55.08058627656749, 31.09918449831182, 87.45554002225681, 25.675623058574303, 29.99542090223387, 49.89563902616037, 16.876710749445873, 5.825417764443351, 3.013635112150167, 68.61161861915605, 56.961913283185915, 39.1184224795443, 97.90942837770028, 76.0665062825079, 12.653242479586734, 13.357106807673105, 24.319923536522282, 96.62193267176308, 73.55746473489874, 37.243412303857944, 84.44052777187586, 3.4440573031455886, 96.77694641752946, 62.93156865990275, 82.61252864538743, 45.31200619128319, 9.384565183507886, 20.059715398229557, 29.512587415940967, 75.01038285485801, 67.59740926862565, 66.86553597484966, 40.444390952801626, 79.30815086567058, 60.89486972773605, 82.39919010457585, 45.972774100275096, 82.22576982800071, 47.03131073215339, 12.191449151848044, 67.13709740343297, 16.956248139393836, 39.15464240248896, 64.66351343231969, 74.86587615758562, 29.811421169295475, 14.175877115015258, 60.34512362429599, 92.87743426962842, 71.23596236662308
[/input]
[output]
Prices with VAT:
70.41
58.16
4.54
97.88
34.96
80.09
111.63
94.32
101.88
95.18
72.84
34.63
95.05
83.63
27.52
104.61
92.03
52.17
86.95
73.23
57.95
110.34
40.34
62.31
25.15
29.77
84.52
24.24
43.67
106.48
75.64
80.06
61.29
81.73
77.53
48.14
55.85
118.86
27.23
65.37
33.48
111.63
76.70
99.65
108.47
16.64
8.24
22.91
93.05
36.38
80.57
112.06
73.92
42.96
94.77
3.02
87.05
91.99
10.43
92.95
2.99
12.67
40.65
19.96
15.72
108.47
15.52
82.60
111.57
81.31
31.09
115.23
25.63
84.77
90.51
48.17
7.59
101.17
117.82
112.90
72.29
33.03
88.41
43.83
88.44
103.97
37.47
74.31
43.67
27.28
14.05
23.74
24.27
117.32
30.20
109.85
92.16
46.72
46.04
106.95
66.10
37.32
104.95
30.81
35.99
59.87
20.25
6.99
3.62
82.33
68.35
46.94
117.49
91.28
15.18
16.03
29.18
115.95
88.27
44.69
101.33
4.13
116.13
75.52
99.14
54.37
11.26
24.07
35.42
90.01
81.12
80.24
48.53
95.17
73.07
98.88
55.17
98.67
56.44
14.63
80.56
20.35
46.99
77.60
89.84
35.77
17.01
72.41
111.45
85.48
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
