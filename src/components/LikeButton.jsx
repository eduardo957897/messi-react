import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button className="like" onClick={() => setLikes(likes + 1)}>
      Me gusta · {likes}
    </button>
  );
}

export default LikeButton;
