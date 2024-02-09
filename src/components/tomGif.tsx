import TomAdmiring from '../assets/tomAdmiring.webp';
import TomInLove from '../assets/tomInLove.gif';

interface TomGifProps {
  hasAccepted: boolean;
}

export function TomGif({ hasAccepted }: TomGifProps) {
  return (
    <img
      className="min-w-80 w-full max-w-md rounded-lg overflow-hidden"
      src={hasAccepted ? TomInLove : TomAdmiring}
    />
  );
}
