import { Dataset } from './types';

export const DATASETS: Dataset[] = [
    {
        id: 1,
        title: "Python-Instruct-V2",
        price: 200,
        type: "CODE",
        size: "2.4 GB",
        license: "MIT",
        meta: "Verified",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5v3E-uV390yc9Z83jqnDGYqSJUyAMQ0qPJPfbHjSFhOHz9Qh2w58B9Xh3PKAqE-COgexiblKacyQGYwHzvU76zeaPh7EQYKz5rt9W6TYOEj2xVpdi4uybSFRfKT1IUz693Me6vQhO__JDDJfo60yj47BMuHFnemshgn9LXK2PLkWoCymlVjgO2YEO15JhpLYIbSHYbqroLEUUc3U7SPkJCizNQhwcBly2UJDV0B7SMIwL_CK9NtlGYA0G8tRfGkJSAbpW0a2dipk",
        isVerified: true
    },
    {
        id: 2,
        title: "Urban Soundscapes",
        price: 150,
        type: "AUDIO",
        size: "14.2 GB",
        license: "CC BY 4.0",
        meta: "Hi-Fi",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcRlXZ7p8huVwsSvdBnX3NobU8MCatqUZlUPG_mJSGZ0UygAylrXR-V6ESw8iszWcyB4STOhn51Uuvf18m5UDg24cb_eR8YToAuQmyFtJ7CCy-Ru1rslRg5SO6Ickkl9_l1Vz3d1aSFVqdWGDfAd8Zf5yeIH5kBVAB88KtICo5cM9Vld3L1ZaReZlyVtE2OSJZYBrgx9aNJUewo7o6SH9QR2FVTaFNRlwACaMYuTOwLemijxHhE7AEi_Vvb0KggNO6Mkfio0UoFmg",
        isHiFi: true
    },
    {
        id: 3,
        title: "Action Kinetics",
        price: 450,
        type: "VIDEO",
        size: "128 GB",
        license: "Comm.",
        meta: "4K 60fps",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkzaILoVrwcIOnWBoYaDVKiHStYhtdrfp5sGso6V-fASAXN4AGOyrWQ_mmTWFY85qzZaYok0hS4__mh_sec1qCgfy4CUEUVcCoJGdq5Dx6wjgYjvw9B_NnJ1G2QDAXznGvUITAcLkqwgCKBFSBiUWNzIjfhle_AlyfJueui1FyF3InYZ-AIzALHOhU4RFma25v03x_O35QBLy7xNPBKYBqkRb-H2JrICgAMA134CL6hj3CK4wPYmO8EWyQ4gB79frBX0iRYBV-uQY",
        is4K: true
    },
    {
        id: 4,
        title: "Diverse Faces 50K",
        price: 300,
        type: "IMAGE",
        size: "5.1 GB",
        license: "Released",
        meta: "Annotated",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG5kBFP3F3ZJQtOS8DuyEif_BIvkP1v_riBSmVnJ5WQwe5n5ZXqyQ9YrnjDfWHh4Jk3KOMbo96AUzPJuyWjMfdX4AgaskxZBM-4hFvtttRMlohKM6QmZj9hIcUngBheK_3uvrCbJ0oU6slZiImOotOfAN5OzgsgHzj2abXKLlKL8OvAoWEPjfMlBZhjJ6QbD65udbn7DZcy_KzLCsp_MIeq0itLQsRb4Z4JQGNcK66E0fS_4ZsgaYYdmdtc6ZyLeE603ds-KV7388"
    },
    {
        id: 5,
        title: "Legal Corpus Pro",
        price: 800,
        type: "TEXT",
        size: "56 GB",
        license: "Comm.",
        meta: "Cleaned",
        image: "" // Placeholder logic in component
    },
    {
        id: 6,
        title: "Interior ScanNet",
        price: 350,
        type: "3D",
        size: "220 GB",
        license: "MIT",
        meta: "LiDAR",
        image: "" 
    },
    {
        id: 7,
        title: "Chest X-Ray 2M",
        price: 600,
        type: "MEDICAL",
        size: "85 GB",
        license: "Hipaa",
        meta: "De-ID",
        image: ""
    },
    {
        id: 8,
        title: "IoT Time Series",
        price: 120,
        type: "SENSOR",
        size: "1.2 GB",
        license: "Open",
        meta: "Normalized",
        image: ""
    }
];

export const NAV_LINKS = ['Catalog', 'Pricing', 'About'];
