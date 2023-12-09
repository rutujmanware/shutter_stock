import React from "react";

const CategoryComponent = () => {
  interface category {
    url: string;
    name: string;
  }
  const categories: category[] = [
    {
      url: "https://images.ctfassets.net/hrltx12pl8hq/5GaLeZJlLyOiQC4gOA0qUM/a0398c237e9744ade8b072f99349e07a/shutterstock_152461202_thumb.jpg?fit=fill&w=820&h=461&fm=webp",
      name: "Abstract",
    },
    {
      url: "https://images.ctfassets.net/hrltx12pl8hq/yZsuq5HdBuUmYekaKiuUQ/d73a0e6f5fe939be07a19f22a92f2e09/Wild-Life?fit=fill&w=820&h=461&fm=webp",
      name: "Wild Life",
    },
    {
      url: "https://images.ctfassets.net/hrltx12pl8hq/2R1nDTrRheK6ae2IWAgGwW/e879fceb983dd133702ecdbfb560d4cd/Aerial?fit=fill&w=820&h=461&fm=webp",
      name: "The arts",
    },
    {
      url: "https://images.ctfassets.net/hrltx12pl8hq/77nM3vIkxOy0MSIeESAsi6/ef81eb2041ae0b3a240a8241c732b0eb/3D_Footage?fit=fill&w=820&h=461&fm=webp",
      name: "Background | Textures",
    },
    {
      url: "https://images.ctfassets.net/hrltx12pl8hq/29slzVZfucEQwKoKc8QcEA/ed7ceb74525e822dd3eb888f570f0d52/adventure?fit=fill&w=820&h=461&fm=webp",
      name: "Beauty | Fashion",
    },
    {
      url: "https://images.ctfassets.net/hrltx12pl8hq/61MiY3Wj3U6KSSKi2muig2/7e4c77aa598ca4ac93aab5858c3e7627/Autumn?fit=fill&w=820&h=461&fm=webp",
      name: "Buildings | Landmarks",
    },
    {
      url: "https://images.ctfassets.net/hrltx12pl8hq/1QHuKhHQsUc60OIYu8WmMe/abf8f4f062b51a195164795b21861d14/d6598597b7dcf6da4261f444ab184b8ca298eec0-business-finance_economics-min.jpg?fit=fill&w=820&h=461&fm=webp",
      name: "Business | Finance",
    },
    {
      url: "https://images.ctfassets.net/hrltx12pl8hq/1zDYpXmnZ28YUmY4AewASo/79cd0a32defa483f07f724001ffa4647/adf8dc804aa639b6420b1df701cdf926d5fd9e7b-celebrities_royalty-min.jpg?fit=fill&w=820&h=461&fm=webp",
      name: "Celebrities",
    },
    {
      url: "https://images.ctfassets.net/hrltx12pl8hq/1BJYo4EaH6My0Iei8sIAUS/8d7632ec0ddc03eab2adbd13635e4502/a26b96f792315a99447a16a19cca0ec8961f5a85-editorial_news-min.jpg?fit=fill&w=820&h=461&fm=webp",
      name: "Editorial",
    },
    {
      url: "https://images.ctfassets.net/hrltx12pl8hq/72Bssmf1tugCmYy2qCAIUq/b21c6e3a5444fa0f7ed09fbe03a1a4d8/841b84365ff14aa1755fdddd5b53cfe5310765a9-education_learning-min.jpg?fit=fill&w=820&h=461&fm=webp",
      name: "Education",
    },
    {
      url: "https://images.ctfassets.net/hrltx12pl8hq/38almJVRFKSY0maSUC0Oay/1976e0f067ed0aa3d9cb6fcb4d262567/Categories_thumbnail_image_852x480_food.jpg?fit=fill&w=820&h=461&fm=webp",
      name: "Food and drink",
    },
    {
      url: "https://images.ctfassets.net/hrltx12pl8hq/4c5OPstDC8Acos4uaCskG8/216b4fde92f4d4d3907d5e8c77cb1ea6/Categories_thumbnail_image_852x480_healthcare.jpg?fit=fill&w=820&h=461&fm=webp",
      name: "Healthcare / Medical",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className=" container mx-5 mt-10">
        <div className="pt-2 pb-2 pr-2">
          <div className="font-bold text-3xl">
            Browse by category to find your perfect visual
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {categories.map((cat, index) => (
            <div>
              <div>
                <img src={cat.url} className="rounded-md" />
              </div>
              <div className="font-bold py-2 pb-3 text-md">{cat.name}</div>
            </div>
          ))}
        </div>
        <div className="">
          <div className="flex justify-center my-10">
            <button className="btn p-2 px-16 border shadow-sm shadow-black border-gray-500 rounded-full font-bold ">See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
