import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Film Workout Videos in 2026: Setup, Equipment, and Editing (on Any Budget)",
  description:
    "You don't need a studio or expensive gear to film workout content that sells. Here's the exact setup fitness creators use at every budget level.",
  alternates: {
    canonical: "https://creatdrop.com/blog/how-to-film-workout-videos",
  },
  openGraph: {
    title: "How to Film Workout Videos in 2026: Setup, Equipment, and Editing (on Any Budget)",
    description:
      "You don't need a studio or expensive gear to film workout content that sells. Here's the exact setup fitness creators use at every budget level.",
    url: "https://creatdrop.com/blog/how-to-film-workout-videos",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "/icon.jpg",
        width: 1200,
        height: 630,
        alt: "How to Film Workout Videos in 2026: Setup, Equipment, and Editing (on Any Budget)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Film Workout Videos in 2026: Setup, Equipment, and Editing (on Any Budget)",
    description:
      "You don't need a studio or expensive gear to film workout content that sells. Here's the exact setup fitness creators use at every budget level.",
  },
}

export default function HowToFilmWorkoutVideos() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <header className="border-b border-slate-100 px-6 py-4">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="text-lg font-semibold text-violet-600 hover:text-violet-700"
          >
            Creatdrop
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-slate-700">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Content Creation</span>
        </nav>

        {/* Category */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-600">
          Content Creation
        </p>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          How to Film Workout Videos in 2026: Setup, Equipment, and Editing (on Any Budget)
        </h1>

        <p className="mb-10 text-base text-slate-500">
          8 min read &mdash; Published April 2026
        </p>

        {/* Intro */}
        <p className="mb-8 text-[17px] leading-relaxed text-slate-700">
          The difference between a workout video that sells and one that doesn&apos;t isn&apos;t the
          equipment. It&apos;s the setup. Bad audio, shaky footage, and cluttered backgrounds kill
          trust faster than anything. Here&apos;s how to avoid all three &mdash; at any budget.
        </p>

        {/* Section 1 */}
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          The 3-Budget Setup Guide
        </h2>
        <p className="mb-4 text-slate-700 leading-relaxed">
          You do not need to spend $2,000 to produce workout content that converts. The table
          below shows what a realistic setup looks like at three spending levels. Most coaches
          start in the budget tier and graduate to mid-range once they have consistent sales.
        </p>

        <div className="mb-8 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Element
                </th>
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Budget ($0&ndash;$100)
                </th>
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Mid-range ($100&ndash;$600)
                </th>
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Pro ($600+)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Camera",
                  "Smartphone (iPhone 12+)",
                  "Sony ZV-E10 or ZV-1",
                  "Sony A7C or Fujifilm X-S20",
                ],
                [
                  "Audio",
                  "Smartphone mic",
                  "DJI Mic Mini ($60)",
                  "Rode Wireless GO II ($300)",
                ],
                [
                  "Lighting",
                  "Natural window light",
                  "Elgato Key Light ($100)",
                  "2x softbox kit ($200)",
                ],
                [
                  "Stabilization",
                  "Stack of books / table",
                  "Gorilla tripod ($25)",
                  "Full tripod + gimbal ($200)",
                ],
                [
                  "Background",
                  "Clean wall, decluttered",
                  "Curtain backdrop ($30)",
                  "Dedicated shooting space",
                ],
                [
                  "Editing",
                  "CapCut (free)",
                  "DaVinci Resolve (free)",
                  "Premiere Pro ($55/mo)",
                ],
              ].map(([element, budget, mid, pro]) => (
                <tr key={element} className="hover:bg-slate-50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-800">
                    {element}
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">{budget}</td>
                  <td className="border border-slate-200 p-3 text-slate-600">{mid}</td>
                  <td className="border border-slate-200 p-3 text-slate-600">{pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-slate-700 leading-relaxed">
          The budget tier is not a compromise. Countless fitness creators with hundreds of
          thousands of followers film on iPhones with window light. The setup discipline
          &mdash; clean background, good angle, no wind noise &mdash; matters more than the
          camera body.
        </p>

        {/* Section 2 */}
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Camera Placement for Different Video Types
        </h2>
        <p className="mb-4 text-slate-700 leading-relaxed">
          Where you place the camera relative to the subject determines whether a buyer can
          actually see what you are demonstrating. Wrong placement is the most common technical
          error in fitness content &mdash; and it is free to fix.
        </p>

        <div className="mb-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Video type
                </th>
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Camera height
                </th>
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Angle
                </th>
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Distance
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Full-body workout demo",
                  "Hip level",
                  "Slight upward",
                  "8&ndash;12 feet",
                ],
                [
                  "Upper body / form check",
                  "Chest level",
                  "Eye level",
                  "4&ndash;6 feet",
                ],
                [
                  "Close-up form cue",
                  "Near the joint",
                  "Macro / close",
                  "2&ndash;3 feet",
                ],
                [
                  "Talking-head coaching",
                  "Eye level",
                  "Straight on",
                  "3&ndash;5 feet",
                ],
                [
                  "Overhead (floor exercises)",
                  "Ceiling mount or tripod overhead",
                  "90\u00b0 down",
                  "4&ndash;6 feet",
                ],
              ].map(([type, height, angle, distance]) => (
                <tr key={type} className="hover:bg-slate-50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-800">
                    {type}
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">{height}</td>
                  <td
                    className="border border-slate-200 p-3 text-slate-600"
                    dangerouslySetInnerHTML={{ __html: angle }}
                  />
                  <td
                    className="border border-slate-200 p-3 text-slate-600"
                    dangerouslySetInnerHTML={{ __html: distance }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-8 rounded-xl border border-violet-200 bg-violet-50 p-5">
          <p className="text-sm font-semibold text-violet-800">Tip</p>
          <p className="mt-1 text-sm leading-relaxed text-violet-700">
            Always check your frame before recording. The most common mistake: filming the
            entire set only to find the head is cut off at the top. Do a 5-second test clip and
            watch it back before you start.
          </p>
        </div>

        {/* Section 3 */}
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Lighting &mdash; The Biggest Impact for the Least Money
        </h2>
        <p className="mb-4 text-slate-700 leading-relaxed">
          Lighting is the single highest-leverage variable in video quality. A $0 change in
          how you position yourself relative to a window will do more than a $500 camera
          upgrade.
        </p>
        <ul className="mb-4 list-disc pl-6 text-slate-700 leading-relaxed space-y-2">
          <li>
            <strong>Natural light rule:</strong> face the window, never have the window behind
            you. A window behind you silhouettes your body and makes form impossible to read.
          </li>
          <li>
            <strong>One-light setup:</strong> ring light or key light at 45&deg; to your face,
            slightly above eye level. Eliminates most shadows without a second light source.
          </li>
          <li>
            <strong>Two-light setup (best for exercise):</strong> key light front-left, fill
            light front-right at half the intensity of the key. Eliminates harsh shadows on
            either side during lateral movement.
          </li>
          <li>
            <strong>Avoid overhead gym lights:</strong> they create unflattering shadows under
            the chin and chest, and make it harder to read form during exercises like squats
            and deadlifts.
          </li>
        </ul>

        <div className="mb-8 rounded-xl border border-violet-200 bg-violet-50 p-5">
          <p className="text-sm font-semibold text-violet-800">Visual test</p>
          <p className="mt-1 text-sm leading-relaxed text-violet-700">
            Record a 30-second clip. Watch it on your phone. If you cannot clearly see the
            joints during movement &mdash; knees tracking, elbows bending, hips hinging
            &mdash; your lighting needs work before you record anything for sale.
          </p>
        </div>

        {/* Section 4 */}
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Audio &mdash; The Most Underrated Variable
        </h2>
        <p className="mb-4 text-slate-700 leading-relaxed">
          Viewers will tolerate slightly shaky footage. They will not tolerate bad audio for
          more than 30 seconds. Bad audio signals low production effort, and for a paid
          product that means refund requests and lost trust.
        </p>
        <ul className="mb-4 list-disc pl-6 text-slate-700 leading-relaxed space-y-2">
          <li>Never use a built-in laptop mic for any content you intend to sell.</li>
          <li>
            The DJI Mic Mini ($60) is the single biggest ROI equipment upgrade for fitness
            creators. It is wireless, clips to your collar, and sounds dramatically better
            than any phone or camera built-in mic.
          </li>
          <li>
            <strong>Lavalier clip placement:</strong> 4&ndash;6 inches below the collar, tucked
            slightly under an outer layer to muffle wind and fabric noise during movement.
          </li>
          <li>
            <strong>Room acoustics:</strong> a carpeted room absorbs more echo than hardwood or
            tile. A walk-in closet full of hanging clothes is the best natural sound booth most
            creators have access to for talking-head content.
          </li>
        </ul>

        <div className="mb-8 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Mic type
                </th>
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Cost
                </th>
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Best for
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Smartphone built-in", "$0", "Do not use for paid products"],
                ["DJI Mic Mini", "$60", "All-around best starter — wireless, small, clear"],
                ["Rode Wireless GO II", "$300", "Pro shoots, multi-camera setups"],
                ["Lavalier wired (BOYA)", "$20", "Budget static filming"],
                ["Blue Yeti USB", "$100", "Talking-head only (desk use)"],
              ].map(([mic, cost, best]) => (
                <tr key={mic} className="hover:bg-slate-50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-800">
                    {mic}
                  </td>
                  <td className="border border-slate-200 p-3 font-semibold text-violet-700">
                    {cost}
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 5 */}
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Editing Your Workout Videos
        </h2>

        <p className="mb-3 text-slate-700 leading-relaxed font-semibold">
          For short-form (Reels, TikTok):
        </p>
        <ul className="mb-4 list-disc pl-6 text-slate-700 leading-relaxed space-y-2">
          <li>
            Keep cuts every 3&ndash;5 seconds during exercise demonstration &mdash; long
            uncut takes lose attention fast.
          </li>
          <li>
            Use slow-motion on form moments. Most smartphones shoot at 240fps, which gives you
            clean 4&times; slow-motion without any additional gear.
          </li>
          <li>
            Add text overlays: muscle targeted, rep count, form cue. Viewers watch with sound
            off by default on most platforms.
          </li>
          <li>
            Hook in the first 1.5 seconds: show the end result first, explain second. A clip
            of the finished movement beats a clip of someone walking to position.
          </li>
        </ul>

        <p className="mb-3 text-slate-700 leading-relaxed font-semibold">
          For long-form product videos (YouTube / digital products):
        </p>
        <ul className="mb-6 list-disc pl-6 text-slate-700 leading-relaxed space-y-2">
          <li>
            <strong>Intro:</strong> state what the viewer will learn in 30 seconds or less.
            No lengthy warm-up speech &mdash; they clicked for the content.
          </li>
          <li>
            <strong>Body:</strong> the workout, clearly cued. Narrate intent, not just action.
            &ldquo;Drive through the heel&rdquo; is more useful than &ldquo;now do the
            squat.&rdquo;
          </li>
          <li>
            <strong>CTA at the end:</strong> tell the viewer exactly where to find the full
            program. One link, one instruction.
          </li>
        </ul>

        <div className="mb-8 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Tool
                </th>
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Best for
                </th>
                <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                  Platform
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["CapCut", "Short form, Reels", "Mobile + Desktop"],
                ["DaVinci Resolve", "Long form, color grading", "Desktop"],
                ["Descript", "Talking-head, podcasts", "Desktop"],
                ["iMovie", "Simple edits", "Mac / iOS"],
                ["InShot", "Quick mobile edits", "Mobile"],
              ].map(([tool, best, platform]) => (
                <tr key={tool} className="hover:bg-slate-50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-800">
                    {tool}
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">{best}</td>
                  <td className="border border-slate-200 p-3 text-slate-600">{platform}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 6 */}
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Filming Your Digital Product (the Product Video)
        </h2>
        <p className="mb-4 text-slate-700 leading-relaxed">
          When selling a workout program on Creatdrop, the product video is your silent
          salesperson. Most buyers will not read the full description &mdash; they will watch
          60&ndash;90 seconds of actual content and decide. Make those seconds count.
        </p>
        <ul className="mb-4 list-disc pl-6 text-slate-700 leading-relaxed space-y-2">
          <li>
            Film a 60&ndash;90 second preview showing 3&ndash;5 exercises from the actual
            program. Do not just describe the exercises &mdash; demonstrate them.
          </li>
          <li>
            End with one clear, specific CTA: &ldquo;The full 12-week program includes 48
            videos like this. Link below.&rdquo; Vague CTAs (&ldquo;check out my
            content&rdquo;) do not convert.
          </li>
          <li>
            Keep the product video public and shareable. It is your best marketing asset.
            Post it on every platform. The checkout link lives one tap away.
          </li>
        </ul>
        <p className="mb-8 text-slate-700 leading-relaxed">
          A strong product video format: hook (show the hardest or most visually impressive
          exercise from the program) &rarr; quick exercise montage showing variety &rarr;
          brief testimonial mention if you have one &rarr; single clear CTA with the link.
          Total runtime: under 90 seconds.
        </p>

        {/* Section 7 */}
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Posting Workflow
        </h2>
        <p className="mb-6 text-slate-700 leading-relaxed">
          The creators who produce the most consistent content are not working harder &mdash;
          they are working in batches. Here is the workflow that eliminates daily decision
          fatigue and keeps output high without burnout.
        </p>

        <ol className="mb-8 space-y-5">
          {[
            {
              n: 1,
              title: "Record in batches",
              body:
                "Film 3\u20135 videos in one session wearing the same outfit in the same setup. Consistent visual branding across all content, with a fraction of the setup time.",
            },
            {
              n: 2,
              title: "Edit on the same day",
              body:
                "Context is fresh, you remember the cues you planned to hit, and edits are faster. Leaving footage for a week doubles the editing time.",
            },
            {
              n: 3,
              title: "Create 3 versions",
              body:
                "One long cut for YouTube, one 60-second cut for Instagram, one 30-second cut for TikTok and Reels. Export once from the timeline, trim for each platform.",
            },
            {
              n: 4,
              title: "Schedule with Later or Buffer",
              body:
                "Batch scheduling saves 90% of the daily time most creators spend on social. Set a week of posts in one 30-minute session.",
            },
            {
              n: 5,
              title: "Repurpose forever",
              body:
                "A workout demo filmed once can live in Reels, Stories, a product preview clip, an email, and a blog embed. One shoot, five or more placements.",
            },
          ].map(({ n, title, body }) => (
            <li key={n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                {n}
              </span>
              <div>
                <p className="font-semibold text-slate-900">{title}</p>
                <p className="mt-1 text-slate-700 leading-relaxed">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA section */}
        <section className="mt-16 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Sell the Programs You Film
          </h2>
          <p className="mb-6 text-slate-600">
            Creatdrop delivers your workout videos and programs instantly to buyers &mdash; no
            monthly fee, 0% transaction cost.
          </p>
          <WaitlistForm source="blog-how-to-film-workout-videos" />
        </section>

        {/* Related articles */}
        <div className="mt-12 border-t border-slate-100 pt-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Keep reading
          </p>
          <div className="space-y-3">
            <Link
              href="/blog/sell-workout-videos-online"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800 group-hover:text-violet-700">
                How to Sell Workout Videos Online in 2026
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Download vs streaming, pricing by format, and platform economics explained.
              </p>
            </Link>
            <Link
              href="/blog/fitness-creator-tools"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800 group-hover:text-violet-700">
                The Best Tools for Fitness Creators in 2026
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Camera, audio, editing, scheduling, and selling tools ranked by ROI.
              </p>
            </Link>
            <Link
              href="/blog/sell-workout-programs-online"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800 group-hover:text-violet-700">
                How to Sell Workout Programs Online
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Packaging, pricing, and the platforms that take the smallest cut.
              </p>
            </Link>
            <Link
              href="/blog/passive-income-fitness-coach"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800 group-hover:text-violet-700">
                Passive Income for Fitness Coaches: The Realistic Guide
              </p>
              <p className="mt-1 text-sm text-slate-500">
                How fitness coaches build income streams that work without live hours.
              </p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
