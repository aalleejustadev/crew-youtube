import { Accordion } from "radix-ui"
import { SectionTitle } from "./section-heading"

const questions = [
  {
    question: "What exactly is Crew?",
    answer:
      "An AI chat with six specialists behind it. Ask questions like any chat, or hand over whole jobs that the crew plans, does and delivers.",
  },
  {
    question: "Can the crew spend my money?",
    answer:
      "No. They take bookings and purchases right up to the payment page, then stop. Only you ever enter card details or passwords.",
  },
  {
    question: "Do they keep working when I log off?",
    answer:
      "Yes. Jobs run in the cloud. Come back to finished work, and any questions waiting in your inbox.",
  },
  {
    question: "What can they use?",
    answer:
      "The web, their own cloud computer with real browsers, and apps you connect like Gmail, Calendar, Drive, Instagram and GitHub.",
  },
  {
    question: "Can I add my own specialists?",
    answer:
      "Yes. Describe the role in one sentence and Harper drafts a new teammate for you to review.",
  },
  {
    question: "How do I sign up?",
    answer:
      "With email and a password, or with GitHub. Your crew is ready in under a minute.",
  },
]

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="flex justify-center border-t border-night-750 px-6 py-25"
    >
      <div className="flex w-full max-w-215 flex-col gap-9">
        <SectionTitle
          id="faq-title"
          className="reveal text-center text-[clamp(32px,4vw,48px)] leading-[1.06]"
        >
          Questions? Answerd.
        </SectionTitle>
        <Accordion.Root
          type="single"
          collapsible
          defaultValue={questions[0].question}
          className="flex reveal flex-col gap-2.5"
        >
          {questions.map(({ question, answer }) => (
            <Accordion.Item
              key={question}
              value={question}
              className="rounded-[18px] border border-night-700 bg-night-850 transition-[background] duration-200 ease-[ease] data-[state=open]:border-ember-800 data-[state=open]:bg-ember-950"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex min-h-16 w-full cursor-pointer items-center gap-4 px-6 py-4.5 text-left font-sans text-[16px] font-medium">
                  <span className="flex-1">{question}</span>
                  <span
                    aria-hidden="true"
                    className="flex size-7.5 flex-none items-center justify-center rounded-[99px] bg-night-750 text-[18px] leading-none text-muted-foreground transition-transform duration-250 ease-[ease] group-data-[state=open]:rotate-45 group-data-[state=open]:bg-transparent group-data-[state=open]:bg-ember-gradient group-data-[state=open]:text-ember-ink"
                  >+</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content asChild>
                <p className="animate-[fade-up_0.25s_ease-out] px-6 pb-5.5 text-muted-foreground">
                  {answer}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
