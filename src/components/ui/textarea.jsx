import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "border-gray-400 placeholder:text-stone-400 focus-visible:border-primary dark:bg-input/30 min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-sm  text-stone-300 transition outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea }
