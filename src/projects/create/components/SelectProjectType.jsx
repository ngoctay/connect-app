import React, { PropTypes as PT } from 'react'
import config from '../../../config/projectWizard'
import ProjectTypeCard from './ProjectTypeCard'
import SVGIconImage from '../../../components/SVGIconImage'
import { findProductsOfCategory } from '../../../config/projectWizard'
import './SelectProjectType.scss'

function SelectProjectType(props) {
  const cards = []
  for (const key in config) {
    const item = config[key]
    const icon = <SVGIconImage filePath={item.icon} />
    const products = findProductsOfCategory(item.id, false) || []
    // don't render disabled items for selection
    // don't render hidden items as well, hidden items can be reached via direct link though
    if (item.disabled || item.hidden) continue
    cards.push(
      <ProjectTypeCard
        icon={icon}
        info={item.info}
        key={key}
        onClick={() => props.onProjectTypeChange(item.id)}
        type={key}
        buttonText={ products.length > 1 ? 'View All' : 'Select Project'}
      />
    )
  }
  return (
    <div>
      <div className="header headerSelectProjectType">
        <SVGIconImage filePath="connect-logo-mono" className="connectLogo"/>
      </div>
      <div className="SelectProjectType">
        <h1>Create a new project</h1>
        <div className="cards">{cards}</div>
        <div className="footer">
          Looking for something else? <a href="http://crowdsourcing.topcoder.com/piqued_by_crowdsourcing">Get in touch with us.</a>
        </div>
      </div>
    </div>
  )
}

SelectProjectType.propTypes = {
  onProjectTypeChange: PT.func.isRequired,
  userRoles: PT.arrayOf(PT.string)
}

export default SelectProjectType
