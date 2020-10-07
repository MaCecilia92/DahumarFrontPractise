window.onload = function () {

    var localStorageKeyName = 'data';

    loadFromLocalStorage();

    var allButtons = document.querySelectorAll(".btnAdd");
    allButtons.forEach(function (x) {

        var content = x.parentElement.children[2].children;
        var name = content[0].textContent;
        var quantity = content[1].textContent;
        var price = content[2].textContent;

        var product = {
            name: name,
            quantity: quantity,
            price: price
        };

        x.addEventListener('click', function () {
            if (x.className === "btnAdd icon-star-full") {
                x.className = "btnAdd icon-star-empty";
                removeFromLocalStorage(x.getAttribute("data"));

                var allSelectedButtons = document.querySelectorAll(".icon-star-full");
                allSelectedButtons.forEach(function (y) {
                    if (y.getAttribute("data") > x.getAttribute("data"))
                    {
                        y.setAttribute("data", y.getAttribute("data") - 1)
                    }
                })
            } else {
                x.className = "btnAdd icon-star-full";
                appendObjectToLocalStorage(product);
                x.setAttribute("data", JSON.parse(localStorage.getItem(localStorageKeyName)).length - 1);
            }
        })
    });

    function appendObjectToLocalStorage(obj) {
        var products = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        if (dataInLocalStorage !== null) {
            products = JSON.parse(dataInLocalStorage);
        }

        products.push(obj);

        localStorage.setItem(localStorageKeyName, JSON.stringify(products));

        loadFromLocalStorage();
    }

    function loadFromLocalStorage() {
        var products = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName),
            gridBody = document.querySelector("#wishTable tbody");

        if (dataInLocalStorage !== null) {
            products = JSON.parse(dataInLocalStorage);
        } else {
            defaultMessage();
            return;
        }

        if (JSON.parse(dataInLocalStorage).length <= 0)
        {
            defaultMessage();
            return;
        }

        // Draw TR from TBODY
        gridBody.innerHTML = '';

        products.forEach(function (x, i) {
            var tr = document.createElement("tr"),
                thName = document.createElement("th"),
                thQuantity = document.createElement("th"),
                thPrice= document.createElement("th"),
                thRemove = document.createElement("th"),
                btnRemove = document.createElement("button");

            thName.innerHTML = x.name;
            thQuantity.innerHTML = x.quantity;
            thPrice.innerHTML = x.price;

            thName.className = 'items';
            thQuantity.className = 'items';
            thPrice.className = 'items';
            thRemove.style.width = '60px';
            btnRemove.className = 'borrarItem icon-bin';
            btnRemove.addEventListener('click', function(){
                var allSelectedButtons = document.querySelectorAll(".icon-star-full");
                allSelectedButtons.forEach(function (y) {
                    if (y.getAttribute("data") == i)
                    {
                        y.className = "btnAdd icon-star-empty";
                    }
                    if (y.getAttribute("data") > i)
                    {
                        y.setAttribute("data", y.getAttribute("data") - 1)
                    }
                });

                removeFromLocalStorage(i);
            });

            thRemove.appendChild(btnRemove);

            tr.appendChild(thName);
            tr.appendChild(thQuantity);
            tr.appendChild(thPrice);
            tr.appendChild(thRemove);

            gridBody.appendChild(tr);
        });
    }

    function removeFromLocalStorage(index){
        var products = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        products = JSON.parse(dataInLocalStorage);

        products.splice(index, 1);

        localStorage.setItem(localStorageKeyName, JSON.stringify(products));

        loadFromLocalStorage();
    }

    function defaultMessage() {
        var gridBody = document.querySelector("#wishTable tbody");
        gridBody.innerHTML = '<th></th><th><p>Tu lista de deseos se encuentra vacía</p></th><th></th>';
    }

    var deleteAll = document.getElementById('borraTodo');

    deleteAll.addEventListener('click', function () {
        localStorage.removeItem(localStorageKeyName);
        loadFromLocalStorage();

        var allButtons = document.querySelectorAll(".btnAdd");
        allButtons.forEach(function (x) {
            x.className = "btnAdd icon-star-empty";
        })
    })

};
