import Container from './components/Container/index'
import Loading from './components/Loading/index'
import FlyBox from './components/FlyBox/index'

export default function (Vue) {
  Vue.use(Container)
  Vue.use(Loading)
  Vue.use(FlyBox)
}