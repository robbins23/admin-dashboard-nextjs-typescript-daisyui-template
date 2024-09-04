"use client";

import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import Link from "next/link";
import routes from "@/helper/sidebar-routes";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setPageTitle } from "@/components/features/common/headerSlice";
import { getUserInfo } from "@/components/features/common/userSlice";
import { SidebarMenuObj, UserProfile } from "@/helper/types";
import BookmarkSquareIcon from "@heroicons/react/24/outline/BookmarkSquareIcon";
import ChevronUpIcon from "@heroicons/react/24/outline/ChevronUpIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/outline/ArrowUpOnSquareIcon";
import auth from "@/lib/auth";
import Image from "next/image";

interface LeftSidebarProps {}

function LeftSidebar(props: LeftSidebarProps) {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const close = () => {
    const leftSidebarDrawer = document.getElementById("left-sidebar-drawer");
    if (leftSidebarDrawer) leftSidebarDrawer.click();
  };
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    console.log(pathname);
    let routeObj = routes.filter((r) => {
      return r.path == pathname;
    })[0];
    if (routeObj) {
      dispatch(setPageTitle({ title: routeObj.pageTitle }));
    } else {
      const secondSlashIndex = pathname.indexOf("/", pathname.indexOf("/") + 1);
      if (secondSlashIndex !== -1) {
        const substringBeforeSecondSlash = pathname.substring(
          0,
          secondSlashIndex,
        );
        let submenuRouteObj = routes.filter((r) => {
          return r.path == substringBeforeSecondSlash;
        })[0];
        if (submenuRouteObj.submenu) {
          let submenuObj = submenuRouteObj.submenu.filter((r) => {
            return r.path == pathname;
          })[0];
          dispatch(setPageTitle({ title: submenuObj.pageTitle }));
        }
      }
    }
  }, [dispatch, pathname]);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const logoutUser = async () => {
    console.log("here");
    await auth.logout();
    window.location.href = "/";
  };

  function renderMenu(
    routes: SidebarMenuObj[],
    parentK: string = "",
  ): React.ReactNode {
    return routes.map((route, k) => {
      return (
        <li key={`${parentK}-${k}`}>
          {route.submenu
            ? (
              <details open>
                <summary>
                  {route.icon} {route.pageName}
                </summary>
                <ul>{renderMenu(route.submenu!, k.toString())}</ul>
              </details>
            )
            : (
              renderMenuItem(route)
            )}
        </li>
      );
    });
  }

  function renderMenuItem(route: SidebarMenuObj): React.ReactNode {
    return (
      <Link
        href={route.path}
        className={`${
          pathname == route.path ? "font-semibold bg-base-200 " : "font-normal"
        }`}
      >
        {route.icon} {route.pageName}
        {pathname === route.path
          ? (
            <span
              className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
              aria-hidden="true"
            >
            </span>
          )
          : null}
      </Link>
    );
  }

  return (
    <div className="drawer-side z-30 overflow-hidden">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu pt-2 w-80 bg-base-100 min-h-full text-base-content">
        <button
          className="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={close}
        >
          <XMarkIcon className="h-5 inline-block w-5" />
        </button>

        <li className="mb-2 font-semibold text-xl">
          <Link href="/welcome">
            <Image
              className="mask mask-squircle w-10"
              src="/logo192.png"
              alt="DashWind Logo"
              width="100"
              height="100"
            />
            DashWind
          </Link>
        </li>
        <div
          className="overflow-y-scroll pb-20 no-scrollbar"
          style={{ height: "85vh" }}
        >
          {renderMenu(routes)}
        </div>
      </ul>
      {/* Profile icon, opening menu on click */}
      <div className="dropdown bottom-0 absolute dropdown-top w-80 ">
        <div
          tabIndex={0}
          role="button"
          className="btn w-full bg-base-100 text-left justify-start "
        >
          <div className="avatar">
            <div className="w-6 rounded-full">
              <Image src={user.avatar} alt={user.name} width={80} height={80} />
            </div>
          </div>
          {user.name}
          <ChevronUpIcon className="w-4 " />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content visible w-52 px-4 z-[1]  menu  shadow bg-base-200 rounded-box "
        >
          <li className="">
            <Link href={"/settings/billing"}>
              <BookmarkSquareIcon className="w-4 " />
              Bill History
            </Link>
          </li>
          <div className="divider py-2 m-0"></div>
          <li onClick={() => logoutUser()}>
            <a className=" ">
              <ArrowUpOnSquareIcon className="w-4 " />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
