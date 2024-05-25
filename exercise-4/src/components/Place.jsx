export default function Place({place}) {
  const {title,image}=place
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src={image.src} alt={image.alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}
