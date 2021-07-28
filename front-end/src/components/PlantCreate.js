import React from "react";


export default function PlantModal(props) {
  const { values, submit, change, /* errors, */ disabled } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();

    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div>
      <p>New Plant</p>
      <form onSubmit={onSubmit} className="plant-form">
        <div className="nickname-input" id="nickname-input">
          <label>
            nickname*
            <input
              value={values.nickname}
              onChange={onChange}
              name="nickname"
              type="text"
            />
          </label>
        </div>

        <div className="species-input" id="species-input">
          <label>
            Species
            <input
              value={values.species}
              onChange={onChange}
              name="species"
              type="text"
            />
          </label>
        </div>

        <div
          className="days_between_watering-input"
          id="days_between_watering-input"
        >
          <label>
            Days Between Watering
            <input
              value={values.days_between_watering}
              onChange={onChange}
              name="days_between_watering"
              type="number"
            />
          </label>
        </div>

        <div className="notes-input" id="notes-input">
          <label>
            notes
            <input
              value={values.notes}
              onChange={onChange}
              name="notes"
              type="text"
            />
          </label>
        </div>

        <div className="img_url-input" id="img_url-input">
          <label>
            img_url
            <input
              value={values.img_url}
              onChange={onChange}
              name="img_url"
              type="text"
            />
          </label>
        </div>

        <div className="submit">
          <button disabled={false} id="submit-button">
            Submit Plant
          </button>
        </div>
      </form>
    </div>
  );
}
/**        <div className="errors">
          {// 🔥 RENDER THE VALIDATION ERRORS HERE 
          }
          <div>{errors.name}</div>
          <div>{errors.size}</div>
        </div> **/
