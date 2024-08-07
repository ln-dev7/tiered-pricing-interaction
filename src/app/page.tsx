import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full h-screen flex items-center justify-center p-12">
      <CopyRight />
    </main>
  );
}

function CopyRight() {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-center gap-4 p-4 border-t bg-white z-20">
      <a href="https://ui.lndev.me" className="underline underline-offset-2">Code by LN</a>
      <a href="https://github.com/ln-dev7/" className="underline underline-offset-2">GitHub</a>
    </div>
  )
}
