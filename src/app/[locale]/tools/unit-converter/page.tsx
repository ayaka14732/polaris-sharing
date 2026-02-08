"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Beian from "@/components/Beian";

interface ConversionUnit {
  name: string;
  toBase: number;
}

export default function UnitConverter({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("unitConverter");
  const [category, setCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("kilometer");
  const [value, setValue] = useState("1");
  const [result, setResult] = useState("0.001");

  const categories: Record<string, Record<string, ConversionUnit>> = {
    length: {
      meter: { name: t("units.meter"), toBase: 1 },
      kilometer: { name: t("units.kilometer"), toBase: 1000 },
      centimeter: { name: t("units.centimeter"), toBase: 0.01 },
      millimeter: { name: t("units.millimeter"), toBase: 0.001 },
      mile: { name: t("units.mile"), toBase: 1609.34 },
      yard: { name: t("units.yard"), toBase: 0.9144 },
      foot: { name: t("units.foot"), toBase: 0.3048 },
      inch: { name: t("units.inch"), toBase: 0.0254 },
    },
    weight: {
      kilogram: { name: t("units.kilogram"), toBase: 1 },
      gram: { name: t("units.gram"), toBase: 0.001 },
      milligram: { name: t("units.milligram"), toBase: 0.000001 },
      pound: { name: t("units.pound"), toBase: 0.453592 },
      ounce: { name: t("units.ounce"), toBase: 0.0283495 },
    },
    temperature: {
      celsius: { name: t("units.celsius"), toBase: 1 },
      fahrenheit: { name: t("units.fahrenheit"), toBase: 1 },
      kelvin: { name: t("units.kelvin"), toBase: 1 },
    },
  };

  const convert = (val: string, from: string, to: string, cat: string) => {
    const numVal = parseFloat(val);
    if (isNaN(numVal)) {
      setResult("0");
      return;
    }

    if (cat === "temperature") {
      let celsius = 0;
      if (from === "celsius") celsius = numVal;
      else if (from === "fahrenheit") celsius = ((numVal - 32) * 5) / 9;
      else if (from === "kelvin") celsius = numVal - 273.15;

      let res = 0;
      if (to === "celsius") res = celsius;
      else if (to === "fahrenheit") res = (celsius * 9) / 5 + 32;
      else if (to === "kelvin") res = celsius + 273.15;

      setResult(res.toFixed(2));
    } else {
      const baseValue = numVal * categories[cat][from].toBase;
      const convertedValue = baseValue / categories[cat][to].toBase;
      setResult(convertedValue.toFixed(6));
    }
  };

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    convert(newValue, fromUnit, toUnit, category);
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    const units = Object.keys(categories[newCategory]);
    setFromUnit(units[0]);
    setToUnit(units[1] || units[0]);
    convert(value, units[0], units[1] || units[0], newCategory);
  };

  const handleFromUnitChange = (newUnit: string) => {
    setFromUnit(newUnit);
    convert(value, newUnit, toUnit, category);
  };

  const handleToUnitChange = (newUnit: string) => {
    setToUnit(newUnit);
    convert(value, fromUnit, newUnit, category);
  };

  return (
    <div className="min-h-screen aurora-bg">
      <Navigation locale={locale} />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl font-bold mb-8 text-center text-glow">{t("title")}</h1>

          <div className="glass-panel p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3 text-aurora-300">{t("categories.length")}</label>
              <div className="flex flex-wrap gap-2">
                {Object.keys(categories).map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      category === cat
                        ? "bg-aurora-500/30 text-aurora-300 border-aurora-400"
                        : "bg-night-700/60 hover:bg-night-600/60 border-aurora-500/20"
                    } border`}>
                    {t(`categories.${cat}`)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-aurora-300">{t("from")}</label>
                <select value={fromUnit} onChange={e => handleFromUnitChange(e.target.value)} className="input-field">
                  {Object.entries(categories[category]).map(([key, unit]) => (
                    <option key={key} value={key}>
                      {unit.name}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={value}
                  onChange={e => handleValueChange(e.target.value)}
                  className="input-field mt-3"
                  placeholder={t("value")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-aurora-300">{t("to")}</label>
                <select value={toUnit} onChange={e => handleToUnitChange(e.target.value)} className="input-field">
                  {Object.entries(categories[category]).map(([key, unit]) => (
                    <option key={key} value={key}>
                      {unit.name}
                    </option>
                  ))}
                </select>
                <div className="input-field mt-3 bg-aurora-500/10 border-aurora-400/40">{result}</div>
              </div>
            </div>

            <div className="pt-4 border-t border-aurora-500/20">
              <p className="text-center text-lg">
                <span className="text-aurora-300 font-semibold">{value}</span>{" "}
                <span className="text-gray-400">{categories[category][fromUnit].name}</span>{" "}
                <span className="text-gray-500">=</span> <span className="text-polar-300 font-semibold">{result}</span>{" "}
                <span className="text-gray-400">{categories[category][toUnit].name}</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Beian locale={locale} />
    </div>
  );
}
