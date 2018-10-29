// appka: super prymitywny routing
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 
const PORT = 8080;
app.listen(PORT);
console.log(`App running on ${PORT}`);

const cokolwiekWczymBedzieszTrzymalaDane = undefined; /// ????? co wybierzesz sama

// GET i POST
// <form action="costam/costam.php" method="POST">

// przykładowy POST
// http://localhost:8080/hello?name=worie&level=5
// 1. http -> protokół, moze byc http/https bądź wiele innych ale przedewszystkim te dwa jesli chodzi o webdev
// 2. localhost -> nazwa domeny, moze byc google.com, moze byc tez adres IP (domena to tylko taki alias na IP)
// 2.1 localhost -> alias na 127.0.0.1 czyli obecną maszynę 
// 3. 8080: port, na którym nasłuchujemy -> defniujemy tez jawnie w app.js przez app.listen(port);
// 4. /hello -> endpoint - końcówka, "droga" czyli "route"
// 5. koniec - reszta danych przekazywana jest tak jakby "w pamięci", nie jest widoczna w URL mozesz wykorzystac HTMLowe formularze albo robic `fetch()`

// mozesz przez formularz HTMLowy (action / method) albo fetchem: 
// fetch('http://localhost:8080/hello')

// fetch('http://localhost:8080/hello', {
// 	method: "POST",
// 	body: JSON.stringify({ name: 'worie', password: 'qwetryy'}),
//  headers: {
//    "Content-Type": "application/json; charset=utf-8",
//  }
// }).then(r => r.text().then(v => console.log(v)));
app.post('/hello', (req, res) => {
  const { name: userName, password: userPassword } = req.body;

  res.send(`POST: Przekazany userName: ${userName}, przekazany userPassword: ${userPassword}`);
});

// przykładowy GET
// http://localhost:8080/hello?name=worie&level=5
// 1. http -> protokół, moze byc http/https bądź wiele innych ale przedewszystkim te dwa jesli chodzi o webdev
// 2. localhost -> nazwa domeny, moze byc google.com, moze byc tez adres IP (domena to tylko taki alias na IP)
// 2.1 localhost -> alias na 127.0.0.1 czyli obecną maszynę 
// 3. 8080: port, na którym nasłuchujemy -> defniujemy tez jawnie w app.js przez app.listen(port);
// 4. /hello -> endpoint - końcówka, "droga" czyli "route"
// 5. ? -> deklaracja ze zaczynamy wysylac dane metodą GET 
// 6. name=worie -> klucz/wartość, czyli dla "zmiennej" name wartośc bedzie worie
// 7. & -> deklaracja ze dodajmy kolejna wartosc, daną metoda get
// 8. level=5 -> klucz/wartość, czyli dla "zmiennej" level wartośc bedzie 5
// queryparams -> ?name=worie&level=5

// mozesz przez formularz HTMLowy (action / method) albo fetchem: 
// fetch('http://localhost:8080/hello?name=worie&level=35')
app.get('/hello', (req, res) => {
  const { name: userName, level: userLevel } = req.query;
  // const userName = req.query.name;
  // const userLevel = req.query.level;

  res.send(`GET: Przekazany userName: ${userName}, przekazany userLevel: ${userLevel}`);
});

// zadanko: 
// logowanie + rejestracja (na czas trwania aplikacji, po zabiciu procesu przez ctrl+c aplikacja nie musi pamietac zarejstrowanych uzytkownikow)
// acz moze jesli Ci sie chce, bo mozesz sobie zapisac to do pliku i go odczytać