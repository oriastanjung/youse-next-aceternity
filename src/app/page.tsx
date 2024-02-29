import { LampDemo } from "@/components/organism/LampEffectDemo";
import { CardHoverEffectDemo } from "@/components/organism/CardHoverEffectDemo";
import { HeroParallaxDemo } from "@/components/organism/Hero";
import { MacbookScrollDemo } from "@/components/organism/MacbookScrollDemo";
import { TabsDemo } from "@/components/organism/TabsDemo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <HeroParallaxDemo/>
      <TabsDemo/>
      <CardHoverEffectDemo/>
      <MacbookScrollDemo/>
      <LampDemo />
    </main>
  );
}
