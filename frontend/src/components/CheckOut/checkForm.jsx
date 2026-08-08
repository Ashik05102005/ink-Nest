import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {useSelector} from "react-redux"
import {useAddAddress} from '../../hooks/useAddAddress'
import { checkoutSchema } from "../../Schema/CheckoutSchema";

function CheckoutForm({selectedAddress, setSelectedAddress}) {

    const currentUser = useSelector((state)=>state.currentUser.currentUser)
    const [errors,setErrors]=useState({});
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [address,setAddress] = useState([])
    useEffect(()=>{
        setAddress(currentUser?.address||[] )
        console.log(address);
    },[selectedAddress])

    const [formData, setFormData] = useState({
        fullName: "",
        address: "",
        city: "",
        pincode: "",
        phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = checkoutSchema.safeParse(formData);

         if (!result.success) {
            setErrors(result.error.flatten().fieldErrors);
            return ;
       
        }
        updateAddressMutation.mutate({
            userId : currentUser.id,
            address:[...address,formData]
        },
        {
            onSuccess:(newAddress)=>{
                console.log("suceed" );

                setSelectedAddress(newAddress);

                // Close form
                setShowAddressForm(false);

                // Clear form
                setFormData({
                    fullName: "",
                    address: "",
                    city: "",
                    pincode: "",
                    phone: ""
                });

                setErrors({});
            }
        })
        

        
    };
    

    const updateAddressMutation = useAddAddress()

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >

            {/* Heading */}

            <div className="flex items-center gap-3 mb-6">

                <div className="w-9 h-9 rounded-lg bg-[#1D7A46]/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-[#1D7A46]" />
                </div>

                <h2 className="text-xl font-semibold">
                    Delivery Address
                </h2>

            </div>


            {/* =========================
                EXISTING ADDRESSES
            ========================== */}

            {address.length > 0 && !showAddressForm && (

                <div>

                    <div className="flex justify-between items-center mb-4">

                        <h3 className="font-medium text-gray-800">
                            Select an Address
                        </h3>

                        <button
                            type="button"
                            onChange={() => setShowAddressForm(true)}
                            className="text-[#1D7A46] font-medium hover:underline"
                        >
                            + Add New Address
                        </button>

                    </div>


                    <div className="space-y-3">

                        {address.map((item) => (

                            <label
                                key={item.id}
                                className={`
                                    flex gap-3 p-4 border rounded-xl cursor-pointer transition
                                    ${
                                        selectedAddress?.id === item.id
                                            ? "border-[#1D7A46] bg-[#1D7A46]/5"
                                            : "border-gray-200 hover:border-[#1D7A46]/50"
                                    }
                                `}
                            >

                                <input
                                    type="radio"
                                    name="deliveryAddress"
                                    checked={
                                        selectedAddress?.id === item.id
                                    }
                                    onChange={() => setSelectedAddress(item)}
                                    className="mt-1 accent-[#1D7A46]"
                                />


                                <div>

                                    <p className="font-medium text-gray-800">
                                        {item.fullName}
                                    </p>

                                    <p className="text-sm text-gray-600 mt-1">
                                        {item.address}
                                    </p>

                                    <p className="text-sm text-gray-600">
                                        {item.city} - {item.pincode}
                                    </p>

                                    <p className="text-sm text-gray-600 mt-1">
                                        Phone: {item.phone}
                                    </p>

                                </div>

                            </label>

                        ))}

                    </div>


                    {/* Continue with selected address */}

                    <button
                        type="button"
                        disabled={!selectedAddress}
                        className="
                            mt-6
                            bg-[#1D7A46]
                            text-white
                            px-6 py-3
                            rounded-lg
                            font-medium
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                            hover:bg-[#176238]
                            transition
                        "
                    >
                        Continue
                    </button>

                </div>
            )}


            {/* =========================
                ADD NEW ADDRESS FORM
            ========================== */}

            {(showAddressForm || address.length === 0) && (

                <>

                    {/* Back button */}

                    {address.length > 0 && (

                        <button
                            type="button"
                            onClick={() => setShowAddressForm(false)}
                            className="text-sm text-gray-500 hover:text-[#1D7A46] mb-5"
                        >
                            ← Back to saved addresses
                        </button>

                    )}


                    <div className="grid md:grid-cols-2 gap-5">


                        {/* Full Name */}

                        <div className="md:col-span-2">

                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="
                                    w-full
                                    border border-gray-300
                                    rounded-lg
                                    px-4 py-3
                                    outline-none
                                    focus:border-[#1D7A46]
                                    focus:ring-2
                                    focus:ring-[#1D7A46]/10
                                    transition
                                "
                            />

                            {errors.fullName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.fullName[0]}
                                </p>
                            )}

                        </div>


                        {/* Address */}

                        <div className="md:col-span-2">

                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Address
                            </label>

                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="House no., street, area, landmark"
                                rows="3"
                                className="
                                    w-full
                                    border border-gray-300
                                    rounded-lg
                                    px-4 py-3
                                    outline-none
                                    resize-none
                                    focus:border-[#1D7A46]
                                    focus:ring-2
                                    focus:ring-[#1D7A46]/10
                                    transition
                                "
                            />

                            {errors.address && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.address[0]}
                                </p>
                            )}

                        </div>


                        {/* City */}

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                City
                            </label>

                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Enter city"
                                className="
                                    w-full
                                    border border-gray-300
                                    rounded-lg
                                    px-4 py-3
                                    outline-none
                                    focus:border-[#1D7A46]
                                    focus:ring-2
                                    focus:ring-[#1D7A46]/10
                                    transition
                                "
                            />

                            {errors.city && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.city[0]}
                                </p>
                            )}

                        </div>


                        {/* PIN Code */}

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                PIN Code
                            </label>

                            <input
                                type="text"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                placeholder="Enter PIN code"
                                maxLength="6"
                                className="
                                    w-full
                                    border border-gray-300
                                    rounded-lg
                                    px-4 py-3
                                    outline-none
                                    focus:border-[#1D7A46]
                                    focus:ring-2
                                    focus:ring-[#1D7A46]/10
                                    transition
                                "
                            />

                            {errors.pincode && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.pincode[0]}
                                </p>
                            )}

                        </div>


                        {/* Phone */}

                        <div className="md:col-span-2">

                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter 10-digit mobile number"
                                maxLength="10"
                                className="
                                    w-full
                                    border border-gray-300
                                    rounded-lg
                                    px-4 py-3
                                    outline-none
                                    focus:border-[#1D7A46]
                                    focus:ring-2
                                    focus:ring-[#1D7A46]/10
                                    transition
                                "
                            />

                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.phone[0]}
                                </p>
                            )}

                        </div>

                    </div>


                    {/* Save Address */}

                    <button
                        type="submit"
                        className="
                            mt-6
                            bg-[#1D7A46]
                            text-white
                            px-6 py-3
                            rounded-lg
                            font-medium
                            hover:bg-[#176238]
                            transition
                        "
                    >
                        Save Address
                    </button>

                </>

            )}

        </form>
    );
}

export default CheckoutForm;