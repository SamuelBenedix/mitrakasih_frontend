import { cn } from "@/lib/utils";

interface Props {
  className: string;
}

export default function LeafBlue(props: Props) {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="500"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.999991"
      height="500"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      className={cn(className)}
      transform="rotate(60deg)"
    >
      <path
        fill="#5271ff"
        d="M 274.035156 187.4375 C 274.035156 281.058594 188.554688 356.945312 188.554688 356.945312 C 188.554688 356.945312 101.097656 281.058594 101.097656 187.4375 C 101.097656 93.8125 188.554688 17.917969 188.554688 17.917969 C 188.554688 17.917969 274.035156 93.8125 274.035156 187.4375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
    </svg>
  );
}
