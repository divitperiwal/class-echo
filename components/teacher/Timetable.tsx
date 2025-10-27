import React from "react";

interface Slot {
  time: string;
  subject: string | null;
  batch?: string;
  room?: string;
}

interface TimetableProps {
  slots: Slot[];
}

const Timetable: React.FC<TimetableProps> = ({ slots }) => (
  <div className="hide-scrollbar grid grid-cols-9 gap-2 w-full mb-4">
    {slots.map((slot, idx) => (
      <div
        key={idx}
        className={
          slot.subject
            ? "bg-neutral-900 rounded-md p-1 shadow border border-amber-200 flex flex-col items-center justify-center min-h-[60px]"
            : "bg-neutral-900 rounded-md p-1 shadow border border-neutral-800 flex flex-col items-center justify-center opacity-60 min-h-[60px]"
        }
      >
        <span className="text-[0.6rem] text-neutral-400 mb-1">{slot.time}</span>
        {slot.subject ? (
          <>
            <span className="text-xs font-semibold text-amber-200 mb-1">{slot.subject}</span>
            <span className="text-[0.6rem] text-neutral-400 mb-1">Batch {slot.batch}</span>
            <span className="text-[0.6rem] text-neutral-500">Room {slot.room}</span>
          </>
        ) : (
          <span className="text-[0.6rem] text-neutral-500">No Class</span>
        )}
      </div>
    ))}
  </div>
);

export default Timetable;
