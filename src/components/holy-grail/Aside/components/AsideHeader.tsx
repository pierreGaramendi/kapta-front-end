import { Button } from "@/components/ui/button";
import { useStore } from "@/modules/stores/useAsideStore";
import { X } from "lucide-react";

export const AsideHeader: React.FC<{ visible: boolean }> = ({ visible }) => {
  const toggleAside = useStore((state) => state.toggleAside);
  return (
    <div className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
      {visible && (
        <Button variant="outline" size="icon" onClick={toggleAside}>
          <X />
        </Button>
      )}
      <span className="ml-3 text-base font-semibold">Taxonomy</span>
    </div>
  );
};
