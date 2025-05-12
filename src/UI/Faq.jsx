import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqImg from "../assets/Faq.png";
import Heading from "../components/Heading";
import Tagline from "../components/Tagline";
function Faq() {
  return (
    <section>
        <div className="flex-col w-4/5 m-auto rounded-4xl p-2 text-center group">
          <Heading label=" Frequently Wandered Questions"></Heading>
          <Tagline label="Clearing your doubts, one step at a time."></Tagline>
           <div className="flex justify-center my-10">
            <div
              className="w-2/5 h-1 rounded-full bg-[#be3144] transition-all  duration-300 shadow-none group-hover:shadow-[0_0_20px_6px_#be3144] group-hover:w-3/5 group-hover:animate-spin-slow"
            ></div>
          </div>
        </div>
      <div
        className="relative max-w-3xl mx-auto m-10 px-4 py-12 rounded-3xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `url(${FaqImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-zinc-900/70 to-amber-900/30 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-lg tracking-tight">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="backdrop-blur bg-white/5 rounded-lg px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 transition">
                Is this platform accessible?
              </AccordionTrigger>
              <AccordionContent className="bg-black/60 rounded-b-lg px-4 py-3 text-zinc-200">
                Yes. It adheres to the WAI-ARIA accessibility guidelines for inclusive web apps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="backdrop-blur bg-white/5 rounded-lg px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 transition">
                Can I book experiences through the app?
              </AccordionTrigger>
              <AccordionContent className="bg-black/60 rounded-b-lg px-4 py-3 text-zinc-200">
                Absolutely! You can browse and book stays, local experiences, and more directly from the platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="backdrop-blur bg-white/5 rounded-lg px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 transition">
                What payment options are supported?
              </AccordionTrigger>
              <AccordionContent className="bg-black/60 rounded-b-lg px-4 py-3 text-zinc-200">
                We support UPI, credit/debit cards, and even microloans or <span className="text-red-400 font-semibold">BNPL</span> options in supported regions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="backdrop-blur bg-white/5 rounded-lg px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 transition">
                How do I connect with local guides?
              </AccordionTrigger>
              <AccordionContent className="bg-black/60 rounded-b-lg px-4 py-3 text-zinc-200">
                Each village or town has verified host profiles. You can contact and book them directly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="backdrop-blur bg-white/5 rounded-lg px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 transition">
                Are local festivals included in the travel plans?
              </AccordionTrigger>
              <AccordionContent className="bg-black/60 rounded-b-lg px-4 py-3 text-zinc-200">
                Yes, our Festival Explorer shows authentic festivals with calendar invites and booking options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="backdrop-blur bg-white/5 rounded-lg px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 transition">
                Can I plan my whole trip using AI?
              </AccordionTrigger>
              <AccordionContent className="bg-black/60 rounded-b-lg px-4 py-3 text-zinc-200">
                Yes. The AI Itinerary Planner builds custom plans based on your interests, budget, and time, authorized by the <span className="text-red-400 font-semibold">Plan Management Team</span>.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="backdrop-blur bg-white/5 rounded-lg px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 transition">
                Is it possible to book rural homestays?
              </AccordionTrigger>
              <AccordionContent className="bg-black/60 rounded-b-lg px-4 py-3 text-zinc-200">
                Definitely. You can stay with local hosts for a truly immersive cultural experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="backdrop-blur bg-white/5 rounded-lg px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 transition">
                Can I chat with hosts or guides before booking?
              </AccordionTrigger>
              <AccordionContent className="bg-black/60 rounded-b-lg px-4 py-3 text-zinc-200">
                Yes, there’s a multilingual chat system to communicate with guides and hosts securely and will be implemented in future updates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="backdrop-blur bg-white/5 rounded-lg px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 transition">
                How does the budget tracking feature work?
              </AccordionTrigger>
              <AccordionContent className="bg-black/60 rounded-b-lg px-4 py-3 text-zinc-200">
                An AI-powered spending assistant helps you track your travel expenses and avoid overspending.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;
