import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Cycling and Indoor Bike Fitness Programs Online in 2026 | Creatdrop",
  description: "Cycling fitness creators serve one of the most equipment-committed audiences in fitness. How to sell indoor cycling programs, interval training plans, and structured power-based workouts online.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Sell Cycling Fitness Programs Online</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Digital Products</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">How to Sell Cycling and Indoor Bike Fitness Programs Online in 2026</h1>
      <p className="mb-10 text-lg text-slate-600">
        Cyclists are among the highest-spending buyers in fitness — they have already invested
        hundreds or thousands of dollars in a bike, trainer, power meter, and heart rate monitor.
        A rider who owns a smart trainer and a Wahoo or Zwift subscription understands structured
        training and is actively looking for programming that gets more out of their equipment.
        This creates a buyer who arrives with high equipment investment, high category knowledge,
        and strong willingness to pay for quality coaching content.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Cycling Program Formats and Pricing</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Product</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Price Range</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Time to Create</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Beginner indoor cycling program (4–8 weeks)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$27–$57 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">3–5 days</td>
              <td className="border border-slate-200 p-3 text-slate-600">New smart trainer owners, widest entry audience</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">FTP builder / base fitness plan (8–12 weeks)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$47–$97 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–2 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">Intermediate riders wanting measurable power gains</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Gravel / road race preparation plan</td>
              <td className="border border-slate-200 p-3 text-slate-600">$57–$127 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–2 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">Event-focused riders, strong purchase intent</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Indoor cycling video workout library (spin-style)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$37–$77 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–2 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">Peloton-adjacent audience, variety-seeking buyers</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Off-season strength and cycling plan</td>
              <td className="border border-slate-200 p-3 text-slate-600">$47–$87 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">1 week</td>
              <td className="border border-slate-200 p-3 text-slate-600">Competitive cyclists in winter base period</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Monthly structured training membership</td>
              <td className="border border-slate-200 p-3 text-slate-600">$19–$49/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Ongoing</td>
              <td className="border border-slate-200 p-3 text-slate-600">High LTV — cyclists train 52 weeks a year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">What Makes the Cycling Buyer Unique</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Power-based training is the standard — and requires explanation</p>
          <p className="mt-1 text-sm text-slate-600">Serious indoor cyclists train by power (watts) rather than pace, distance, or perceived effort, and they expect training plans to be built around power zones derived from their Functional Threshold Power (FTP) test. Programs that prescribe workouts in percentage-of-FTP zones — rather than generic "moderate effort" or "hard effort" instructions — signal the level of technical precision that this buyer values and expects from coaching content. Including a clear FTP testing protocol and zone calculator in every plan ensures buyers can personalize the zones to their own current fitness, which is what separates a truly professional plan from a generic template.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Platform compatibility matters — Zwift, TrainerRoad, Wahoo</p>
          <p className="mt-1 text-sm text-slate-600">Smart trainer users primarily experience structured workouts through Zwift, TrainerRoad, Wahoo SYSTM, or Garmin Connect. Plans that provide workout files exportable to these platforms (.zwo for Zwift, .fit for Garmin/Wahoo) — or that are structured precisely enough to be manually entered as custom workouts — are significantly more usable than plans that exist only as a PDF with a session description. Coaches who distribute ERG-mode-compatible workout files with their plans remove the friction of manual entry and make their programs significantly more attractive to the smart-trainer owner who is the highest-value cycling buyer.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Year-round training need drives membership retention</p>
          <p className="mt-1 text-sm text-slate-600">Unlike outdoor runners who may reduce training volume in winter, indoor cyclists maintain year-round training because their primary environment is climate-controlled. A rider with a smart trainer in their garage has no off-season from indoor training — only a shift in focus (from race preparation to base building to recovery). This year-round engagement makes cycling one of the strongest categories for monthly membership products: buyers who need new programming every 4–6 weeks and maintain their training habit regardless of weather or season have a structural reason to stay subscribed indefinitely.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Structuring Cycling Programs for Maximum Results</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Build around periodization — not random hard workouts", desc: "The most common complaint about generic cycling programs is that they string together hard workouts without periodized structure — no base-building phase, no progressive overload, no planned recovery weeks. Programs built around classic periodization principles (base, build, peak, recovery) produce measurably better FTP gains and race-day performance, which generates the specific, numerical testimonials that convert future buyers. A rider who can say \"my FTP went from 220w to 257w in 12 weeks\" is a more compelling testimonial than \"I felt fitter\" — and periodized programs produce those quantitative results." },
          { step: "2", title: "Include both interval sessions and endurance rides", desc: "Effective cycling programs balance high-intensity interval work (VO2max, threshold, and sweet-spot intervals) with longer endurance rides at lower intensity. Programs that are exclusively high-intensity burn out riders and damage recovery; programs that are exclusively easy endurance rides plateau quickly. The 80/20 balance — approximately 80% of training time at low intensity, 20% at moderate to high intensity — produces the best long-term aerobic development and is supported by the research that serious cyclists already know about. Programs that explicitly explain this ratio and why it is structured this way build trust with educated buyers." },
          { step: "3", title: "Provide video instruction for key technique elements", desc: "Indoor cycling at high intensities surfaces technique weaknesses — excessive upper body movement, poor hip stability, inefficient pedaling mechanics — that are invisible at casual effort levels. Programs that include short video segments addressing the most common indoor cycling technique issues (cadence control during intervals, pacing the first minute of a VO2 effort, breathing during standing climbs) differentiate from programs that only provide workout data without coaching context. These technique segments are quick to film and add significant perceived and actual value." },
          { step: "4", title: "Account for non-cycling training days", desc: "Most serious cyclists cross-train — strength work, mobility, running — and need their cycling plan to integrate with their broader training week. Programs that specify not just the cycling sessions but the ideal placement of strength training, mobility work, and rest days within the weekly schedule produce better results and fewer overuse injuries. The total training load question (\"how does this fit with my other training?\") is the most common question cycling program buyers ask, and programs that answer it explicitly before the buyer even thinks to ask demonstrate the level of coaching sophistication that justifies the price." },
        ].map((item) => (
          <div key={item.step} className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
              {item.step}
            </div>
            <div>
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Marketing Cycling Programs to Riders</h2>
      <div className="mb-8 space-y-3">
        {[
          { channel: "Zwift and indoor cycling communities", note: "Zwift has a passionate global community organized around group rides, races, and training clubs. Coaches who are active Zwift riders — participating in group rides, sharing their training on the Companion app, running a Zwift Club — build organic authority within the community they are selling to. The Zwift subreddit and dedicated Discord servers are additional community channels where cycling coaches who answer training questions authentically build the trust that converts to program sales. The indoor cycling community is smaller and more niche than general fitness — the brand equity from consistent community participation compounds faster." },
          { channel: "Strava segment targeting and club marketing", note: "Strava segments — timed sections of popular cycling routes — are a natural anchor for performance-focused marketing. Coaches who post FTP improvement results, segment PR improvements, and power data from their own or their clients' training appeal directly to the metric-oriented cycling buyer. Strava Clubs organized around a coach's training philosophy can reach thousands of local and national followers, and segment highlight posts — \"how client X improved their 20-minute power by 22% in 10 weeks\" — generate the specific numerical testimonials that motivate performance-motivated buyers." },
          { channel: "YouTube — training science for cyclists", note: "Tutorial content on the science behind cycling training — how VO2max intervals work, why sweet-spot training is effective, how to read a power curve — positions a cycling coach as an educator rather than just a content seller. Cyclists are among the most data-literate buyers in fitness and actively seek out content that explains the why behind training decisions. A YouTube channel that provides genuine training science education in cycling-specific terms builds an audience that trusts the creator's programming judgment and converts that trust into program purchases." },
          { channel: "Event timing — Gran Fondo and race prep season", note: "Gravel racing, Gran Fondo events, and century rides have defined registration and preparation windows that create natural launch timing for cycling programs. A gravel race prep program marketed in January and February — when riders who signed up for spring events are seeking structured preparation — reaches buyers at peak purchase motivation. Event-organized mailing lists and Facebook groups for major cycling events are additional channels where event-timed marketing can reach a captive audience of pre-qualified, purchase-motivated buyers." },
        ].map((item) => (
          <div key={item.channel} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.channel}</p>
            <p className="mt-1 text-sm text-slate-600">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell your cycling programs?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-sell-cycling-fitness-programs-online" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/sell-running-training-plans-online" className="text-violet-600 hover:underline">
              How to Sell Running Training Plans Online
            </Link>
          </li>
          <li>
            <Link href="/blog/sell-hiit-cardio-programs-online" className="text-violet-600 hover:underline">
              How to Sell HIIT and Cardio Programs Online
            </Link>
          </li>
          <li>
            <Link href="/blog/sell-strength-training-programs-online" className="text-violet-600 hover:underline">
              How to Sell Strength Training Programs Online
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-membership-site" className="text-violet-600 hover:underline">
              How to Build a Fitness Membership Site
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
