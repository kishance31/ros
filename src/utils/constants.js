export const headerLinks = [
    { name: "Home", url: "/", active: true },
    { name: "About us", url: "/aboutUs", active: false },
    { name: "Our services", url: "#", active: false },
    { name: "How it works", url: "#", active: false },
    { name: "Contact us", url: "/contactUs", active: false },
];

export const authModalConstants = {
    SIGN_IN_TITLE: "Sign In With",
    SIGN_UP_TITLE: "Sign Up"
}

export const HomePageCardData = [
    {
        id: 1,
        card_size: "8",
        cardAlign: "horizontal_content",
        btnName: "VIEW PRODUCT",
        souc1: "table.png",
        title: "FORM AMCHAIR CHAIR",
        altTitle1: "FORM AMCHAIR CHAIR",
        description: "Duis pretium gravida enim, vel maximus ligula ferme ntum a. Sed rhoncus eget ex id.Duis pretium.",
    },
    {
        id: 2,
        card_size: "4",
        cardAlign: "center_content",
        btnName: "VIEW PRODUCT",
        souc1: "aram_chair.png",
        title: "KABINO SIDEBOARD W. DRAWERS WHITE",
        altTitle1: "FORM AMCHAIR CHAIR",
        description: "Duis pretium gravida enim, vel maximus ligula ferme ntum a. Sed rhoncus eget ex id.Duis pretium.",
    },
    {
        id: 3,
        card_size: "12",
        cardAlign: "twoside_image_content",
        btnName: "VIEW PRODUCT",
        souc1: "chair2.png",
        souc2: "chair1.png",
        title: "WOODEN CHAIR",
        altTitle1: "FORM AMCHAIR CHAIR",
        altTitle12: "FORM AMCHAIR CHAIR",
        description: "Duis pretium gravida enim, vel maximus ligula ferme ntum a. Sed rhoncus eget ex id.Duis pretium.",
    },
];

export const ContactUsDetails = [
    { letter: 'A', text: 'No 40 Baria Street 13/2 NewYork City,NY,United States', url: "#" },
    { letter: 'E', text: 'info.contact@gmail.com', url: "#" },
    { letter: 'P', text: '(00) 123 456 789', url: "#" },
]

export const ContactusLinks = [
    { id: 1, name: 'FACEBOOK', url: "#" },
    { id: 2, name: 'TWITTER', url: "#" },
    { id: 3, name: 'PRINTEREST', url: "#" },
    { id: 4, name: 'GOOGLE', url: "#" },
    { id: 5, name: 'INSTAGRAM', url: "#" },
]


export const NewsLetterDetails = {
    id: 1,
    btnName: "SIGN UP",
    title: "NEWS LETTER",
    description: "Sign up to receive updates from our studio promotions, and sneak peaks of upcoming products.",
}

export const AboutUsDetails = {
    title1: "Lorem ipsum dolor sit amet",
    title2: "consectetur adipiscing elit",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    aboutUsImg: "about_img.png"
}

export const CarouselItems = [
    {
        imgsrc: 'slider_one.png',
        altText: 'slider_one'
    },
    {
        imgsrc: 'slider_one.png',
        altText: 'slider_one'
    },
    {
        imgsrc: 'slider_one.png',
        altText: 'slider_one'
    }
];

export const CorporateNavLinks = [
    { name: "Purchase License", url: "/corporate/purchaseLicense", active: true },
    { name: "Employee & License Management", url: "/corporate/employeeLicenseManagement", active: false },
    { name: "Manage Allocate License", url: "/corporate/manageAllocateLicense", active: false },
    { name: "Employee Order Details", url: "/corporate/employeeOrderDetails", active: false },
    { name: "Invoice", url: "/corporate/invoice", active: false },
    { name: "My Account", url: "/corporate/myAccount", active: false },
    { name: "Product View", url: "/corporate/productView", active: false },
]

export const CoporateMyAccountTabs = [
    { name: "MY PROFILE", dataId: "myProfile", active: true },
    { name: "LICENSE ORDER HISTROY", dataId: "licenseOrderHistory", active: false },
    { name: "BRANCH MANAGEMENT", dataId: "branchManagement", active: false },
]

export const EmployeeNavLinks = [
    { name: "Item Listing", url: "/employee/itemListing", active: true },
    { name: "Profile", url: "/employee/profile", active: false },
    { name: "Order History", url: "/employee/orderHistory", active: false },
]

