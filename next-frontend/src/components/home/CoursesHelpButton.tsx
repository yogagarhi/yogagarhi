"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useContactDialog } from "@/components/ContactDialog";
import { useTranslations } from "next-intl";

export default function CoursesHelpButton() {
  const t = useTranslations("home.courses");
  const { setShowContactDialog } = useContactDialog();

  return (
    <Button
      type="button"
      variant="link"
      className="text-primary p-0 h-auto font-medium group"
      onClick={() => setShowContactDialog(true)}
    >
      <span className="flex items-center gap-2">
        {t("talkToCounselor")}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Button>
  );
}
