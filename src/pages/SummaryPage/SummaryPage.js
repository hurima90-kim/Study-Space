import React, { useState } from "react";

const SummaryPage = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <form>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          id="confirm-checkbox"
        />
        <label htmlFor="confirm-checkbox">Can you check the order?</label>
        <br />
        <button type="submit" disabled={!checked}>
          Confirm order
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
