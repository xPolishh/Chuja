const wyniki = document.getElementById('wyniki'); // jest to lepszy document.write po prostu, wszystko co ma 'wyniki' na początku należy do tego
wyniki.innerHTML=" ";

const czystka=()=> {
    wyniki.innerHTML=" ";
}

//Math i toFixed

const mathifixed=(x)=> {
    wyniki.innerHTML=" ";
    let liczba = 1.234567;
    wyniki.innerHTML+=`${liczba.toFixed(x)}<br>`;
    wyniki.innerHTML+=`${Math.abs(-2)}<br>`;
    wyniki.innerHTML+=`${Math.ceil(2.4)}<br>`;
    wyniki.innerHTML+=`${Math.floor(2.6)}<br>`;
    wyniki.innerHTML+=`${Math.max(3,4,5)}<br>`;
    wyniki.innerHTML+=`${Math.min(5,2,6)}<br>`;
    wyniki.innerHTML+=`${Math.pow(2,2)} lub po prostu ${2**2}<br>`;
    wyniki.innerHTML+=`${Math.random()}<br>`;
    wyniki.innerHTML+=`${Math.round(2.26126)}<br>`;
    wyniki.innerHTML+=`${Math.sqrt(4)}<br>`;
}

//Math.random()

const losowanie=(min,max)=> {
    wyniki.innerHTML=" ";
    wyniki.innerHTML=Math.floor(Math.random()*(max-min+1)+min);
}

//tablice

const tablice=()=> {
    let dni = ["poniedziałek","wtorek","środa","czwartek","piątek","sobota","niedziela"];

    //Pętle
        //For... of
    wyniki.innerHTML=" ";
    for(let el of dni) {
        wyniki.innerHTML+=`${el} jest ${dni.indexOf(el)+1} dniem tygodnia <br>`;
    }
    wyniki.innerHTML+=`<br>`;
        //For... each
    dni.forEach((el,i) => wyniki.innerHTML+=`${el} jest ${i+1} dniem tygodnia <br>`);
    wyniki.innerHTML+=`<br>`;

    //Dodawanie i usuwanie

    //Dodawanie
    let nowedni=[...dni]; //KLONOWANIE
        //Na końcu
    nowedni.push("Dzień 8");
        //Na poczkątku
    nowedni.unshift("Dzień 0");

    //Usuwanie
        //Na początku
    nowedni.shift();
        //Na końcu
    nowedni.pop();

    //Dowolnie Gdzie (tablica.splice(index,ilosc,...item))
        //Dodanie
    nowedni.splice(4,0,"czwartek i pół")
        //Usuwanie
    nowedni.splice(2,1);
        //Zamiana
    nowedni.splice(1,1,"Nowy wtorek");

    nowedni.forEach((el) => wyniki.innerHTML+=`${el}<br>`);
    wyniki.innerHTML+=`<br>`;

    //Inne operacje
        //Szukanie
    nowedni.push("sobota");
    wyniki.innerHTML+=`${nowedni.indexOf("sobota")}<br>`
    wyniki.innerHTML+=`${nowedni.lastIndexOf("sobota")}<br>`
    wyniki.innerHTML+=`${nowedni.includes("czwartek i pół")}<br>`
    wyniki.innerHTML+=`<br>`;
        //Map
    let lepszedni=nowedni.map((el)=>el.toUpperCase());
    lepszedni.forEach((el) => wyniki.innerHTML+=`${el}<br>`);
    wyniki.innerHTML+=`<br>`;
        //Filter
    let tylkok=nowedni.filter((el)=>el[el.length-1]=="k");
    tylkok.forEach((el) => wyniki.innerHTML+=`${el}<br>`);
    wyniki.innerHTML+=`<br>`;
}

//funkcje

const funkcje=(sil)=> {
    wyniki.innerHTML=" ";

    //IIFE
    (function(a) {
        wyniki.innerHTML+=`${a}<br>`;
    })("Sam się wykonam");

    function ZwyklaFunkcja(...rest) {
        rest.forEach((el)=>{wyniki.innerHTML+=`${el} `});
        wyniki.innerHTML+=`<br>`;
        //Procedura bo nic nie zwraca
    }

    const WyrazenieFunkcyjne = function(x) {
        return x**x;
    }

    const FunkcjaStrzalkowa=(y)=> {
        return WyrazenieFunkcyjne(y**2);
        //Callback
    }

    const silnia=(n)=> {
        //Rekurencja
        if(n==0) return 1;
        else return n*silnia(n-1);
    }

    ZwyklaFunkcja("ala","ma","kota")
    wyniki.innerHTML+=`${WyrazenieFunkcyjne(4)}<br>`
    wyniki.innerHTML+=`${FunkcjaStrzalkowa(5)}<br>`
    wyniki.innerHTML+=`${silnia(sil)}<br>`
}

