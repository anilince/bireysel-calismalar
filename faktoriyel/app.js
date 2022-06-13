let sayi = parseInt(prompt("Faktöriyeli hesaplanacak sayıyı giriniz"));
let faktoriyel = 1;

for (let i = 1; i <= sayi; i++) {
    faktoriyel = faktoriyel * i;
}
document.getElementById("baslik").innerHTML = faktoriyel;
console.log(`Girdiğiniz ${sayi} sayısının faktöriyeli ${faktoriyel} sayısıdır`);