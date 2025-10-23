'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, LucideIcon } from 'lucide-react'

interface PaymentMethodItemProps {
  icon: LucideIcon
  title: string
  description: string
  defaultOpen?: boolean
  Children: React.ReactNode
}

const PaymentMethodItem = ({
  icon: Icon,
  title,
  description,
  defaultOpen = false,
  Children = <></>,
}: PaymentMethodItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-primary" />
          <span className="font-semibold">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>

      <div className="overflow-hidden">
        <div className="p-4 pt-3 border-t bg-muted/50  ">
          <p className={'p-4 pt-3   '}>{description}</p>
          <div>{Children}</div>
        </div>
      </div>
    </div>
  )
}

export { PaymentMethodItem }
