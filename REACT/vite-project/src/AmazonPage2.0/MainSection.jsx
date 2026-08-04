import ItemCard from "./ItemCard";

// The data belongs here, and we loop through it here
const data = [
  {
    description: "Jump Rope, Tangle-Free Rapid Speed Jumping Rope Cable with Ball Bearings for Women, Men, and Kids, Adjustable Steel Jump Rop",
    amount: "KES 1157",
    img: "https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description: "BOOMIBOO Jump Rope, Adjustable Jump Ropes,Skipping Rope Tangle-Free Rapid Speed with Ball Bearings for Women ",
    amount: "KES 697",
    img: "https://m.media-amazon.com/images/I/71WhY22zw7L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description: "SPORTBIT Adjustable Jump Rope for Fitness and Exercise | Fitness and Exercise, Cardio, Boxing, and Weight Loss, Speed Rope, Men",
    amount: "KES 774",
    img: "https://m.media-amazon.com/images/I/71UzJ-BgpFL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description: "SPORTBIT Adjustable Jump Rope for Fitness and Exercise | Fitness and Exercise, Cardio, Boxing, and Weight Loss, Speed Rope, Men",
    amount: "KES 774",
    img: "https://m.media-amazon.com/images/I/71UzJ-BgpFL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description: "JAMIEWIN Led Light Up Jump Rope for Kids Glow in the Dark Beaded Jump Rope | Adjustable, Colorful Soft Beaded Segmented",
    amount: "KES 1679",
    img: "https://m.media-amazon.com/images/I/719M6JVne6L._AC_UL480_FMwebp_QL65_.jpg",
  },
];

function MainSection() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: "20px" }}>
      {/* This map creates a new ItemCard for every entry in the data array */}
      {data.map((item, index) => (
        <ItemCard 
          key={index} 
          description={item.description} 
          amount={item.amount} 
          img={item.img} 
        />
      ))}
    </div>
  );
}

export default MainSection;