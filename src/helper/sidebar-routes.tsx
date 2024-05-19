import { JSX } from 'react';
import  Squares2X2Icon  from '@heroicons/react/24/outline/Squares2X2Icon';
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon';
import DocumentTextIcon  from '@heroicons/react/24/outline/DocumentTextIcon';
import TableCellsIcon  from '@heroicons/react/24/outline/DocumentTextIcon';
import CodeBracketSquareIcon  from '@heroicons/react/24/outline/DocumentTextIcon';
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import { SidebarMenuObj } from './types';

// Import other icons similarly

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;



const routes: SidebarMenuObj[] = [
    {
        path: '/dashboard',
        icon: <Squares2X2Icon className={iconClasses} />,
        pageName: 'Dashboard',
        pageTitle: 'Dashboard',
    },
    {
        path: '/leads',
        icon: <InboxArrowDownIcon className={iconClasses} />,
        pageName: 'Leads',
        pageTitle : "Leads"
    },
    {
        path: '/settings',
        icon: <Cog6ToothIcon className={`${iconClasses} inline`} />,
        pageName: 'Settings',
        pageTitle : "",
        submenu: [
            {
                path: '/settings/billing',
                icon: <WalletIcon className={submenuIconClasses} />,
                pageName: 'Billing',
                pageTitle : "Bills",
            },
            {
                path: '/settings/team',
                icon: <UsersIcon className={submenuIconClasses} />,
                pageName: 'Team',
                pageTitle : "Team",
            }
        ],
    },
];

export default routes;
