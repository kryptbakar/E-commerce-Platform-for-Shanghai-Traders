import { ArrowRight, Check, ClipboardCheck, PackageCheck, Ship, Wrench } from "lucide-react";

export default function Process() {
  const steps = [
    { n:"01", icon:ClipboardCheck, title:"Define the requirement", text:"We review fiber type, production target, machine configuration, utilities and budget.", list:["Technical requirement sheet","Machine and supplier shortlist"] },
    { n:"02", icon:PackageCheck, title:"Verify and prepare", text:"Specifications, commercial terms and production details are checked before dispatch.", list:["Configuration confirmation","Inspection coordination"] },
    { n:"03", icon:Ship, title:"Import and deliver", text:"We coordinate documentation, shipment and delivery milestones from China to your facility.", list:["Freight and documentation","Delivery visibility"] },
    { n:"04", icon:Wrench, title:"Commission and support", text:"Your team receives installation guidance, operating handover and spare-parts continuity.", list:["Technical follow-up","Parts and service planning"] },
  ];
  const contact = () => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  return <section id="process" className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-14"><p className="section-kicker">A controlled sourcing process</p><h2 className="section-title mb-5">From mill requirement to running machine.</h2><p className="text-lg">Clear checkpoints reduce surprises. You know what is being supplied, where the order stands and what happens after arrival.</p></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map(({n,icon:Icon,title,text,list}) => <article key={n} className="process-card rounded-xl border border-[#d9e1e5] bg-white p-6">
          <div className="flex justify-between items-center mb-8"><span className="text-sm font-bold text-[#b7662b]">STEP {n}</span><Icon className="w-7 h-7 text-[#315b4d]"/></div>
          <h3 className="text-xl font-bold mb-3">{title}</h3><p className="text-sm leading-relaxed min-h-[84px]">{text}</p>
          <ul className="mt-5 pt-5 border-t border-[#e5eaec] space-y-2">{list.map(x=><li key={x} className="flex gap-2 text-sm text-[#526579]"><Check className="w-4 h-4 text-[#b7662b] shrink-0 mt-0.5"/>{x}</li>)}</ul>
        </article>)}
      </div>
      <div className="mt-12 rounded-xl bg-[#17324d] px-7 py-8 md:px-10 flex flex-col md:flex-row justify-between md:items-center gap-6"><div><h3 className="!text-white text-2xl font-bold mb-2">Planning a machinery investment?</h3><p className="!text-[#cbd8df]">Share your production requirement and receive a focused equipment recommendation.</p></div><button onClick={contact} className="shrink-0 bg-[#b7662b] hover:bg-[#ca7b42] text-white font-semibold rounded-md px-6 py-3.5 flex items-center">Discuss your requirement <ArrowRight className="ml-2 w-4 h-4"/></button></div>
    </div>
  </section>;
}
