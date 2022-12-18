import React, { PropsWithChildren } from 'react'
import { AuthProvider } from './Auth'

export default function Context(props: PropsWithChildren) {
  return (
    <AuthProvider>
      {props.children}
    </AuthProvider>
  )
}
