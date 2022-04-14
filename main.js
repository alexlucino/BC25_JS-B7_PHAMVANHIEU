var numberArray = [];

document.getElementById("btnAdd").onclick = function () {
  numberArray.push(document.getElementById("txtNumber").value * 1);
  console.log(numberArray);
  document.getElementById("arrayNumber").innerHTML = "Mảng: " + numberArray;
};
document.getElementById("btnDel").onclick = function () {
  numberArray = [];
  document.getElementById("arrayNumber").innerHTML = "Mảng: ";
};

//Bài 1:
document.getElementById("btnB1").onclick = function () {
  var tong = 0;
  for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      tong += numberArray[i];
    }
  }
  document.getElementById("ketQua").innerHTML = "Tổng là: " + tong;
};

//Bài 2:
document.getElementById("btnB2").onclick = function () {
  var count = 0;
  for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      count++;
    }
  }
  document.getElementById("ketQua").innerHTML =
    "Có " + count + " số dương trong mảng";
};

//Bài 3:
document.getElementById("btnB3").onclick = function () {
  var minNum = numberArray[0];
  for (i = 1; i < numberArray.length; i++) {
    if (numberArray[i] < minNum) {
      minNum = numberArray[i];
    }
  }
  document.getElementById("ketQua").innerHTML = "Số nhỏ nhất là: " + minNum;
};

//Bài 4:
document.getElementById("btnB4").onclick = function () {
  var minNum = numberArray[0];
  for (i = 1; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      if (numberArray[i] < minNum) {
        minNum = numberArray[i];
      }
    }
  }
  document.getElementById("ketQua").innerHTML =
    "Số dương nhỏ nhất là: " + minNum;
};

//Bài 5:
document.getElementById("btnB5").onclick = function () {
  var number = functionB5();
  document.getElementById("ketQua").innerHTML =
    "Số chẵn cuối cùng là: " + number;
};
function functionB5() {
  var number = -1;
  for (var i = numberArray.length - 1; i >= 0; i--) {
    if (numberArray[i] % 2 === 0) {
      number = numberArray[i];
      break;
    }
  }
  return number;
}

//Bài 6:
document.getElementById("btnB6").onclick = function () {
  var numT1 = document.getElementById("numT1").value * 1;
  var numT2 = document.getElementById("numT2").value * 1;
  var numT3 = numberArray[numT1];
  numberArray[numT1] = numberArray[numT2];
  numberArray[numT2] = numT3;
  document.getElementById("arrayNumber").innerHTML = "Mảng: " + numberArray;
};

//Bài 7:
document.getElementById("btnB7").onclick = function () {
  for (var i = 0; i < numberArray.length - 1; i++) {
    for (var j = i + 1; j < numberArray.length; j++) {
      if (numberArray[i] > numberArray[j]) {
        var num = numberArray[i];
        numberArray[i] = numberArray[j];
        numberArray[j] = num;
      }
    }
  }
  document.getElementById("arrayNumber").innerHTML = "Mảng: " + numberArray;
};

//Bài 8:
function checkSNT(n) {
  var soNT = true;
  if (n < 2) {
    soNT = false;
  } else if (n == 2) {
    soNT = true;
  } else if (n % 2 == 0) {
    soNT = false;
  } else {
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        soNT = false;
        break;
      }
    }
  }
  return soNT;
}
document.getElementById("btnB8").onclick = function () {
  var num = -1;
  for (var i = 0; i < numberArray.length; i++) {
    if (checkSNT(numberArray[i]) === true) {
      var num = numberArray[i];
      break;
    }
  }

  document.getElementById("ketQua").innerHTML =
    "Số nguyên tố đầu tiên trong mảng: " + num;
};

//Bài 9:
document.getElementById("btnB9").onclick = function () {
  var count = 0;
  for (var i = 0; i < numberArray.length; i++) {
    if (Math.ceil(numberArray[i]) == Math.floor(numberArray[i])) {
      count++;
    }
  }
  document.getElementById("ketQua").innerHTML =
    "Có " + count + " số nguyên trong mảng";
};

//Bài 10:
document.getElementById("btnB10").onclick = function () {
  var countD = 0;
  var countA = 0;
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      countD++;
    } else {
      countA++;
    }
  }
  if (countA > countD) {
    var kq = "Số âm nhiều hơn số dương";
  } else if (countA == countD) {
    var kq = "Số âm và số dương bằng nhau";
  } else {
    var kq = "Số dương nhiều hơn số âm";
  }
  document.getElementById("ketQua").innerHTML = kq;
};
