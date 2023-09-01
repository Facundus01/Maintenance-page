"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>){
const params = useParams();

const routes = [
   {
    href:`/`,
    label:"Home",
    active:`/`,
    },
    {
    href:`/${params.storeId}/settings`,
    label:"Settings",
    active:`/${params.storeId}/settings`,
    },
    {
    href:`/${params.storeId}/maintenance`,
    label:"Maintenance",
    active:`/${params.storeId}/maintenance`,
    },
]

    return(
        <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
          {routes.map((route)=>(
            <Link
            key={route.href}
            href={route.href}
            className={cn(`text-sm font-medium transition-colors hover:text-primary
            ${route.active ? "text-black dark:text-white" : "text-muted-foreground"}`
            )}
            >
            {route.label}
            </Link>
          ))}
        </nav>
    )
}