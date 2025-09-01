// eslint-disable-next-line no-unused-vars
const BenefitCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="flex justify-center w-full max-w-[200px] py-[1.2em] px-[.8em] items-center flex-col rounded-3xl bg-gray-100 hover:bg-gray-300 p-[0.2em]">
      <div
        className={`w-[80px] h-[80px] mb-[2em] overflow-hidden rounded-full flex justify-center items-center border-none ${color}`}
      >
        <Icon className="w-10 h-10" />
      </div>
      <h3 className="mb-[0.3em] font-bold text-[1.2rem]">{title}</h3>
      <p className="font-light mb-[2rem]">{description}</p>
    </div>
  );
};
export default BenefitCard;