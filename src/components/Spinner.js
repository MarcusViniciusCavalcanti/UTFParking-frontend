import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const Spinner = ({ size, ...props }) => (
  <Spin
    {...props}
    indicator={<LoadingOutlined style={{ fontSize: size || 24 }} spin />}
  />
)

export default Spinner
