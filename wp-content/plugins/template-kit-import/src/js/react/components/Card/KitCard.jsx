import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import ItemCard from './ItemCard'
import GridItem from '../Grid/GridItem'
import DeleteTemplateKit from '../Buttons/DeleteTemplateKit'
import ViewInstalledKitButton from '../Buttons/InternalLinkButton'
import ButtonWrapper from '../Buttons/ButtonWrapper'
import useGlobalConfig from '../Contexts/useGlobalConfig'
import styles from './KitCard.module.scss'
import ExternalLinkButton from '../Buttons/ExternalLinkButton'

const KitCard = ({ item }) => {
  const { url } = useRouteMatch()
  const [kitDeleted, setKitDeleted] = useState(false)
  const { getReviewMode } = useGlobalConfig()

  if (kitDeleted) {
    return null
  }

  return (
    <GridItem colWidthPercentage={33} className={styles.itemCard}>
      <ItemCard
        Images={(
          <Link to={`${url}/kit/${item.id}`} className={styles.itemImageLink}>
            <img src={item.screenshot_url} alt={item.title} className={styles.itemImage} />
          </Link>
        )}
        Buttons={(
          <ButtonWrapper>
            <ViewInstalledKitButton type='primary' label='View Installed Kit' icon='plus' href={`${url}/kit/${item.id}`} />
            {getReviewMode() ? (
              <ExternalLinkButton href={`admin.php?page=template-kit-review&template_kit_id=${item.id}`} type='primary' openNewWindow label='Review' icon='eye' />
            ) : null}
            <div className={styles.itemDelete}>
              <DeleteTemplateKit
                templateKitId={item.id}
                completeCallback={() => {
                  setKitDeleted(true)
                }}
              />
            </div>
          </ButtonWrapper>
        )}
        title={item.title}
        description={`Contains ${item.template_count} templates`}
      />
    </GridItem>
  )
}

export default KitCard
