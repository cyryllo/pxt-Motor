# Borsuk - Robot

![icon.png](https://raw.githubusercontent.com/cyryllo/Borsuk/master/icon.png)

Projekt Robota oparty na podstawce sterownika silników i serw od waveshare electronics. Urządzeniem sterującym jest Micro:bit.
Robot wykonany jest ze sklejki i porusza się na szerwach 360 stopni lub w wersji v2 na silnikach DC. Stopniowo dodawane będą kolejne funkcje oraz moduły robota.

## Zmiany względem oryginału
Projekt źródłowy: https://github.com/waveshare/pxt-Motor
Dodane zostały funkcje sterowania serwami 360 stopni:
* ServoMotorForward - jazda serwem do przodu.
* ServoMotorBackward - Jazda serwem do tyłu.
Wartości prędkści podaje się od 1 do 10.
* Usunięte funkcje ustawienia serwa na 0 i 180 stopni (wystarczy klocek z możliwościa ustawienia dowolnego kątu.)

## Licencja

MIT
