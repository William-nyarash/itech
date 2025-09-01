const FooterCTA = () => {
  return (
    <section className="py-[0.3em] px-[0.2em] bg-gray-800 text-gray-100">
      <div className="flex flex-col justify-center pt-[4em] items-center text-center w-[90%] md:max-w-[760px] mx-auto">
        <h2 className="font-extrabold text-4xl mb-5">Convinced!</h2>
        <p className="mb-[1.2em]">Join the bandwagon and let's build together</p>
        <a
          href="#"
          className="px-6 py-3 rounded-2xl bg-amber-700 text-center capitalize text-white shadow-md hover:bg-amber-800 transition mb-[2rem]"
        >
          Join
        </a>
      </div>
    </section>
  );
};
export default FooterCTA;