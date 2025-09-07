import Image from "next/image";
const Logo = ({
  className,
  priority = true,
}: {
  className?: string;
  priority?: boolean;
}) => {
  return (
    <div className="flex items-center justify-center ">
      <Image
        src={"/logo.png"}
        alt="The Connector"
        width={100}
        height={100}
        priority={priority}
        className={`w-[50px] lg:w-[60px] object-contain ${className}`}
      />
    </div>
  );
};

export default Logo;
