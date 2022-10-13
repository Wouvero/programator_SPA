# [Programator.sk SPA](https://www.programator.sk/pridaj-sa.php?fbclid=IwAR1kI_kaAqyN_7hY76_UjVMNeefidCE7du7mjJisb1tX9rgc5FSXc29E_Fo) (Galéria)

## Návod na spustenie

1.  `npm install`
    --- Príkaz naištaluje všetky potrebne knižnice.

2.  `npm start`
    --- Príkaz otvorí aplikáciu na [http://localhost:3000](http://localhost:3000) v prehliadači.

## Návrhy na vylepšenie galérie do budúcnosti

-   Možnosť prepínať medzi svetlým a tmavým režimom.
-   Možnosť odstrániť fotku.
-   Server by mohol ošetriť potenciálne chyby, aby sa nezaťažoval klient.
-   Response na API `/gallery` vráti list všetkých galérii. V galérii by sa mohol nachádzať nový atribút **gallerySize**, ktorý by predstavoval veľkosť galérie (počet fotiek v danej galérii).
-   Pri väčšom množstve objektov v liste, ktoré vráti response na API `/gallery` by som to riešil cez **pagination**, aby sa naraz nezobrazilo 100 galérii. To samé pri načítaní fotiek v jednotlivých galériach.
-   **`Pridať kategóriu`** a **`Pridať fotky`** neumiestňoval by som na miesto, kde sa vykresľujú zoznamy galérii a zoznamy fotiek. Tieto nástroje by som dal nad zoznam, tak aby používateľ vedel kedykoľvek s nástrojmi pracovať.

## Pridané nástroje

Pri stlačeni pravého tlačidla na myši nad konkrétnou galériou alebo fotkou sa zobrazí **right-click-menu**.

Pre `galériu` sa zobrazia nástroje:

-   Odstrániť galériu
-   Editovať galériu, ktorý momentálne nevykonáva žiadnu operáciu

Pre `fotku` je nástroj:

-   Odstrániť fotku, ktorý momentálne nevykonáva žiadnu operáciu
