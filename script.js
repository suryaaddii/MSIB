// membuat angka dari 1 sampai 100
// [1,2,3,4, ..., N]

const N = 100;
var foo = [];

for (var i = 1; i <= N; i++) {
  foo.push(i);
}
console.log(foo);

// Fungsi untuk menentukan apakah bilangan genap atau tidak
function isEven(number) {
  return number % 2 === 0;
}

// Array untuk menyimpan angka-angka acak genap
var angkaAcak = [];

// Menghasilkan 50 angka acak
for (var i = 0; i < 50; i++) {
  var angka = Math.floor(Math.random() * 50); // Ubah 100 sesuai dengan rentang angka yang Anda inginkan
  angkaAcak.push(angka);
}

// Menampilkan seluruh angka acak
console.log("Angka acak genap: " + angkaAcak.join(", "));

// Fungsi untuk menghasilkan angka acak antara min dan max (inklusif)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array untuk menyimpan angka-angka genap
var angkaGenap = [];

// Menghasilkan 50 angka acak genap antara 1 dan 100 (inklusif)
for (var i = 0; i < 50; i++) {
  var angka = getRandomNumber(1, 100);
  if (angka % 2 === 0) {
    angkaGenap.push(angka);
  }
}

// Menampilkan seluruh angka genap
console.log("Angka genap: " + angkaGenap.join(", "));

// Mencari nilai terkecil dalam array
var minValue = Math.min.apply(null, angkaGenap);
console.log("Nilai minimum dalam array: " + minValue);

// Fungsi untuk menghasilkan angka acak antara min dan max (inklusif)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array untuk menyimpan angka-angka genap
var angkaGenap = [];

// Menghasilkan 50 angka acak genap antara 1 dan 100 (inklusif)
for (var i = 0; i < 50; i++) {
  var angka = getRandomNumber(1, 100);
  if (angka % 2 === 0) {
    angkaGenap.push(angka);
  }
}

// Menampilkan seluruh angka genap
console.log("Angka genap: " + angkaGenap.join(", "));

// Menentukan nilai maksimum dalam array secara manual
var maxValue = angkaGenap[0];
for (var i = 1; i < angkaGenap.length; i++) {
  if (angkaGenap[i] > maxValue) {
    maxValue = angkaGenap[i];
  }
}
// Menampilkan nilai maksimum dalam array
console.log("Nilai maksimum dalam array: " + maxValue);

// Menghitung total (jumlah) dari semua angka dalam array
var total = 0;
for (var i = 0; i < angkaGenap.length; i++) {
  total += angkaGenap[i];
}

// Menampilkan seluruh angka genap
console.log("Angka genap: " + angkaGenap.join(", "));

// Menampilkan total (jumlah) dari semua angka dalam array
console.log("Total angka genap: " + total);

// Menghitung rata-rata dari semua angka dalam array
var total = 0;
for (var i = 0; i < angkaGenap.length; i++) {
  total += angkaGenap[i];
}

var rataRata = total / angkaGenap.length;

// Menampilkan seluruh angka genap
console.log("Angka genap: " + angkaGenap.join(", "));

// Menampilkan rata-rata dari semua angka dalam array
console.log("Rata-rata angka genap: " + rataRata);

// Fungsi untuk menentukan apakah bilangan ganjil atau tidak
function isOdd(number) {
  return number % 2 !== 0;
}

// Array untuk menyimpan angka-angka acak
var angkaAcak = [];

// Menghasilkan 50 angka acak
for (var i = 0; i < 50; i++) {
  var angka = Math.floor(Math.random() * 100); // Ubah 100 sesuai dengan rentang angka yang Anda inginkan
  angkaAcak.push(angka);
}

// Menampilkan seluruh angka acak
console.log("Angka acak ganjil: " + angkaAcak.join(", "));

// Fungsi untuk menghasilkan angka acak ganjil antara min dan max (inklusif)
function getRandomOddNumber(min, max) {
  var angka = Math.floor(Math.random() * (max - min + 1)) + min;
  return angka % 2 === 1 ? angka : angka + 1; // Pastikan angka yang dihasilkan adalah ganjil
}

// Array untuk menyimpan angka-angka ganjil
var angkaGanjil = [];

// Menghasilkan 50 angka acak ganjil antara 1 dan 100 (inklusif)
for (var i = 0; i < 50; i++) {
  var angka = getRandomOddNumber(1, 100);
  angkaGanjil.push(angka);
}

// Menentukan nilai minimum dalam array secara manual
var minValue = angkaGanjil[0];
for (var i = 1; i < angkaGanjil.length; i++) {
  if (angkaGanjil[i] < minValue) {
    minValue = angkaGanjil[i];
  }
}

