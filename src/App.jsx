import { useState } from 'react'

const customerCategories = [
  {
    id: 1,
    level: 5,
    name: "Unaware",
    color: "#8b5cf6",
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
    color: "#3b82f6",
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
    color: "#14b8a6",
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
    color: "#f97316",
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
    color: "#22c55e",
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
  { day: "Monday", awareness: "Problem Aware", type: "Problem identification", example: "Why pain keeps coming back", format: "Reel", highReach: false },
  { day: "Tuesday", awareness: "Solution Aware", type: "Prep solution", example: "Warm-up or setup tutorial", format: "Reel", highReach: false },
  { day: "Wednesday", awareness: "Unaware", type: "Meme/Identity", example: "Relatable gym humor", format: "Reel", highReach: true },
  { day: "Thursday", awareness: "Solution Aware", type: "Execution", example: "Clean lift demo", format: "Reel", highReach: false },
  { day: "Friday", awareness: "Unaware", type: "Lifestyle/Story", example: "Training philosophy, POV", format: "Reel/Story", highReach: false },
  { day: "Saturday", awareness: "Product Aware", type: "Behind-the-scenes", example: "Programming logic, client work", format: "Carousel/Reel", highReach: false },
  { day: "Sunday", awareness: "Most Aware", type: "Soft CTA", example: "How I coach clients", format: "Reel/Story", highReach: false }
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [activeTab, setActiveTab] = useState('categories')

  const getColorForAwareness = (name) => {
    const cat = customerCategories.find(c => c.name === name)
    return cat?.color || '#6b7280'
  }

  return (
    <div className="min-h-screen" style={{ background: '#0d1117', color: '#c9d1d9' }}>
      {/* Header */}
      <header style={{ 
        borderBottom: '1px solid #30363d', 
        background: '#161b22',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div style={{ 
                width: 40, 
                height: 40, 
                borderRadius: 8, 
                background: 'linear-gradient(135deg, #238636, #2ea043)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                color: '#fff'
              }}>E</div>
              <div>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f0f6fc' }}>eddytrains</h1>
                <p style={{ fontSize: '0.875rem', color: '#8b949e' }}>Content Strategy Planner</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p style={{ fontSize: '0.75rem', color: '#8b949e' }}>Followers</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f0f6fc' }}>152</p>
              </div>
              <div style={{ 
                background: '#238636', 
                padding: '0.375rem 0.875rem', 
                borderRadius: 20, 
                fontSize: '0.75rem', 
                fontWeight: 500,
                color: '#fff'
              }}>Early Stage</div>
            </div>
          </div>
        </div>
      </header>

      {/* Growth Alert */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div style={{ 
          background: 'rgba(35, 134, 54, 0.1)', 
          border: '1px solid rgba(35, 134, 54, 0.3)', 
          borderRadius: 8, 
          padding: '1rem' 
        }}>
          <div className="flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3fb950" strokeWidth="2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>
            <div>
              <h3 style={{ fontWeight: 600, color: '#3fb950', marginBottom: 4 }}>Growth Strategy</h3>
              <p style={{ fontSize: '0.875rem', color: '#c9d1d9' }}>
                At 152 followers, focus on <span style={{ color: '#3fb950', fontWeight: 500 }}>reach over conversion</span>. 
                Meme-style reels perform best — lean into awareness content while building trust.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4">
        <div style={{ borderBottom: '1px solid #30363d', display: 'flex', gap: 8 }}>
          <button
            onClick={() => setActiveTab('categories')}
            style={{
              padding: '0.75rem 1.5rem',
              fontWeight: 500,
              fontSize: '0.875rem',
              color: activeTab === 'categories' ? '#f0f6fc' : '#8b949e',
              borderBottom: activeTab === 'categories' ? '2px solid #58a6ff' : '2px solid transparent',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Customer Categories
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            style={{
              padding: '0.75rem 1.5rem',
              fontWeight: 500,
              fontSize: '0.875rem',
              color: activeTab === 'schedule' ? '#f0f6fc' : '#8b949e',
              borderBottom: activeTab === 'schedule' ? '2px solid #58a6ff' : '2px solid transparent',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
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
            <div className="lg:col-span-1 space-y-3">
              <h2 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#8b949e', marginBottom: 16 }}>Awareness Stages</h2>
              {customerCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '1rem',
                    borderRadius: 8,
                    border: selectedCategory?.id === cat.id ? '1px solid #58a6ff' : '1px solid #30363d',
                    background: selectedCategory?.id === cat.id ? 'rgba(88, 166, 255, 0.1)' : '#161b22',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div style={{ 
                      width: 8, 
                      height: 40, 
                      borderRadius: 4, 
                      background: cat.color 
                    }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.75rem', color: '#8b949e', marginBottom: 2 }}>Level {cat.level}</div>
                      <h3 style={{ fontWeight: 600, color: '#f0f6fc', marginBottom: 2 }}>{cat.name}</h3>
                      <p style={{ 
                        fontSize: '0.8rem', 
                        color: '#8b949e', 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis', 
                        whiteSpace: 'nowrap' 
                      }}>{cat.summary}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Category Detail */}
            <div className="lg:col-span-2">
              {selectedCategory ? (
                <div style={{ background: '#161b22', borderRadius: 8, border: '1px solid #30363d', overflow: 'hidden' }}>
                  <div style={{ 
                    background: selectedCategory.color, 
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{ 
                      width: 48, 
                      height: 48, 
                      borderRadius: 8, 
                      background: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      color: '#fff',
                      fontSize: '1.25rem'
                    }}>
                      {selectedCategory.level}
                    </div>
                    <div>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>Awareness Stage</p>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>{selectedCategory.name}</h2>
                    </div>
                  </div>
                  
                  <div style={{ padding: '1.5rem' }} className="space-y-6">
                    <div>
                      <h3 style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Summary</h3>
                      <p style={{ color: '#f0f6fc' }}>{selectedCategory.summary}</p>
                      <p style={{ color: '#8b949e', marginTop: 8 }}>{selectedCategory.fitnessContext}</p>
                    </div>

                    <div>
                      <h3 style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Content Types</h3>
                      <div className="space-y-2">
                        {selectedCategory.contentTypes.map((ct, i) => (
                          <div key={i} style={{ 
                            background: '#0d1117', 
                            borderRadius: 6, 
                            padding: '0.875rem', 
                            border: '1px solid #30363d' 
                          }}>
                            <h4 style={{ fontWeight: 500, color: '#f0f6fc', marginBottom: 4 }}>{ct.type}</h4>
                            <p style={{ fontSize: '0.875rem', color: '#8b949e' }}>{ct.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Hook Examples</h3>
                      <div className="space-y-2">
                        {selectedCategory.hooks.map((hook, i) => (
                          <div key={i} style={{ 
                            display: 'flex', 
                            alignItems: 'flex-start', 
                            gap: 8,
                            padding: '0.5rem 0'
                          }}>
                            <div style={{ 
                              width: 6, 
                              height: 6, 
                              borderRadius: '50%', 
                              background: selectedCategory.color,
                              marginTop: 6,
                              flexShrink: 0
                            }} />
                            <p style={{ color: '#c9d1d9', fontStyle: 'italic' }}>"{hook}"</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ 
                      background: `rgba(${selectedCategory.color === '#22c55e' ? '34,197,94' : selectedCategory.color === '#8b5cf6' ? '139,92,246' : selectedCategory.color === '#3b82f6' ? '59,130,246' : selectedCategory.color === '#14b8a6' ? '20,184,166' : '249,115,22'}, 0.1)`,
                      border: `1px solid ${selectedCategory.color}33`,
                      borderRadius: 6,
                      padding: '1rem'
                    }}>
                      <h4 style={{ fontWeight: 600, color: selectedCategory.color, marginBottom: 4 }}>Message Approach</h4>
                      <p style={{ color: '#c9d1d9' }}>{selectedCategory.approach}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ 
                  background: '#161b22', 
                  borderRadius: 8, 
                  border: '1px dashed #30363d', 
                  padding: '4rem',
                  textAlign: 'center'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b949e" strokeWidth="2" style={{ margin: '0 auto 16px' }}>
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                  <p style={{ color: '#8b949e' }}>Select a customer category to see content strategies</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f0f6fc' }}>Weekly Content Schedule</h2>
                <p style={{ color: '#8b949e' }}>Optimized for 150-500 follower growth stage</p>
              </div>
              <div style={{ 
                background: 'rgba(210, 153, 34, 0.1)', 
                border: '1px solid rgba(210, 153, 34, 0.3)', 
                borderRadius: 6, 
                padding: '0.5rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#d29922' }} />
                <span style={{ color: '#d29922', fontWeight: 500, fontSize: '0.875rem' }}>Meme content = highest reach</span>
              </div>
            </div>

            <div className="space-y-3">
              {weeklySchedule.map((day, i) => (
                <div 
                  key={i} 
                  style={{ 
                    background: '#161b22', 
                    borderRadius: 8, 
                    border: day.highReach ? '1px solid rgba(210, 153, 34, 0.5)' : '1px solid #30363d',
                    padding: '1.25rem'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div style={{ width: 80 }}>
                      <p style={{ fontSize: '1rem', fontWeight: 600, color: '#f0f6fc' }}>{day.day}</p>
                      <span style={{ fontSize: '0.75rem', color: '#8b949e' }}>{day.format}</span>
                    </div>
                    <div style={{ 
                      width: 4, 
                      height: 40, 
                      borderRadius: 2, 
                      background: getColorForAwareness(day.awareness) 
                    }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <span style={{ 
                          padding: '0.25rem 0.625rem', 
                          borderRadius: 4, 
                          fontSize: '0.75rem', 
                          fontWeight: 500,
                          background: getColorForAwareness(day.awareness),
                          color: '#fff'
                        }}>
                          {day.awareness}
                        </span>
                        {day.highReach && (
                          <span style={{ 
                            padding: '0.25rem 0.625rem', 
                            borderRadius: 4, 
                            fontSize: '0.75rem', 
                            fontWeight: 500,
                            background: 'rgba(210, 153, 34, 0.2)',
                            color: '#d29922'
                          }}>
                            High Reach
                          </span>
                        )}
                      </div>
                      <p style={{ fontWeight: 500, color: '#f0f6fc' }}>{day.type}</p>
                      <p style={{ fontSize: '0.875rem', color: '#8b949e' }}>{day.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#161b22', borderRadius: 8, border: '1px solid #30363d', padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 600, color: '#f0f6fc', marginBottom: 16 }}>Strategy Notes</h3>
              <div className="grid md:grid-cols-2 gap-4" style={{ fontSize: '0.875rem' }}>
                <div className="space-y-2">
                  <p style={{ color: '#c9d1d9', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#3fb950' }}>✓</span> Post 5-7 reels per week minimum
                  </p>
                  <p style={{ color: '#c9d1d9', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#3fb950' }}>✓</span> Meme/relatable content 2x per week for reach
                  </p>
                  <p style={{ color: '#c9d1d9', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#3fb950' }}>✓</span> Educational content builds trust over time
                  </p>
                </div>
                <div className="space-y-2">
                  <p style={{ color: '#c9d1d9', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#3fb950' }}>✓</span> Soft CTAs only — don't hard sell yet
                  </p>
                  <p style={{ color: '#c9d1d9', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#3fb950' }}>✓</span> Stories daily to stay top of mind
                  </p>
                  <p style={{ color: '#c9d1d9', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#3fb950' }}>✓</span> Engage in comments for 15 min after posting
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #30363d', marginTop: 48 }}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <p style={{ fontSize: '0.75rem', color: '#8b949e', marginBottom: 8 }}>Brand Truth</p>
            <p style={{ color: '#c9d1d9', fontStyle: 'italic' }}>"This brand exists to help people train with confidence, consistency, and longevity."</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
