export const findProductInWishlist = (cart , id) => 
    cart?.length > 0 && cart.some(product => product.id === id)