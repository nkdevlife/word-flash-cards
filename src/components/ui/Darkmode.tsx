import { Button } from "@/components/ui/button";
import { HiOutlineSun } from "react-icons/hi";

type DarkmodeProps = {
  className?: string;
};

export default function Darkmode({ className }: DarkmodeProps) {
  return (
    <Button variant="outline" size="icon" className={className}>
      <HiOutlineSun />
    </Button>
  );
}
