const TableOfContents = () => {
  return (
    <nav className="p-4 border rounded-md bg-gray-50">
      <h3 className="font-semibold mb-2">Table of Contents</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><a href="#intro" className="hover:text-blue-600">Introduction</a></li>
        <li><a href="#setup" className="hover:text-blue-600">Setup</a></li>
        <li><a href="#usage" className="hover:text-blue-600">Usage</a></li>
      </ul>
    </nav>
  );
};

export default TableOfContents;
