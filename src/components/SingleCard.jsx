import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="card-face" src={card.src} alt="card front" />
        <img
          className="card-back"
          src="/img/cardcover_resize.jpeg"
          onClick={handleClick}
          alt="cover"
        />
      </div>
    </div>
  );
}
