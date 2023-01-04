function typeNumber(typedNumber) {
    if(query.value("pinRocket") === ""){
        document.getElementById("pinRocket").style.letterSpacing = "4.4em";
    }
    if(query.value("pinRocket").length < 4){
        setElement("pinRocket", query.value("pinRocket") + typedNumber.toString());
    }
    verifySucess();
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function verifySucess(){
    if(query.value("pinRocket") === "9647"){
        document.getElementById("successText").innerText = "Sucesso!";
        document.getElementById("successNotifyRocket").style.display = "flex";
        await delay(2000);
        document.getElementById("successText").innerText = "038! É pro cadeado, idiota.";

    }else{
        console.log(query.value("pinRocket"))
        console.log(query.value("pinRocket").length)
        if((query.value("pinRocket").length === 4) && (query.value("pinRocket") !== "9647")){
            document.getElementById("successText").innerText = "Erro!";
            document.getElementById("successNotifyRocket").style.display = "flex";
            await delay(2000);
            document.getElementById("successText").innerText = "Ou é imbecil ou não é Rocket!";     
            await delay(2000);
            document.getElementById("successNotifyRocket").style.display = "none";
        }
    }
}

function backspace(){
    let pin = [];
    let pinText = "";
    pin = query.value("pinRocket").split("");
    pin.pop();
    pinText = pin.join("")
    setElement("pinRocket", pinText);
    if(query.value("pinRocket") === ""){
        document.getElementById("pinRocket").style.letterSpacing = "normal";
    }
}

const query = {
    value: (selectorName) => {
        let query = document.querySelector("#" + selectorName).value;
        return query;     
    },
    check: (selectorName) => {
        let query = document.querySelector("#" + selectorName).checked;
        return query;
    },
    radio: (selectorName) =>{
        let query = document.querySelector(`input[name="`+selectorName+`"]:checked`).value;
        return query;
    }
}

const setElement = (selectorName, value) => {
    document.getElementById(selectorName).value = value;
}