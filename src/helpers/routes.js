import {
  HomePage,
  PageAbout,
  PageContact,
  PagePricing,
  PageServices,
} from "../components/pages/pagesRoutes";
import Dashboard from "../components/dashboards/Dashboard";
import LandingLayout from "../components/layouts/LandingLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Projects from "../components/dashboards/Projects";

const routes = [
  { path: "/", layout: LandingLayout, component: HomePage },
  { path: "/about", layout: LandingLayout, component: PageAbout },
  { path: "/contact", layout: LandingLayout, component: PageContact },
  { path: "/pricing", layout: LandingLayout, component: PagePricing },
  { path: "/services", layout: LandingLayout, component: PageServices },
  { path: "/dashboard", layout: DashboardLayout, component: Dashboard },
  { path: "/projects", layout: DashboardLayout, component: Projects },
];

export { routes };
