import React from 'react'
import { Tag } from 'antd'

const TagUserType = ({ type }) => {
  if (type === 'SERVICE') {
    return <Tag color='purple'>Servidor</Tag>
  }

  if (type === 'STUDENTS') {
    return <Tag color='cyan'>Estudante</Tag>
  }

  return <Tag>{type}</Tag>
}

export default TagUserType
