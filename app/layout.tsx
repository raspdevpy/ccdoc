import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Provider } from "@/components/provider";
import { appDescription, appName, siteUrl, botIcon } from "@/lib/shared";
import "./global.css";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        template: `%s | ${appName}`,
        default: `${appName} Documentation`,
    },
    description: appDescription,
    icons: {
        icon: botIcon,
    },
    openGraph: {
        description: appDescription,
        images: botIcon,
    },
    twitter: {
        card: "summary",
        description: appDescription,
        images: botIcon,
    },
    manifest: "/manifest.json",
};

export const viewport: Viewport = {
    themeColor: "#74b0f7",
};

export default function Layout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <body className="flex flex-col min-h-screen">
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
