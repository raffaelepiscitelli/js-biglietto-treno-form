const button = document.querySelector("button");
button.addEventListener ("click", function (){
    const numberKm = parseFloat (document.getElementById("number-km").value);
    const passengerAge = parseInt (document.getElementById("age").value);
    const ticketPricePerKm = 0.1976;
    let ticketPrice = numberKm * ticketPricePerKm;
    const minorAge = passengerAge < 18;
    const seniorAge = passengerAge > 65;
    const minorAgeDiscount = ticketPrice * 17.65 / 100;
    const seniorAgeDiscount = ticketPrice * 53.27 / 100;
    if (minorAge) {ticketPrice = ticketPrice - minorAgeDiscount};
    if (seniorAge) {ticketPrice = ticketPrice - seniorAgeDiscount};
    finalTicketPrice.innerHTML += ticketPrice.toFixed(2) + "€";
})