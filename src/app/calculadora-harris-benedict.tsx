"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CalculadoraHarrisBenedict() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState<number | null>(null);

  const calculateHarrisBenedict = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const ageNum = parseInt(age);

    if (isNaN(weightNum) || isNaN(heightNum) || isNaN(ageNum)) {
      alert("Por favor, ingrese valores válidos para todos los campos.");
      return;
    }

    let bmr: number;

    if (gender === "male") {
      bmr = 88.362 + 13.397 * weightNum + 4.799 * heightNum - 5.677 * ageNum;
    } else {
      bmr = 447.593 + 9.247 * weightNum + 3.098 * heightNum - 4.33 * ageNum;
    }

    setResult(Math.round(bmr));
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Calculadora de Harris-Benedict
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateHarrisBenedict();
          }}
          className="space-y-4"
        >
          <div>
            <Label htmlFor="weight">Peso (kg)</Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Ingrese su peso en kg"
              required
            />
          </div>
          <div>
            <Label htmlFor="height">Altura (cm)</Label>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Ingrese su altura en cm"
              required
            />
          </div>
          <div>
            <Label htmlFor="age">Edad</Label>
            <Input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Ingrese su edad"
              required
            />
          </div>
          <RadioGroup value={gender} onValueChange={setGender}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Hombre</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Mujer</Label>
            </div>
          </RadioGroup>
          <Button type="submit" className="w-full">
            Calcular
          </Button>
        </form>
        {result !== null && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">
              Su Tasa Metabólica Basal (TMB) es:
            </p>
            <p className="text-2xl font-bold text-primary">
              {result} calorías/día
            </p>
          </div>
        )}
      </CardContent>
      <div className="text-right text-xs text-gray-500 mt-4 pr-4 pb-2">
        AABA.2024
      </div>
    </Card>
  );
}
