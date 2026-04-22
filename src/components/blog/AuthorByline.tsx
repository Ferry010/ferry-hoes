import { Link } from "react-router-dom";
import ferryPortrait from "@/assets/ferry-portrait.jpg";

interface Props {
  date: string;
  readTime: string;
}

const AuthorByline = ({ date, readTime }: Props) => {
  return (
    <div className="flex items-center gap-4 mb-10 pb-8 border-b border-border">
      <Link to="/about" className="shrink-0">
        <img
          src={ferryPortrait}
          alt="Ferry Hoes"
          loading="lazy"
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/20 hover:ring-accent/50 transition-all"
        />
      </Link>
      <div className="min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <Link
            to="/about"
            className="text-foreground font-medium hover:text-accent transition-colors"
          >
            Ferry Hoes
          </Link>
          <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full" />
          <span className="text-xs text-muted-foreground">
            Keynote Speaker &amp; Author
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {date} <span className="mx-1.5 text-muted-foreground/50">·</span>{" "}
          {readTime}
        </p>
      </div>
    </div>
  );
};

export default AuthorByline;
