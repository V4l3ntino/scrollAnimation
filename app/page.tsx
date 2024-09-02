import Box from "@/components/box";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        Array.from({ length: 100}, (_, index) => (
          <Box key={index} />
        ))
      }
    </main>
  );
}
