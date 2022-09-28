import AboutUsPage from "../pages/about-us/AboutUs";
import AccomodationPage from "../pages/accomodations/Accomodations";
import ExperiencePage from "../pages/experience/index";
import ExpHome from "../pages/experience/ExpHome";
import Explore from "../pages/experience/Explore";
import HomePage from "../pages/home/Home";
import Seasons from "../pages/experience/Season";

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about-us',
    component: AboutUsPage,
  },
  {
    path: '/accom',
    component: AccomodationPage,
  },
  {
    path: '/exp',
    component: ExperiencePage,
    nested: [
      { type: 'index', component: ExpHome },
      { type: 'route', path: 'explore', component: Explore },
      { type: 'route', path: 'seasons', component: Seasons }
    ]
  }
]

export default routes;