function buyProduct(params) {}

function renderProduct(itemValue) {
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

function renderItem(item) {
  return (
    '   <span class="item">' +
    item +
    '               <span class="orange-button">1</span>  ' +
    "            </span>  "
  );
}

function insertNewProduct(name) {
  if (name == "" || document.getElementById(name) != null) return;
  document.getElementById("leftcont").innerHTML += renderProduct(name);
  document.getElementById("left").innerHTML += renderItem(name);
  document.getElementById("myInput").focus();
}