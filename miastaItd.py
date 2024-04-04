class Miasta:
    def __init__(self, nazwa, ludnosc, wojewodztwo):
        self.nazwa=nazwa
        self.ludnosc=ludnosc
        self.wojewodztwo=wojewodztwo
    def prt(self):
        print(f"Nazwa miasta: {self.nazwa}\nLiczba ludnosci: {self.ludnosc}\nWojewodztwo: {self.wojewodztwo}")
    def __del__(self):
        print(f"Wywola ta wiadomosc przy usunieciu obiektu przy pomocy 'del' lub gdy sie progrom skonczy")
        
class Ulica(Miasta):
    zmiennoStatyczno=0
    def __init__(self, nazwa, ludnosc, wojewodztwo, nazwaUl, nrdomu):
        super().__init__(nazwa, ludnosc, wojewodztwo)
        self.nazwaUl=nazwaUl
        self.nrdomu=nrdomu
        Ulica.zmiennoStatyczno+=1
    def wypisz(self):
        super().prt()
        print(f"Nazwa ulicy: {self.nazwaUl}\nNr domu: {self.nrdomu}\n{self.zmiennoStatyczno}")
    def __str__(self):
        return(f"Co printujysz gnojku? wez uzyj funkcji heh?")
    #@staticmethod - metoda do zmiennych statycznych
    #np. wywolasz Ulica.zmiennoStatyczno
        
        
warszawa=Miasta("Warszawa",2000000,"Mazowieckie")
krakow=Ulica("Krakow",900000,"Malopolskie","Szkolna",3456)
gdansk=Ulica("Gdonsk",500000,"Pomorzecostam","Gdanska",420)
# warszawa.prt()
krakow.wypisz()
print(krakow)

#   pola prywatne ; self.__klasa=klasa => null
#   metody prywatne ; def __metoda(self) => null
