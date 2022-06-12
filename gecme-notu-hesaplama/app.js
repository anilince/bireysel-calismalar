let vizeNotu = parseInt(prompt("Vize notunu giriniz"));
let finalNotu = parseInt(prompt("Final notunu giriniz"));

let ortalama = vizeNotu * 0.4 + finalNotu * 0.6;

if (ortalama >= 50) {
    alert("Tebrikler dersi geçtiniz ortalamanız : " + ortalama);
} else {
    alert("Dersten kaldınız ortalamanız : " + ortalama);
}