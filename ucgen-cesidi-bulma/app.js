let birinciKenar = parseInt(prompt("Birinci kenarı giriniz"));
let ikinciKenar = parseInt(prompt("İkinci kenarı giriniz"));
let ucuncuKenar = parseInt(prompt("Üçüncü kenarı giriniz"));

if ((birinciKenar == ikinciKenar) && (birinciKenar == ucuncuKenar)) {
    alert("Bu bir eşkenar üçgendir");
} else if (birinciKenar != ikinciKenar && birinciKenar != ucuncuKenar && ikinciKenar != ucuncuKenar) {
    alert("Bu bir çeşit kenar üçgendir");
} else {
    alert("Bu bir ikizkenar üçgendir");
}