//Podstawowe Obiekty

const podstawoweObiekty=()=>{
    wyniki.innerHTML=" ";

    //Podstawowy obiekt + metoda + obiekt w obiekcie
    const uczen = {
        imie: "Jan",
        wiek: 13,
        klasa: {
            nazwa: "1tp",
            iloscOsob: 24,
        },
        metoda() {
            wyniki.innerHTML+=`Mam na imie ${this.imie}, mam ${this.wiek} lat, Chodzę do klasy ${this.klasa.nazwa} <br>`
            //this w tym wypadku odwołuje się do obiektu
        }
    }
    wyniki.innerHTML+=`${uczen.imie}<br>${uczen.wiek}<br>${uczen.klasa.nazwa}<br>${uczen.klasa.iloscOsob}<br>`;
    uczen.metoda();
    wyniki.innerHTML+=`<br>`;

    //Klonowanie
    const uczen2 = {
        ...uczen,
        klasa: {
            ...uczen.klasa
        }
    }
    uczen2.imie="Wojciech";
    uczen2.klasa.nazwa="1tps";
    wyniki.innerHTML+=`${uczen2.imie}<br>${uczen2.wiek}<br>${uczen2.klasa.nazwa}<br>${uczen2.klasa.iloscOsob}<br>`;
    uczen2.metoda();
    wyniki.innerHTML+=`<br>`;

    //W uczen się nic nie zmieniło
    wyniki.innerHTML+=`${uczen.imie}<br>${uczen.wiek}<br>${uczen.klasa.nazwa}<br>${uczen.klasa.iloscOsob}<br>`;
    uczen.metoda();
    wyniki.innerHTML+=`<br>`;

    //Na dodatek jakaś pętla
    for(let parametr in uczen2) {
        wyniki.innerHTML+=`${parametr} = ${uczen2[parametr]}<br>`;
    }
}

//This... 

const magiazthis=()=> {
    wyniki.innerHTML=" ";
    let btn = document.getElementById('testowy');

    const osoba = {
        imie: "Adam",
        nazwisko: "Kowalski",
        metoda() {
            wyniki.innerHTML+=`${this} <= tutaj this odwołuje się do obiektu<br>`; 
            btn.addEventListener("click", function () { //to jest nie ważne
                wyniki.innerHTML=`${this} <= Lecz teraz this odwołuje się do guzika...<br>`;
                //Można zobaczyć klikając guzik wielokrotnie, Nie działa to odświerz (Nie chciało mi się pisać lepszego eventListenera więc od buczusia skopiowałem)
            });
        }
    }
    osoba.metoda();

}

//Rozwiązanie?
//1
const naprawa1=()=> {
    //1. Zmienna
    wyniki.innerHTML=" ";
    let btn = document.getElementById('testowy2');

    const osoba2 = {
       imie: "Adam",
       metoda() {
        let that = this;
        wyniki.innerHTML+=`${that} <= Obiekt<br>`; 
            btn.addEventListener("click", function () { //to jest nie ważne
                wyniki.innerHTML=`${this} <= Działa lecz nudne<br>`;
                wyniki.innerHTML+=`${that.imie} <= Nudne lecz działa<br>`
                //Można zobaczyć klikając guzik wielokrotnie
            });
        }
    }
    osoba2.metoda();
}
//2
const naprawa2=()=> {
    //2. Bind()...
    wyniki.innerHTML=" ";
    //Skopiowany przykład buczusia ale lepiej wytłumaczony
    function info() {
        wyniki.innerHTML+=`${this}<br>`; //Funkcja istnieje ale this zwraca się do globalthis czyli okna przeglądarki (obiekt window)
    }
    info();
    const uczen = {
        imie: "Tomasz"
    }
    noweInfo = info.bind(uczen) // Teraz zmieniamy że this ma się odwoływać do obiektu podanego w nawiasach czyli ucznia
    noweInfo(); //bind skopiowało całą funkcje info() do noweInfo() ale pozmieniało że this odnosi się teraz do obiektu
}
// koniec this'a
// 99% Problemów z this rozwiązuje funkcja strzałkowa więc no

//Destrukturyzacja i swapowanie zmiennych

