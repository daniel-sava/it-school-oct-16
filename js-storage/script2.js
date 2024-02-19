function setSessionStorageData() {
    const userInformation = { name: "Andrei", wishlist: [] };
    sessionStorage.setItem("userInformation", JSON.stringify(userInformation));

    sessionStorage.setItem("session", "Sesiunea 27");
}

function getInitialWishlist() {
    const userInformation = sessionStorage.getItem("userInformation");
    console.log(JSON.parse(userInformation).wishlist);
}
// getInitialWishlist();

setSessionStorageData();

function getSessionStorageData() {
    const data = sessionStorage.getItem("userInformation");
    return JSON.parse(data);
}

getSessionStorageData();

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

function setNewSessionStorageData(data) {
    sessionStorage.setItem("userInformation", JSON.stringify(data));
}

function addProductToWishlist(product) {
    const currentData = getSessionStorageData();

    let isProductAlreadyInWishlist = false;

    for (let productInWishlist of currentData.wishlist) {
        if (product.id === productInWishlist.id) {
            isProductAlreadyInWishlist = true;
            break;
        }
    }

    if (!isProductAlreadyInWishlist) {
        currentData.wishlist.push(product);
        setNewSessionStorageData(currentData);
    } else {
        console.log("This product is already in wishlist");
    }
}

function clearSessionStorage() {
    sessionStorage.clear();
}

// setTimeout(() => {
//     clearSessionStorage();
// }, 5000);

function removeSessionStorageData() {
    sessionStorage.removeItem("userInformation");
}

// setTimeout(() => {
//     removeSessionStorageData();
// }, 5000);
