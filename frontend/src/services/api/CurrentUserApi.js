import axios from "axios"


export const updateWishlist = async ({userId , wishlist }) => {
    const res = await axios.patch(`http://localhost:3000/users/${userId}`,{wishlist})
    return res.data
}

export const updateCart = async ({userId , cart}) =>{
    const res = await axios.patch(`http://localhost:3000/users/${userId}`,{cart});
    return res.data
}

export const updateAddress = async({userId ,address})=>{
    const response = await axios.patch(`http://localhost:3000/users/${userId}`,{address});
    return response.data ;
}

export const createOrder = async(order)=>{
    const response = await axios.post(`http://localhost:3000/orders`,order);
    return response.data
}

export const addOrderById = async ({ userId, order }) => {
    // Get current user
    const response = await axios.get(
        `http://localhost:3000/users/${userId}`
    );

    const user = response.data;

    // Add new order to existing orders
    const updatedOrders = [
        ...(user.orders || []),
        order
    ];

    // Update user
    const updatedUser = await axios.patch(
        `http://localhost:3000/users/${userId}`,
        {
            orders: updatedOrders
        }
    );

    return updatedUser.data;
};
