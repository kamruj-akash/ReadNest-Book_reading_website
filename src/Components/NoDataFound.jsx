const NoDataFound = () => {
  // const navigate = useNavigate();
  return (
    <>
      <div className="max-w-4xl mx-auto mt-12 p-8 border border-teal-500 bg-teal-50 text-teal-700 rounded-lg shadow-md text-center mb-30">
        <h2 className="text-2xl font-semibold mb-4">No Book Found</h2>
        <p className="text-lg mb-6">
          Sorry, we couldn’t find the book you’re looking for. It might have
          been removed or doesn’t exist.
        </p>
      </div>
    </>
  );
};

export default NoDataFound;
