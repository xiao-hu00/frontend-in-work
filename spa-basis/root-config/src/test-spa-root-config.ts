import { registerApplication, start } from 'single-spa'
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout'
import microfrontendLayout from './microfrontend-layout.html'

const routes = constructRoutes(microfrontendLayout)

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name)
  },
})
const layoutEngine = constructLayoutEngine({ routes, applications })

applications.forEach(registerApplication)

System.import('single-spa').then(({ registerApplication, start }) => {
  registerApplication({
    name: '@test-spa/test-react-app',
    app: () => System.import('@test-spa/test-react-app'),
    activeWhen: (location) => location.pathname.startsWith('/app1'),
  });
  start()
})

layoutEngine.activate()
start()
