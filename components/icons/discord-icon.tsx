import React from "react"

interface DiscordIconProps {
  className?: string;
}

export function DiscordIcon({ className = "w-6 h-6" }: DiscordIconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M15 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M7.5 7.5c3.5-1 5-1 9 0" />
      <path d="M7.5 16.5c3.5 1 5 1 9 0" />
      <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.5-1.5 3-3 .5-1.5 0-4 0-4 0-1-1-2-3-2.5-2-.5-5.5 0-5.5 0s-3.5-.5-5.5 0c-2 .5-3 1.5-3 2.5 0 0-.5 2.5 0 4 .5 1.5 1.5 3 3 3 .5 0 2-2 2-3" />
    </svg>
  );
}