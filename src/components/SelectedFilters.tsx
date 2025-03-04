import { X } from 'lucide-react';

interface SelectedFilter {
  type: string;
  value: string;
}

interface SelectedFiltersProps {
  filters: SelectedFilter[];
  onRemove: (filter: SelectedFilter) => void;
}

function SelectedFilters({ filters, onRemove }: SelectedFiltersProps) {
  if (filters.length === 0) return null;

  return (
    <div className="w-full border border-dashed border-gray-700 rounded-lg p-4">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={`${filter.type}-${filter.value}`}
            onClick={() => onRemove(filter)}
            className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700/80 transition-colors group"
          >
            <span className="text-sm">
              <span className="text-gray-400">{filter.type}:</span> {filter.value}
            </span>
            <X className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectedFilters; 