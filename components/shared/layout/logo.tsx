import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex items-center justify-center ">
      <Image
        src={"/logo.png"}
        alt="The Connector"
        width={100}
        height={100}
        className="w-[40px] lg:w-[60px] object-contain"
      />
    </div>
  );
};

export default Logo;
