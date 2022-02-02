function submitForm() {
    enteredName = document.getElementById("full-name").value;
    enteredEmail = document.getElementById("email-address").value;

    if (stringIsEmpty(enteredName)) {
        returnMessageNOKName();
        return false;
    }

    if (stringIsEmpty(enteredEmail)) {
        returnMessageNOKEmail();
        return false;
    }

    if (!validateEmail(enteredEmail)) {
        returnMessageNOKEmail();
        return false;
    }

    var params = {
        from_name: document.getElementById("full-name").value,
        from_email: document.getElementById("email-address").value,
        from_phone: document.getElementById("phone-number").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_dnbjbgq", "template_f07m72a", params).then(function (res) {
        console.log("Submited Successfully ✔️", res.status);
        returnMessageOK();
    })
}

function stringIsEmpty(str) {
    return (!str || str.length === 0);
}

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    return (false)
}

function returnMessageOK() {
    document.getElementById("full-name").value = "";
    document.getElementById("email-address").value = "";
    document.getElementById("phone-number").value = "";
    document.getElementById("message").value = "";
    let messageP = document.getElementById("contactform5");
    messageP.removeAttribute("hidden");
    setTimeout(() => {
        document.getElementById("contactform5").hidden = true;
    }, 5000);
}

function returnMessageNOK() {
    document.getElementById("full-name").value = "";
    document.getElementById("email-address").value = "";
    document.getElementById("phone-number").value = "";
    document.getElementById("message").value = "";
    let messageP = document.getElementById("contactform7");
    messageP.removeAttribute("hidden");
    setTimeout(() => {
        document.getElementById("contactform7").hidden = true;
    }, 5000);
}

function returnMessageNOKEmail() {
    let messageP = document.getElementById("contactform8");
    messageP.removeAttribute("hidden");
    setTimeout(() => {
        document.getElementById("contactform8").hidden = true;
    }, 5000);
}

function returnMessageNOKName() {
    let messageP = document.getElementById("contactform9");
    messageP.removeAttribute("hidden");
    setTimeout(() => {
        document.getElementById("contactform9").hidden = true;
    }, 5000);
}

