import AboutUsPage from "../pages/about-us/AboutUs";
import AccomodationPage from "../pages/accomodations/Accomodations";
import ExperiencePage from "../pages/experience/index";
import ExpHome from "../pages/experience/ExpHome";
import Explore from "../pages/experience/Explore";
import HomePage from "../pages/home/Home";
import Seasons from "../pages/experience/Season";
import CorporatePage from "../pages/corporate";
import TNCPage from "../pages/footer-pages/TnC";
import FAQPage from "../pages/footer-pages/Faq";
import PrivacyPage from "../pages/footer-pages/Privacy";
import ContactPage from "../pages/footer-pages/Contact";
import DirectionsPage from "../pages/footer-pages/Directions";

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
  },
  {
    path: '/corporate',
    component: CorporatePage
  },
  {
    path: '/tnc',
    component: TNCPage,
  },
  {
    path: '/faq',
    component: FAQPage,
  },
  {
    path: '/privacy',
    component: PrivacyPage,
  },
  {
    path: '/contact',
    component: ContactPage,
  },
  {
    path: '/directions',
    component: DirectionsPage,
  }
]

export default routes;