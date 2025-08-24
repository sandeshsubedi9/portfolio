// import * as React from "react"

// import { cn } from "@/lib/utils"

// function Input({ className, type, ...props }: React.ComponentProps<"input">) {
//   return (
//     <input
//       type={type}
//       data-slot="input"
//       className={cn(
//         "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//         "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
//         "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// export { Input }


import * as React from "react" 
 
import { cn } from "@/lib/utils" 
 
function Input({ className, type, ...props }: React.ComponentProps<"input">) { 
  return ( 
    <input 
      type={type} 
      data-slot="input" 
      className={cn( 
        // Base styles - subtle dark theme integration
        "file:text-foreground placeholder:text-gray-500 selection:bg-purple-500/30 selection:text-white",
        "flex h-12 w-full min-w-0 rounded-lg border bg-transparent px-4 py-3 text-base transition-all duration-100 outline-none",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        
        // Subtle border and background that matches your theme
        "border-gray-600/50 bg-gray-900/15 backdrop-blur-xs",
        "text-gray-200",
        
        // Gentle focus state - subtle purple glow instead of obvious ring
        "focus:border-purple-500/60 focus:bg-gray-900/30",
        "focus:shadow-lg focus:shadow-purple-500/10",
        
        // Hover state for better UX
        "hover:border-gray-500/60 hover:bg-gray-900/25",
        
        // Error state that fits the theme
        "aria-invalid:border-red-400/60 aria-invalid:shadow-red-500/10",
        
        className 
      )} 
      {...props} 
    /> 
  ) 
} 
 
export { Input }