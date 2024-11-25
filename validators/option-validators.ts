// bg-green-950 border-green-950
// bg-blue-950 border-blue-950
// bg-red-950 border-red-950

import { PRODUCT_PRICES } from "@/config/products"

// export const COLORS = [
//     { 
//         label: "Green", 
//         value: "green", 
//         tw:"green-950" 
//     },
//     { 
//         label: "Blue", 
//         value: "blue", 
//         tw:"blue-950" 
//     },
//     { 
//         label: "Red", 
//         value: "red", 
//         tw:"red-950" 
//     },
//     { 
//         label: "Black", 
//         value: "black", 
//         tw:"zinc-950" 
//     },
// ] as const 

// export const MODELS = {
//     name: "models",
//     options: [
//         {
//             label: "iPhone X",
//             value: "iphonex",
//         },
//         {
//             label: "iPhone 11",
//             value: "iphone11",
//         },
//         {
//             label: "iPhone 12",
//             value: "iphone12",
//         },
//         {
//             label: "iPhone 13",
//             value: "iphone13",
//         },
//         {
//             label: "iPhone 14",
//             value: "iphone14",
//         },
//         {
//             label: "iPhone 15",
//             value: "iphone15",
//         },
//     ],
// } as const

export const MATERIALS = {
    name: "material",
    options: [
        {
            label: "Plastic",
            value: "plastic",
            description: "undefined",
            price: PRODUCT_PRICES.material.silicone
        },
        {
            label: "Glass",
            value: "glass",
            description: "beautiful bottle",
            price: PRODUCT_PRICES.material.polycarbonate
        },

    ],
} as const

// export const FINISHES = {
//     name: "finish",
//     options: [
//         {
//             label: "Smooth Finish",
//             value: "smooth",
//             description: "undefined",
//             price: PRODUCT_PRICES.finish.smooth,
//         },
//         {
//             label: "Textured Finish",
//             value: "textured",
//             description: "soft grippy texture",
//             price: PRODUCT_PRICES.finish.textured,
//         },
//     ],
// } as const