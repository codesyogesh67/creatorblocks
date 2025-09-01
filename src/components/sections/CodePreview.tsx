"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

export function CodePreview({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-10">
      <h2 className="mb-4 text-lg font-semibold">Code </h2>

      <div className="relative rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100 overflow-x-auto">
        <pre>
          <code>{code}</code>
        </pre>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="absolute right-3 top-3 text-neutral-300 hover:text-white hover:bg-neutral-800"
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        </Button>
      </div>
    </div>
  );
}
