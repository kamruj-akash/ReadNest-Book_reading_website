import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        {/* Monitor with 404 */}
        <div className="relative bg-[#f9f1eb] rounded-2xl p-10 shadow-xl animate-fadeIn">
          <h1 className="text-[80px] font-bold tracking-widest text-black font-mono drop-shadow-md">
            404
          </h1>
          <p className="text-xl text-gray-800 mt-4">Page Error Animations</p>
        </div>

        {/* Description */}
        <p className="text-gray-400 mt-8 text-sm sm:text-base">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* CTA Button */}
        <NavLink
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-[#00FFD1] text-black font-semibold rounded-lg shadow hover:bg-[#00ddb6] transition-all duration-300"
        >
          Back to Home
        </NavLink>

        {/* Background SVG Elements (simple placeholder for now) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          {/* Grid pattern */}
          <div className="w-full h-full bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] bg-[size:30px_30px]"></div>

          {/* SVG cables or decoration (you can replace with actual SVGs) */}
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-teal-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400 rounded-full blur-xl opacity-10 animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
