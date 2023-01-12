window.onload = function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function () {
        event.preventDefault();

        const value1 = parseInt(document.querySelector("input#value1").value);
        const value2 = parseInt(document.querySelector("input#value2").value);
        const value3 = parseInt(document.querySelector("input#value3").value);
        console.log(value1, value2, value3);

        let result = "";
        if ((value1 === value2) && (value1 === value3)) {
            result = "Equilateral";
        } else if ((value1 + value2 <= value3) || (value2 + value3 <= value1) || (value3 + value1 <= value2)) {
            result = "Not a triangle";
        } else if ((value1 === value2) || (value1 === value3) || (value2 === value3)) {
            result = "Isosceles";
        } else if ((value1 !== value2) && (value2 !== value3) && (value1 !== value3)) {
            result = "Scalene";
        }

        console.log(result);
        document.getElementById("output").innerText = result;
    });
}