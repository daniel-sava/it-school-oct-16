function setLocalStorageData() {
    const userInformation = { name: "Andrei", wishlist: [] };
    localStorage.setItem("userInformation", JSON.stringify(userInformation));

    localStorage.setItem("session", "Sesiunea 27");
}

function getInitialWishlist() {
    const userInformation = localStorage.getItem("userInformation");
    console.log(JSON.parse(userInformation).wishlist);
}
// getInitialWishlist();

setLocalStorageData();

function getLocalStorageData() {
    const data = localStorage.getItem("userInformation");
    return JSON.parse(data);
}

getLocalStorageData();

async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    console.log(products);
    setTimeout(() => {
        addProductToWishlist(products[3]);
    }, 10000);

    setTimeout(() => {
        addProductToWishlist(products[6]);
    }, 20000);

    setTimeout(() => {
        addProductToWishlist(products[10]);
    }, 30000);

    setTimeout(() => {
        addProductToWishlist(products[10]);
    }, 40000);
}

getProducts();

function setNewLocalStorageData(data) {
    localStorage.setItem("userInformation", JSON.stringify(data));
}

function addProductToWishlist(product) {
    const currentData = getLocalStorageData();

    let isProductAlreadyInWishlist = false;

    for (let productInWishlist of currentData.wishlist) {
        if (product.id === productInWishlist.id) {
            isProductAlreadyInWishlist = true;
            break;
        }
    }

    if (!isProductAlreadyInWishlist) {
        currentData.wishlist.push(product);
        setNewLocalStorageData(currentData);
    } else {
        console.log("This product is already in wishlist");
    }
}

function clearLocalStorage() {
    localStorage.clear();
}

// setTimeout(() => {
//     clearLocalStorage();
// }, 5000);

function removeLocalStorageData() {
    localStorage.removeItem("userInformation");
}

// setTimeout(() => {
//     removeLocalStorageData();
// }, 5000);
