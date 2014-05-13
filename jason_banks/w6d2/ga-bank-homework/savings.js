var Bank = Bank || {};

Bank.savingsAmount = 0;

Bank.getSavingsInput = function () {
  pre_valid_savings_input = parseFloat($("#savings_input").val());
  $savings_input = null;

  if (pre_valid_savings_input && $.isNumeric(pre_valid_savings_input) && pre_valid_savings_input > 0) {
    $savings_input = pre_valid_savings_input;
  } else {
    alert("Must enter a number greater than zero.");
  }
}

Bank.getDisplaySavings = function () {
  $display_savings = $("#display_savings");
}

Bank.displaySavingsAmount = function () {
  if (Bank.savingsAmount > 0) {
    $display_savings.parent().removeClass("zero_color").addClass("more_than_zero_color");
  } else {
    $display_savings.parent().removeClass("more_than_zero_color").addClass( "zero_color");
  }
  $display_savings.text("\xA3" + Bank.savingsAmount.toFixed(2));
}

Bank.clearSavingsInput = function () {
  $("#savings_input").val("");
}

Bank.reduceSavingsAmount = function () {
  Bank.getSavingsInput();
  Bank.getDisplaySavings();

  if ($savings_input && $savings_input > Bank.savingsAmount) {
    $overdraft = $("#overdraft");
    $overdraft.text("Profligacy! Cannot withdraw greater than your Savings Account balance.");
  } else {
    Bank.savingsAmount -= $savings_input;
  }

  Bank.displaySavingsAmount();
  Bank.clearSavingsInput();
}

Bank.increaseSavingsAmount = function () {
  Bank.getSavingsInput();
  Bank.getDisplaySavings();
  Bank.savingsAmount += $savings_input;

  Bank.displaySavingsAmount();
  Bank.clearSavingsInput();
}

Bank.clearOverdraftError = function () {
  $("#overdraft").text("");
}

Bank.setup = function () {
  $display_savings = $("#display_savings");
  Bank.displaySavingsAmount();

  $("#savings_withdraw_button").click( function (ev) {
    Bank.clearOverdraftError();
    ev.preventDefault();
    Bank.reduceSavingsAmount();
  });
  
$("#savings_deposit_button").click( function (ev) {
    Bank.clearOverdraftError();
    ev.preventDefault();
    Bank.increaseSavingsAmount();
  }); 
}

$(document).ready(Bank.setup);