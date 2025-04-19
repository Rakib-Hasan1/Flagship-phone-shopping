import toast from "react-hot-toast";

export const getFavorite = () => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
        return JSON.parse(favorites);
    }
    return [];
};

export const addFavorite = phone => {
    const favorites = getFavorite();
    const isExist = favorites.find(p => p.id === phone.id);
    if (isExist) {
        return toast.error("Phone Already Added!!")
    }
    else {
        favorites.push(phone);

    }
    toast.success("Phone Added to your Favorite Lists")
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const removeFavorite = id => {
    const favorites = getFavorite();
    const remainingFavorites = favorites.filter(phone => phone.id !== id);
    localStorage.setItem("favorites", JSON.stringify(remainingFavorites));
    toast.success('Removed From Favorites!!')
};



// .................



export const getCart = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    }
    return [];
};

export const addCart = phone => {
    const cart = getCart();
    const isExist = cart.find(p => p.id === phone.id);
    if (isExist) {
        return toast.error("Phone Already Added!!")
    }
    
    else {
        cart.push(phone);
    }
    toast.success('Phone Added to Cart Successfully!!')
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeCart = id => {
    const cart = getCart();
    const remainingCart = cart.filter(phone => phone.id !== id);
    localStorage.setItem("cart", JSON.stringify(remainingCart));

};