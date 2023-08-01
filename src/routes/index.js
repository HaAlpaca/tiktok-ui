// Layout
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import { HeaderOnly } from '~/components/Layout'
const publicRoutes = [
    {path: '/',component: Home}, 
    {path: '/following',component: Following}, 
    {path: '/:nickname',component: Profile}, 
    {path: '/search',component: Search,layout: null},  
    {path: '/upload',component: Upload, layout: HeaderOnly}, 
]
const privateRoutes = [

]

export {publicRoutes, privateRoutes}