//memory-cost

document.getElementById("memory1").addEventListener("click", increaseMemory1);

function increaseMemory1() {
    document.getElementById("extra-memory").innerHTML = "0";
}
document.getElementById("memory2").addEventListener("click", increaseMemory2);

function increaseMemory2() {
    document.getElementById("extra-memory").innerHTML = "180";
}
//Storage cost
document.getElementById("storage256").addEventListener("click", increaseStorage1);

function increaseStorage1() {
    document.getElementById("extra-storage").innerHTML = "0";
}
document.getElementById("storage512").addEventListener("click", increaseStorage2);

function increaseStorage2() {
    document.getElementById("extra-storage").innerHTML = "100";
}
document.getElementById("storage1tb").addEventListener("click", increaseStorage3);

function increaseStorage3() {
    document.getElementById("extra-storage").innerHTML = "180";
}
//extra-delivery-cost 
document.getElementById("free_delivery").addEventListener("click", freeDelivery);

function freeDelivery() {
    document.getElementById("extra-delivery").innerHTML = "0";
}
document.getElementById("cost_delivery").addEventListener("click", costDelivery);

function costDelivery() {
    document.getElementById("extra-delivery").innerHTML = "20";

}

//calculateTotal
function calculateTotal() {
    const memoryinput = document.getElementById('extra-memory');
    const memoryCost = memoryinput.Value;
    const totalMemoryCost = memoryCost + 1299;

    const deliveryCost = document.getElementById('extra-delivery');
    const extraDeliveryCost = deliveryCost.Value;
    const totaldeliveryCost = extraDeliveryCost + 1299;

    const totalPrice = totalMemoryCost + totaldeliveryCost;
    // update on the html
    document.getElementById('total-price').innerText = totalPrice;

}