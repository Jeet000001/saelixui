"use client";

const ComponentsShowcase = () => {
  return (
    <div>
      <div className="relative h-screen w-full p-6 overflow-hidden">
        {/* 🔥 TOP BLUR */}
        <div
          className="
    pointer-events-none
    absolute top-0 left-0 z-20
    h-20 w-full
    bg-linear-to-b
   from-white
via-white/80
to-transparent
  "
        />

        {/* 🔥 BOTTOM BLUR */}
        <div
          className="
    pointer-events-none
    absolute bottom-0 left-0 z-20
    h-20 w-full
    bg-linear-to-t  
    from-white
via-white/80
to-transparent
  "
        />

        {/* BENTO GRID */}
        <div className="relative z-0 grid h-full w-full grid-cols-10 grid-rows-4 gap-4">
          <div
            className="col-span-3 row-span-1 rounded-2xl border-2 border-gray-200 bg-gray-50 shadow-md 
        flex items-center justify-center text-lg font-medium hover:scale-105 transition duration-400 active:scale-95"
          >
            Input
          </div>

          <div
            className="col-span-3 row-span-3 rounded-2xl border-2 border-gray-200 bg-gray-50 shadow-md 
        flex items-center justify-center text-2xl font-semibold hover:scale-105 transition duration-400 active:scale-95"
          >
            Card
          </div>

          <div
            className="col-span-4 row-span-2 rounded-2xl border-2 border-gray-200 bg-gray-50 shadow-md
        flex items-center justify-center hover:scale-105 transition duration-400 active:scale-95"
          >
            Table
          </div>

          <div className="col-span-3 row-span-2 rounded-2xl border-2 border-gray-200 bg-gray-50 shadow-md flex items-center justify-center hover:scale-105 transition duration-400 active:scale-95">
            Accordion
          </div>

          <div className="col-span-4 row-span-1 rounded-2xl border-2 border-gray-200 bg-gray-50 shadow-md flex items-center justify-center hover:scale-105 transition duration-400 active:scale-95">
            Pagination
          </div>

          <div className="col-span-2 row-span-1 rounded-2xl border-2 border-gray-200 bg-gray-50 shadow-md flex items-center justify-center hover:scale-105 transition duration-400 active:scale-95">
            Button
          </div>

          <div className="col-span-4 row-span-1 rounded-2xl border-2 border-gray-200 bg-gray-50 shadow-md flex items-center justify-center hover:scale-105 transition duration-400 active:scale-95">
            Alert
          </div>

          <div className="col-span-2 row-span-1 rounded-2xl border-2 border-gray-200 bg-gray-50 shadow-md flex items-center justify-center hover:scale-105 transition duration-400 active:scale-95">
            Avatar
          </div>

          <div className="col-span-2 row-span-1 rounded-2xl border-2 border-gray-200 bg-gray-50 shadow-md flex items-center justify-center hover:scale-105 transition duration-400 active:scale-95">
            Switch
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsShowcase;
