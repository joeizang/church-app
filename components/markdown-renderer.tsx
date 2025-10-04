import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-church-purple mb-6 mt-8 first:mt-0">{children}</h1>
          ),
          h2: ({ children }) => <h2 className="text-2xl font-bold text-church-purple mb-4 mt-6">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-semibold text-church-purple mb-3 mt-5">{children}</h3>,
          h4: ({ children }) => <h4 className="text-lg font-semibold text-church-purple mb-2 mt-4">{children}</h4>,
          p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-church-gold bg-church-gold/5 pl-6 py-4 mb-6 italic text-gray-700">
              {children}
            </blockquote>
          ),
          code: ({ inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "")
            return !inline && match ? (
              <SyntaxHighlighter
                style={tomorrow}
                language={match[1]}
                PreTag="div"
                className="rounded-lg mb-4"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-church-red" {...props}>
                {children}
              </code>
            )
          },
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-church-purple hover:text-church-red underline transition-colors"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          strong: ({ children }) => <strong className="font-semibold text-church-purple">{children}</strong>,
          em: ({ children }) => <em className="italic text-gray-600">{children}</em>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
