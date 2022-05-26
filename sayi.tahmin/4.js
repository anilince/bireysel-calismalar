let uretilenSayi = (Math.random() * 90) + 10;
console.log("Üretilen ondalıklı sayı " + uretilenSayi);
uretilenSayi = Math.floor(uretilenSayi);

let kullanicininGirdigiSayi = parseInt(prompt("İki basamaklı bir sayı giriniz", "10"));

let uretilenSayiBirlerBasamagi = uretilenSayi % 10;
let uretilenSayiOnlarBasamagi = Math.floor(uretilenSayi / 10); 

console.log(`Üretilen sayının birler basamağı: ${uretilenSayiBirlerBasamagi} onlar basamağı ${uretilenSayiOnlarBasamagi}`);

let userSayiBirlerBasamagi = kullanicininGirdigiSayi % 10;
let userSayiOnlarBasamagi = Math.floor(kullanicininGirdigiSayi / 10);

console.log(`Kullanıcının girdiği sayının birler basamağı: ${userSayiBirlerBasamagi} onlar basamağı: ${userSayiOnlarBasamagi}`);

console.log(`Sistemin ürettiği sayı ${uretilenSayi} kullanıcının girdiği sayı ${kullanicininGirdigiSayi}`);
if (uretilenSayi === kullanicininGirdigiSayi) {
    console.log("Tebrikler 10000 TL kazandınız Tahmininiz:" + kullanicininGirdigiSayi + " Üretilen" + uretilenSayi);
} else if (uretilenSayiBirlerBasamagi === userSayiOnlarBasamagi && uretilenSayiOnlarBasamagi === userSayiBirlerBasamagi) {
    console.log("Tebrikler 5000 TL kazandınız Tahmininiz:" + kullanicininGirdigiSayi + " Üretilen" + uretilenSayi);
}