// Menampilkan seluruh angka ganjil
console.log("Angka ganjil: " + angkaGanjil.join(", "));

// Menampilkan nilai minimum dalam array
console.log("Nilai minimum dalam array: " + minValue);

// Fungsi untuk menghasilkan angka acak ganjil antara min dan max (inklusif)
function getRandomOddNumber(min, max) {
  var angka = Math.floor(Math.random() * (max - min + 1)) + min;
  return angka % 2 === 1 ? angka : angka + 1; // Pastikan angka yang dihasilkan adalah ganjil
}

// Array untuk menyimpan angka-angka ganjil
var angkaGanjil = [];

// Menghasilkan 50 angka acak ganjil antara 1 dan 100 (inklusif)
for (var i = 0; i < 50; i++) {
  var angka = getRandomOddNumber(1, 100);
  angkaGanjil.push(angka);
}

// Menentukan nilai maksimum dalam array secara manual
var maxValue = angkaGanjil[0];
for (var i = 1; i < angkaGanjil.length; i++) {
  if (angkaGanjil[i] > maxValue) {
    maxValue = angkaGanjil[i];
  }
}

// Menampilkan seluruh angka ganjil
console.log("Angka ganjil: " + angkaGanjil.join(", "));

// Menampilkan nilai maksimum dalam array
console.log("Nilai maksimum dalam array: " + maxValue);

// Fungsi untuk menghasilkan angka acak ganjil antara min dan max (inklusif)
function getRandomOddNumber(min, max) {
  var angka = Math.floor(Math.random() * (max - min + 1)) + min;
  return angka % 2 === 1 ? angka : angka + 1; // Pastikan angka yang dihasilkan adalah ganjil
}

// Array untuk menyimpan angka-angka ganjil
var angkaGanjil = [];

// Menghasilkan 50 angka acak ganjil antara 1 dan 100 (inklusif)
for (var i = 0; i < 50; i++) {
  var angka = getRandomOddNumber(1, 100);
  angkaGanjil.push(angka);
}

// Menghitung total (jumlah) dari semua angka dalam array
var total = 0;
for (var i = 0; i < angkaGanjil.length; i++) {
  total += angkaGanjil[i];
}

// Menampilkan seluruh angka ganjil
console.log("Angka ganjil: " + angkaGanjil.join(", "));

// Menampilkan total (jumlah) dari semua angka dalam array
console.log("Total angka ganjil: " + total);

// Fungsi untuk menghasilkan angka acak ganjil antara min dan max (inklusif)
function getRandomOddNumber(min, max) {
  var angka = Math.floor(Math.random() * (max - min + 1)) + min;
  return angka % 2 === 1 ? angka : angka + 1; // Pastikan angka yang dihasilkan adalah ganjil
}

// Array untuk menyimpan angka-angka ganjil
var angkaGanjil = [];

// Menghasilkan 50 angka acak ganjil antara 1 dan 100 (inklusif)
for (var i = 0; i < 50; i++) {
  var angka = getRandomOddNumber(1, 100);
  angkaGanjil.push(angka);
}

// Menghitung rata-rata dari semua angka dalam array
var total = 0;
for (var i = 0; i < angkaGanjil.length; i++) {
  total += angkaGanjil[i];
}

var rataRata = total / angkaGanjil.length;

// Menampilkan seluruh angka ganjil
console.log("Angka ganjil: " + angkaGanjil.join(", "));

// Menampilkan rata-rata dari semua angka dalam array
console.log("Rata-rata angka ganjil: " + rataRata);

// Fungsi untuk menghasilkan angka acak antara min dan max (inklusif)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array untuk menyimpan angka-angka genap dan ganjil
var angkaGenap = [];
var angkaGanjil = [];

// Menghasilkan 50 angka acak antara 1 dan 100 (inklusif) dan membaginya menjadi genap dan ganjil
for (var i = 0; i < 50; i++) {
  var angka = getRandomNumber(1, 100);
  if (angka % 2 === 0) {
    angkaGenap.push(angka);
  } else {
    angkaGanjil.push(angka);
  }
}

// Fungsi untuk menghasilkan angka acak antara min dan max (inklusif)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fungsi untuk menghitung total dari sebuah array
function calculateTotal(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Array untuk menyimpan angka-angka genap dan ganjil
var angkaGenap = [];
var angkaGanjil = [];

// Menghasilkan 50 angka acak antara 1 dan 100 (inklusif) dan membaginya menjadi genap dan ganjil
for (var i = 0; i < 50; i++) {
  var angka = getRandomNumber(1, 100);
  if (angka % 2 === 0) {
    angkaGenap.push(angka);
  } else {
    angkaGanjil.push(angka);
  }
}
