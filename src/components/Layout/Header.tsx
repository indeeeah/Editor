import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex h-14 w-full items-center bg-blue text-white">
      <Link className="ml-4 text-lg font-bold" href="http://localhost:4000">
        nerdmong
      </Link>
      <div className="ml-4 h-full border-l border-gray-primary" />
    </div>
  );
}
