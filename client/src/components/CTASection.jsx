const CTASection = () => {
  return (
    <section className="bg-gray-400 py-[4rem] text-center flex items-center flex-col justify-center h-[400px]">
      <div className="w-[90%] max-w-[760px] mx-auto flex justify-center items-center flex-col py-[2em] px-[0.4em]">
        <a
          href="#"
          className="px-6 py-3 rounded-full bg-amber-600 font-semibold tracking-wide shadow-lg transition-all duration-300 hover:bg-amber-700 hover:scale-105 active:scale-95 mb-[2rem] uppercase text-gray-300"
        >
          join the move
        </a>
        <p className="text-[1.2rem] font-extralight text-white">
          become part of the revolution that is shaping the Africa of the future
        </p>
      </div>
    </section>
  );
};
export default CTASection;