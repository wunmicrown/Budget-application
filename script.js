var arr = []
var num = 300000
var num2 = 0;
if (localStorage.total) {
    num2 = localStorage.getItem("total")
  }
bal.innerHTML = `$${num}.00`
ttlExp.innerHTML = `$${num2}.00`

if (localStorage.items) {
    arr = JSON.parse(localStorage.getItem("items"))
  }
function Add() {
  if (ProductName.value !== "" && ProductCost.value !== "" && Quantity.value!=="") {
    var calc = ProductCost.value * Quantity.value
    num = num - calc
    num2 =Number( num2 )+ calc
    bal.innerHTML = `$${num}.00`
    ttlExp.innerHTML = `$${num2}.00`
    var obj = {
      Name: ProductName.value,
      Cost: ProductCost.value,
      Quantity: Quantity.value,
      Total: calc
    }
    ProductName.value="";
    ProductCost.value="";
    Quantity.value="";
    arr.push(obj)
    console.log(arr);
    localStorage.setItem("items", JSON.stringify(arr))
    localStorage.setItem("total", num2);
    erro.innerHTML = "";
    successMessage.innerHTML = "Item added successfully!";
    setTimeout(function() {
      successMessage.innerHTML = "";
    }, 3000);
  }
  else {
    erro.innerHTML = `<p style="color:red; text-align: center; font-size:20px; font-weight: 400;">Input must be filled</p>`;
  }
  
}