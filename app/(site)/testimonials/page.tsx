import { MotionFade } from "@/components/motion-fade";
import { PageHeading } from "@/components/page-heading";

type Testimonial = {
  quote: string[];
  author: string;
};

const testimonials: Testimonial[] = [
  {
    quote: [
      "Mike's services are professional from start to finish: all the way from scheduling appointments and being readily available to delivering the final photos soon after the shoot ends. He also does a great job communicating with clients and understanding the type of photos they're looking for, and is relentless in getting the perfect shot. I can't recommend him enough."
    ],
    author: "Rafed Abbassi, NYU Class of 2025"
  },
  {
    quote: [
      "Mike was awesome!! He's an incredibly talented and hardworking photographer who knows exactly what he's doing. Not only did he take fantastic individual and group pictures, but he knew how to pose us, coordinate the group, and make us feel comfortable.",
      "He's also a great communicator who responds to messages fast and works efficiently. He made the whole process of booking, taking photos, and receiving photos quick and easy. All of us were super happy with the results, and he gave us great memories to look back on. I literally couldn't be happier with the pics he took. If I had to take grad pics again, I would choose Mike over and over."
    ],
    author: "Enzo Tanjutco, NYU Class of 2025"
  },
  {
    quote: [
      "My graduation photoshoot experience with Mike was a fun, affirming, and incredibly efficient process. He listened to my requests, carefully looked at my references, and did everything to make my vision come to life - including a champagne pop! Mike was very responsive before and after the photoshoot with our questions and concerns, and sent us our photos the same day as our photoshoot. I would highly recommend anyone thinking of booking a photoshoot to trust Mike for an enjoyable process and product!"
    ],
    author: "Amber Chang, NYU Class of 2025"
  },
  {
    quote: [
      "Mike has been nothing short of phenomenal as a photographer. Creativity, flexibility and punctuality are key pillars of what makes a superb experience and he hits the mark in all of these areas. His unmatched dedication to immortalise your special moment and unwavering efforts to ensure client satisfaction is unparalleled. Through great communication he worked with us to make sure that we got that perfect shot in all conditions. He is easily the best photographer experience that I have ever had in my life and will be a repeat customer for sure!"
    ],
    author: "Jordon Zhong, NYU Class of 2025"
  },
  {
    quote: [
      "Best grad photographer I've had this grad season! I had two group photo sessions with Mike back in May in addition to many other grad photoshoots, and I honestly wish we just hired Mike for every session.",
      "Mike was super accommodating with locations and did not limit us to just the popular NYU spots like WSP, Mews etc. He was really patient throughout the session - from directing group poses to taking individual/duo shot requests, he was committed to making the perfect shot happen, even if that meant staying a couple minutes after our booked time slot.",
      "Mike also has an insanely fast turnaround - he first picked through the 400+ photos and quickly edited some of the best ones to give us a preview, and sent us the entire drive to keep within a day.",
      "Overall amazing experience, highly recommend Mike for any and all photography needs!! 📸"
    ],
    author: "Claudia Ng, NYU Class of 2025"
  }
];

export default function TestimonialsPage() {
  return (
    <MotionFade className="max-w-6xl">
      <PageHeading title="TESTIMONIALS" subline="what clients remembered most" />

      <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
        {testimonials.map((item) => (
          <article key={item.author} className="border-t border-ink/20 pt-6">
            <div className="space-y-4 text-sm leading-relaxed text-ink/78">
              {item.quote.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.12em] text-ink/68">- {item.author}</p>
          </article>
        ))}
      </div>
    </MotionFade>
  );
}
