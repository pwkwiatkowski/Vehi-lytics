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
W1 | 1 - funkcjonalne | brak | Wybranie marki samochodu i wyświetlenie informacji | Użytkownik wybiera z jednej rozwijanej listy markę samochodu, po czym pojawia się lista z samochodami danej marki | 1 - wymagana | 
W3 | 1 - funkcjonalne | brak | Wyświetlenie szczegółowych informacji | Po kliknięciu w odpowiedni przycisk wyświetlają się parametry pojazdu takie jak cena, pojemność silnika, przebieg itp. | 1 - wymagana | 
W4 | 1 - funkcjonalne | brak | Porównanie wybranych modeli samochodów | Użytkownik wybiera modele do porównania, pojawia lista zestawionych parametrów wybranych modeli | 1 - wymagana | 
W5 | 1 - funkcjonalne | brak | Wyodrębnienie danych za pomocą web scrapingu | Zebranie danych o samochodach ze stron internetowych | 1 - wymagana | 
W6 | 1 - funkcjonalne | brak | Zapisanie danych do bazy | Dodanie do bazy danych informacji o pojeździe | 1 - wymagana | 
W7 | 1 - funkcjonalne | brak | Usunięcie danych z bazy | Usunięcie z bazy danych informacji o pojeździe | 1 - wymagana | 
O1 | 1 - funkcjonalne | brak | Połączenie serwisu z bazą | Funkcjonalność pozwalająca na wyświetlenie informacji o pojazdach z bazy danych na stronie internetowej | 2 - oczekiwana | 
D1 | 1 - funkcjonalne | brak | Wizualizacja danych związanych z analizą wybranych modeli samochodów | Zestawienie parametrów wybranych samochodów w formie graficznej np. wykres | 3 - dodatkowa | 

- Wymagania niefunkcjonalne

Identyfikator | Kategoria wymagań | Podkategorie | Nazwa krótka | Opis | Priorytet | 
--- | --- | --- | --- |--- |--- |
WY1 | 2 - niefunkcjonalne | wydajność | Czas odpowiedzi | Maksymalny czas odpowiedzi aplikacji na zapytanie użytkownika nie może być dłuższy niż 1,5 sekundy | 1 - wymagana | 
WY2 | 2 - niefunkcjonalne | wydajność | Czcionka | Aplikacja używa czcionki 11 pikseli. Przy rozdzielczości monitora full HD 1980x1020. | 1 - wymagana | 
N1 | 2 - niefunkcjonalne | niezawodność | Dostępność aplikacji | Aplikacja będzie dostępna 24/7/365 średnio 99,9% czasu. W ciągu kolejnych 5 lat korzystania z niej. | 1 - wymagana | 
WY3 | 2 - niefunkcjonalne | wydajność | Rozmiar aplikacji | Łączny rozmiar aplikacji, wraz z bazą danych, nie przekroczy 3GB | 1 - wymagana | 
S1 | 2 - niefunkcjonalne | solidność | Uruchomienie po awarii | Czas uruchomienia po awarii nie powinien przekraczać godziny | 1 - wymagana | 

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
  - Node.js z frameworkiem backend'owym Express.js

## Testy - odpowiedzialność: kontrola jakości.
- Scenariusze testów.
- Sprawozdanie z wykonania scenariuszy testów.
