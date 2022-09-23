import AboutUsPage from "../pages/about-us/AboutUs";
import AccomodationPage from "../pages/accomodations/Accomodations";
import ExperiencePage from "../pages/experience/Experience";
import HomePage from "../pages/home/Home";

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
  }
]

export default routes;