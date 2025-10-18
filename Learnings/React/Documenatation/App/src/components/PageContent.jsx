import TableOfContents from "./TableOfContents";
import DocumentationText from "./DocumentationText";

const PageContent = () => {
  return (
    <div className="flex flex-1 gap-6">
      {/* TOC */}
      <div className="w-1/4">
        <TableOfContents />
      </div>

      {/* Main Docs */}
      <div className="flex-1">
        <DocumentationText />
      </div>
    </div>
  );
};

export default PageContent;