export const ItemCategoryLinks = [
    {
        cardTitle: "HOME OFFICE FURNITURE'S & ACCESSORIES",
        cardId: "1",
        link: "/furniture"
    },
    {
        cardTitle: "HOME OFFICE ELECTRONICS",
        cardId: "2",
        link: "/electronics"
    },
    {
        cardTitle: "HOME OFFICE COMPUTERS",
        cardId: "3",
        subCards: [
            {
                title: "Cras justo odio",
                link: "/link9"
            },
            {
                title: "Dapibus ac facilisis in",
                link: "/link20"
            },
            {
                title: "Morbi leo risus",
                link: "/link30"
            },
            {
                title: "Porta ac consectetur ac",
                link: "/link40"
            },
        ]
    },
    {
        cardTitle: "Other",
        cardId: "4",
        link: "/otherCategories"
    }
]

export const ProductsList = {
    furniture: [
        [
            {
                image: "chair1.png",
                title: "Chair 1",
                buttonText: "View Product",
                productId: "11",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "chair1.png",
                title: "Chair 2",
                buttonText: "View Product",
                productId: "12",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "chair1.png",
                title: "Chair 11",
                buttonText: "View Product",
                productId: "13",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
            },
            {
                image: "chair1.png",
                title: "Chair 22",
                buttonText: "View Product",
                productId: "14",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            }
        ]
    ],
    electronics: [
        [
            {
                image: "product_first.png",
                title: "hp keyboard1",
                buttonText: "View Product",
                productId: "22",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard2",
                buttonText: "View Product",
                productId: "23",
                description: `Lorem ipsum dolor sit amet, Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard3",
                buttonText: "View Product",
                productId: "24",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
        ]
    ],
    link9: [
        [
            {
                image: "product_first.png",
                title: "hp keyboard4",
                buttonText: "View Product",
                productId: "1",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard5",
                buttonText: "View Product",
                productId: "2",
                description: `Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard6",
                buttonText: "View Product",
                productId: "3",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard7",
                buttonText: "View Product",
                productId: "4",
                description: `Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
        ],
        [
            {
                image: "product_first.png",
                title: "hp keyboard8",
                buttonText: "View Product",
                productId: "5",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard9",
                buttonText: "View Product",
                productId: "6",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard0",
                buttonText: "View Product",
                productId: "7",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard11",
                buttonText: "View Product",
                productId: "8",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
        ]
    ],
    link20: [
        [
            {
                image: "product_first.png",
                title: "hp keyboard12",
                buttonText: "View Product",
                productId: "1",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard13",
                buttonText: "View Product",
                productId: "2",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard14",
                buttonText: "View Product",
                productId: "3",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placeraneque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard15",
                buttonText: "View Product",
                productId: "4",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus ium dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
        ],
        [
            {
                image: "product_first.png",
                title: "hp keyboard16",
                buttonText: "View Product",
                productId: "5",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard17",
                buttonText: "View Product",
                productId: "6",
                description: `apibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
        ]
    ],
    link30: [
        [
            {
                image: "product_first.png",
                title: "hp keyboard18",
                buttonText: "View Product",
                productId: "41",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard19",
                buttonText: "View Product",
                productId: "42",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard20",
                buttonText: "View Product",
                productId: "43",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard21",
                buttonText: "View Product",
                productId: "44",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
        ],
        [
            {
                image: "product_first.png",
                title: "hp keyboard22",
                buttonText: "View Product",
                productId: "45",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard23",
                buttonText: "View Product",
                productId: "46",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard24",
                buttonText: "View Product",
                productId: "47",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
        ]
    ],
    link40: [
        [
            {
                image: "product_first.png",
                title: "hp keyboard25",
                buttonText: "View Product",
                productId: "51",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard26",
                buttonText: "View Product",
                productId: "52",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard27",
                buttonText: "View Product",
                productId: "53",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
            {
                image: "product_first.png",
                title: "hp keyboard28",
                buttonText: "View Product",
                productId: "54",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
        ],
        [
            {
                image: "product_first.png",
                title: "hp keyboard29",
                buttonText: "View Product",
                productId: "55",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ex vel tellus pellentesque vestibulum. 
                Donec neque lectus, dapibus in placerat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
                ex vel tellus pellentesque vestibulum. Donec neque lectus, dapibus in placerat nec.`
            },
        ]
    ]
};

export const AllocateLicenseList = [
    {
        srNo: 1,
        employeeName: 'Alexa',
        emailId: 'alexa@gmail.com',
        licenseType: 'Silver',
        licenseNo: 1232,
        assignDate: '10/10/2020',
        deactivationDate: '12/10/2020',
        reason: 'your message for deactivation of account'
    },
    {
        srNo: 2,
        employeeName: 'Siri',
        emailId: 'Siria@gmail.com',
        licenseType: 'Gold',
        licenseNo: 1331,
        assignDate: '10/10/2020',
        deactivationDate: '12/10/2020',
        reason: 'your message for deactivation of account'
    },
    {
        srNo: 3,
        employeeName: 'Echo',
        emailId: 'Echo@gmail.com',
        licenseType: 'Platinum',
        licenseNo: 1211,
        assignDate: '14/10/2020',
        deactivationDate: '16/10/2020',
        reason: 'your message for deactivation of account'
    }
]

export const EmployeeOrderDetailsList = [
    {
        srNo: 1,
        itemCategory: 'Hardware',
        itemName: 'Keyboard',
        itemCost: 30,
        orderNo: 1232,
        orderDate: '09/08/2020',
        orderStatus: 'pending',
        dispatchDate: '10/08/2020',
        deliveryStatus: 'Not Receive',
        tableDetails: [{
            srNo: 1,
            itemCode: 12345,
            totalCost: 1000,
            first3MonthCost: 300
        }, {
            srNo: 2,
            itemCode: 12345,
            totalCost: 1000,
            first3MonthCost: 300
        }]
    },
    {
        srNo: 2,
        itemCategory: 'Hardware',
        itemName: 'Mouse',
        itemCost: 10,
        orderNo: 1222,
        orderDate: '09/08/2020',
        orderStatus: 'pending',
        dispatchDate: '10/08/2020',
        deliveryStatus: 'Not Receive',
        tableDetails: [{
            srNo: 1,
            itemCode: 12345,
            totalCost: 1000,
            first3MonthCost: 300
        }, {
            srNo: 2,
            itemCode: 12345,
            totalCost: 1000,
            first3MonthCost: 300
        }]
    },
    {
        srNo: 3,
        itemCategory: 'Hardware',
        itemName: 'SSD',
        itemCost: 300,
        orderNo: 1122,
        orderDate: '09/08/2020',
        orderStatus: 'pending',
        dispatchDate: '10/08/2020',
        deliveryStatus: 'Not Receive',
        tableDetails: [
            {
                srNo: 1,
                itemCode: 12345,
                totalCost: 1000,
                first3MonthCost: 300
            },
            {
                srNo: 2,
                itemCode: 12345,
                totalCost: 1000,
                first3MonthCost: 300
            }
        ]
    }
]

export const EmployeeOrderPaymentDetails = [
    {
        employeeName: 'Carol Stewart',
        orderNo: 12345,
        totalOrderCost: 1000,
        itemCost: 400
    }, {
        employeeName: 'Carol Stewart',
        orderNo: 12345,
        totalOrderCost: 1000,
        itemCost: 400
    }
]

export const InvoiceList = [
    {
        invoiceId: 1,
        invoiceNo: 1231,
        invoiceDate: '12/12/2020',
        invoiceType: 'RECURRING1',
        invoiceAmount: 2
    },
    {
        invoiceId: 2,
        invoiceNo: 1312,
        invoiceDate: '13/12/2020',
        invoiceType: 'RECURRING2',
        invoiceAmount: 92
    },
    {
        invoiceId: 3,
        invoiceNo: 4131,
        invoiceDate: '01/02/2020',
        invoiceType: 'RECURRING3',
        invoiceAmount: 48
    }
]

export const ProductData = [
    {
        id: 1,
        itemName: 'Keyboard',
        title: 'Lorem ipsum dolor sit amet. Duis pretium gravida enim, vel maximus ligula ferme ntum a. Sed rhoncus eget ex id.Duis pretium',
        itemCode: '1234',
        itemPrice: '400',
        itemDescription: 'Lorem ipsum dolor sit amet',
        imgPath: 'chair1.png'
    },
    {
        id: 2,
        itemName: 'Keyboard',
        title: 'Lorem ipsum dolor sit amet. Duis pretium gravida enim, vel maximus ligula ferme ntum a. Sed rhoncus eget ex id.Duis pretium',
        itemCode: '1234',
        itemPrice: '400',
        itemDescription: 'Lorem ipsum dolor sit amet',
        imgPath: 'chair1.png'
    },
    {
        id: 3,
        itemName: 'Keyboard',
        title: 'Lorem ipsum dolor sit amet. Duis pretium gravida enim, vel maximus ligula ferme ntum a. Sed rhoncus eget ex id.Duis pretium',
        itemCode: '1234',
        itemPrice: '400',
        itemDescription: 'Lorem ipsum dolor sit amet',
        imgPath: 'chair1.png'
    }
]

export const DeliveryAddress = [
    {
        id: 1,
        address: "ABC ROAD"
    },
    {
        id: 2,
        address: "DEF ROAD"
    },
    {
        id: 3,
        address: "HIJ ROAD"
    }
]