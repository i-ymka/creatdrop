import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Dance Fitness Online in 2026: Zumba, Classes, and Digital Programs | Creatdrop",
  description: "Dance fitness instructors are building thriving online businesses. How to sell Zumba, cardio dance, and dance fitness classes and programs online.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Sell Dance Fitness Online</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Digital Products</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">How to Sell Dance Fitness Online in 2026: Zumba, Classes, and Digital Programs</h1>
      <p className="mb-10 text-lg text-slate-600">
        Dance fitness is one of the most sharable categories in online fitness. A well-filmed
        Zumba routine or cardio dance class gets viewed, saved, and shared at rates that make
        other fitness content jealous. Dance fitness instructors who move even part of their
        studio business online unlock geographic-free income and the ability to serve thousands
        of students simultaneously — not just whoever can make Tuesday at 6pm.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Dance Fitness Product Formats</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Format</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Price Range</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Time to Create</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">On-demand class library (monthly)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$15–$39/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–4 weeks initial</td>
              <td className="border border-slate-200 p-3 text-slate-600">Recurring revenue, loyal students</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Live virtual group class</td>
              <td className="border border-slate-200 p-3 text-slate-600">$10–$25 per class</td>
              <td className="border border-slate-200 p-3 text-slate-600">No production</td>
              <td className="border border-slate-200 p-3 text-slate-600">Community feel, real-time energy</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">30-day cardio dance challenge</td>
              <td className="border border-slate-200 p-3 text-slate-600">$27–$67 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–2 weeks filming</td>
              <td className="border border-slate-200 p-3 text-slate-600">High-conversion launch product</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Choreography course (learn routines)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$47–$197 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–4 weeks filming</td>
              <td className="border border-slate-200 p-3 text-slate-600">Instructors learning to teach, dancers</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Beginner Latin dance fitness (no experience needed)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$37–$97 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–2 weeks filming</td>
              <td className="border border-slate-200 p-3 text-slate-600">Largest audience, easiest sell</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Low-impact dance fitness series</td>
              <td className="border border-slate-200 p-3 text-slate-600">$27–$77 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">1 week filming</td>
              <td className="border border-slate-200 p-3 text-slate-600">Seniors, postpartum, joint issues</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Dance Fitness Niches That Convert</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Zumba / Latin cardio dance</p>
          <p className="mt-1 text-sm text-slate-600">Highest brand recognition in dance fitness. People search "Zumba online" specifically. If you are a Zumba instructor, your keyword advantage is enormous. Monthly class subscriptions work well — $19-$29/month for access to weekly live classes and on-demand recordings.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Dance fitness for weight loss</p>
          <p className="mt-1 text-sm text-slate-600">Bridges dance into the much larger weight loss audience. Buyers who would never take a "dance class" will buy a "fun cardio workout" that happens to be dance. Lead with the fitness result in your marketing, not the dance style.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Dance fitness for seniors / low-impact</p>
          <p className="mt-1 text-sm text-slate-600">Underserved market with high loyalty. Older adults who find dance fitness love it for life. Low-impact choreography, seated options, and social community drives long membership retention. Average LTV is 3-5x higher than general fitness audiences.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Learn to dance (skill-based)</p>
          <p className="mt-1 text-sm text-slate-600">Sells to two audiences: people who want to learn specific styles (salsa, bachata, hip-hop) and instructors who want to add new choreography to their repertoire. Choreography courses can command $97-$297 because they have professional utility.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Kids dance fitness</p>
          <p className="mt-1 text-sm text-slate-600">Parents buy. Children participate. Structure content as 20-minute energy burners parents can put on for their kids. Strong gift-buying occasion (birthday, holidays). Keep classes high-energy, short, and visually exciting.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Bachelorette / group event choreography</p>
          <p className="mt-1 text-sm text-slate-600">High-occasion, high-willingness-to-pay niche. Bachelorette parties, corporate events, bridal workouts. One-time purchase of a 30-minute dance routine they can learn together virtually for $47-$97.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Pricing Your Dance Fitness Products</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Product</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Starter Price</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Established Price</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">What Justifies Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Monthly class membership</td>
              <td className="border border-slate-200 p-3 text-slate-600">$15–$19/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$29–$39/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Library size, live class access, community</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Single live class</td>
              <td className="border border-slate-200 p-3 text-slate-600">$8–$12</td>
              <td className="border border-slate-200 p-3 text-slate-600">$15–$25</td>
              <td className="border border-slate-200 p-3 text-slate-600">Instructor reputation, production quality</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">30-day challenge</td>
              <td className="border border-slate-200 p-3 text-slate-600">$27–$37</td>
              <td className="border border-slate-200 p-3 text-slate-600">$47–$67</td>
              <td className="border border-slate-200 p-3 text-slate-600">Structured daily content, progress tracking</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Choreography course</td>
              <td className="border border-slate-200 p-3 text-slate-600">$47–$97</td>
              <td className="border border-slate-200 p-3 text-slate-600">$147–$297</td>
              <td className="border border-slate-200 p-3 text-slate-600">Professional use, instructor development</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Content Strategy for Dance Fitness Creators</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Film short dance clips (15-60 sec)", desc: "The most shareable format in dance fitness. A 30-second snippet of a fun routine — especially with an earworm song — gets saved and shared organically. Post 3-4 per week." },
          { step: "2", title: "Post \"dance along\" full-length free workouts", desc: "Once per month, post a full 20-minute free workout on YouTube. This drives search traffic, builds trust, and directs viewers toward your paid library for more." },
          { step: "3", title: "Show the behind-the-scenes", desc: "Choreography creation process, your studio setup, your warm-up routine — dance fitness audiences are invested in the instructor as a person. Behind-the-scenes content drives parasocial loyalty." },
          { step: "4", title: "Feature student videos (with permission)", desc: "A student recording themselves doing your routine is the highest form of social proof in dance fitness. Share these every time you get one. It shows your classes are doable and fun." },
          { step: "5", title: "Create seasonal / occasion content", desc: "Halloween-themed workouts, Valentine's dance, summer cardio series. Dance fitness performs especially well with themed content that gives people a reason to try it beyond \"I want to exercise.\"" },
          { step: "6", title: "Use trending audio strategically", desc: "Dance fitness content created to trending sounds on TikTok and Instagram Reels gets boosted algorithmically. Check trending audio weekly and adapt choreography to popular tracks." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Music Licensing: The Most Important Legal Issue</h2>
      <p className="mb-4 text-slate-600">
        Using copyrighted music in paid video products without a license is a legal risk that
        shuts down businesses. Before selling any dance fitness video content, you need to
        understand your music licensing options:
      </p>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Royalty-free / licensed music services</p>
          <p className="mt-1 text-sm text-slate-600">Epidemic Sound, Artlist, and Musicbed offer commercial licenses for fitness content. Cost: $15-$50/month. Use this for all paid video content. Completely eliminates copyright risk.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Zumba instructor licensing</p>
          <p className="mt-1 text-sm text-slate-600">Licensed Zumba instructors have specific music rights through the Zumba organization for live classes. Virtual classes may require a separate virtual license. Check your current license terms before going online.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Public performance licensing</p>
          <p className="mt-1 text-sm text-slate-600">ASCAP, BMI, and SESAC licenses cover live in-person performance. They do not automatically cover recorded video products sold online. A separate synchronization license is needed for video recordings. Consult a music licensing attorney for your specific situation.</p>
        </div>
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell your dance fitness content?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-sell-dance-fitness-online" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/sell-yoga-classes-online" className="text-violet-600 hover:underline">
              How to Sell Yoga Classes Online
            </Link>
          </li>
          <li>
            <Link href="/blog/sell-pilates-classes-online" className="text-violet-600 hover:underline">
              How to Sell Pilates Classes Online
            </Link>
          </li>
          <li>
            <Link href="/blog/online-group-fitness-classes" className="text-violet-600 hover:underline">
              Online Group Fitness Classes
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-film-workout-videos" className="text-violet-600 hover:underline">
              How to Film Workout Videos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
