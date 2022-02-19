import { Fragment } from 'react'
import CardTitles from './CardTitles'
import CardImages from './CardImages'
import CardNavigation from './CardNavigation'
import CardHeaderFooter from './CardHeaderFooter'
import CardContentTypes from './CardContentTypes'
import CardTextAlignment from './CardTextAlignment'
import CardStyleVariation from './CardStyleVariation'
import CardLayout from './CardLayout'
import Breadcrumbs from '@components/breadcrumbs'
const BasicCards = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Basic Cards' breadCrumbParent='Card' breadCrumbActive='Basic Cards' />
      <CardTitles />
      <CardContentTypes />
      <CardHeaderFooter />
      <CardTextAlignment />
      <CardNavigation />
      <CardImages />
      <CardStyleVariation />
      <CardLayout />
    </Fragment>
  )
}

export default BasicCards
