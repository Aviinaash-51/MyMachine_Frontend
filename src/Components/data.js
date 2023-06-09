
import { FaStar, FaRegEye } from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi"
import {IoMdMail}  from "react-icons/io"
const data = [
    {
      id: 1,
      name: "Home",
      links: "/",
    },
    { id: 2, name: "Machines", links: "/machines" },
    { id: 3, name: "Companies", links: "/Companies" },
    {
      id: 4,
      name: "Applications",
      links: "/",
      namesub: [
        {
          id: 1,
          sub: "Gym Equipment",
          links: "/gymEquipment",
        },
        {
          id: 2,
          sub: "Furniture",
          links: "/furnitures",
        },
        {
          id: 3,
          sub: "Automobile",
          links: "/automobile",
        },
        {
          id: 4,
          sub: "Process Equipment",
          links: "/processEquipment",
        },
        {
          id: 5,
          sub: "Agricultural",
          links: "/agricultural",
        },
        {
          id: 6,
          sub: "Textile",
          links: "/textile",
        },
        {
          id: 7,
          sub: "Chemical process",
          links: "/chemicalprocess",
        },
        {
          id: 8,
          sub: "Semiconductor",
          links: "/semiconductor",
        },
      ],
    },
    { id: 5, name: "Media", links: "/media" },
    { id: 6, name: "Blogs", links: "/blogs" },
    { id: 7, name: "Contact Us", links: "/contact" },
  ];

  const topSubData = [
    // {
    //   img:'assets/image/top-searched-product/product1.png',
    //   para:'GCC C180II',
    //   star:[
    //     <FaStar />, <FaStar />, <FaStar />, <FaStar />
    //   ],
    //   tit:[
    //     "Work Area - 18 x 12 in.", "Drive - Closed Loop DC Servo Control", " Dimentions - 30.7 X 29.1 X 16.1 in", "  Maximum Motor Speed - 40 IPS"
    //   ]
    // },

    [
      {
        id:1,
        img:"assets/image/top-searched-product/Effective S.png",
        para:'Effective S',
      star:[
        <FaStar />, <FaStar />, <FaStar />, <FaStar />
      ]
      },
      { id:2,
        img:"assets/image/top-searched-product/G3015X-B7-One.png",
        para:'G3015X-B7',
      star:[
        <FaStar />, <FaStar />, <FaStar />, <FaStar />
      ]
      },
    ],   
    
    [
      {
        id:1,
        img:"assets/image/top-searched-product/LASER WELDING MACHINE ONE.png",
        para:'LASER WELDING MACHINE',
      star:[
        <FaStar />, <FaStar />, <FaStar />, <FaStar />
      ]
      },
      {
        id:2,
        img:"assets/image/top-searched-product/Upstroke NC Press Brake.png",
        para:'Upstroke NC Press Brake',
      star:[
        <FaStar />, <FaStar />, <FaStar />, <FaStar />
      ]
      },
    ]
   
  ];

  const latestSubData = [
    {
      para:'20210326-G3015A PRO-HSG',
    star:[
      "fal fa-star", "fal fa-star", "fal fa-star", "fal fa-star"
    ]
    },
    {
      para:'GCC Mercury',
    star:[
      "fal fa-star", "fal fa-star", "fal fa-star", "fal fa-star"
    ]
    },
    {
      para:'G3015X-B4',
    star:[
      "fal fa-star", "fal fa-star", "fal fa-star", "fal fa-star"
    ]
    },
    {
      para:'venus',
    star:[
      "fal fa-star", "fal fa-star", "fal fa-star", "fal fa-star"
    ]
    },
  ];

  const sectionTitleData =[
    {
      id:1,
      name:'Featured Products',
      See :'See All Product ',
      link:"/machines"
    },
    {
      id:2,
      name:'Top Categories',
      See :''
    },
    {
      id:3,
      name:'Popular Brands',
      See :'See All brands ',
      link:"/Companies"
    },
    {
      id:4,
      name:'Latest  Products',
      See :'See All Product ',
      link:"/machines"
    },
    {
      id:5,
      name:'From The Blog',
      See :'See All Blogs',
      link:"/blogs"
    },
    {
      id:6,
      name:'Testimonials',
      See :'',
        },
  ]

  const  blogcon = [
    {
        id:1,
        type:"Food Beverage",
        image:"../assets/img/blog/sm-b2-1.jpg",
        title:"Delicious Mixed Grilled Food For The Weekend With The Family And Friends",
        desc:"It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on fruit to...",
        link:"/about",
        date:"Jan 24, 2022",
    },
    {
        id:2,
        type:"Digital",
        image:"../assets/img/blog/sm-b2-5.jpg",
        title:"Do you know how to people wear headphones properly?",
        desc:"It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on fruit to...",
        link:"/about",
        date:"Jan 24, 2022"
    },
    {
        id:3,
        type:"Digital",
        image:"../assets/img/blog/sm-b2-6.jpg",
        title:"Laptops Become More Common in Everyday Life, why it usefull?",
        desc:"It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on fruit to...",
        link:"/about",
        date:"Jan 24, 2022"
    }
]

