import React from 'react'
import { atom } from 'recoil'

function recoilCounter() {
    const couterAtom = atom({
        key:"counter",
        default:0
    })
  return (
    <div>recoilCounter</div>
  )
}

export default recoilCounter