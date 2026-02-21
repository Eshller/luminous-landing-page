export interface Dataset {
    id: number;
    title: string;
    price: number;
    type: 'CODE' | 'AUDIO' | 'VIDEO' | 'IMAGE' | 'TEXT' | '3D' | 'MEDICAL' | 'SENSOR';
    size: string;
    license: string;
    meta: string;
    image: string;
    isVerified?: boolean;
    isHiFi?: boolean;
    is4K?: boolean;
}