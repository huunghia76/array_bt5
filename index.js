function exercise1() {
    var arrNum = [];
    arrNum = arrBt1.length;
    var total = 0;
    for (let index = 0; index < arrNum; index++) {
        if (arrBt1[index] > 0) {
            total += arrBt1[index];
        }
    }
    document.getElementById('result1').innerHTML = "Mảng hiện tại là:" + arrBt1 + " | Tổng các phẩn tử trong mảng này là: <span class='text-danger'> " + total + '</span> ';
}
function addNumber(idInput, idResult, arr) {

    var inputNumberArrayOne = +document.getElementById(idInput).value;
    arr.push(inputNumberArrayOne);
    console.log(arr);
    document.getElementById(idResult).innerHTML = "Mảng hiện tại là: [ " + arr + ' ]';
    document.getElementById(idResult).classList.add('p-3');
    document.getElementById(idInput).value = '';
    document.getElementById(idInput).focus();
    return arr;//return về mảng nhưng ko thể sử dụng hàm để gán
}

var arrBt1 = [];
document.getElementById("addNumber").onclick = function () { addNumber("inputNumberArrayOne", 'result1', arrBt1) };
document.getElementById("submit1").onclick = exercise1;

function exercise2() {
    var arrNum = [];
    arrNum = arrBt2.length;
    var count = 0;
    for (let index = 0; index < arrNum; index++) {
        if (arrBt2[index] >= 0) {
            count++;
            console.log(count);
        }
        console.log(count);
    }
    document.getElementById('result2').innerHTML = "Mảng hiện tại là:" + arrBt2 + " | Có : <span class='text-danger'> " + count + '</span> số dương trong mảng';

    // return count;
}
var arrBt2 = [];
document.getElementById("addNumber2").onclick = function () { addNumber("inputNumberArrayTwo", 'result2', arrBt2) };
document.getElementById("submit2").onclick = exercise2;



function exercise3() {
    var arrNum = [];
    arrNum = arrBt3.length;
    let min = arrBt3[0];

    for (let index = 0; index < arrNum; index++) {
        if (min > arrBt3[index]) { //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
            min = arrBt3[index];
        }
    }
    document.getElementById('result3').innerHTML = "Mảng hiện tại là:" + arrBt3 + " |  <span class='text-danger'> " + min + '</span> là số nhỏ nhất trong mảng.';
}
var arrBt3 = [];
document.getElementById("addNumber3").onclick = function () { addNumber("inputNumberArrayThree", 'result3', arrBt3) };
document.getElementById("submit3").onclick = exercise3;



function exercise4() {
    var arrNum = [];
    arrNum = arrBt4.length;
    var intMin;

    for (let index = 0; index < arrNum; index++) {
        if (Number.isInteger(arrBt4[index]) && arrBt4[index] > 0) {
            for (let j = 0; j < arrNum; j++) {
                if (arrBt4[index] >= arrBt4[j] && arrBt4[j] > 0) {
                    intMin = arrBt4[j];
                }
            }
            break
        }

    }
    document.getElementById('result4').innerHTML = "Mảng hiện tại là:" + arrBt4 + " |  <span class='text-danger'> " + intMin + '</span> là số nguyên dương nhỏ nhất trong mảng ';
}
var arrBt4 = [];
document.getElementById("addNumber4").onclick = function () { addNumber("inputNumberArrayFour", 'result4', arrBt4) };
document.getElementById("submit4").onclick = exercise4;






function exercise5() {
    var arrNum = [];
    arrNum = arrBt5.length;
    var numEven = -1;

    for (let index = arrNum; index > 0; index--) {
        if (arrBt5[index] % 2 === 0 ) {
            numEven = arrBt5[index]
            break
        }
    }
    document.getElementById('result5').innerHTML = "Mảng hiện tại là: " + arrBt5 + " |  <span class='text-danger'> " + numEven + '</span> là số chẵn cuối cùng trong mảng ';
}
var arrBt5 = [];
document.getElementById("addNumber5").onclick = function () { addNumber("inputNumberArrayFive", 'result5', arrBt5) };
document.getElementById("submit5").onclick = exercise5;


var arrBt6 = [];
function exercise6(index1, index2) {
    var arrNum = [];
    arrNum = arrBt6.length;
    var arrOur = arrBt6.filter(() => true);
    var temp = 0;
    var indexInput1 = document.getElementById(index1).value * 1;
    var indexInput2 = document.getElementById(index2).value * 1;
    for (let index = 0; index < arrNum; index++) {
        if (index === indexInput1) {
            temp = arrBt6[index];
            arrBt6[index] = arrBt6[indexInput2];
        }
        if (index === indexInput2) {
            arrBt6[index] = temp;
        }

    }
    document.getElementById('result6').innerHTML = "Mảng trước khi đổi: " + arrOur + " Mảng sau khi đổi : <span class='text-danger'> " + arrBt6 + '</span> ';
}
document.getElementById("addNumber6").onclick = function () { addNumber("inputNumberArraySix", 'result6', arrBt6) };
document.getElementById("submit6").onclick = function () {
    exercise6('inputNumberFive1', 'inputNumberFive2');
}


