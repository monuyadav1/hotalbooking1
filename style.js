function calculateBalance() {
    var roomRate = document.getElementById("roomRates").value;
    var advancePayment = document.getElementById("payment").value;
    var balance = roomRate - advancePayment;
    document.getElementById("Balance").value = balance;
    var totalDays = document.getElementById("total-days").value;
    var totalRoomCost= roomRate *totalDays ;
    document.getElementById("roomCost").value = totalRoomCost;
    var selectedValue = document.querySelector('input[name="amenities"]:checked').value;
  var totalAmenitiesCost=selectedValue*totalDays;
  document.getElementById("totalAmenitiesCost").value = totalAmenitiesCost;
  var totalCost=parseInt(selectedValue)+parseInt(roomRate);
  document.getElementById("totalCost").value = totalCost;
  }