const destrukturyzacja=()=> {
    wyniki.innerHTML=" ";
    let tab = ["pon","wt","śr"]
    
    //Destrukturyzacja tablic
    let [dzien1,dzien2,dzien3] = tab;
    wyniki.innerHTML+=`${dzien1}<br>${dzien2}<br>${dzien3}<br>`;
    wyniki.innerHTML+=`<br>`;
    //Pomijanie
    let [dzien5, ,dzien6] = tab;
    wyniki.innerHTML+=`${dzien5}<br>${dzien6}<br>`;
    wyniki.innerHTML+=`<br>`;
    //Domyślna wartość
    let [dzien7,dzien8,dzien9,dzien10="czw"] = tab;
    wyniki.innerHTML+=`${dzien7}<br>${dzien8}<br>${dzien9}<br>${dzien10}<br>`;
    wyniki.innerHTML+=`<br>`;
    
    //Zamiana miejscami
    let a = 1;
    let b = 5;
    wyniki.innerHTML+=`${a},${b}<br>`;
    [a, b] = [b, a];
    wyniki.innerHTML+=`${a},${b}<br>`;
    wyniki.innerHTML+=`<br>`;

    //Destrukturyzacja obiektów + wartość domyślna + obiekt w obiekcie
    let osoba = {
        imie: "Adam",
        nazwisko: "Kowalski",
        praca: {
            nazwaFirmy: "Ziutek Sprzątacz",
            stanowisko: "Sprzątacz",
        }
    }
    let {
        imie,
        nazwisko,
        pensja = 2000,
        praca: {
            nazwaFirmy: nazwaFirmy,
            stanowisko: stanowisko,
        }
    } = osoba;
    wyniki.innerHTML+=`${imie}<br>${nazwisko}<br>${pensja}<br>${stanowisko}<br>${nazwaFirmy}<br>`;
    //Kopiowanie było zrobione przy obiektach i tablicach.
}

//Klasy

const klasy=()=> {
    wyniki.innerHTML=" ";

    class Osoba { // Klasa Abstrakczyjna bo jest mało precyzyjna, i pozwala łatwo ją rozszerzać np Osoba i Pracownik
        static iloscOsob = 0; //Zmienna statyczna, odnosi się do każdego obiektu w klasie
        constructor(imie,nazwisko) {
            this.imie = imie;
            this.nazwisko = nazwisko;
            Osoba.iloscOsob++;
        }
        daneosoby() { //Metoda
            return(`imie osoby: ${this.imie}, nazwisko: ${this.nazwisko}<br>`);
        }
        static dane2osob(osb,osb2) { //Metoda statyczna, działa do każdego obiektu w klasie
            wyniki.innerHTML+=`Osoba 1 ma na imie: ${osb.imie}<br>Osoba 2 ma na imie: ${osb2.imie}<br>`;
        }
    }

    class Pracownik extends Osoba { //Dziedziczenie, Klasa Pracownik rozszerza Osobę
        #pensja; //Enkapsulacja, wartość prywatna
        constructor(imie,nazwisko,stanowisko,pensja) {
            super(imie,nazwisko); //Super "Przenosi" zmienne z klasy rodzica
            this.stanowisko=stanowisko;
            this.#pensja=pensja;
        }
        danepracownika() {
            wyniki.innerHTML+=`${super.daneosoby()} stanowisko: ${this.stanowisko}, pensja: ${this.#pensja} <br>`; //Przenosi metodę i do niej dodaje.
        }
        ustawpensje(nowapensja) { // Pozwala zmienić nam pensję z zewnątrz
            this.#pensja = nowapensja;
        }
    }

    const andrzej = new Osoba("Andrzej","Kowalski"); //Tworzymy nową osobą przy pomocy new
    const maciej = new Osoba("Maciej","Słowak");
    wyniki.innerHTML+=andrzej.daneosoby();
    wyniki.innerHTML+=maciej.daneosoby();
    wyniki.innerHTML+=`Ilosc osob: ${Osoba.iloscOsob}<br>`;
    Osoba.dane2osob(andrzej,maciej);

    const ziutek = new Pracownik("Ziutek","Kowal","Sprzątacz",2000);
    ziutek.danepracownika();
    wyniki.innerHTML+=`${ziutek.pensja}<br>`; //Undefined bo nie mamy dostępu do tego
    ziutek.ustawpensje(3000);
    ziutek.danepracownika(); //I zmieniliśmy mu pensje metodą

    //Prototyp tak na dodatek, czyli static ale nie koniecznie
    Osoba.prototype.noweinfo = function () { //Prototyp metody
        return `Imie: ${this.imie}, Nazwisko: ${this.nazwisko}<br>`;
    }
    Osoba.prototype.alama = "Kota" //Prototyp właściwości
    wyniki.innerHTML+=ziutek.noweinfo();
    wyniki.innerHTML+=ziutek.alama;
}
