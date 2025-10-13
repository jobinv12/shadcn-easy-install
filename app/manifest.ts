import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest{
    return{
        name: "shadcn/ui easy install",
        short_name: "shadcn/ui",
        description: "An online tool to install all shadcn/ui components in single click",
        start_url: '/',
        display: 'standalone',
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons:[
            {
                src: '../public/web-app-manifest-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: "maskable"
            },
            {
                src: '../public/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: "maskable"
            },
        ],
    }
}