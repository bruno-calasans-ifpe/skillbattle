import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, 
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <section className="flex flex-col p-16 gap-5">
      <div>
        <h1 className="text-3xl">Desafios em destaque</h1>
        <div className="flex items-center justify-center flex-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="p-1 flex-grow overflow-hidden" key={index}>
              <Card className="w-40">
                <CardContent className="flex aspect-square items-end justify-center p-2 b">
                  <p className="flex  text-xl font-semibold border-t-2 flex-1">
                    Desafio
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl">Desafios recentes</h1>
        <div className="grid grid-cols-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <div className="p-1 flex-grow overflow-hidden" key={index}>
              <Card className="w-40">
                <CardContent className="flex aspect-square items-end justify-center p-2 b">
                  <p className="flex  text-xl font-semibold border-t-2 flex-1">
                    Desafio
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
