function renderProduct(name) {
  var productNumber = 1;
  var clone = $("#product_template").clone();
  var itemclone = $("#item_template").clone();
  var boughtitemclone = $("#bought-item_template").clone();

  itemclone.removeAttr("id");
  itemclone.removeAttr("style");
  itemclone.text(name + " ");
  itemclone.append('<span class="orange-button">1</span>');

  boughtitemclone.removeAttr("id");
  boughtitemclone.text(name + " ");
  boughtitemclone.append(
    '<span class="orange-button" style="text-decoration: line-through">1</span>'
  );

  clone.attr("id", name);
  clone.find(".label").text(name);
  clone.find(".round_button.tooltip").click(function() {
    productNumber++;
    clone.find(".numlabel").text(productNumber);
    itemclone.find(".orange-button").text(productNumber);
  });
  clone.find(".round_button.tooltip.cancel").click(function() {
    if (productNumber > 2) {
      productNumber -= 2;
    } else {
      productNumber--;
    }
    clone.find(".numlabel").text(productNumber);
    itemclone.find(".orange-button").text(productNumber);
  });
  clone.find(".button.tooltip:contains('Купленo')").click(function() {
    clone.find(".label").css("text-decoration", "line-through");
    clone.find(".round_button").hide();
    itemclone.hide();
    boughtitemclone.find(".orange-button").text(productNumber);
    boughtitemclone.show();
  });
  clone.find(".button.tooltip.cancel").click(function() {
    clone.find(".label").css("text-decoration", "none");
    clone.find(".round_button").show();
    itemclone.show();
    boughtitemclone.hide();
  });

  clone.show();
  $("#leftcont").append(clone);

  itemclone.show();
  $("#left").append(itemclone);

  boughtitemclone.hide();
  $("#cart").append(boughtitemclone);
}

$("#product_template").hide();
$("#item_template").hide();
$("#bought-item_template").hide();
renderProduct("Помідори");
renderProduct("Печиво");
renderProduct("Сир");

function insertNewProduct(name) {
  if (name == "" || document.getElementById(name) != null) return;
  renderProduct(name);
  $("#myInput").focus();
  $("#myInput").val("");
}
