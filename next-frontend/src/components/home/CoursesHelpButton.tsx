"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useContactDialog } from "@/components/ContactDialog";

export default function CoursesHelpButton() {
  const { setShowContactDialog } = useContactDialog();

  return (
    <Button
      type="button"
      variant="link"
      className="text-primary p-0 h-auto font-medium group"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowContactDialog(true);
      }}
    >
      <span className="flex items-center gap-2">
        Get Personalized Guidance
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Button>
  );
}
