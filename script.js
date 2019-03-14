// Funktion för knappen som ändrar språk på inputfälten samt dropdown menyn

var inputF = document.getElementById("fråga");
var inputS = document.getElementById("svar");

var drop1 = document.getElementById("valutaDrop1");
var drop2 = document.getElementById("valutaDrop2");

var btn = document.getElementById("btnLang");

function langSwitch(){
    if(inputF.placeholder === "Skriv in ett belopp"){
        inputF.placeholder = "Enter an amount";
        inputS.placeholder = "Enter an amount";
        drop1[0].text = "Select Currency";
        drop2[0].text = "Select Currency";
        btn.innerHTML = "Sv";
    }else{
        inputF.placeholder = "Skriv in ett belopp";
        inputS.placeholder = "Skriv in ett belopp";
        drop1[0].text = "Välj Valuta";
        drop2[0].text = "Välj Valuta";
        btn.innerHTML = "Eng";
    }
}

// De två funktioner som gör själva uträkningen. Dem tar värdet från inputfältet och de två valda valutorna och för in dom i formeln.

function tillConvert(){
    var x = document.getElementById("fråga").value;
    var y = document.getElementById("valutaDrop1").value;
    var z = document.getElementById("valutaDrop2").value;
    document.getElementById("svar").value = ((x*z)/y).toFixed(2);
}

function frånConvert(){
    var x = document.getElementById("svar").value;
    var y = document.getElementById("valutaDrop1").value;
    var z = document.getElementById("valutaDrop2").value;
    document.getElementById("fråga").value = ((x*y)/z).toFixed(2);
}

// Här fylls båda dropdown menyerna med val. Det börjar med en "placeholder" och fylls sedan på med datan från api:t.

let dropdown = document.getElementById("valutaDrop1")
let dropdown2 = document.getElementById("valutaDrop2")

let defaultOption = document.createElement('option');
defaultOption.text = 'Välj Valuta';

let defaultOption2 = document.createElement('option');
defaultOption2.text = 'Välj Valuta';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;

const url = 'https://openexchangerates.org/api/latest.json?app_id=7b09fbbde176485a994a1e43a2fb6a7b';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
    if (request.status === 200) {
      var data = JSON.parse(request.responseText);

        let option;
        let option2;

        for (const prop in data.rates) {
            option = document.createElement('option');
            option.text = prop;
            option.value = data.rates[prop];
            dropdown.add(option);
            
            option2 = document.createElement('option');
            option2.text = prop;
            option2.value = data.rates[prop];
            dropdown2.add(option2);
        }
    }
}

request.send();