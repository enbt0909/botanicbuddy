import { useRef } from 'react';

function PlantList({ plantData }) {
  const containerRef = useRef(null);

  const handleClick = (plant) => {
    console.log("Sie haben auf die Pflanze geklickt: ", plant);
    if (containerRef.current) {
      containerRef.current.scrollTop = 100;
    }
  };

  return (
    <div className="plant-container" ref={containerRef}>
      {plantData.map((plant) => (
        <div key={plant.id} onClick={() => handleClick(plant)} className="plant-list">
          <h2>{plant.common_name}</h2>
          <p>Familie: {plant.family_common_name}</p>
          <p>Wissenschaftlicher Name: {plant.scientific_name}</p>
          <p>Genus: {plant.genus}</p>
          <p>Ordnung: {plant.order}</p>
          {plant.care_instructions && <p>Pflegehinweise: {plant.care_instructions}</p>}
          {plant.image_url && <img className="plant-image" src={plant.image_url} alt={plant.common_name} />}
        </div>
      ))}
    </div>
  );
}

export default PlantList;