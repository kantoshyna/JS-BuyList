function buyProduct(params) {}

function addProduct(params) {
  var newItem = document.getElementById("myInput").value;
  if (newItem == "" || document.getElementById(newItem) != null) return;
  var newDiv = document.createElement("div");
  newDiv.id = newItem;
  newDiv.className = "product";
  document.getElementById("leftcont").appendChild(newDiv);

  var productLabel = document.createElement("div");
  productLabel.className = "label";
  productLabel.innerText = newItem;
  document.getElementById(newItem).appendChild(productLabel);

  var productCount = document.createElement("div");
  productCount.className = "count";
  document.getElementById(newItem).appendChild(productCount);

  var minusButton = document.createElement("button");
  minusButton.className = "round_button tooltip";
  minusButton.id = "cancel";
  minusButton.innerText = "-";
  productCount.appendChild(minusButton);

  var minusTooltip = document.createElement("span");
  minusTooltip.className = "tooltiptext";
  minusTooltip.innerText = "Decrement";
  minusButton.appendChild(minusTooltip);

  var productNumlabel = document.createElement("span");
  productNumlabel.className = "numlabel";
  productNumlabel.innerText = "1";
  productCount.appendChild(productNumlabel);

  var plusButton = document.createElement("button");
  plusButton.className = "round_button tooltip";
  plusButton.innerText = "+";
  productCount.appendChild(plusButton);

  var plusTooltip = document.createElement("span");
  plusTooltip.className = "tooltiptext";
  plusTooltip.innerText = "Increment";
  plusButton.appendChild(plusTooltip);

  var productButtons = document.createElement("div");
  productButtons.className = "buttons";
  document.getElementById(newItem).appendChild(productButtons);

  var button1 = document.createElement("button");
  button1.className = "button tooltip";
  button1.innerText = "Купленo";
  productButtons.appendChild(button1);

  var b1tooltip = document.createElement("span");
  b1tooltip.className = "tooltiptext";
  b1tooltip.innerText = "Bought";
  button1.appendChild(b1tooltip);

  var button2 = document.createElement("button");
  button2.className = "button tooltip";
  button2.innerText = "x";
  button2.id = "cancel";
  productButtons.appendChild(button2);

  var b2tooltip = document.createElement("span");
  b2tooltip.className = "tooltiptext";
  b2tooltip.innerText = "Cancel";
  button2.appendChild(b2tooltip);

  var inList = document.createElement("span");
  inList.className = "item";
  inList.innerText = newItem;
  document.getElementById("left").appendChild(inList);

  var orangeNum = document.createElement("span");
  orangeNum.className = "orange-button";
  orangeNum.innerText = "1";
  inList.appendChild(orangeNum);
}

function renderProduct(itemValue) {
  return "<div class='product' id='" + itemValue + "'></div>";
}
