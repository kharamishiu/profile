'use client'

import { Button } from "@/components/ui/button"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { CircleCheckIcon, CircleHelpIcon, CircleIcon, MenuIcon, X } from "lucide-react"
import { useState } from "react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { navItems } from "@/utils/data"




export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative overflow-hidden bg-gradient-to-r from-purple-50  to-indigo-50 hover:from-purple-100 hover:to-indigo-100 border border-purple-200"
                >
                    {
                        isOpen ? <X className="text-purple-600" /> : <MenuIcon className="text-purple-600" />
                    }

                </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] bg-[#00204d]">
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes save when you&apos;re done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid items-center max-auto ">
                    <NavigationMenu viewport={false} className="flex justify-center mx-auto text-white">
                        <NavigationMenuList className="flex flex-col">
                            {
                                navItems.map(item => (
                                    <NavigationMenuItem key={item.label}>
                                        <NavigationMenuLink asChild className={` `}>
                                            <Link href={item.href}>{item.label}</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))
                            }



                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <SheetFooter>

                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

