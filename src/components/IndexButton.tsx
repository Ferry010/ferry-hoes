interface IndexButtonProps {
  onClick: () => void;
  hidden?: boolean;
}

const IndexButton = ({ onClick, hidden }: IndexButtonProps) => {
  if (hidden) return null;

  return (
    <button
      onClick={onClick}
      className="fixed top-8 right-8 md:top-10 md:right-12 z-[997] font-display text-lg md:text-xl font-medium tracking-wide text-foreground hover:brightness-[1.03] transition-none cursor-pointer"
    >
      Index
    </button>
  );
};

export default IndexButton;
