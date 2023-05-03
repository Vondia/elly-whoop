import React, { FC } from "react";

type BoardProps = {};

export const Board: FC<BoardProps> = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 bg-slate-300 gap-4 p-4 rounded">
      <div id="cell-0" className="rounded bg-slate-500"></div>
      <div id="cell-1" className="rounded bg-slate-500"></div>
      <div id="cell-2" className="rounded bg-slate-500"></div>
      <div id="cell-3" className="rounded bg-slate-500"></div>
      <div id="cell-4" className="rounded bg-slate-500"></div>
      <div id="cell-5" className="rounded bg-slate-500"></div>
      <div id="cell-6" className="rounded bg-slate-500"></div>
      <div id="cell-7" className="rounded bg-slate-500"></div>
      <div id="cell-8" className="rounded bg-slate-500"></div>
      <div id="cell-9" className="rounded bg-slate-500"></div>
      <div id="cell-10" className="rounded bg-slate-500"></div>
      <div id="cell-11" className="rounded bg-slate-500"></div>
      <div id="cell-12" className="rounded bg-slate-500"></div>
      <div id="cell-13" className="rounded bg-slate-500"></div>
      <div id="cell-14" className="rounded bg-slate-500"></div>
      <div id="cell-15" className="rounded bg-slate-500"></div>
    </div>
  );
};
