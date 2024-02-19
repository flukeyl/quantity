function increase() {
    let value = document.getElementById("qty").value;
    let qty = parseInt(value) + 1;
    document.getElementById("qty").value = qty;
}

function decrease() {
    let value = document.getElementById("qty").value;
    let qty = parseInt(value) - 1;
    if (qty <= 2){
        document.getElementById("qty").value = 1
    } else {
        document.getElementById("qty").value = qty;
    }
}