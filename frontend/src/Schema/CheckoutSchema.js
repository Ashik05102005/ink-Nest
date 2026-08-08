import { z } from "zod";

export const checkoutSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(2, "Full name must be at least 2 characters")
        .max(50, "Full name is too long"),

    address: z
        .string()
        .trim()
        .min(5, "Please enter a valid address")
        .max(200, "Address is too long"),

    city: z
        .string()
        .trim()
        .min(2, "City name must be at least 2 characters")
        .max(50, "City name is too long"),

    pincode: z
        .string()
        .regex(/^[1-9][0-9]{5}$/, "Enter a valid 6-digit PIN code"),

    phone: z
        .string()
        .regex(/^[6-9][0-9]{9}$/, "Enter a valid 10-digit mobile number")
});