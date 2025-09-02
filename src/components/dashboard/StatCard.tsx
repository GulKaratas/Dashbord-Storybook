'use client'

import { Card, CardContent } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: string | number
  icon?: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function StatCard({ title, value, icon, trend, className }: StatCardProps) {
  return (
    <Card className={cn('p-6', className)}>
      <CardContent className="p-0">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-secondary-600">{title}</p>
            <p className="text-3xl font-bold text-secondary-900">{value}</p>
            {trend && (
              <div className={cn(
                'flex items-center text-sm',
                trend.isPositive ? 'text-green-600' : 'text-red-600'
              )}>
                <span className={cn(
                  'mr-1',
                  trend.isPositive ? '↗' : '↘'
                )}>
                  {trend.isPositive ? '↗' : '↘'}
                </span>
                <span>{Math.abs(trend.value)}%</span>
              </div>
            )}
          </div>
          {icon && (
            <div className="text-primary-600">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}




