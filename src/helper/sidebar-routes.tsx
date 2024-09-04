import {
  BoltIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CodeBracketSquareIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  InboxArrowDownIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  TableCellsIcon,
  UserIcon,
  UsersIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

import { SidebarMenuObj } from "./types";
import { namespaceTranslation } from "@/helper/i18n";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const t = namespaceTranslation("sidebar");

const routes: SidebarMenuObj[] = [
  {
    path: "/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    pageName: t("Dashboard"),
    pageTitle: t("Dashboard"),
  },
  {
    path: "/leads",
    icon: <InboxArrowDownIcon className={iconClasses} />,
    pageName: t("Leads"),
    pageTitle: t("Leads"),
  },
  {
    path: "/transactions",
    icon: <CurrencyDollarIcon className={iconClasses} />,
    pageName: t("Transactions"),
    pageTitle: t("Transactions"),
  },
  {
    path: "/charts",
    icon: <ChartBarIcon className={iconClasses} />,
    pageName: t("Analytics"),
    pageTitle: t("Analytics"),
  },
  {
    path: "/integration",
    icon: <BoltIcon className={iconClasses} />,
    pageName: t("Integration"),
    pageTitle: t("Integration"),
  },
  {
    path: "/calendar",
    icon: <CalendarDaysIcon className={iconClasses} />,
    pageName: t("Calendar"),
    pageTitle: t("Calendar"),
  },
  {
    path: "/settings",
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />,
    pageName: t("Settings"),
    pageTitle: t("Settings"),
    submenu: [
      {
        path: "/settings/profile",
        icon: <UserIcon className={submenuIconClasses} />,
        pageName: t("Perfil"),
        pageTitle: t("Perfil"),
      },
      {
        path: "/settings/billing",
        icon: <WalletIcon className={submenuIconClasses} />,
        pageName: t("Billing"),
        pageTitle: t("Bills"),
      },
      {
        path: "/settings/team",
        icon: <UsersIcon className={submenuIconClasses} />,
        pageName: t("Team"),
        pageTitle: t("Team"),
      },
    ],
  },
  {
    path: "",
    icon: <QuestionMarkCircleIcon className={`${iconClasses} inline`} />,
    pageName: t("Help"),
    pageTitle: t("Help"),
    submenu: [
      {
        path: "/docs/getting-started",
        icon: <DocumentTextIcon className={submenuIconClasses} />,
        pageName: t("Getting Started"),
        pageTitle: t("Getting Started"),
      },
      {
        path: "/docs/features",
        icon: <TableCellsIcon className={submenuIconClasses} />,
        pageName: t("Features"),
        pageTitle: t("Features"),
      },
      {
        path: "/docs/components",
        icon: <CodeBracketSquareIcon className={submenuIconClasses} />,
        pageName: t("Components"),
        pageTitle: t("Components"),
      },
    ],
  },
];

export default routes;
