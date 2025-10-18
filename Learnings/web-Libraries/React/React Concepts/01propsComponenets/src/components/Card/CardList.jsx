import Card from "./Card";

function CardList() {
  const cardData = [
    {
      title: "User 1",
      value: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "User 2",
      value: "Dolore repellendus fugit nam aliquam dolorem provident deserunt.",
    },
    {
      title: "User 3",
      value: "Officia distinctio magni soluta. Cum, nemo excepturi?",
    },
    {
      title: "User 4",
      value:
        "Tempore quibusdam fuga accusamus totam perspiciatis exercitationem.",
    },
    {
      title: "User 5",
      value: "Pariatur dicta minima itaque sunt placeat assumenda.",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((item, index) => (
        <Card key={index} title={item.title} value={item.value} />
      ))}
    </div>
  );
}

export default CardList;
