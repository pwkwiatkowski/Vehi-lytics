# Vehi-lytics

## Spis treści
* [Charakterystyka oprogramowania](#charakterystyka-oprogramowania)
* [Prawa autorskie](#prawa-autorskie)
* [Specyfikacja wymagań](#specyfikacja-wymagań)
* [Projekt (język UML)](#projekt-język-UML)
* [Architektura oprogramowania](#architektura-oprogramowania)
* [Testy](#testy)

## Charakterystyka oprogramowania
- Nazwa skrócona - Vehi-lytics
- Nazwa pełna - Vehi-lytics - oprogramowanie do analizy samochodów danej marki na bazie ogłoszeń na portalach ogłoszeniowych
- Krótki opis ze wskazaniem celów - Vehi-lytics (Vehicle analytics) - oprogramowanie służy do wyodrębnienia z serwisów ogłoszeniowych informacji o samochodach danej marki oraz dokonania prostej analizy pod kątem parametrów takich jak cena, pojemność silnika, przebieg, rocznik itd.

## Prawa autorskie
- Autorzy - Inga Nowak, Patryk Kwiatkowski, Jakub Kąkol
- Warunki licencyjne do oprogramowania wytworzonego przez grupę: 
  - niniejsze oprogramowanie udostępniamy na warunkach licencji Creative Common o nazwie Uznanie autorstwa 4.0 Międzynarodowe (CC BY 4.0). Teskt i podsumowanie licencji znajdują się pod tymi linkami:
    - https://creativecommons.org/licenses/by/4.0/legalcode.pl
    - https://creativecommons.org/licenses/by/4.0/deed.pl

## Specyfikacja wymagań
- Wymagania funkcjonalne

Identyfikator | Kategoria wymagań | Podkategorie | Nazwa krótka | Opis | Priorytet | 
--- | --- | --- | --- |--- |--- |
W1 | funkcjonalne | brak | Wybranie marki samochodu i wyświetlenie informacji | Użytkownik wybiera z jednej rozwijanej listy markę samochodu, po czym pojawia się lista z samochodami danej marki | wymagana | 
W3 | funkcjonalne | brak | Wyświetlenie szczegółowych informacji | Po kliknięciu w odpowiedni przycisk wyświetlają się parametry pojazdu takie jak cena, pojemność silnika, przebieg itp. | wymagana | 
W4 | funkcjonalne | brak | Porównanie wybranych modeli samochodów | Użytkownik wybiera modele do porównania, pojawia się lista zestawionych parametrów wybranych modeli | wymagana | 
W5 | funkcjonalne | brak | Wyodrębnienie danych za pomocą web scrapingu | Zebranie danych o samochodach ze stron internetowych | wymagana | 
W6 | funkcjonalne | brak | Zapisanie danych do bazy | Dodanie do bazy danych informacji o pojeździe | wymagana | 
W7 | funkcjonalne | brak | Odczyt danych z bazy | Funkcjonalność pozwalająca na wyświetlenie informacji o pojazdach z bazy danych na stronie internetowej | wymagana | 
D1 | funkcjonalne | brak | Wizualizacja danych związanych z analizą wybranych modeli samochodów | Zestawienie parametrów wybranych samochodów w formie graficznej np. wykres | dodatkowa | 

- Wymagania niefunkcjonalne

Identyfikator | Kategoria wymagań | Podkategorie | Nazwa krótka | Opis | Priorytet | 
--- | --- | --- | --- |--- |--- |
WY1 | niefunkcjonalne | wydajność | Czas odpowiedzi | Maksymalny czas odpowiedzi aplikacji na zapytanie użytkownika nie może być dłuższy niż 2 sekundy | wymagana | 
WY2 | niefunkcjonalne | wydajność | Czcionka | Aplikacja używa czcionki 11 pikseli. Przy rozdzielczości monitora full HD 1980x1020. | wymagana | 
N1 | niefunkcjonalne | niezawodność | Dostępność aplikacji | Aplikacja będzie dostępna 24/7/365 średnio 99,9% czasu. W ciągu kolejnych 5 lat korzystania z niej. | wymagana | 
WY3 | niefunkcjonalne | wydajność | Rozmiar aplikacji | Łączny rozmiar aplikacji, wraz z bazą danych, nie przekroczy 3GB | wymagana | 
S1 | niefunkcjonalne | solidność | Uruchomienie po awarii | Czas uruchomienia po awarii nie powinien przekraczać godziny | wymagana | 

## Projekt (język UML)
- Diagram przypadków użycia 
<img src="https://github.com/pwkwiatkowski/Vehi-lytics/blob/master/img/diagram-przypadkow-uzycia.png" />

- Diagram wdrożenia 
<img src="https://github.com/pwkwiatkowski/Vehi-lytics/blob/master/img/diagram-wdrozenia.png" />

## Architektura oprogramowania
- Architektura rozwoju - stos technologiczny.
  - HTML - wersja 5.0
  - JavaScript
  -	Node.js - request-promise module, CheerioJS
  -	NPM
  -	MongoDB
  -	Vue.js
  -	Visual Studio Code
  -	Git i Github

- Architektura uruchomieniowa  - stos technologiczny.
  - Node.js z frameworkiem backend'owym Express.js - uruchomienie backend'u
  - Live server działający w Visual Studio Code - uruchomienie frontend'u
  - MongoDB Atlas Database

## Testy
- Scenariusze testów.
- Sprawozdanie z wykonania scenariuszy testów.

Przeprowadzone testy były jednostkowymi testami manualnymi

ID | Nazwa krótka | Opis | Priorytet | Czynności testowe | Wyniki testów | Status 
--- | --- | --- | --- |--- |--- |--- |
T1 | Zwracanie tablicy z bazy danych | Sprawdzenie, czy z bazy danych zostaje zwrócona tablica z danymi umieszczanymi w serwisie | 1 | Pobranie listy samochodów z bazy danych i sprawdzenie, czy lista składa się z obiektów | Rezulatat otrzymany z bazy danych składa się z obiektów | zaliczony
T2 | Utworzenie i zapisanie obiektu samochodu | Sprawdzenie, czy przykładowy obiekt samochodu zostanie zapisany do bazy oraz czy zapisane dane będą poprawne | 1 | Dodanie do bazy przykładowego obiektu samochodu i sprawdzenie oczekiwanych wartosci zwrotnych | Zapisane do bazy danych dane zgadzają się z oczekiwanymi | zaliczony
T3 | Dodanie do bazy obiektu z polami spoza schematu | Sprawdzenie, czy można zapisać do bazy obiekt z polami niewystępującymi w schemacie | 1 | Dodanie do bazy przykładowego obiektu samochodu z niedozwolonym polem i sprawdzenie, czy to się powiedzie | Poprawne zapisanie do bazy obiektu, ale pola niewystępujące w schemacie są oznaczne jako undefined | zaliczony
T4 | Dodanie do bazy obiektu bez wymaganych pól | Sprawdzenie, czy można zapisać do bazy obiekt bez wymaganych pól | 1 | Dodanie do bazy przykładowego obiektu samochodu bez pól określonych jako wymagane i sprawdzenie, czy to się powiedzie | Zapisanie obiektu do bazy nie powiodło się | zaliczony
T5 | Scrapowanie danych | Sprawdzenie, czy metoda scrapująca zwróci tablicę obiektów | 1 | Uruchomienie metody scrapującej samochody i sprawdzenie, czy rezultat składa się z obiektów | Otrzymany rezultat składa się z obiektów | zaliczony
T6 | Pola zescrapowanego obiektu | Sprawdzenie, czy zescrapowany obiekt składa się z wymaganych pól | 1 | Uruchomienie metody scrapującej samochody i sprawdzenie, czy pojedynczy zwrócony obiekt składa się z wymaganych pól | Otrzymany rezultat składa się z wymaganych pól | zaliczony
T7 | Zescrapowany obiekt nie jest pusty | Sprawdzenie, czy zescrapowany obiekt nie jest wartością null | 1 | Uruchomienie metody scrapującej samochody i sprawdzenie, czy kilka zwróconych wartości nie jest typu null | Otrzymany rezultat nie składa się z wartości typu null | zaliczony
T8 | Zescrapowany obiekt nie jest nieodpowiedniego typu | Sprawdzenie, czy zescrapowany obiekt nie jest nieodpowiedniego typu | 1 | Uruchomienie metody scrapującej samochody i sprawdzenie, czy kilka zwróconych wartości nie jest wartością false, 0, empty string, undefined i NaN | Otrzymany rezultat nie jest niewłaściwego typu | zaliczony
