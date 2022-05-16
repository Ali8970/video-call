let contact = document.querySelector(".header ul li.active a");
contact.addEventListener("click", (e) => {
    e.preventDefault();
    let popupoverlay = document.createElement("div");
    popupoverlay.className = "popup-overlay";
    document.body.appendChild(popupoverlay);

    let popupbox = document.createElement("div");
    popupbox.className = "popup-box";

    let heading = document.createElement("h1");
    let headtxt = document.createTextNode("Contact Us");
    heading.appendChild(headtxt);
    popupbox.appendChild(heading);
    document.body.appendChild(popupbox);

    let paragraph = document.createElement("p");
    let paragraphtxt = document.createTextNode("We are happy to receive your inquiries and suggestions");
    paragraph.appendChild(paragraphtxt);
    popupbox.appendChild(paragraph);
    document.body.appendChild(popupbox);


    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    let inputname = document.createElement("input");
    inputname.required = true;
    inputname.className = "name";
    inputname.type = "text";
    inputname.placeholder = "Your Name";
    inputname.value = "";

    let email = document.createElement("input");
    email.required = true;
    email.className = "email";
    email.type = "email";
    email.placeholder = "Your Email";
    email.value = "";

    let inputnumber = document.createElement("input");
    inputnumber.required = true;
    inputname.className = "number";
    inputnumber.type = "text";
    inputnumber.placeholder = "Your Number";
    inputnumber.value = "";



    let textarea = document.createElement("textarea");
    textarea.required = true;
    textarea.className = "textarea";
    textarea.placeholder = "Tell Us About Your Needs";
    textarea.value = "";


    let submit = document.createElement("input");
    submit.className = "active2";
    submit.type = "submit";
    submit.value = "Send";



    form.appendChild(inputname);
    form.appendChild(email);
    form.appendChild(inputnumber);
    form.appendChild(textarea);
    form.appendChild(submit);

    popupbox.appendChild(form);
    document.body.appendChild(popupbox);

    let closebutton = document.createElement("span");
    closebutton.className = "close-button";
    let close = document.createTextNode("x");
    closebutton.appendChild(close);
    popupbox.appendChild(closebutton);
    document.body.appendChild(popupbox);



});


document.addEventListener("click", (e) => {
    if (e.target.className == "close-button" || e.target.className == "popup-overlay") {
        // e.target.parentNode.remove();
        document.querySelector(".popup-box").remove();
        document.querySelector(".popup-overlay").remove();
    }
})





mobiscroll.setOptions({
    locale: mobiscroll
        .localeAr, // Specify language like: locale: mobiscroll.localePl or omit setting to use default
    theme: 'ios', // Specify theme like: theme: 'ios' or omit setting to use default
    themeVariant: 'light' // More info about themeVariant: https://docs.mobiscroll.com/5-16-1/javascript/calendar#opt-themeVariant
});

mobiscroll.datepicker('#demo', {
    controls: ['calendar',
        'time'
    ], // More info about controls: https://docs.mobiscroll.com/5-16-1/javascript/calendar#opt-controls
    display: 'inline' // Specify display mode like: display: 'bottom' or omit setting to use default
});

// mobiscroll.datepicker('#demo-timegrid', {
//     controls: ['calendar', 'timegrid'],  // More info about controls: https://docs.mobiscroll.com/5-16-1/javascript/calendar#opt-controls
//     display: 'inline'                    // Specify display mode like: display: 'bottom' or omit setting to use default
// });







let allimages = document.querySelectorAll(".alldoctors .box button");
allimages.forEach(button => {
    button.addEventListener("click", (e) => {
        let popupoverlay = document.createElement("div");
        popupoverlay.className = "popup-overlay";
        document.body.appendChild(popupoverlay);

        let popupbox = document.createElement("div");
        popupbox.className = "popup-box";

        let heading = document.createElement("h1");
        let headtxt = document.createTextNode("Booking Information");
        heading.appendChild(headtxt);
        popupbox.appendChild(heading);
        document.body.appendChild(popupbox);


        let form2 = document.createElement("form");
        // form2.setAttribute("method", "get");
        // form2.setAttribute("action", "submit.php");


        let inputname = document.createElement("input");
        inputname.required = true;
        inputname.className = "name";
        inputname.type = "text";
        inputname.placeholder = "Your Name";
        inputname.value = "";


        let inputnumber = document.createElement("input");
        inputnumber.required = true;
        inputname.className = "number";
        inputnumber.type = "text";
        inputnumber.placeholder = "Your Number";
        inputnumber.value = "";

        // let submit = document.createElement("input");
        // submit.className = "active2";
        // submit.type = "submit";
        // submit.value = "Send";


        form2.appendChild(inputname);
        form2.appendChild(inputnumber);
        // form2.appendChild(submit);

        popupbox.appendChild(form2);
        document.body.appendChild(popupbox);


        let payheader = document.createElement("h2");
        let paytext = document.createTextNode("Payment Method");
        payheader.appendChild(paytext);
        popupbox.appendChild(payheader);
        document.body.appendChild(popupbox);


        let paymenticon = document.createElement("i");
        paymenticon.className = "fa fa-credit-card custom icon";
        popupbox.appendChild(paymenticon);
        document.body.appendChild(popupbox);

        let pay = document.createElement("a");
        pay.className = "link";
        pay.href = "https://buy.stripe.com/test_00g7w93BN8GhaXe288";
        let paytxt = document.createTextNode("Pay");
        pay.appendChild(paytxt);
        popupbox.appendChild(pay);
        document.body.appendChild(popupbox);





        let closebutton = document.createElement("span");
        closebutton.className = "close-button";
        let close = document.createTextNode("x");
        closebutton.appendChild(close);
        popupbox.appendChild(closebutton);
        document.body.appendChild(popupbox);



    });
});

document.addEventListener("click", (e) => {
    if (e.target.className == "close-button" || e.target.className == "popup-overlay") {
        // e.target.parentNode.remove();
        document.querySelector(".popup-box").remove();
        document.querySelector(".popup-overlay").remove();
    }
})