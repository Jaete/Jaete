function typeNumber(typedNumber) {
    if(query.value("pinRocket") === ""){
        document.getElementById("pinRocket").style.letterSpacing = "4.4em";
    }
    if(query.value("pinRocket").length < 4){
        setElement("pinRocket", query.value("pinRocket") + typedNumber.toString());
    }
    verifySucess();
}

function verifySucess(){
    if(query.value("pinRocket") === "9647"){
        document.getElementById("successNotifyRocket").style.display = "inline";
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