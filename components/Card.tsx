import React from "react";

type CardProps = {
  url: string;
  name: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="flex justify-center p-2 m-2">
      <div
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex h-56 w-96 justify-center text-center cursor-pointer text-white font-bold items-end rounded-sm shadow-black shadow-md"
      >
       <div className="m-2 text-xl">
        {props.name}
        </div> 
      </div>
    </div>
  );
};

export default Card;
