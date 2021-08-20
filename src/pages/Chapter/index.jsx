import React from 'react'
import { useParams } from 'react-router-dom'
import Chapter01 from '../../containers/Chapter/01'
import Chapter02 from '../../containers/Chapter/02'
import Chapter03 from '../../containers/Chapter/03'
import Chapter04 from '../../containers/Chapter/04'
import Chpater05 from '../../containers/Chapter/05'
import Chapter06 from '../../containers/Chapter/06'
import Chapter07 from '../../containers/Chapter/07'

function Chapter() {
  const { id } = useParams()
  const components = {
    '01': <Chapter01 />,
    '02': <Chapter02 />,
    '03': <Chapter03 />,
    '04': <Chapter04 />,
    '05': <Chpater05 />,
    '06': <Chapter06 />,
    '07': <Chapter07 />
  }
  return <React.Fragment>{components[id]}</React.Fragment>
}

export default Chapter
