import Header from "@/components/Header";

const Services = () => {
  return (
    <div className="bg-[#000000] text-white h-[120vh] flex items-center justify-center">
         {/* Header */}
      <div className="fixed top-6 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
      </div>
      <div className="text-base text-center sm:text-lg md:text-xl text-gray-300 mb-6 max-w-md px-6 py-6">
        Services page under construction please visit homepage for all
        information.
      </div>
    </div>
  );
};

export default Services;