function translateFunction(value) {

    if (value == "PT") {
        document.getElementById('header1').innerHTML = TranslatePT.header1;
        document.getElementById('header2').innerHTML = TranslatePT.header2;
        document.getElementById('header3').innerHTML = TranslatePT.header3;
        document.getElementById('about1').innerHTML = TranslatePT.about1;
        document.getElementById('about2').innerHTML = TranslatePT.about2;
        document.getElementById('about3').innerHTML = TranslatePT.about3;
        document.getElementById('service1').innerHTML = TranslatePT.service1;
        document.getElementById('service2').innerHTML = TranslatePT.service2;
        document.getElementById('service3').innerHTML = TranslatePT.service3;
        document.getElementById('service4').innerHTML = TranslatePT.service4;
        document.getElementById('service5').innerHTML = TranslatePT.service5;
        document.getElementById('service6').innerHTML = TranslatePT.service6;
        document.getElementById('service7').innerHTML = TranslatePT.service7;
        document.getElementById('service8').innerHTML = TranslatePT.service8;
        document.getElementById('service9').innerHTML = TranslatePT.service9;
        document.getElementById('service10').innerHTML = TranslatePT.service10;
        document.getElementById('service11').innerHTML = TranslatePT.service11;
        document.getElementById('service12').innerHTML = TranslatePT.service12;
        document.getElementById('service13').innerHTML = TranslatePT.service13;
        document.getElementById('service14').innerHTML = TranslatePT.service14;
        document.getElementById('assisted1').innerHTML = TranslatePT.assisted1;
        document.getElementById('assisted2').innerHTML = TranslatePT.assisted2;
        document.getElementById('community1').innerHTML = TranslatePT.community1;
        document.getElementById('community2').innerHTML = TranslatePT.community2;
        document.getElementById('payments1').innerHTML = TranslatePT.payments1;
        document.getElementById('payments2').innerHTML = TranslatePT.payments2;
        document.getElementById('contact1').innerHTML = TranslatePT.contact1;
        document.getElementById('contact2').innerHTML = TranslatePT.contact2;
        document.getElementById('contactform1').innerHTML = TranslatePT.contactform1;
        document.getElementById('contactform2').innerHTML = TranslatePT.contactform2;
        document.getElementById('contactform3').innerHTML = TranslatePT.contactform3;
        document.getElementById('contactform4').value = TranslatePT.contactform4;
        document.getElementById('contactform5').innerHTML = TranslatePT.contactform5;
        document.getElementById('footer').innerHTML = TranslatePT.footer;
    }
    if (value == "EN") {
        document.getElementById('header1').innerHTML = TranslateEN.header1;
        document.getElementById('header2').innerHTML = TranslateEN.header2;
        document.getElementById('header3').innerHTML = TranslateEN.header3;
        document.getElementById('about1').innerHTML = TranslateEN.about1;
        document.getElementById('about2').innerHTML = TranslateEN.about2;
        document.getElementById('about3').innerHTML = TranslateEN.about3;
        document.getElementById('service1').innerHTML = TranslateEN.service1;
        document.getElementById('service2').innerHTML = TranslateEN.service2;
        document.getElementById('service3').innerHTML = TranslateEN.service3;
        document.getElementById('service4').innerHTML = TranslateEN.service4;
        document.getElementById('service5').innerHTML = TranslateEN.service5;
        document.getElementById('service6').innerHTML = TranslateEN.service6;
        document.getElementById('service7').innerHTML = TranslateEN.service7;
        document.getElementById('service8').innerHTML = TranslateEN.service8;
        document.getElementById('service9').innerHTML = TranslateEN.service9;
        document.getElementById('service10').innerHTML = TranslateEN.service10;
        document.getElementById('service11').innerHTML = TranslateEN.service11;
        document.getElementById('service12').innerHTML = TranslateEN.service12;
        document.getElementById('service13').innerHTML = TranslateEN.service13;
        document.getElementById('service14').innerHTML = TranslateEN.service14;
        document.getElementById('assisted1').innerHTML = TranslateEN.assisted1;
        document.getElementById('assisted2').innerHTML = TranslateEN.assisted2;
        document.getElementById('community1').innerHTML = TranslateEN.community1;
        document.getElementById('community2').innerHTML = TranslateEN.community2;
        document.getElementById('payments1').innerHTML = TranslateEN.payments1;
        document.getElementById('payments2').innerHTML = TranslateEN.payments2;
        document.getElementById('contact1').innerHTML = TranslateEN.contact1;
        document.getElementById('contact2').innerHTML = TranslateEN.contact2;
        document.getElementById('contactform1').innerHTML = TranslateEN.contactform1;
        document.getElementById('contactform2').innerHTML = TranslateEN.contactform2;
        document.getElementById('contactform3').innerHTML = TranslateEN.contactform3;
        document.getElementById('contactform4').value = TranslateEN.contactform4;
        document.getElementById('contactform5').innerHTML = TranslateEN.contactform5;
        document.getElementById('footer').innerHTML = TranslateEN.footer;
    }
    if (value == "DE") {
        document.getElementById('header1').innerHTML = TranslateDE.header1;
        document.getElementById('header2').innerHTML = TranslateDE.header2;
        document.getElementById('header3').innerHTML = TranslateDE.header3;
        document.getElementById('about1').innerHTML = TranslateDE.about1;
        document.getElementById('about2').innerHTML = TranslateDE.about2;
        document.getElementById('about3').innerHTML = TranslateDE.about3;
        document.getElementById('service1').innerHTML = TranslateDE.service1;
        document.getElementById('service2').innerHTML = TranslateDE.service2;
        document.getElementById('service3').innerHTML = TranslateDE.service3;
        document.getElementById('service4').innerHTML = TranslateDE.service4;
        document.getElementById('service5').innerHTML = TranslateDE.service5;
        document.getElementById('service6').innerHTML = TranslateDE.service6;
        document.getElementById('service7').innerHTML = TranslateDE.service7;
        document.getElementById('service8').innerHTML = TranslateDE.service8;
        document.getElementById('service9').innerHTML = TranslateDE.service9;
        document.getElementById('service10').innerHTML = TranslateDE.service10;
        document.getElementById('service11').innerHTML = TranslateDE.service11;
        document.getElementById('service12').innerHTML = TranslateDE.service12;
        document.getElementById('service13').innerHTML = TranslateDE.service13;
        document.getElementById('service14').innerHTML = TranslateDE.service14;
        document.getElementById('assisted1').innerHTML = TranslateDE.assisted1;
        document.getElementById('assisted2').innerHTML = TranslateDE.assisted2;
        document.getElementById('community1').innerHTML = TranslateDE.community1;
        document.getElementById('community2').innerHTML = TranslateDE.community2;
        document.getElementById('payments1').innerHTML = TranslateDE.payments1;
        document.getElementById('payments2').innerHTML = TranslateDE.payments2;
        document.getElementById('contact1').innerHTML = TranslateDE.contact1;
        document.getElementById('contact2').innerHTML = TranslateDE.contact2;
        document.getElementById('contactform1').innerHTML = TranslateDE.contactform1;
        document.getElementById('contactform2').innerHTML = TranslateDE.contactform2;
        document.getElementById('contactform3').innerHTML = TranslateDE.contactform3;
        document.getElementById('contactform4').value = TranslateDE.contactform4;
        document.getElementById('contactform5').innerHTML = TranslateDE.contactform5;
        document.getElementById('footer').innerHTML = TranslateDE.footer;
    }
    if (value == "CN") {
        document.getElementById('header1').innerHTML = TranslateCN.header1;
        document.getElementById('header2').innerHTML = TranslateCN.header2;
        document.getElementById('header3').innerHTML = TranslateCN.header3;
        document.getElementById('about1').innerHTML = TranslateCN.about1;
        document.getElementById('about2').innerHTML = TranslateCN.about2;
        document.getElementById('about3').innerHTML = TranslateCN.about3;
        document.getElementById('service1').innerHTML = TranslateCN.service1;
        document.getElementById('service2').innerHTML = TranslateCN.service2;
        document.getElementById('service3').innerHTML = TranslateCN.service3;
        document.getElementById('service4').innerHTML = TranslateCN.service4;
        document.getElementById('service5').innerHTML = TranslateCN.service5;
        document.getElementById('service6').innerHTML = TranslateCN.service6;
        document.getElementById('service7').innerHTML = TranslateCN.service7;
        document.getElementById('service8').innerHTML = TranslateCN.service8;
        document.getElementById('service9').innerHTML = TranslateCN.service9;
        document.getElementById('service10').innerHTML = TranslateCN.service10;
        document.getElementById('service11').innerHTML = TranslateCN.service11;
        document.getElementById('service12').innerHTML = TranslateCN.service12;
        document.getElementById('service13').innerHTML = TranslateCN.service13;
        document.getElementById('service14').innerHTML = TranslateCN.service14;
        document.getElementById('assisted1').innerHTML = TranslateCN.assisted1;
        document.getElementById('assisted2').innerHTML = TranslateCN.assisted2;
        document.getElementById('community1').innerHTML = TranslateCN.community1;
        document.getElementById('community2').innerHTML = TranslateCN.community2;
        document.getElementById('payments1').innerHTML = TranslateCN.payments1;
        document.getElementById('payments2').innerHTML = TranslateCN.payments2;
        document.getElementById('contact1').innerHTML = TranslateCN.contact1;
        document.getElementById('contact2').innerHTML = TranslateCN.contact2;
        document.getElementById('contactform1').innerHTML = TranslateCN.contactform1;
        document.getElementById('contactform2').innerHTML = TranslateCN.contactform2;
        document.getElementById('contactform3').innerHTML = TranslateCN.contactform3;
        document.getElementById('contactform4').value = TranslateCN.contactform4;
        document.getElementById('contactform5').innerHTML = TranslateCN.contactform5;
        document.getElementById('footer').innerHTML = TranslateCN.footer;
    }
}