"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

interface FlashCard {
  id: number;
  word: string;
  meaning: string;
  example: string;
}

const sampleCards: FlashCard[] = [
  {
    id: 1,
    word: "meticulous",
    meaning: "綿密な、几帳面な",
    example: "The accountant is meticulous in checking every detail.",
  },
  {
    id: 2,
    word: "unprecedented",
    meaning: "前例のない、空前の",
    example: "The company achieved unprecedented growth this year.",
  },
  // 実際のデータはここに追加
];

export default function Toeic800Page() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  const currentCard = sampleCards[currentCardIndex];

  const handleNext = () => {
    if (currentCardIndex < sampleCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsShowingAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsShowingAnswer(false);
    }
  };

  const toggleAnswer = () => {
    setIsShowingAnswer(!isShowingAnswer);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">TOEIC 800 単語カード</h2>
        <p className="text-muted-foreground">
          進捗: {currentCardIndex + 1} / {sampleCards.length}
        </p>
      </div>

      <Card className="w-full mb-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            {currentCard.word}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          {isShowingAnswer ? (
            <>
              <p className="text-xl mb-4">{currentCard.meaning}</p>
              <CardDescription className="text-lg">
                例文: {currentCard.example}
              </CardDescription>
            </>
          ) : (
            <div className="h-32 flex items-center justify-center">
              <Button onClick={toggleAnswer}>答えを表示</Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentCardIndex === 0}
            variant="outline"
          >
            前へ
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentCardIndex === sampleCards.length - 1}
          >
            次へ
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