const condetails =[
  // {
  //     id:1,
  //     type:"Food Beverage",
  //     detail:"Rue Saint-Antoine, Paris, France",
  //     icon:"fal fa-map-marker-alt"
     
  // },
  {
      id:2,
      type:"Call us",
      detail:"+91 8669190014",
      dir:"tel:+918669190014",
      icon:<FiPhoneCall />
     
  },
  {
      id:3,
      type:"Mail us",
      detail:"info@mymachinestore.com",
      dir:"mailto:info@mymachinestore.com",
      icon:<IoMdMail />
     
  }
]

const SliderNavigationData = [  
  "Laser Solutions"," Sheet-Metal Forming Machine","Laser Welding Machine", "Laser Cladding", "Engraving Machine", "Electrolamination"
]
// const tabContent = [
//   {
//     id:"Engraving machine",
//     src:"assets/image/categories/Engraving machine/GCCC180II-06.png",
//     eyes:<FaRegEye />,
//     title : "GCC C 180",
//   },
//   {
//     id:"Engraving machine",
//     src:"assets/image/categories/Engraving machine/GCCC180II-06.png",
//     eyes:<FaRegEye />,
//     title : "GCC mercury",
//   }
// ]

const TestimonialsData = [
  {
    id:1,
    review:" I am the CEO of Laser technologies pvt ltd, and I am thrilled with my experience on My Machine Store. As a youngest platform for industrial machine procurement and lead generation, they offer a wide range of high-quality machines. The seamless ordering process, comprehensive product descriptions, and exceptional customeservice made my buying experience delightful. I highly recommend My Machine Store for their top-notch products and exceptional service.",
    name:"Rakesh Agarwal",
    deg:"",
  },
  {
    id:2,
    review:"I am pleased to share my experience with My Machine Store. They are a trusted platform for industrial machines and lead generation, and they exceeded my expectations in every way. They offer a wide range of high-quality machines, a seamless ordering process, and outstanding customer service. My Machine Store has been instrumental in driving our business growth, and I highly recommend them to any business seeking top-notch machines and a streamlined buying experience.",
    name:"Rana Pratap Singh",
    deg:"",
  },
  {
    id:3,
    review:"I am very happy with my experience with My Machine Store. They have a great selection of machines, a convenient ordering process, and excellent customer service. I would highly recommend them to anyone looking for industrial machines.",
    name:"Gahininath Gujar",
    deg:"",
  },
  {
    id:4,
    review:"Exceptional machines, outstanding service! My Machine Store has transformed our lead generation for industrial machines. With a wide selection, transparent information, and seamless buying, they've fueled our business growth. Highly recommended!",
    name:"Punkti Agarwal",
    deg:""

  }
]

 const ProductCategory=[
  {
    idx: 1,
    Category: "Cutting Solution",
    img:"assets/image/cutting.gif",
    subCategory: [
      {
          id: 1,
          sub: 'Fiber Laser Sheet Cutting Machine'
      },
      {
          id: 2,
          sub: ' Fiber Laser Sheet Plus Tube Cutting Machine',
          
      },
      {
          id: 3,
          sub: 'Fiber Laser Tube Cutting Machine',
          
      },
      {
        id: 4,
        sub: 'Electro Lamination',
        
    },
    {
      id: 5,
      sub: 'Laser Non-metal Cutting Machine',
      
  },
  ]
   
    

  },
  {
    idx: 2,
    Category: "Welding Solution", 
    img:"assets/image/wedd.gif",
    subCategory: [
      {
          id: 1,
          sub: 'Hand Helded Laser Welding'
      },
      {
          id: 2,
          sub: 'Mobile Laser Welding',
          
      },
      {
        id: 3,
        sub: 'Open Type Laser Welding',
        
    },
    {
      id: 4,
      sub: 'Close Type Laser Welding',
      
  },
  ]   
    
  },
  {
    idx: 3,
    Category: "Forming Solution",
    img:"assets/image/forming.png",
    subCategory: [
      {
          id: 1,
          sub: 'Bending Machine'
      },       
  ]   
   

  },
  {
    idx: 4,
    Category: "Safety and Security Devices",
    img:"assets/image/ssss.gif",
    subCategory: [
      {
          id: 1,
          sub: 'X-Ray Baggage Inspection System'
      },
      {
          id: 2,
          sub: 'Metal Detection System',
          
      },     
  ]    

  },
  {
    idx: 5,
    Category: "Power Solutions", 
    img:"assets/image/poww.gif",
    
    
    subCategory: [
      {
          id: 1,
          sub: 'UPS Power Backup'
      },
      {
          id: 2,
          sub: 'Solar Panels',
          
      },
      {
        id: 3,
        sub: 'Electric Chargers',
        
    },
    {
      id: 4,
      sub: 'Power Generators',
      
  },
]

  },
  {
    idx: 6,    
    
   
    
    Category: "Surface Treatment",
    img:"assets/image/sarr.gif",
    subCategory: [
      {
          id: 1,
          sub: 'Laser Marking'
      },
      {
          id: 2,
          sub: 'Laser Engraving',
          
      },
      {
        id: 3,
        sub: 'Laser Hardening',
        
    },
    {
      id: 4,
      sub: ' Laser Cladding',
      
  },
]

  },
 
]





  export  {data, ProductCategory, TestimonialsData, latestSubData, topSubData, sectionTitleData, blogcon, condetails } 
  