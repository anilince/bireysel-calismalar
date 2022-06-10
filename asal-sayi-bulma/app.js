let girilenSayi = parseInt(prompt("Bir sayı giriniz"));
let metin = "";

for (let i = 2; i <= girilenSayi; i++) {
    let asalSayiMi = true;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            asalSayiMi = false;
            break;
        }
    }
    if (asalSayiMi == true) {
        metin = metin + i + " ";
    }
}
console.log(metin);