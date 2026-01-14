"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tour } from "@/data/tours";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileDown, CheckCircle2, Info } from "lucide-react";

interface ItineraryDownloadButtonProps {
  tour: Tour;
}

export default function ItineraryDownloadButton({ tour }: ItineraryDownloadButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // Title
            new Paragraph({
              text: tour.title,
              heading: HeadingLevel.TITLE,
              alignment: AlignmentType.CENTER,
              spacing: { after: 400 },
            }),
            
            // Basic Info
            new Paragraph({
              children: [
                new TextRun({ text: "Duration: ", bold: true }),
                new TextRun(tour.duration),
              ],
              spacing: { after: 200 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Category: ", bold: true }),
                new TextRun(tour.category),
              ],
              spacing: { after: 200 },
            }),
            new Paragraph({
              children: [
                new TextRun({ text: "Price: ", bold: true }),
                new TextRun(tour.price),
              ],
              spacing: { after: 400 },
            }),

            // Description
            new Paragraph({
              text: "Overview",
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 },
            }),
            new Paragraph({
              text: tour.description,
              spacing: { after: 400 },
            }),

            // Highlights
            new Paragraph({
              text: "Highlights",
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 },
            }),
            ...tour.highlights.map(
              (highlight) =>
                new Paragraph({
                  text: `• ${highlight}`,
                  spacing: { after: 120 },
                })
            ),

            // Inclusions
            new Paragraph({
              text: "What's Included",
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 },
            }),
            ...tour.inclusions.map(
              (inclusion) =>
                new Paragraph({
                  text: `• ${inclusion}`,
                  spacing: { after: 120 },
                })
            ),

            // Itinerary
            new Paragraph({
              text: "Itinerary",
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 },
            }),
            ...tour.itinerary.flatMap((item) => [
              new Paragraph({
                children: [
                  new TextRun({ text: `Day ${item.day}: ${item.title}`, bold: true }),
                ],
                spacing: { before: 200, after: 120 },
              }),
              new Paragraph({
                text: item.description,
                spacing: { after: 120 },
              }),
              new Paragraph({
                children: [
                  new TextRun({ text: "Overnight: ", italics: true }),
                  new TextRun({ text: item.overnight, italics: true }),
                ],
                spacing: { after: 400 },
              }),
            ]),

            // Footer
            new Paragraph({
              text: "\n\nThank you for choosing Hidden Kingdom Tour Bhutan!",
              alignment: AlignmentType.CENTER,
              spacing: { before: 800 },
            }),
            new Paragraph({
              text: "Website: www.bhutanhappiness.com",
              alignment: AlignmentType.CENTER,
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${tour.title.replace(/\s+/g, '_')}_Itinerary.docx`);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full h-12 gap-2"
        >
          <FileDown className="w-4 h-4" />
          Download Itinerary
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <FileDown className="w-5 h-5 text-primary" />
            </div>
            Confirm Download
          </DialogTitle>
          <DialogDescription asChild>
            <div className="pt-4 text-sm text-muted-foreground">
              You are about to download the detailed itinerary for:
              <div className="mt-2 font-bold text-zinc-900 dark:text-white">
                {tour.title}
              </div>

              <div className="mt-4 p-4 bg-primary/5 rounded-xl border border-primary/10 flex gap-3 items-start">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-primary/80 leading-relaxed italic">
                  Note: This is a <strong>sample itinerary</strong>. All of our journeys can be fully customized to your preferences, budget, and travel dates.
                </p>
              </div>

              <div className="mt-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Professional .docx format</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Detailed day-by-day activities</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>Inclusions & Highlights</span>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="pt-4">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={handleDownload} className="gap-2">
            <FileDown className="w-4 h-4" />
            Download Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
