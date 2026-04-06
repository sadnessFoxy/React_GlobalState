import React from 'react'
import { useRecoilState } from 'recoil'
import { couterAtom } from '../recoil/recoilCounter'

function componentA() {
    const count = counterAtom
  return (
    <div> Component A: Counter value: {count} </div>
  )
}

export default componentA