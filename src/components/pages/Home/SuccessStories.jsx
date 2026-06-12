import successBeforeMale from "@/assets/successstory/1.png"
import successBeforeFemale from "@/assets/successstory/2.png"
import successAfterMale from "@/assets/successstory/3.png"
import successAfterFemale from "@/assets/successstory/4.png"

const SuccessStories = () => {
  return (
    <section className="py-32 px-6 bg-brand-surface/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-medium uppercase tracking-tighter text-4xl mb-16">
          Client Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-3/5 bg-brand-surface outline-1 -outline-offset-1 outline-white/5 rounded-l-lg overflow-hidden">
                <img
                  src={successBeforeMale}
                  alt="Jameson before training"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={512}
                  height={800}
                />
              </div>
              <div className="aspect-3/5 bg-brand-surface outline-1 -outline-offset-1 outline-white/5 rounded-r-lg overflow-hidden">
                <img
                  src={successAfterMale}
                  alt="Jameson after 12 weeks"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={512}
                  height={800}
                />
              </div>
            </div>
            <div className="pt-4 border-t border-brand-muted/30">
              <h3 className="font-medium">Jameson K.</h3>
              <p className="text-sm text-zinc-500">12-Week Hypertrophy Phase</p>
            </div>
          </div>
          <div className="group space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-[3/5] bg-brand-surface outline outline-1 -outline-offset-1 outline-white/5 rounded-l-lg overflow-hidden">
                <img
                  src={successBeforeFemale}
                  alt="Sarah before training"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={512}
                  height={800}
                />
              </div>
              <div className="aspect-[3/5] bg-brand-surface outline outline-1 -outline-offset-1 outline-white/5 rounded-r-lg overflow-hidden">
                <img
                  src={successAfterFemale}
                  alt="Sarah after training"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={512}
                  height={800}
                />
              </div>
            </div>
            <div className="pt-4 border-t border-brand-muted/30">
              <h3 className="font-medium">Sarah M.</h3>
              <p className="text-sm text-zinc-500">Fat Loss & Metabolic Reset</p>
            </div>
          </div>
          <div className="group space-y-4">
            <div className="aspect-[3/5] bg-brand-surface outline outline-1 -outline-offset-1 outline-white/5 rounded-lg grid place-items-center">
              <span className="text-xs font-medium uppercase tracking-widest text-brand-muted">Result Coming Soon</span>
            </div>
            <div className="pt-4 border-t border-brand-muted/30">
              <h3 className="font-medium">Alex D.</h3>
              <p className="text-sm text-zinc-500">Total Body Recomposition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories