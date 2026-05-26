let a = document.getElementById("input-num");
let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    let num = parseInt(a.value);
    let result = document.getElementById("result");

    if(num%2 ===0) {
        result.textContent = num + "is an even number.";
    } else{
        result.textContent = num + "is an odd number.";
    }
});