import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,_#efe8f5,_#f8fafc_46%,_#e8eef7)]">
      <Card className="mx-4 w-full max-w-md border-white/70 bg-white/90 shadow-2xl backdrop-blur">
        <CardContent className="pt-8">
          <img
            src="/brand/shanghai-traders-logo.webp"
            alt="Shanghai Traders"
            className="mb-7 h-auto w-48 object-contain"
          />
          <h1 className="text-2xl font-bold text-[#101238]">
            This page isn&apos;t on the production line.
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            The page may have moved or the address may be incorrect.
          </p>
          <Link
            href="/"
            className="mt-7 inline-flex items-center text-sm font-semibold text-[#454b86] transition-colors hover:text-[#101238] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#747aa4]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to the homepage
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
