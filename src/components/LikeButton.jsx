import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="botones">
      <button className="btn" onClick={() => setLikes(likes + 1)}>
        Me gusta ({likes})
      </button>
    </div>
  );
}

export default LikeButton;
