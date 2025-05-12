import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  function Faq() {
    return (
      <section className="max-w-2xl mx-auto my-16 px-4 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is this platform accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA accessibility guidelines for inclusive web apps.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I book experiences through the app?</AccordionTrigger>
            <AccordionContent>
              Absolutely! You can browse and book stays, local experiences, and more directly from the platform.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-3">
            <AccordionTrigger>What payment options are supported?</AccordionTrigger>
            <AccordionContent>
              We support UPI, credit/debit cards, and even microloans or <span className="text-red-500">BNPL</span> options in supported regions.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-4">
            <AccordionTrigger>How do I connect with local guides?</AccordionTrigger>
            <AccordionContent>
              Each village or town has verified host profiles. You can contact and book them directly.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-5">
            <AccordionTrigger>Are local festivals included in the travel plans?</AccordionTrigger>
            <AccordionContent>
              Yes, our Festival Explorer shows authentic festivals with calendar invites and booking options.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-6">
            <AccordionTrigger>Can I plan my whole trip using AI?</AccordionTrigger>
            <AccordionContent>
              Yes. The AI Itinerary Planner builds custom plans based on your interests, budget, and time authrised by the <span className="text-red-500">
              Plan Management Team</span>.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-7">
            <AccordionTrigger>Is it possible to book rural homestays?</AccordionTrigger>
            <AccordionContent>
              Definitely. You can stay with local hosts for a truly immersive cultural experience.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-8">
            <AccordionTrigger>Can I chat with hosts or guides before booking?</AccordionTrigger>
            <AccordionContent>
              Yes, there’s a multilingual chat system to communicate with guides and hosts securely and will be implemented in future updates.
            </AccordionContent>
          </AccordionItem>
  
          
  
          <AccordionItem value="item-10">
            <AccordionTrigger>How does the budget tracking feature work?</AccordionTrigger>
            <AccordionContent>
              An AI-powered spending assistant helps you track your travel expenses and avoid overspending.
            </AccordionContent>
          </AccordionItem>
  
          
  
          
        </Accordion>
      </section>
    );
  }
  
  export default Faq;
  