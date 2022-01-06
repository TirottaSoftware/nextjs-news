import Link from "next/link";

function CategoryBar() {
  return (
    <div className="flex w-screen items-center text-center justify-evenly bg-blue-200 text-lg">
      <button className="hover:scale-125 transition-all">
        <Link href="/news?category=general">General</Link>
      </button>
      <button className="hover:scale-125 transition-all">
        <Link href="/news?category=sports">Sports</Link>
      </button>
      <button className="hover:scale-125 transition-all">
        <Link href="/news?category=technology">Technology</Link>
      </button>
      <button className="hover:scale-125 transition-all">
        <Link href="/news?category=entertainment">Entertainment</Link>
      </button>
      <button className="hover:scale-125 transition-all">
        <Link href="/news?category=business">Business</Link>
      </button>
    </div>
  );
}

export default CategoryBar;
