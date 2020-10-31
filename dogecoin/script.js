function HrenTebeANeDogeCoin(input) {
    alert("С карты " + input + " списаны все деньги")
}

function check() {
    var input = document.getElementById("card").value
    PleaseDontHurtMe(input)
    if (input.length == 16) {

        for (var i = 0; i < 16; i++) {
            if (input[i] >= '0' && input[i] <= '9' ) {
                continue 
            } else {
                alert("Вы неправильно ввели данные карты")
                return
            }
        }
        HrenTebeANeDogeCoin(input)
    }   else {
        alert("Вы неправильно ввели данные карты")
    }
}

// var example = "Misha"

// for (var i = 0; i < example.length; i++) {
//     if (example[i] == 'a') {
//         console.log("a found!")
//     }   else {
//         console.log("not a")
//     }
//     console.log(i)
// }

function PleaseDontHurtMe(input) {
    var res = 0
    for (var i = 0; i < input.length; i++) {
        res = res + parseInt(input[i])
    }
    console.log(res)
}