import ReactMarkdown from "react-markdown";

function MarkdownPreview({ content }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkdownPreview;
