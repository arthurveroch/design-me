'use client'

import { createContext, SetStateAction, useContext } from 'react'
import { useState } from 'react'

const MobileMenuContext = createContext<null | MenuContext>(null)

type MenuContext = {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
}

export const MobileMenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)

  return (
    <MobileMenuContext.Provider value={{ open, setOpen }}>{children}</MobileMenuContext.Provider>
  )
}

export const useMenu = () => {
  const context = useContext(MobileMenuContext)
  if (!context) throw new Error('useMenu must be used within MobileMenuContextProvider')
  return context
}
