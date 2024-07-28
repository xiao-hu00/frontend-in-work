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
registerApplication(
  'app2',
  () => System.import('@test-spa/spa2-app'),
  location => location.pathname.startsWith('/app2'),
  { some: 'value' }
)
layoutEngine.activate()
start()
