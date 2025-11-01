import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Topbar = () => {
  return (
    <header className="h-16 border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-30">
      <div className="h-full px-6 flex items-center justify-between gap-4">
        {/* Search */}
        <div className="flex-1 max-w-xs lg:max-w-md">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="ml-10 md:ml-0 bg-white/5 border-white/10 text-white focus:border-white/20"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button size="icon" className="relative text-white bg-primary hover:bg-primary/75 cursor-pointer">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-white rounded-full" />
          </Button>

          <Button size="icon" className="rounded-full text-white bg-primary hover:bg-primary/75 cursor-pointer">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
