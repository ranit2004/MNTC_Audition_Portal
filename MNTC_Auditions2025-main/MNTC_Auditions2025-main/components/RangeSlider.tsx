import React from "react";

type RangeSliderProps = {
  name: string;
  value: string;
  changeHandler: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

export default function RangeSlider({
  name,
  value,
  changeHandler,
}: RangeSliderProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold capitalize laptop:text-xl">{name}</label>
      <div className="flex gap-4">
        <input
          className="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
          [&::-webkit-slider-thumb]:w-8
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:bg-[#F18701]
          [&::-webkit-slider-thumb]:hover:shadow-[0_0_0_4px_#F18701]
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:transition-all
          [&::-webkit-slider-thumb]:duration-150
          [&::-webkit-slider-thumb]:ease-in-out
          [&::-moz-range-thumb]:w-4
          [&::-moz-range-thumb]:h-4
          [&::-moz-range-thumb]:appearance-none
          [&::-moz-range-thumb]:bg-[#F18701]
          [&::-moz-range-thumb]:border-4
          [&::-moz-range-thumb]:hover:shadow-[0_0_0_4px_#F18701]
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:transition-all
          [&::-moz-range-thumb]:duration-150
          [&::-moz-range-thumb]:ease-in-out
          [&::-webkit-slider-runnable-track]:w-full
          [&::-webkit-slider-runnable-track]:h-4
          [&::-webkit-slider-runnable-track]:bg-black 
          [&::-webkit-slider-runnable-track]:bg-opacity-20 
          [&::-webkit-slider-runnable-track]:rounded-full
          [&::-moz-range-track]:w-full
          [&::-moz-range-track]:h-4
          [&::-moz-range-track]:bg-black 
          [&::-moz-range-track]:bg-opacity-20
          [&::-moz-range-track]:rounded-full"
          name={name}
          type="range"
          min="1"
          max="10"
          step="1"
          value={value}
          onChange={changeHandler}
        />
        <div className="text-lg font-bold">{value}</div>
      </div>
    </div>
  );
}
