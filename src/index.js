"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Planet_1 = require("./Planet");
let nevInput = document.getElementById('nevInput');
let evInput = document.getElementById('evInput');
let meretInput = document.getElementById('meretInput');
let waterInput = document.getElementById('waterInput');
let errorKiir = document.getElementById('errorKiir');
let CelestialBodyList = [];
function szamol() {
    document.getElementById('bolygodb').textContent = CelestialBodyList.length.toFixed();
    let avg = 0;
    for (let bolygo of CelestialBodyList) {
        avg += bolygo.age.valueOf();
    }
    document.getElementById('atlagEletkor').textContent = (avg / CelestialBodyList.length).toFixed();
}
function emptyallFields() {
    nevInput.value = "";
    evInput.value = "";
    meretInput.value = "";
    waterInput.value = "";
    errorKiir.innerHTML = " ";
}
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    (_a = document.getElementById('submit')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let regex = new RegExp('[A-Za-z ]{2}');
        if (regex.test(nevInput.value) && parseInt(evInput.value) > 0 && parseInt(meretInput.value) >= 1500 &&
            (parseInt(waterInput.value) >= 0 && parseInt(waterInput.value) <= 100)) {
            CelestialBodyList.push(new Planet_1.Planet(nevInput.value, parseInt(evInput.value), parseInt(meretInput.value), parseInt(waterInput.value)));
            szamol();
            emptyallFields();
        }
        else {
            if (!regex.test(nevInput.value)) {
                errorKiir.innerHTML = "A név csak betüket tartalmazhat és két karakternél többet";
            }
            if (!(parseInt(evInput.value) > 0)) {
                errorKiir.innerHTML = "Az életkor csak pozitív lehet";
            }
            if (!(parseInt(meretInput.value) >= 1500)) {
                errorKiir.innerHTML = "A méret nem lehet 1500-nál kisebb";
            }
            if (!(parseInt(waterInput.value) >= 0 && parseInt(waterInput.value) <= 100)) {
                errorKiir.innerHTML = "A viz felület csak 0-100 között lehet";
            }
        }
    });
});
