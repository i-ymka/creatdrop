import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Video Content: What to Film, How to Film It, and What Actually Converts | Creatdrop",
  description: "Video is the primary discovery channel for fitness creators. The specific content types, filming approaches, and platform strategies that convert viewers into buyers.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Video Content</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Video Content: What to Film, How to Film It, and What Actually Converts</h1>
      <p className="mb-10 text-lg text-slate-600">
        Fitness is one of the most video-native categories on the internet. People do not read about
        workouts as much as they watch them — which means video is not optional for fitness coaches
        who want to build an audience and sell programs online. But most coaches either avoid video
        because it feels intimidating or produce it without understanding which formats and strategies
        actually drive sales. Here is the practical guide to video content that converts.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Video Content Types by Purpose</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Content Type</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Primary Goal</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Best Platform</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Conversion Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Follow-along workout (15–30 min)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Discovery + product demo</td>
              <td className="border border-slate-200 p-3 text-slate-600">YouTube</td>
              <td className="border border-slate-200 p-3 text-slate-600">Highest converting — viewer experiences product</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Exercise tutorial (3–8 min)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Authority + SEO</td>
              <td className="border border-slate-200 p-3 text-slate-600">YouTube</td>
              <td className="border border-slate-200 p-3 text-slate-600">Builds trust over time, drives search traffic</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Short-form exercise clip (15–60 sec)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Reach + follows</td>
              <td className="border border-slate-200 p-3 text-slate-600">TikTok, Instagram Reels</td>
              <td className="border border-slate-200 p-3 text-slate-600">Top-of-funnel, drives profile visits</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Transformation / client result story</td>
              <td className="border border-slate-200 p-3 text-slate-600">Social proof</td>
              <td className="border border-slate-200 p-3 text-slate-600">Instagram, TikTok, YouTube</td>
              <td className="border border-slate-200 p-3 text-slate-600">High conversion at purchase decision stage</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Day-in-the-life / behind the scenes</td>
              <td className="border border-slate-200 p-3 text-slate-600">Relatability + connection</td>
              <td className="border border-slate-200 p-3 text-slate-600">Instagram Stories, TikTok</td>
              <td className="border border-slate-200 p-3 text-slate-600">Retention + community, indirect conversion</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Program preview / sales video</td>
              <td className="border border-slate-200 p-3 text-slate-600">Direct conversion</td>
              <td className="border border-slate-200 p-3 text-slate-600">Product page, email, link in bio</td>
              <td className="border border-slate-200 p-3 text-slate-600">Final push to purchase, highest direct impact</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Video Formats That Actually Drive Sales</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Free follow-along workouts — your most powerful sales tool</p>
          <p className="mt-1 text-sm text-slate-600">A 20–30 minute free follow-along workout on YouTube is the single most effective sales video a fitness coach can produce. Here is why: it lets the buyer experience the product before purchasing. A viewer who completes your free workout has already decided they like your coaching style, your cueing, your pacing, and your personality. They do not need to be convinced by a sales pitch — they are already sold. Instructors who post one free follow-along per month consistently generate more product sales per hour of content than any other video format. End every follow-along with a direct call to action for your paid program.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Transformation stories — the content that closes sales</p>
          <p className="mt-1 text-sm text-slate-600">A video that walks through a client's before-and-after with specific numbers — "Sarah came to me unable to complete a pushup. After 8 weeks on my program, she did 15 in a row" — converts undecided buyers at the moment they are comparing your program to alternatives. Transformation stories are most effective when they identify a starting point the viewer recognizes ("I could not keep up with workouts that felt too hard, which is exactly where Sarah was"), describe the specific intervention, and end with a measurable result. With client permission, this format works across YouTube, Instagram, and TikTok.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Talking-head education — builds authority, converts slowly but durably</p>
          <p className="mt-1 text-sm text-slate-600">Videos where you sit or stand and explain something — "why you're not seeing results from your current workout," "the three biggest mistakes in fat loss training," "how progressive overload actually works" — build the trust and authority that make viewers comfortable spending money with you. These videos do not convert immediately, but they accumulate into a body of evidence that you know what you are talking about. Coaches with 20+ educational videos on their channel close sales without direct sales conversations because the content has already done the trust-building work.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">How to Film Better Video with What You Have</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Fix your lighting before anything else", desc: "Poor lighting is the number-one production problem that kills perceived quality for fitness videos. A $30 ring light or filming near a large window with natural light from the front transforms the quality of footage compared to a phone camera under overhead fluorescent lighting. Backlit subjects (filming toward a window) look like silhouettes. Front-lit subjects look professional regardless of the camera quality. Before upgrading any other equipment, address your lighting." },
          { step: "2", title: "Frame yourself correctly for movement content", desc: "For workout demonstrations, the frame must show the full exercise — the entire body for most movements, with extra space for range of motion. A common mistake is filming in portrait mode too close to the body, cutting off hands and feet when they leave the center of frame. Landscape mode with the camera at waist height, at least 6–8 feet away, captures full-body movement correctly for most exercises. For upper-body-only movements, filming at shoulder height captures the working muscles clearly." },
          { step: "3", title: "Use external audio for voice-over and talking-head content", desc: "Built-in phone or laptop microphone audio is the second most common quality problem after lighting. A $20–$50 clip-on lavalier microphone dramatically improves audio quality by reducing room echo and background noise. For workout content where you are moving, a Bluetooth lapel mic provides clean audio without cable constraints. Viewers tolerate imperfect video quality more readily than they tolerate bad audio — it is harder to follow along with a workout when you cannot clearly hear the coaching cues." },
          { step: "4", title: "Batch your filming to maximize production efficiency", desc: "Filming one video per week is significantly less efficient than filming four videos in a single session. The setup time — clearing the space, setting up lighting and camera, warming up on camera — is the same whether you film one video or four. Coaches who batch-film one day per month typically produce more content than coaches who film once per week because the consistency is easier to maintain and the setup overhead is amortized across more videos. Plan your month of content in advance, prepare all scripts or outlines, and film in one focused session." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Platform-Specific Video Strategy</h2>
      <div className="mb-8 space-y-3">
        {[
          { channel: "YouTube — the long game that pays off", note: "YouTube is the highest-ROI video platform for fitness coaches over a 12-month horizon because content is permanently discoverable via search. A single well-titled follow-along workout can generate views, subscribers, and product sales for years without any additional promotion. The investment in YouTube is front-loaded: building an audience takes longer than on short-form platforms, but the revenue per viewer is higher and the content retains its value indefinitely. Post 1–2 videos per week, prioritize search-optimized titles, and end every video with a product call to action." },
          { channel: "TikTok — fastest audience growth for fitness", note: "TikTok algorithmic distribution means new accounts can reach large audiences faster than any other platform. Fitness content — exercise demonstrations, training tips, transformation videos — performs particularly well because the algorithm surfaces it to users who have engaged with fitness content previously. The trade-off is that TikTok content has a shorter shelf life than YouTube, requiring more consistent output to maintain audience growth. Post 3–5 short clips per week, focus on high-energy or visually impressive movements, and always include a call to action in the caption or on-screen text." },
          { channel: "Instagram — the relationship platform for fitness coaches", note: "Instagram functions as the middle layer between TikTok (discovery) and YouTube (depth). Reels drive new followers; Stories and carousel posts maintain relationships with existing followers; Lives create community moments. For sales conversion, Instagram is most effective when the audience already knows you — use it to deepen relationships with people who found you elsewhere and convert them to buyers over time. Post Reels 3–4 times per week for growth, Stories daily for retention, and direct followers to your product link in bio with clear calls to action." },
          { channel: "Email — the highest-converting platform you actually own", note: "Video content on social platforms builds rented audiences — the algorithm controls who sees your content. Email is the owned channel that converts those audiences into buyers you can reach directly. Use your video content to build your email list (offer a free workout plan in exchange for an email address), then use email to close sales when you launch products. Coaches with email lists of 2,000+ subscribers reliably generate $2,000–$10,000 in revenue per product launch from email alone, regardless of what social algorithms are doing." },
        ].map((item) => (
          <div key={item.channel} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.channel}</p>
            <p className="mt-1 text-sm text-slate-600">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to turn your video content into sales?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-video-content" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/fitness-coach-newsletter" className="text-violet-600 hover:underline">
              Fitness Coach Newsletter: How to Build One That Sells
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-social-proof" className="text-violet-600 hover:underline">
              Fitness Coach Social Proof: How to Use It Effectively
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-content-ideas" className="text-violet-600 hover:underline">
              Fitness Content Ideas: 50 Posts for Every Platform
            </Link>
          </li>
          <li>
            <Link href="/blog/sell-workout-programs-online" className="text-violet-600 hover:underline">
              How to Sell Workout Programs Online
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
