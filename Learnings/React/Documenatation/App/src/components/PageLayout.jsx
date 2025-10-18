import NavigationHeader from "./NavigationHeader";
import Sidebar from "./Sidebar";
import PageContent from "./PageContent";

const PageLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Navigation Header */}
        <NavigationHeader />

        {/* Main Content */}
        <main className="flex flex-1 p-6">
          <PageContent />
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
