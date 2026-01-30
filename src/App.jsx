import { useState } from 'react'

const customerCategories = [
  {
    id: 1,
    level: 5,
    name: "Unaware",
    color: "from-purple-500 to-purple-700",
    icon: "🌑",
    summary: "Don't know they need coaching. Hit desire, not solution.",
    fitnessContext: "Difficult to sell directly. Reflect identity or dissatisfaction they haven't articulated yet.",
    contentTypes: [
      { type: "Stories & Identity", desc: "Lifestyle moments, quiet observations" },
      { type: "Relatable Memes", desc: "Gym humor that resonates without selling" },
      { type: "POV Content", desc: "Day-in-the-life, training moments" }
    ],
    hooks: [
      "I never realised how much better my body could feel once I stopped training randomly.",
      "POV: You finally stopped guessing in the gym",
      "This is what training should feel like",
      "Why are you always training arms"
    ],
    approach: "Say nothing about coaching. Stories, identity, quiet observations."
  },
  {
    id: 2,
    level: 4,
    name: "Problem Aware",
    color: "from-blue-500 to-blue-700",
    icon: "🔍",
    summary: "Knows something is wrong but not why. Name the problem sharply.",
    fitnessContext: "Make it obvious and relatable. Imply there's a missing piece without explaining everything.",
    contentTypes: [
      { type: "Problem Reframing", desc: "Name pain points they feel but can't articulate" },
      { type: "Benefits & Fears", desc: "What they're missing, what could go wrong" },
      { type: "Myth Busting", desc: "Common mistakes they're making" }
    ],
    hooks: [
      "Most people with shoulder issues skip this warm-up.",
      "This is why your shoulder pain keeps coming back.",
      "You're not inconsistent — your training is.",
      "Most people train like roulette"
    ],
    approach: "Benefits & fears, problem reframing. Frame the problem sharper than they've seen."
  },
  {
    id: 3,
    level: 3,
    name: "Solution Aware",
    color: "from-teal-500 to-teal-700",
    icon: "💡",
    summary: "Knows what they want, not who to trust. Prove the solution works.",
    fitnessContext: "Name the solution category (warm-ups, structure, technique). Show you understand how to apply it.",
    contentTypes: [
      { type: "Claims + Proof", desc: "Movement demos, logic, credibility" },
      { type: "Education", desc: "Exercise tutorials with reasoning" },
      { type: "Before/After Thinking", desc: "Show the state change, not body change" }
    ],
    hooks: [
      "These warm-ups help keep shoulders pain-free when lifting.",
      "This warm-up matters more than your top set.",
      "Stop wasting your time in the gym if you can't do these 5 exercises",
      "Go to exercises for quad growth"
    ],
    approach: "Claims + proof. Show that the solution works and you understand it."
  },
  {
    id: 4,
    level: 2,
    name: "Product Aware",
    color: "from-orange-500 to-orange-700",
    icon: "🎯",
    summary: "Knows coaching exists, needs reassurance. Show your process.",
    fitnessContext: "Reinforce desire for coaching. Show how your approach is better than generic programs.",
    contentTypes: [
      { type: "Differentiation", desc: "What makes your approach unique" },
      { type: "Process Content", desc: "How you structure training, check-ins" },
      { type: "Client Systems", desc: "Behind-the-scenes of coaching" }
    ],
    hooks: [
      "This is how I structure training for clients who want to lift pain-free long-term.",
      "This is how I program around shoulder pain.",
      "This is why we do this before loading.",
      "This is how I adjust a program mid-week."
    ],
    approach: "Differentiation, proof, process. Introduce structure and accountability."
  },
  {
    id: 5,
    level: 1,
    name: "Most Aware",
    color: "from-green-500 to-green-700",
    icon: "✅",
    summary: "Ready to buy, needs a nudge. Be direct. Remove friction.",
    fitnessContext: "Name the offer. Tell them what to do next. Clarity, not education.",
    contentTypes: [
      { type: "Direct CTA", desc: "Clear offer with next steps" },
      { type: "Product + Price", desc: "What they get, what it costs" },
      { type: "Urgency (Subtle)", desc: "Capacity, timing, consequences of waiting" }
    ],
    hooks: [
      "Spots open for online coaching — tailored training & weekly check-ins.",
      "DM 'COACH' to get started",
      "This is easier to fix early than later.",
      "If this sounds familiar, it's worth acting now."
    ],
    approach: "Product + price + CTA. Be direct. This is not the place for education."
  }
]

