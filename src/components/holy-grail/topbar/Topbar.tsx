import { useStore } from "@/modules/stores/useAsideStore";
import React from "react";
import { Button } from "@/components/ui/button";
import { SearchAll } from "../../custom/SearchAll";
import { AvatarDropdownMenu } from "./AvatarDropDown";
import { Menu, Plus } from "lucide-react";

const Topbar: React.FC = () => {
  const toggleAside = useStore((state) => state.toggleAside);
  return (
    <header className="topbar py-4 px-8 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Button size="icon" className="toggle-btn" onClick={toggleAside}>
        <Menu className="h-4 w-4" />
      </Button>
      <SearchAll />
      <Button size="icon">
        <Plus className="h-4 w-4" />
      </Button>
      <AvatarDropdownMenu></AvatarDropdownMenu>
    </header>
  );
};

export default Topbar;
