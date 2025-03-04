import React from 'react';
import EmulatorCard from './EmulatorCard';

interface Emulator {
  id: number;
  name: string;
  logo: string;
  emuCount: number;
  slug: string;
}

interface RelatedEmulatorsProps {
  title: string;
  emulators: Emulator[];
}

function RelatedEmulators({ title, emulators }: RelatedEmulatorsProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {emulators.slice(0, 10).map((emulator) => (
          <EmulatorCard key={emulator.id} {...emulator} />
        ))}
      </div>
    </div>
  );
}

export default RelatedEmulators; 