import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-gray-50 border border-b border-main/5">
      {/* container for the navigation bar */}
      <section className="w-[95%] md:w-4/5 mx-auto py-6">
        {/* flex container */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-header text-main tracking-widest underline uppercase text-2xl font-bold"
          >
            Nagamarkets
          </Link>
          <div className="font-body space-x-4">
            <Link
              href="/login"
              className="border border-main p-4 rounded-lg text-main"
            >
              Login
            </Link>
            <Link
              href="/get-started"
              className="bg-main text-white p-4 rounded-lg"
            >
              Get started
            </Link>
          </div>
        </div>
        {/* end of flex container */}
      </section>
      {/* end of container for the navigation bar */}
    </nav>
  );
}