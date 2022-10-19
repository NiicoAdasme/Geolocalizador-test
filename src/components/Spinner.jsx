import React from 'react'
import ReactLoading from 'react-loading';

export const Spinner = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={667} width={375} />
)
