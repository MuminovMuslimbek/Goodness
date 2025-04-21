import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button variant="outline" className="md:hidden">
          <HamburgerMenuIcon className="text-[#FAFAFA]" />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-[#EA9715] md:hidden text-white py-4 px-5">
        <SheetHeader>
          <SheetTitle className="text-center text-xl font-bold">
            Menu
          </SheetTitle>
        </SheetHeader>
        <ul className="space-y-2 pl-2">
          {[
            "Home",
            "About",
            "Our Works",
            "Get Involved",
            "News",
            "Contact",
            "Volunteer",
            "Donate Now",
          ].map((item) => (
            <li key={item} className="text-lg font-medium">
              {item}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
