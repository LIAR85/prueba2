import CalculadoraHarrisBenedict from "./calculadora-harris-benedict";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CalculadoraHarrisBenedict />
    </main>
  );
}
