import Link from "next/link"
import { Eyebrow, SectionTitle } from "./section-heading"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

function StepCard({
  number,
  title,
  description,
  highlight = false,
  children,
}: {
  number: string
  title: string
  description: string
  highlight?: boolean
  children: React.ReactNode
}) {
  return (
    <li
      className={cn(
        "flex reveal flex-col gap-4 rounded-[24px] border p-8",
        highlight
          ? "border-ember-800 bg-[radial-gradient(120%_80%_at_0%_0%,#2a1a08,#120c06_60%)]"
          : "border-night-700 bg-[radial-gradient(120%_80%_at_0%_0%,#17120c,#0d0c0b_60%)]"
      )}
    >
      <span
        className={cn(
          "font-heading text-[56px] leading-none font-bold",
          highlight ? "text-outline-ember" : "text-outline"
        )}
      >
        {number}
      </span>
      <h3 className="text-[24px] font-semibold tracking-[-0.03em]">{title}</h3>
      <p className={highlight ? "text-sand-300" : "text-muted-foreground"}>
        {description}
      </p>
      {children}
    </li>
  )
}

const plan = ["Tyler · flights", "Mason · suppliers", "Chloe · post"]

export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-title"
      className="flex justify-center px-6 py-30"
    >
      <div className="flex w-full max-w-310 flex-wrap items-start gap-14">
        <div className="sticky top-30 flex flex-[1_1_380px] flex-col gap-5 max-[900px]:static">
          <Eyebrow>HOW IT WORKS</Eyebrow>
          <SectionTitle id="how-title">
            From on message to finished work.
          </SectionTitle>
          <p className="max-w-105 text-[17px] text-muted-foreground">
            No prompts to engineer, no steps to follow. Say what you want the
            way you’d tell a colleague.
          </p>
          <Button
            asChild
            variant="brand"
            size="xl"
            className="mt-2 h-11.5 self-start px-5"
          >
            <Link href="/sign-up">Try your first job</Link>
          </Button>
        </div>
        <ol className="flex min-w-0 flex-[1.3_1_520px] flex-col gap-5">
          <StepCard
            number="01"
            title="You ask"
            description="Type, talk or drop in a file. Turn on Crew mode when it’s a job, not a question."
          >
            <div className="rounded-[14px] border border-night-600 bg-night-950 px-4 py-3.5 text-[14px] text-sand-100">
              “Find morning flights to the Dubai expo, compare three bean
              suppliers, and draft a 20% expo-week post.”
            </div>
          </StepCard>

          <StepCard
            number="02"
            title="Harper builds the plan"
            description="Your lead splits the job and picks the right specialist for each part. You approve before anyone starts."
          >
            <div className="flex flex-wrap gap-2">
              {plan.map((task) => (
                <span
                  key={task}
                  className="flex h-9 items-center rounded-[99px] border border-ember-800 bg-ember-925 px-3.5 text-[13px] text-ember-200"
                >
                  {task}
                </span>
              ))}
            </div>
          </StepCard>

          <StepCard
            number="03"
            title="The crew works, side by side"
            description="On their own cloud computer with real browsers. Watch live, or close the tab and come back later."
          >
            <div
              aria-hidden="true"
              className="overflow-hidden rounded-[12px] border border-night-600"
            >
              <div className="bg-paper-200 px-3 py-2 text-[12px] text-paper-600">
                flights · LHE → DXB · Fri 14 Nov
              </div>
              <div className="flex flex-col gap-1.5 bg-paper-100 p-3 text-[13px] text-paper-900">
                <div className="flex justify-between rounded-[8px] border-2 border-ember-600 bg-white p-2.5">
                  <b>07:20 → 09:50</b>
                  <span>Non-stop</span>
                </div>
                <div className="flex justify-between rounded-[8px] border border-paper-200 bg-white p-2.5">
                  <span>09:05 → 11:35</span>
                  <span>Non-stop</span>
                </div>
              </div>
            </div>
          </StepCard>

          <StepCard
            number="04"
            title="You approve. It’s done."
            description="Paying, sending, booking and posting always wait for your OK. Then one summary lands in your chat."
            highlight
          >
            <div className="flex flex-wrap items-center gap-2.5 rounded-[14px] border border-night-600 bg-night-950 px-4 py-3.5">
              <span className="flex-[1_1_220px] text-[14px]">
                Tyler wants to open the payment page
              </span>
              <span className="flex h-8.5 items-center rounded-[9px] bg-ember-gradient px-3.5 text-[13px] font-semibold text-ember-ink">
                Approve
              </span>
            </div>
          </StepCard>
        </ol>
      </div>
    </section>
  )
}
