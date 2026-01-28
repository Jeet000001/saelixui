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
    h-15 w-full
    bg-linear-to-b
    from-black
    via-black/80
    to-transparent
  "
        />

        {/* 🔥 BOTTOM BLUR */}
        <div
          className="
    pointer-events-none
    absolute bottom-0 left-0 z-20
    h-15 w-full
    bg-linear-to-b
    from-black
    via-black/80
    to-transparent
  "
        />

        {/* BENTO GRID */}
        <div className="relative z-0 grid h-full w-full grid-cols-10 grid-rows-4 gap-4">
          <div
            className="col-span-3 row-span-1 rounded-2xl border border-white/10 
        bg-linear-to-b from-white/5 to-white/2 
        flex items-center justify-center text-lg font-medium"
          >
            Input
          </div>

          <div
            className="col-span-3 row-span-3 rounded-2xl border border-white/10 
        bg-gradient-to-b from-indigo-500/20 to-indigo-500/5 
        flex items-center justify-center text-2xl font-semibold"
          >
            Card
          </div>

          <div
            className="col-span-4 row-span-2 rounded-2xl border border-white/10 
        bg-gradient-to-b from-white/5 to-white/[0.02] 
        flex items-center justify-center"
          >
            Table
          </div>

          <div
            className="col-span-3 row-span-2 rounded-2xl border border-white/10 
        bg-indigo-500/20 flex items-center justify-center"
          >
            Accordion
          </div>

          <div
            className="col-span-4 row-span-1 rounded-2xl border border-white/10 
        bg-indigo-500/20 flex items-center justify-center"
          >
            Pagination
          </div>

          <div
            className="col-span-2 row-span-1 rounded-2xl border border-white/10 
        bg-indigo-500/20 flex items-center justify-center"
          >
            Button
          </div>

          <div
            className="col-span-4 row-span-1 rounded-2xl border border-white/10 
        bg-indigo-500/20 flex items-center justify-center"
          >
            Alert
          </div>

          <div
            className="col-span-2 row-span-1 rounded-2xl border border-white/10 
        bg-indigo-500/20 flex items-center justify-center"
          >
            Avatar
          </div>

          <div
            className="col-span-2 row-span-1 rounded-2xl border border-white/10 
        bg-indigo-500/20 flex items-center justify-center"
          >
            Switch
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsShowcase;