var arrBt7 = [];
function exercise7() {
    var arrNum = [];
    arrNum = arrBt7.length;
    var arrOur = arrBt7.filter(() => true);

    for (let index = 0; index < arrNum; index++) {
        for (let j = 0; j < arrNum; j++) {
            if (arrBt7[index] < arrBt7[j]) {
                var temp = 0;
                temp = arrBt7[index]
                arrBt7[index] = arrBt7[j]
                arrBt7[j] = temp
            }

        }
    }

    document.getElementById('result7').innerHTML = "Mảng trước khi đổi: " + arrOur + " Mảng sau khi sắp xếp : <span class='text-danger'> " + arrBt7 + '</span> ';
}
document.getElementById("addNumber7").onclick = function () { addNumber("inputNumberArraySeven", 'result7', arrBt7) };
document.getElementById("submit7").onclick = exercise7;


var arrBt8 = [];
function exercise8() {
    var arrNum = [];
    arrNum = arrBt8.length;
    var number = -1;
    for (let index = 0; index < arrNum; index++) { // -4 4 6 8 5
        // debugger
        if (arrBt8[index] === 2) {
            number = arrBt8[index]
            break
        }
        if (arrBt8[index] < 2) {
            number = -1;
        } else if (arrBt8[index] % 2 == 0) {
            number = -1;
        } else {
            var dem = 0
            for (var j = 2; j <= Math.sqrt(arrBt8[index]); j+=2) {
                if (arrBt8[index] % j === 0) {
                    dem++
                    break; 
                }
            }
            if (dem === 0) {
                number = arrBt8[index] ;
                break;
            }
        }
    }
   

    document.getElementById('result8').innerHTML = "Mảng hiện tại: " + arrBt8 + " Số nguyên tố đầu tiên trong mảng là : <span class='text-danger'> " + number + '</span> ';
}
document.getElementById("addNumber8").onclick = function () { addNumber("inputNumberArrayEight", 'result8', arrBt8) };
document.getElementById("submit8").onclick = exercise8;
//sos nguyên tố
// if (arrBt8[index] % 2 === 0 || arrBt8[index] % 3 === 0 || arrBt8[index] % 5 === 0 || arrBt8[index] % 7 === 0) {
//     if (arrBt8[index] === 2 || arrBt8[index] === 3 || arrBt8[index] === 5 || arrBt8[index] === 7) {
//         number = arrBt8[index];
//         break
//     } else {
//         number = -1;
//     }
// } else {
//     number = arrBt8[index];
//     break
// }

var arrBt9 = [];
function exercise9() {
    var arrNum = [];
    arrNum = arrBt9.length;
    var count = 0;
    for (let index = 0; index < arrNum; index++) {
        if (Number.isInteger(arrBt9[index])) {
            count++
        }
    }

    document.getElementById('result9').innerHTML = "Mảng hiện tại: [" + arrBt9 + "] || Có " + count + " số nguyên trong mảng ";
}
document.getElementById("addNumber9").onclick = function () { addNumber("inputNumberArrayNine", 'result9', arrBt9) };
document.getElementById("submit9").onclick = exercise9;


var arrBt10 = [];
function exercise10() {
    var arrNum = [];
    arrNum = arrBt10.length;
    var countPositive = 0;
    var countSound = 0;
    var text = "";
    for (let index = 0; index < arrNum; index++) {
        if (arrBt10[index] != 0) {
            if (arrBt10[index] > 0) {
                countPositive++
            } else {
                countSound++
            }
        }
    }
    if (countPositive > countSound) {
        text = "Số lượng số dương lớn hơn số âm";
    } else if (countPositive < countSound) {
        text = "Số lượng số âm lớn hơn số dương";
    } else {
        text = "Số lượng số âm và dương bằng nhau";
    }

    document.getElementById('result10').innerHTML = "Mảng hiện tại: [" + arrBt10 + "] || Có " + countPositive + " số dương || Có " + countSound + " số âm ==> " + text;
}
document.getElementById("addNumber10").onclick = function () { addNumber("inputNumberArrayTen", 'result10', arrBt10) };
document.getElementById("submit10").onclick = exercise10;



