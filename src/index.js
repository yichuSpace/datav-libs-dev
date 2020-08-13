import Container from './components/Container/index'
import Loading from './components/Loading/index'
import FlyBox from './components/FlyBox/index'
import LogoIcon from './components/LogoIcon/index'
import CountTo from './components/CountTo/index'
import VueEcharts from './components/VueEcharts/index'

export default function (Vue) {
  Vue.use(Container)
  Vue.use(Loading)
  Vue.use(FlyBox)
  Vue.use(LogoIcon)
  Vue.use(CountTo)
  Vue.use(VueEcharts)
}