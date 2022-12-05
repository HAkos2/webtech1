function setCart() {
  var cart = JSON.parse(localStorage.getItem("cart"));

  $('.dropdown-content').empty()

  var emptyCartElement = document.createElement('a');
  emptyCartElement.onclick = function() {
    localStorage.removeItem("cart");
    $("#cartDropDownContent").slideUp('medium');
    $(".dropbtn").html("Kosár")
    setTimeout(setCart, 500)
  }
  emptyCartElement.innerHTML = "Kosár törlése"

  if (cart != null && cart.length > 0) {
    $('.dropbtn').html("Kosár: " + cart.length)

    for (let i = 0; i < cart.length; i++) {
      var item = document.createElement('a');
      item.innerHTML = cart[i].name;

      $('.dropdown-content').append(item);
    }

    $('.dropdown-content').append(emptyCartElement);

  } else {
    $(".dropbtn").html("Kosár");

    var item = document.createElement('a');
    item.innerHTML = "A kosara üres.";

    $(".dropdown-content").html("");
    $(".dropdown-content").append(item);
  }
}

class Product {
  constructor(name) {
    this.name = name;
  }
  name;
  id;
  price;
  img;
}

function addToCart(element) {
  const productElement = element.parentElement.parentElement;
  const name = $(productElement).find(".product_title").html();
  var product = new Product(name);
  product.id = productElement.id;
  product.img = $(productElement).find("img").attr("src")
  product.price = $(productElement).find(".product_price").html();

  var cart = [];
  if (localStorage.getItem("cart") == null) {

    cart[0] = product;

    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  setCart();
}
