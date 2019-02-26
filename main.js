function renderProduct(name) {
  var productNumber = 1;
  var clone = $("#product_template").clone();
  var itemclone = $("#item_template").clone();

  itemclone.removeAttr("id");
  itemclone.removeAttr("style");
  itemclone.text(name + " ");
  itemclone.append('<span class="orange-button">1</span>');

  clone.attr("id", name);
  clone.find(".label").text(name);
  clone.find(".round_button.tooltip").click(function() {
    productNumber++;
    clone.find(".numlabel").text(productNumber);
    itemclone.find(".orange_button").text(productNumber);
  });
  clone.find(".round_button.tooltip.cancel").click(function() {
    if (productNumber > 2) {
      productNumber -= 2;
    } else {
      productNumber--;
    }
    clone.find(".numlabel").text(productNumber);
    itemclone.find(".orange_button").text(productNumber);
  });
  clone.find(".button.tooltip:contains('Купленo')").click(function() {
    clone.find(".label").css("text-decoration", "line-through");
    clone.find(".round_button").hide();
    itemclone.hide();
  });
  clone.find(".button.tooltip.cancel").click(function() {
    clone.find(".label").css("text-decoration", "none");
    clone.find(".round_button").show();
    itemclone.show();
  });

  clone.show();
  $("#leftcont").append(clone);

  itemclone.show();
  $("#left").append(itemclone);
}

function renderProduct1(itemValue) {
  return (
    '   <div class="product" id=' +
    itemValue +
    ">  " +
    '             <div class="label">  ' +
    itemValue +
    "             </div>  " +
    '             <div class="count">  ' +
    '               <button class="round_button tooltip" id="cancel">  ' +
    "                 -  " +
    '                 <span class="tooltiptext">Decrement</span>  ' +
    "               </button>  " +
    '               <span class="numlabel">1</span>  ' +
    '               <button class="round_button tooltip">  ' +
    "                 +  " +
    '                 <span class="tooltiptext">Increment</span>  ' +
    "               </button>  " +
    "             </div>  " +
    '             <div class="buttons">  ' +
    '               <button class="button tooltip">  ' +
    "                 Купленo  " +
    '                 <span class="tooltiptext">Bought</span>  ' +
    "               </button>  " +
    '               <button class="button tooltip" id="cancel">  ' +
    "                 x  " +
    '                 <span class="tooltiptext">Cancel</span>  ' +
    "               </button>  " +
    "             </div>  " +
    "          </div>  "
  );
}

$("#product_template").hide();
$("#item_template").hide();
renderProduct("Помідори");
renderProduct("Печиво");
renderProduct("Сир");

function insertNewProduct(name) {
  if (name == "" || document.getElementById(name) != null) return;
  renderProduct(name);
  $("#myInput").focus();
  $("#myInput").val("");
}
