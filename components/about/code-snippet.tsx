"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function CodeSnippet() {
  const [lines, setLines] = useState<string[]>([])
  const codeLines = [
    "class Company {",
    "  constructor() {",
    "    this.founded = 2015;",
    "    this.mission = 'Innovation';",
    "    this.team = [];",
    "  }",
    "",
    "  addTeamMember(member) {",
    "    this.team.push(member);",
    "    return this;",
    "  }",
    "",
    "  deliver() {",
    "    return 'Amazing Solutions';",
    "  }",
    "}",
    "",
    "const ourCompany = new Company();",
    "ourCompany.addTeamMember('Engineer');",
    "ourCompany.addTeamMember('Designer');",
    "ourCompany.deliver();",
  ]

  useEffect(() => {
    let currentLines: string[] = []
    let timer: NodeJS.Timeout

    const addLine = (index: number) => {
      if (index < codeLines.length) {
        currentLines = [...currentLines, codeLines[index]]
        setLines([...currentLines])

        timer = setTimeout(() => addLine(index + 1), 150)
      }
    }

    addLine(0)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-full p-4 font-mono text-xs md:text-sm overflow-hidden">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="whitespace-pre text-orange-400"
        >
          {line || " "}
        </motion.div>
      ))}

      {/* Blinking cursor */}
      <motion.div
        className="inline-block w-2 h-4 bg-orange-500"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
      />
    </div>
  )
}
