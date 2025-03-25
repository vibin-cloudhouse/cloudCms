
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col py-4">
          <Link 
            to="/features" 
            className="px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className="px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            to="/blog" 
            className="px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            className="px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/docs" 
            className="px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setOpen(false)}
          >
            Docs
          </Link>
          <Link 
            to="/kb" 
            className="px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setOpen(false)}
          >
            Knowledge Base
          </Link>
          <div className="border-t mt-2 pt-2">
            <Link 
              to="/login" 
              className="px-4 py-3 block hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setOpen(false)}
            >
              Log in
            </Link>
            <div className="px-4 py-3">
              <Link 
                to="/signup"
                onClick={() => setOpen(false)}
              >
                <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-500">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
