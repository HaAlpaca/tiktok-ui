import routesConfig from '~/config/routes'

// Layout
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import { HeaderOnly } from '~/components/Layout'
const publicRoutes = [
    {path: routesConfig.home    , component: Home}, 
    {path: routesConfig.following, component: Following}, 
    {path: routesConfig.profile, component: Profile}, 
    {path: routesConfig.search, component: Search,layout: null},  
    {path: routesConfig.Upload, component: Upload, layout: HeaderOnly}, 
]
const privateRoutes = [

]

export {publicRoutes, privateRoutes}