const weeklySchedule = [
  { day: "Monday", awareness: "Problem Aware", type: "Problem identification", example: "Why pain keeps coming back", format: "Reel" },
  { day: "Tuesday", awareness: "Solution Aware", type: "Prep solution", example: "Warm-up or setup tutorial", format: "Reel" },
  { day: "Wednesday", awareness: "Unaware", type: "Meme/Identity", example: "Relatable gym humor (HIGH REACH)", format: "Reel" },
  { day: "Thursday", awareness: "Solution Aware", type: "Execution", example: "Clean lift demo", format: "Reel" },
  { day: "Friday", awareness: "Unaware", type: "Lifestyle/Story", example: "Training philosophy, POV", format: "Reel/Story" },
  { day: "Saturday", awareness: "Product Aware", type: "Behind-the-scenes", example: "Programming logic, client work", format: "Carousel/Reel" },
  { day: "Sunday", awareness: "Most Aware", type: "Soft CTA", example: "How I coach clients", format: "Reel/Story" }
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [activeTab, setActiveTab] = useState('categories')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">eddytrains</h1>
              <p className="text-gray-400 text-sm">Content Strategy Planner</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-400">Current Followers</p>
                <p className="text-xl font-bold text-white">152</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
                👟
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Growth Stage Alert */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📈</span>
            <div>
              <h3 className="font-semibold text-green-400">Growth Stage: Early</h3>
              <p className="text-gray-300 text-sm mt-1">
                At 152 followers, focus on <span className="text-green-400 font-medium">reach over conversion</span>. 
                Your meme-style reels are performing best — lean into that for awareness while building trust content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-2 border-b border-gray-800">
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'categories'
                ? 'text-white border-b-2 border-purple-500'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Customer Categories
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'schedule'
                ? 'text-white border-b-2 border-purple-500'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Weekly Schedule
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'categories' && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Category Cards */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-lg font-semibold text-gray-300 mb-4">Awareness Stages</h2>
              {customerCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedCategory?.id === cat.id
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg`}>
                      {cat.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">Level {cat.level}</span>
                      </div>
                      <h3 className="font-semibold text-white">{cat.name}</h3>
                      <p className="text-sm text-gray-400 truncate">{cat.summary}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Category Detail */}
            <div className="lg:col-span-2">
              {selectedCategory ? (
                <div className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden">
                  <div className={`bg-gradient-to-r ${selectedCategory.color} p-6`}>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{selectedCategory.icon}</span>
                      <div>
                        <p className="text-white/70 text-sm">Level {selectedCategory.level} — Awareness Stage</p>
                        <h2 className="text-2xl font-bold text-white">{selectedCategory.name}</h2>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">Summary</h3>
                      <p className="text-white">{selectedCategory.summary}</p>
                      <p className="text-gray-400 mt-2">{selectedCategory.fitnessContext}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Content Types</h3>
                      <div className="grid gap-3">
                        {selectedCategory.contentTypes.map((ct, i) => (
                          <div key={i} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                            <h4 className="font-medium text-white">{ct.type}</h4>
                            <p className="text-sm text-gray-400">{ct.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">Hook Examples</h3>
                      <div className="space-y-2">
                        {selectedCategory.hooks.map((hook, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-purple-400">→</span>
                            <p className="text-gray-300 italic">"{hook}"</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                      <h4 className="font-medium text-purple-400 mb-1">Message Approach</h4>
                      <p className="text-gray-300">{selectedCategory.approach}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-800/30 rounded-2xl border border-gray-700 border-dashed p-12 text-center">
                  <span className="text-4xl mb-4 block">👈</span>
                  <p className="text-gray-400">Select a customer category to see content strategies</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Weekly Content Schedule</h2>
                <p className="text-gray-400">Optimized for 150-500 follower growth stage</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-2">
                <span className="text-yellow-400 font-medium">🔥 Meme content = highest reach</span>
              </div>
            </div>

            <div className="grid gap-4">
              {weeklySchedule.map((day, i) => {
                const cat = customerCategories.find(c => c.name === day.awareness)
                const isHighReach = day.example.includes('HIGH REACH')
                return (
                  <div 
                    key={i} 
                    className={`bg-gray-800/50 rounded-xl border p-5 ${
                      isHighReach ? 'border-yellow-500/50' : 'border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-24">
                        <p className="text-lg font-bold text-white">{day.day}</p>
                        <span className="text-xs text-gray-500">{day.format}</span>
                      </div>
                      <div className={`w-1 h-12 rounded-full bg-gradient-to-b ${cat?.color || 'from-gray-500 to-gray-700'}`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            cat?.color ? `bg-gradient-to-r ${cat.color} text-white` : 'bg-gray-700 text-gray-300'
                          }`}>
                            {day.awareness}
                          </span>
                          {isHighReach && (
                            <span className="px-2 py-0.5 rounded text-xs font-medium bg-yellow-500/20 text-yellow-400">
                              🔥 High Reach
                            </span>
                          )}
                        </div>
                        <p className="font-medium text-white">{day.type}</p>
                        <p className="text-sm text-gray-400">{day.example.replace(' (HIGH REACH)', '')}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
              <h3 className="font-semibold text-white mb-4">📊 Strategy Notes for 152 Followers</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="text-gray-300"><span className="text-green-400">✓</span> Post 5-7 reels per week minimum</p>
                  <p className="text-gray-300"><span className="text-green-400">✓</span> Meme/relatable content 2x per week for reach</p>
                  <p className="text-gray-300"><span className="text-green-400">✓</span> Educational content builds trust over time</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300"><span className="text-green-400">✓</span> Soft CTAs only — don't hard sell yet</p>
                  <p className="text-gray-300"><span className="text-green-400">✓</span> Stories daily to stay top of mind</p>
                  <p className="text-gray-300"><span className="text-green-400">✓</span> Engage in comments for 15 min after posting</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Brand Truth Footer */}
      <footer className="border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">Brand Truth</p>
            <p className="text-gray-300 italic">"This brand exists to help people train with confidence, consistency, and longevity."</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
