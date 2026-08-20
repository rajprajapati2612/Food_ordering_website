import React from 'react'
import { Loader2 } from 'lucide-react'
const LoadingAnimation = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="flex flex-col items-center gap-3">

        <Loader2 className="h-10 w-10 text-green-600 animate-spin" />

        <p className="text-sm text-gray-600 animate-pulse">
          Please wait...
        </p>

      </div>
    </div>
    </div>
  )
}

export default LoadingAnimation
