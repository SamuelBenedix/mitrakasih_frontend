import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 bg-gray-300 py-10">
      <div className="mx-container-2xl flex items-center justify-start">
        <div>
          <Image src="/images/logo.png" alt="" width={120} height={120} />
        </div>
        <div className="ml-10">
          <p className="mb-1 text-sm text-gray-600">
            Puri Wadya Kencana, CitraLand Indonesia 60213
          </p>
          <p>
            <span className="font-medium">Phone:</span> +62 31 741 5018 or +62
            31 21001716
          </p>
          <p>
            <span className="font-medium">Fax:</span> +62 31 741 5018
          </p>
          <p>
            <span className="font-medium">Email:</span>{" "}
            school@sekolahciputra.sch.id
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
