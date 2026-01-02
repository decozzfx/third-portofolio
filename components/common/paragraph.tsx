import { Text, TextProps } from '@chakra-ui/react'

interface ParagraphProps extends TextProps {
  children: React.ReactNode
}

export function Paragraph({ children, ...props }: ParagraphProps) {
  return (
    <Text
      textAlign="justify"
      lineHeight="relaxed"
      {...props}
    >
      {children}
    </Text>
  )
}
