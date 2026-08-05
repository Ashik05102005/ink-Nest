import axios from "axios"


export const updateWishlist = async ({userId , wishlist }) => {
    const res = await axios.patch(`http://localhost:3000/users/${userId}`,{wishlist})
    return res.data
}