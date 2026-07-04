"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "HTML5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0od_ZOu3i7CF6C5_XapM3sji5MEBAsy8MQjcgzFqeUr6l-3Jt-qHYM-HcgHkdHxo0x-k&usqp=CAU",
  },
  {
    id: 2,
    name: "CSS3",
    image:
      "https://logowik.com/content/uploads/images/css-icon5555.logowik.com.webp",
  },
  {
    id: 3,
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 4,
    name: "TypeScript",
    image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    id: 5,
    name: "React.js",
    image:
      "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25085005/reactjs-inner.svg",
  },
  {
    id: 6,
    name: "Next.js",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4gSbV80I94hVTscWjNfXT7NYo9riAujIAg&s",
  },
  {
    id: 7,
    name: "Node.js",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpL2VLhw-GxsE5xzF7QgLBiD8klKl2dM8t8DAca6Wr32MMDdu2N8D0kytUew6eL7Rc4_0&usqp=CAU",
  },
  {
    id: 8,
    name: "Express.js",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7S33Oq2FeRbyBBA6l1q8PwLVa3SzaONO-9Q&s",
  },
  {
    id: 9,
    name: "MongoDB",
    image:
      "https://images.seeklogo.com/logo-png/48/1/mongodb-logo-png_seeklogo-481256.png",
  },
  {
    id: 10,
    name: "MySQL",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST53D8aOlUpqhl2Tzx0-u2r2Tu0ViCDsOpF4xEE67lNTNnSQyVcmZP_qV_4iwG1Ie-vbg&usqp=CAU",
  },
  {
    id: 11,
    name: "PostgreSQL",
    image:
      "https://cdn3.f-cdn.com/contestentries/216177/9262059/5550f98d5b7e5_thumbCard.jpg",
  },
  {
    id: 12,
    name: "Prisma ORM",
    image: "https://asset.brandfetch.io/idBBE3_R9e/idzL_5tH6B.jpg",
  },
  {
    id: 14,
    name: "Git",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5MFGcGxvHFf3unQTkMq_FlwZZDE_8EBkWA&s",
  },
  {
    id: 15,
    name : "Tailwind CSS",
    image : "https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg"
  },
  {
    id : 17 ,
    name : "Python" ,
    image : "https://i.pinimg.com/736x/a8/53/14/a8531424a5fac660e4261f72ca817141.jpg"
  },
  {
    id : 18 ,
    name : 'django' ,
    image : 'https://www.cloudesign.com/images/djangomainbannerimage.webp'
  } ,
  {
    id : 19 ,
    name : 'Docker' ,
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBg-3j13zyOBkQgSe-igMxqNDoYpOvBkjQVw&s'
   } ,
   {
    id : 20 ,
    name : 'mongoose' ,
    image : 'https://img.icons8.com/color/1200/mongoose.jpg'
   },
   {
    id : 21 ,
    name : 'NumPy' ,
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmS-kAK2RcafsSaMscU-XlRt8ozz6nQrlNlwGjR1BblZp86LxotxZxBoep&s=10'
   },
   {
    id : 22 ,
    name : 'Pandas' ,
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ3B4uddKsWsn2b6djQk2p_hCGRS0W10tQk3WKG3QDV_ZISxjRHHFiWaw&s=10'
   },
   {
    id : 23 ,
    name : 'Scikit-Learn' ,
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-oZ1axE5Huu3xtV2K5Y7n3EFKrQnhb7lakfEmqTdqXjrk_rXlYnT8dU&s=10'
   } , {
    id : 24 ,
    name : 'Tensorflow' ,
    image : 'https://img.icons8.com/color/1200/tensorflow.jpg'
   }
];  

export default function Skills() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <div className="flex flex-wrap">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}
