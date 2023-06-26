import Main from "../pages/Main/Main";
import Contacts from "../pages/Contacts/Contacts";
import Projects from "../pages/Projects/Projects";

export const MAIN_ROUTE = "/";
export const CONTACTS_ROUTE = "/contacts";
export const PROJECTS_ROUTE = "/projects";

export const mainRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: PROJECTS_ROUTE,
    Component: Projects,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
];

export const navigationItems = [
  { route: MAIN_ROUTE, title: "Home" },
  { route: PROJECTS_ROUTE, title: "Projects" },
  { route: CONTACTS_ROUTE, title: "Contacts" },
];
