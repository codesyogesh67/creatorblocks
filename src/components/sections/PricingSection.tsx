// components/PricingSection.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, Crown, Sparkles } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-4 text-center mb-20">
        <Badge variant="secondary" className="mb-3">
          Unlock All Access
        </Badge>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Lifetime access to blocks & templates
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Get unlimited usage, all future updates, and new drops—use across as
          many projects as you like.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
        {/* Pro / Individual */}
        <Card className="relative overflow-hidden">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Individual</CardTitle>
              <Badge variant="outline" className="gap-1">
                <Sparkles className="size-3" /> Pro Plan
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              One-time payment • Lifetime access
            </p>
          </CardHeader>

          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold leading-none">$149</div>
              <div className="pb-1 text-xs text-muted-foreground">/USD</div>
            </div>
            <Button className="mt-6 w-full">Buy Now</Button>
            <Separator className="my-6" />

            <ul className="space-y-2 text-sm">
              <Feature>Lifetime access & updates</Feature>
              <Feature>Unlimited projects</Feature>
              <Feature>780+ Pro Blocks</Feature>
              <Feature>50+ new blocks each month</Feature>
            </ul>
          </CardContent>
        </Card>

        {/* Premium / Team */}
        <Card className="relative overflow-hidden ring-1 ring-primary/20">
          <div className="pointer-events-none absolute inset-x-0 -top-8 mx-auto h-24 w-[85%] rounded-full bg-primary/10 blur-2xl" />
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Crown className="size-4 text-primary" />
                Team
              </CardTitle>
              <Badge className="gap-1">
                <Sparkles className="size-3" /> Most Popular
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              One-time payment • Lifetime access
            </p>
          </CardHeader>

          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold leading-none">$299</div>
              <div className="pb-1 text-xs text-muted-foreground">/USD</div>
            </div>
            <Button className="mt-6 w-full">Buy Now</Button>

            <Separator className="my-6" />

            <ul className="space-y-2 text-sm">
              <Feature>Lifetime access & updates</Feature>
              <Feature>Unlimited projects</Feature>
              <Feature>780+ Pro Blocks</Feature>
              <Feature>50+ new blocks each month</Feature>
              <Feature>4+ Premium Templates</Feature>
              <Feature>1+ new templates each month</Feature>
              <Feature>Figma Kit</Feature>
              <Feature>Admin Kit</Feature>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 size-4 text-primary" />
      <span>{children}</span>
    </li>
  );
}
