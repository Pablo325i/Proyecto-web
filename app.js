function taskHandler() {
    const FnameElem = document.getElementById("FirstName")
    const LnameElem = document.getElementById("LastName")
    const EmailElem = document.getElementById("Email")
    const CompanyElem = document.getElementById ("companyname")
    const phoneElem = document.getElementById("Phone")
    const messageElem = document.getElementById("Message")

    const firstName = FnameElem.value;
    const lastName = LnameElem.value;
    const Email = EmailElem.value;
    const company = CompanyElem.value;
    const Phone = phoneElem.value;
    const message = messageElem.value;

    const info = {firstName, lastName, Email, company, Phone, message };
    if (firstName && lastName && Email && company && Phone && message) {
        TaskAlert(info);
    }
    
}

function TaskAlert(info) {
    console.log("task:", info);
    const { firstName, lastName, Email, company, Phone, message } = info;
    window.alert(
      `First name: ${firstName}, Last name: ${lastName}, Email: ${Email}, Company: ${company}, Phone: ${Phone}, Message: ${message} `
    );
  }


function listenerBtn() {
    const sendBtn = document.getElementsByClassName("send-btn")[0];
    const formElem = document.getElementsByTagName("form")[0];
    formElem.addEventListener("submit", (event) => {
    event.preventDefault();})
    sendBtn.addEventListener("click", taskHandler);
}
listenerBtn()
