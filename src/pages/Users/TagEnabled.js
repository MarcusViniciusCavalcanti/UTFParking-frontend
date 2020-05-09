import React from 'react'
import { Tag } from 'antd'

const TagEnabled = ({ enabled }) => {
  if (enabled) {
    return <Tag color='green'>Sim</Tag>
  }

  return <Tag>Não</Tag>
}

export default TagEnabled
