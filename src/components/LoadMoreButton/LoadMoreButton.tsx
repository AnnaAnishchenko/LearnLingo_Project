//src/LoadMoreButton/LoadMoreButton.tsx

import css from "./LoadMoreButton.module.css";

interface LoadMoreButtonProps {
  onClick: () => void;
}

export default function LoadMoreButton({ onClick }: LoadMoreButtonProps) {
  return (
    <button onClick={onClick} className={css.loadMoreButton}>
      Load more
    </button>
  );
}
