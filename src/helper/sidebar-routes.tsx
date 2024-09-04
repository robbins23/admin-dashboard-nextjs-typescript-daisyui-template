import {
  ArrowRightEndOnRectangleIcon,
  BoltIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CodeBracketSquareIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  DocumentDuplicateIcon,
  DocumentIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  InboxArrowDownIcon,
  KeyIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  TableCellsIcon,
  UserIcon,
  UsersIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

import { SidebarMenuObj } from "./types";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes: SidebarMenuObj[] = [
  {
    path: "/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    pageName: "Dashboard",
    pageTitle: "Dashboard",
  },
  {
    path: "/leads",
    icon: <InboxArrowDownIcon className={iconClasses} />,
    pageName: "Leads",
    pageTitle: "Leads",
  },
  {
    path: "/transactions",
    icon: <CurrencyDollarIcon className={iconClasses} />,
    pageName: "Transações",
    pageTitle: "Transações",
  },
  {
    path: "/charts",
    icon: <ChartBarIcon className={iconClasses} />,
    pageName: "Análise",
    pageTitle: "Análise",
  },
  {
    path: "/integration",
    icon: <BoltIcon className={iconClasses} />,
    pageName: "Integração",
    pageTitle: "Integração",
  },
  {
    path: "/calendar",
    icon: <CalendarDaysIcon className={iconClasses} />,
    pageName: "Calendário",
    pageTitle: "Calendário",
  },
  {
    path: "",
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
    pageName: "Página",
    pageTitle: "Página",
    submenu: [
      {
        path: "/login",
        icon: <ArrowRightEndOnRectangleIcon className={submenuIconClasses} />,
        pageName: "Login",
        pageTitle: "Login",
      },
      {
        path: "/register",
        icon: <UserIcon className={submenuIconClasses} />,
        pageName: "Registro",
        pageTitle: "Registro",
      },
      {
        path: "/forgot-password",
        icon: <KeyIcon className={submenuIconClasses} />,
        pageName: "Esqueci minha senha",
        pageTitle: "Esqueci minha senha",
      },
      {
        path: "/app/blank",
        icon: <DocumentIcon className={submenuIconClasses} />,
        pageName: "Página em branco",
        pageTitle: "Página em branco",
      },
      {
        path: "/app/404",
        icon: <ExclamationTriangleIcon className={submenuIconClasses} />,
        pageName: "404",
        pageTitle: "404",
      },
    ],
  },
  {
    path: "/settings",
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />,
    pageName: "Settings",
    pageTitle: "",
    submenu: [
      {
        path: "/app/settings-profile",
        icon: <UserIcon className={submenuIconClasses} />,
        pageName: "Perfil",
        pageTitle: "Perfil",
      },
      {
        path: "/settings/billing",
        icon: <WalletIcon className={submenuIconClasses} />,
        pageName: "Billing",
        pageTitle: "Bills",
      },
      {
        path: "/settings/team",
        icon: <UsersIcon className={submenuIconClasses} />,
        pageName: "Team",
        pageTitle: "Team",
      },
    ],
  },
  {
    path: "",
    icon: <QuestionMarkCircleIcon className={`${iconClasses} inline`} />,
    pageName: "Ajuda",
    pageTitle: "Ajuda",
    submenu: [
      {
        path: "/app/getting-started",
        icon: <DocumentTextIcon className={submenuIconClasses} />,
        pageName: "Começando",
        pageTitle: "Começando",
      },
      {
        path: "/app/features",
        icon: <TableCellsIcon className={submenuIconClasses} />,
        pageName: "Funcionalidades",
        pageTitle: "Funcionalidades",
      },
      {
        path: "/app/components",
        icon: <CodeBracketSquareIcon className={submenuIconClasses} />,
        pageName: "Componentes",
        pageTitle: "Componentes",
      },
    ],
  },
];

export default routes;
