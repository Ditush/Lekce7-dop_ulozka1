const salary = (wage, hours, days) => {
    document.body.innerHTML += wage * hours * days + '<br>';}

const taxed = (castka, procento) => {
    document.body.innerHTML +=
    Math.round(castka - (castka * (procento / 100))) + '<br>';}

const vyplata = salary(10000, 8, 10) - taxed(10000, 15);

document.body.innerHTML += vyplata