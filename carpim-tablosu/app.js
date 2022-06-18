let metin = "";
for (let i = 1; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {

        metin = metin + (i + "*" + j + "=" + (i * j)) + "\t";
    }
    console.log(metin);
    metin = "";
}  