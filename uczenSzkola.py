import random

class Student:
    def __init__(self, imie, nazwisko, wiek, miasto):
        self.imie=imie
        self.nazwisko=nazwisko
        self.wiek=wiek
        self.miasto=miasto
        self.szkola=None
        self.kierunek=None
    def info(self):
        print(f"Imie: {self.imie}\nNazwisko: {self.nazwisko}\nWiek: {self.wiek}\nMiasto: {self.miasto}\nSzkola: {self.szkola}\n Kierunek: {self.kierunek}")

class Szkola:
    def __init__(self, nazwa, miejscowosc):
        self.nazwa=nazwa
        self.miejscowosc=miejscowosc
        self.lista_studentow=[]
        self.lista_kierunkow=["Blacharstwo","Budowlanka","Muroz-tynkorz"]
    def dodajStudenta(self, x):
        self.lista_studentow.append(x)
        x.szkola=self.nazwa
        x.kierunek=self.lista_kierunkow[random.randrange(0,3)]
        
    def wyswietlStudentow(self):
        for el in self.lista_studentow:
            print(f"{el.imie}\n")
            
Adam=Student("Adam","Mickiewicz",15,"Soplicowo")
Szkola1=Szkola("Gutel","Sucha Beskidzka")

Szkola1.dodajStudenta(Adam)
Adam.info()
Szkola1.wyswietlStudentow()
