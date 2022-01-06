import Link from "next/link";

function Navbar() {
  return (
    <div className="w-screen p-1 bg-blue-600 text-white text-xl items-center justify-center flex space-x-20">
      <Link href="/">Home</Link>
      <Link href="/news">News</Link>
    </div>
  );
}

export default Navbar;
