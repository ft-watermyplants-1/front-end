export default function PlantCard(props) {
  const { plant } = props;

  return (
    <div>
      <h2>plant {plant.plant_id}</h2>
      <h2>{plant.nickname}</h2>
    </div>
  );
}
