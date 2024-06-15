import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SidebarSubmenuProps {
    path: string;
    icon: JSX.Element; // Change this to typeof Squares2X2Icon | typeof InboxArrowDownIcon | ...
    pageName: string;
    submenu?: SubmenuItem[];
}

interface SubmenuItem {
    path: string;
    icon: any; // Change this to typeof Squares2X2Icon | typeof InboxArrowDownIcon | ...
    pageName: string;
}

function SidebarSubmenu({ submenu, pageName, icon }: SidebarSubmenuProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const pathname = usePathname()

    /** Open Submenu list if path found in routes, this is for directly loading submenu routes  first time */
    useEffect(() => {
        if (submenu && submenu.some(m => m.path === location.pathname)) setIsExpanded(true);
    }, [submenu, location.pathname]);

    return (
        <div className="flex flex-col hover:bg-base-100 bg-base-100">
            {/** Route header */}
            <div className="w-full block" onClick={() => setIsExpanded(!isExpanded)}>
                {icon} {pageName}
                <ChevronDownIcon
                    className={`w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all ${
                        isExpanded ? 'rotate-180' : ''
                    }`}
                />
            </div>

            {/** Submenu list */}
            <div className={`w-full ${isExpanded ? '' : 'hidden'}`}>
                <ul className="menu menu-compact">
                    {submenu && submenu.map((m, k) => (
                        <li key={k}>
                            <Link href={m.path} className={`${pathname == m.path ? "font-semibold bg-base-200" : ""}`}>
                                {m.icon} {m.pageName}
                                {pathname === m.path ? (
                                    <span
                                        className="absolute mt-1 mb-1 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
                                        aria-hidden="true"
                                    ></span>
                                ) : null}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SidebarSubmenu;
