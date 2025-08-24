// import * as React from "react"

// import { cn } from "@/lib/utils"

// function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
//   return (
//     <textarea
//       data-slot="textarea"
//       className={cn(
//         "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// export { Textarea }

import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Base styles - matching the Input component
        "placeholder:text-gray-500 selection:bg-purple-500/30 selection:text-white",
        "flex field-sizing-content min-h-24 w-full rounded-lg border bg-transparent px-4 py-3 text-base transition-all duration-100 outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
        
        // Subtle border and background that matches your theme
        "border-gray-600/50 bg-gray-900/10 backdrop-blur-xs",
        "text-gray-200",
        
        // Gentle focus state - subtle purple glow instead of obvious ring
        "focus:border-purple-500/60 focus:bg-gray-900/30",
        "focus:shadow-lg focus:shadow-purple-500/10",
        
        // Hover state for better UX
        "hover:border-gray-500/60 hover:bg-gray-900/25",
        
        // Error state that fits the theme
        "aria-invalid:border-red-400/60 aria-invalid:shadow-red-500/10",
        
        // Textarea specific styles
        "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700/50",
        
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
