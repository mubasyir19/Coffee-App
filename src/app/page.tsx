import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <p>this is splash screen</p>
        <Link
          href={`/home`}
          className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-base font-semibold text-white"
        >
          Click button untuk lanjut ke home
        </Link>
      </section>
    </>
  );
}
