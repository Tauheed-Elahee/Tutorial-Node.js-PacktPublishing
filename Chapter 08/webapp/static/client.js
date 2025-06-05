document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btn")
    .addEventListener("click", sendReq);
});
const requestUrl = "/read";
//  Create custom JSON payload
//  sendReq = async () => {
//      let payload = [];
//      for (let i = 0; i < 5; i++) {//
//          payload.push({ id: i, message: `Payload Message: ${i}\n`});
//      }
//      const response = await fetch(requestUrl, {
//          method: "POST",
//          body: JSON.stringify(payload),
//          headers: {
//              "Content-Type": "application/json"
//          }
//      });
//      document.getElementById("msg").textContent = response.statusText;
//      document.getElementById("body").textContent = `Resp: ${await response.text()}`;
//  }

//  Send data entered into form input element
sendReq = async () => {
    const response = await fetch(requestUrl, {
        method: "POST",
        body: document.getElementById("input").value
    });
    document.getElementById("msg").textContent = response.statusText;
//  Put response in a string literal and prepend it with text to change the HTML to see live changes.
//      document.getElementById("body").textContent = `Resp: ${await response.text()}`;
//  Have reponse go into innerHTML to display HTML content.
    document.getElementById("body").innerHTML = await response.text();
}