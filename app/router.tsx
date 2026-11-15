import type { ComponentType } from "react";
import { createBrowserRouter, type RouteObject } from "react-router";
import RootLayout from "./layout";
import HomeLayout from "./(home)/layout";
import NotFound from "./not-found";

/**
 * Every page on the site. The folders under app/ mirror the URLs ("(home)" is
 * a group that adds the nav and footer but no path segment). Pages load on
 * demand.
 */

type PageModule = { default: ComponentType };
const page = (load: () => Promise<PageModule>): Pick<RouteObject, "lazy"> => ({
  lazy: async () => ({ Component: (await load()).default }),
});

const routes: RouteObject[] = [
  {
    Component: RootLayout,
    // Shown while the first page's code loads.
    HydrateFallback: () => null,
    children: [
      {
        Component: HomeLayout,
        children: [
          { index: true, ...page(() => import("./(home)/page")) },
          { path: "plans", ...page(() => import("./(home)/plans/page")) },
          { path: "contact", ...page(() => import("./(home)/contact/page")) },
        ],
      },
      { path: "qr", ...page(() => import("./qr/page")) },
      { path: "*", Component: NotFound },
    ],
  },
];

export const router = createBrowserRouter(routes);
