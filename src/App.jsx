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
    approach: "Say nothing about coaching. Stories, identity, quiet observations.",
    templates: [
      { 
        id: 1, 
        name: "🔥 Better Energy (VIRAL)",
        inspoLink: "https://www.instagram.com/p/C2dJkNIRDXk/",
        hook: "Better you attracts better energy",
        bio: "Personal transformation - show how fitness improves all areas of life"
      },
      { 
        id: 2, 
        name: "🔥 Best Feeling Ever (339K views)",
        inspoLink: "https://www.instagram.com/p/DBPPzGDxYyk/",
        hook: "Best feeling ever",
        bio: "Short relatable gym moment - humor performs well"
      },
      { 
        id: 3, 
        name: "🔥 Gym is Therapy (VIRAL)",
        inspoLink: "https://www.instagram.com/p/DGvNoHNPF82/",
        hook: "Gym is not just a place where we lift weights… it's a sanctuary",
        bio: "Deep emotional - gym as escape/therapy"
      },
      { 
        id: 4, 
        name: "🔥 Mamba Mentality Humor",
        inspoLink: "https://www.instagram.com/p/DQ4hggegH_Q/",
        hook: "The most powerful words ever spoken ‼️",
        bio: "Mamba mentality with humor - relatable and shareable"
      }
    ]
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
    approach: "Benefits & fears, problem reframing. Frame the problem sharper than they've seen.",
    templates: [
      { 
        id: 1, 
        name: "🔥 Mental Health + Gym (VIRAL)",
        inspoLink: "https://www.instagram.com/p/CzbzQsvI8Ei/",
        hook: "Depressed? Go hit the gym",
        bio: "Powerful message - gym as therapy resonates with many"
      },
      { 
        id: 2, 
        name: "🔥 Highs vs Lows (VIRAL)",
        inspoLink: "https://www.instagram.com/p/C7cAvq1ie6G/",
        hook: "The highs definitely outweigh the lows",
        bio: "Show struggle then triumph - transformation content"
      }
    ]
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
    approach: "Claims + proof. Show that the solution works and you understand it.",
    templates: [
      { 
        id: 1, 
        name: "🔥 Hybrid Training (VIRAL)",
        inspoLink: "https://www.instagram.com/p/DSDJhuuCOiZ/",
        hook: "Simple 🤷‍♀️… Just kidding - but it is possible",
        bio: "Combine strength AND cardio - show versatility as a coach"
      }
    ]
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
    approach: "Differentiation, proof, process. Introduce structure and accountability.",
    templates: []
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
    approach: "Product + price + CTA. Be direct. This is not the place for education.",
    templates: [
      { 
        id: 1, 
        name: "🔥 START NOW (VIRAL)",
        inspoLink: "https://www.instagram.com/p/C-20XzoCYGh/",
        hook: "NOW IS THE BEST TIME TO START 🚀",
        bio: "Cinematic motivation - urgency CTA for potential clients"
      }
    ]
  }
]

const weeklySchedule = [
  { day: "Monday", awareness: "Unaware", type: "Meme/Relatable", example: "Gym humor that hits home", format: "Reel", highReach: true },
  { day: "Tuesday", awareness: "Problem Aware", type: "Pain point", example: "Why your progress stalled", format: "Reel", highReach: false },
  { day: "Wednesday", awareness: "Unaware", type: "POV/Identity", example: "POV: finally training with purpose", format: "Reel", highReach: true },
  { day: "Thursday", awareness: "Solution Aware", type: "Quick tip", example: "One exercise you're doing wrong", format: "Reel", highReach: false },
  { day: "Friday", awareness: "Unaware", type: "Lifestyle", example: "Day in the life / gym moments", format: "Reel", highReach: true },
  { day: "Saturday", awareness: "Problem Aware", type: "Myth busting", example: "Stop believing this about training", format: "Reel", highReach: false },
  { day: "Sunday", awareness: "Unaware", type: "Relatable story", example: "Sunday gym culture / recovery vibes", format: "Reel/Story", highReach: true }
]

function App() {
  const [activeTab, setActiveTab] = useState('categories')
  const [expandedId, setExpandedId] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const getColorForAwareness = (name) => {
    const cat = customerCategories.find(c => c.name === name)
    return cat?.color || '#6b7280'
  }

  const toggleExpand = (e, id) => {
    e.stopPropagation()
    setExpandedId(expandedId === id ? null : id)
  }

  const openTemplates = (cat) => {
    setSelectedCategory(cat)
  }

  const goBack = () => {
    setSelectedCategory(null)
  }

  // Template Page View
  if (selectedCategory) {
    return (
      <div style={{ background: '#0d1117', color: '#c9d1d9', minHeight: '100vh' }}>
        {/* Sticky Floating Bar */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          zIndex: 100,
          pointerEvents: 'none'
        }}>
          <a 
            href="https://henryworkshard.github.io/henry-dashboard/" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '2px solid #30363d',
              background: '#21262d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              pointerEvents: 'auto'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b949e" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/eddytrains" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              border: '2px solid #238636',
              background: 'linear-gradient(135deg, #238636, #2ea043)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              pointerEvents: 'auto'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://t.me/claborbot" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '2px solid #30363d',
              background: '#21262d',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'auto'
            }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}henry-avatar.jpg`}
              alt="Henry"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </a>
        </div>

        {/* Header */}
        <header style={{ 
          borderBottom: '1px solid #30363d', 
          background: '#161b22',
          paddingTop: 56
        }}>
          <div style={{ maxWidth: 896, margin: '0 auto', padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                onClick={goBack}
                style={{
                  background: '#21262d',
                  border: '1px solid #30363d',
                  borderRadius: 6,
                  padding: '0.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9d1d9" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <div>
                <h1 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#f0f6fc' }}>{selectedCategory.name}</h1>
                <p style={{ fontSize: '0.75rem', color: '#8b949e' }}>Content Templates</p>
              </div>
            </div>
          </div>
        </header>

        {/* Category Info Banner */}
        <div style={{ maxWidth: 896, margin: '0 auto', padding: '1rem' }}>
          <div style={{ 
            background: selectedCategory.color,
            borderRadius: 8,
            padding: '1rem',
            marginBottom: '1.5rem'
          }}>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', marginBottom: 4 }}>Level {selectedCategory.level} — {selectedCategory.approach}</p>
            <p style={{ color: '#fff', fontWeight: 500 }}>{selectedCategory.summary}</p>
          </div>

          {/* Templates */}
          <h2 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#8b949e', marginBottom: 12 }}>Scalped Content</h2>
          {selectedCategory.templates.length === 0 ? (
            <div style={{
              background: '#161b22',
              border: '1px dashed #30363d',
              borderRadius: 8,
              padding: '2rem',
              textAlign: 'center',
              color: '#8b949e'
            }}>
              <p style={{ marginBottom: 8 }}>No content scalped yet for this awareness level</p>
              <p style={{ fontSize: '0.8rem' }}>Find viral reels that fit this category and send them to Henry to add</p>
            </div>
          ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {selectedCategory.templates.map((template) => (
              <div 
                key={template.id}
                style={{
                  background: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: 8,
                  overflow: 'hidden'
                }}
              >
                {/* Template Header */}
                <div style={{ 
                  padding: '1rem',
                  borderBottom: '1px solid #30363d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <h3 style={{ fontWeight: 600, color: '#f0f6fc' }}>{template.name}</h3>
                  <a 
                    href={template.inspoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                      padding: '0.375rem 0.75rem',
                      borderRadius: 6,
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: '#fff',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                      <circle cx="18.406" cy="5.594" r="1.44"/>
                    </svg>
                    Inspo
                  </a>
                </div>

                {/* Template Content */}
                <div style={{ padding: '1rem' }}>
                  {/* Hook */}
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ 
                      fontSize: '0.7rem', 
                      fontWeight: 600, 
                      color: '#8b949e', 
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      display: 'block',
                      marginBottom: 6
                    }}>Hook</label>
                    <div style={{ 
                      background: '#0d1117', 
                      border: '1px solid #30363d', 
                      borderRadius: 6,
                      padding: '0.75rem',
                      color: '#f0f6fc',
                      fontSize: '0.9rem',
                      fontStyle: 'italic'
                    }}>
                      "{template.hook}"
                    </div>
                  </div>

                  {/* Bio */}
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ 
                      fontSize: '0.7rem', 
                      fontWeight: 600, 
                      color: '#8b949e', 
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      display: 'block',
                      marginBottom: 6
                    }}>Bio / Context</label>
                    <div style={{ 
                      background: '#0d1117', 
                      border: '1px solid #30363d', 
                      borderRadius: 6,
                      padding: '0.75rem',
                      color: '#c9d1d9',
                      fontSize: '0.875rem'
                    }}>
                      {template.bio}
                    </div>
                  </div>

                  {/* Instagram Embed */}
                  {template.inspoLink && template.inspoLink.includes('instagram.com/p/') && (
                    <div>
                      <label style={{ 
                        fontSize: '0.7rem', 
                        fontWeight: 600, 
                        color: '#8b949e', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: 'block',
                        marginBottom: 6
                      }}>Source Content</label>
                      <div style={{ 
                        background: '#0d1117', 
                        border: '1px solid #30363d', 
                        borderRadius: 6,
                        overflow: 'hidden'
                      }}>
                        <iframe 
                          src={`${template.inspoLink}embed/`}
                          style={{
                            width: '100%',
                            height: 450,
                            border: 'none',
                            background: '#0d1117'
                          }}
                          allowTransparency="true"
                          scrolling="no"
                          frameBorder="0"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
    )
  }

  // Main View
  return (
    <div style={{ background: '#0d1117', color: '#c9d1d9', minHeight: '100vh' }}>
      {/* Sticky Floating Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        zIndex: 100,
        pointerEvents: 'none'
      }}>
        <a 
          href="https://henryworkshard.github.io/henry-dashboard/" 
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '2px solid #30363d',
            background: '#21262d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            pointerEvents: 'auto'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b949e" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
        </a>
        <a 
          href="https://www.instagram.com/eddytrains" 
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '2px solid #238636',
            background: 'linear-gradient(135deg, #238636, #2ea043)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            pointerEvents: 'auto'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a 
          href="https://t.me/claborbot" 
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '2px solid #30363d',
            background: '#21262d',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'auto'
          }}
        >
          <img 
            src={`${import.meta.env.BASE_URL}henry-avatar.jpg`}
            alt="Henry"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </a>
      </div>

      {/* Header */}
      <header style={{ 
        borderBottom: '1px solid #30363d', 
        background: '#161b22',
        paddingTop: 56
      }}>
        <div style={{ maxWidth: 896, margin: '0 auto', padding: '1rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f0f6fc', marginBottom: '0.5rem' }}>eddytrains</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ 
              background: '#238636', 
              padding: '0.35rem 0.75rem', 
              borderRadius: 16, 
              fontSize: '0.7rem', 
              fontWeight: 500,
              color: '#fff'
            }}>Early Stage</div>
            <div style={{ 
              background: '#21262d', 
              padding: '0.35rem 0.75rem', 
              borderRadius: 16, 
              fontSize: '0.8rem',
              color: '#8b949e'
            }}>
              <strong style={{ color: '#3fb950' }}>152</strong> followers
            </div>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#8b949e', marginTop: '0.5rem' }}>Content Strategy Planner</p>
        </div>
      </header>

      {/* Growth Alert */}
      <div style={{ maxWidth: 896, margin: '0 auto', padding: '1rem' }}>
        <div style={{ 
          background: 'rgba(35, 134, 54, 0.1)', 
          border: '1px solid rgba(35, 134, 54, 0.3)', 
          borderRadius: 8, 
          padding: '0.875rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3fb950" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>
            <div>
              <h3 style={{ fontWeight: 600, color: '#3fb950', marginBottom: 2, fontSize: '0.875rem' }}>Growth Strategy</h3>
              <p style={{ fontSize: '0.8rem', color: '#c9d1d9', lineHeight: 1.4 }}>
                At 152 followers, focus on <span style={{ color: '#3fb950', fontWeight: 500 }}>reach over conversion</span>. 
                Meme-style reels perform best — lean into awareness content while building trust.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ maxWidth: 896, margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ borderBottom: '1px solid #30363d', display: 'flex', gap: 4 }}>
          <button
            onClick={() => setActiveTab('categories')}
            style={{
              padding: '0.625rem 1rem',
              fontWeight: 500,
              fontSize: '0.8rem',
              color: activeTab === 'categories' ? '#f0f6fc' : '#8b949e',
              borderBottom: activeTab === 'categories' ? '2px solid #58a6ff' : '2px solid transparent',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Customer Categories
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            style={{
              padding: '0.625rem 1rem',
              fontWeight: 500,
              fontSize: '0.8rem',
              color: activeTab === 'schedule' ? '#f0f6fc' : '#8b949e',
              borderBottom: activeTab === 'schedule' ? '2px solid #58a6ff' : '2px solid transparent',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Weekly Schedule
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main style={{ maxWidth: 896, margin: '0 auto', padding: '1.5rem 1rem' }}>
        {activeTab === 'categories' && (
          <div>
            <h2 style={{ fontSize: '0.8rem', fontWeight: 600, color: '#8b949e', marginBottom: 12 }}>Awareness Stages</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {customerCategories.map((cat) => (
                <div key={cat.id}>
                  {/* Stage Box */}
                  <div
                    style={{
                      background: '#161b22',
                      border: '1px solid #30363d',
                      borderRadius: expandedId === cat.id ? '8px 8px 0 0' : 8,
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'stretch' }}>
                      {/* Clickable area - opens templates */}
                      <div
                        onClick={() => openTemplates(cat)}
                        style={{
                          flex: 1,
                          padding: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{ 
                          width: 4, 
                          height: 44, 
                          borderRadius: 2, 
                          background: cat.color,
                          flexShrink: 0
                        }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: '0.7rem', color: '#8b949e', marginBottom: 2 }}>Level {cat.level}</div>
                          <h3 style={{ fontWeight: 600, color: '#f0f6fc', marginBottom: 2, fontSize: '0.95rem' }}>{cat.name}</h3>
                          <p style={{ 
                            fontSize: '0.8rem', 
                            color: '#8b949e',
                            lineHeight: 1.3
                          }}>{cat.summary}</p>
                        </div>
                      </div>
                      
                      {/* Dropdown toggle */}
                      <button
                        onClick={(e) => toggleExpand(e, cat.id)}
                        style={{
                          width: 48,
                          background: '#21262d',
                          border: 'none',
                          borderLeft: '1px solid #30363d',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <svg 
                          width="18" 
                          height="18" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="#8b949e" 
                          strokeWidth="2"
                          style={{
                            transform: expandedId === cat.id ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s'
                          }}
                        >
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Expanded Info */}
                  {expandedId === cat.id && (
                    <div style={{
                      background: '#161b22',
                      border: '1px solid #30363d',
                      borderTop: 'none',
                      borderRadius: '0 0 8px 8px',
                      padding: '1rem'
                    }}>
                      <p style={{ fontSize: '0.8rem', color: '#c9d1d9', marginBottom: 12 }}>{cat.fitnessContext}</p>
                      
                      <div style={{ marginBottom: 12 }}>
                        <h4 style={{ fontSize: '0.7rem', fontWeight: 600, color: '#8b949e', textTransform: 'uppercase', marginBottom: 8 }}>Content Types</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {cat.contentTypes.map((ct, i) => (
                            <div key={i} style={{ 
                              background: '#0d1117', 
                              borderRadius: 6, 
                              padding: '0.625rem', 
                              border: '1px solid #30363d' 
                            }}>
                              <span style={{ fontWeight: 500, color: '#f0f6fc', fontSize: '0.8rem' }}>{ct.type}</span>
                              <span style={{ color: '#8b949e', fontSize: '0.75rem' }}> — {ct.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={{ marginBottom: 12 }}>
                        <h4 style={{ fontSize: '0.7rem', fontWeight: 600, color: '#8b949e', textTransform: 'uppercase', marginBottom: 8 }}>Hook Examples</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          {cat.hooks.map((hook, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                              <div style={{ 
                                width: 5, 
                                height: 5, 
                                borderRadius: '50%', 
                                background: cat.color,
                                marginTop: 6,
                                flexShrink: 0
                              }} />
                              <p style={{ color: '#c9d1d9', fontSize: '0.8rem', fontStyle: 'italic' }}>"{hook}"</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={{ 
                        background: `${cat.color}15`,
                        border: `1px solid ${cat.color}33`,
                        borderRadius: 6,
                        padding: '0.75rem'
                      }}>
                        <span style={{ fontWeight: 600, color: cat.color, fontSize: '0.8rem' }}>Approach: </span>
                        <span style={{ color: '#c9d1d9', fontSize: '0.8rem' }}>{cat.approach}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div>
            <div style={{ marginBottom: 16 }}>
              <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#f0f6fc', marginBottom: 4 }}>Weekly Content Schedule</h2>
              <p style={{ color: '#8b949e', fontSize: '0.8rem' }}>Optimized for 150-500 follower growth stage</p>
            </div>

            <div style={{ 
              background: 'rgba(210, 153, 34, 0.1)', 
              border: '1px solid rgba(210, 153, 34, 0.3)', 
              borderRadius: 6, 
              padding: '0.625rem 0.875rem',
              marginBottom: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#d29922' }} />
              <span style={{ color: '#d29922', fontWeight: 500, fontSize: '0.8rem' }}>Meme content = highest reach</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {weeklySchedule.map((day, i) => {
                const category = customerCategories.find(c => c.name === day.awareness);
                return (
                  <div 
                    key={i} 
                    onClick={() => category && openTemplates(category)}
                    style={{ 
                      background: '#161b22', 
                      borderRadius: 8, 
                      border: day.highReach ? '1px solid rgba(210, 153, 34, 0.5)' : '1px solid #30363d',
                      padding: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = '#21262d'}
                    onMouseOut={(e) => e.currentTarget.style.background = '#161b22'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 70 }}>
                        <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f0f6fc' }}>{day.day}</p>
                        <span style={{ fontSize: '0.7rem', color: '#8b949e' }}>{day.format}</span>
                      </div>
                      <div style={{ 
                        width: 3, 
                        height: 36, 
                        borderRadius: 2, 
                        background: getColorForAwareness(day.awareness) 
                      }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                          <span style={{ 
                            padding: '0.2rem 0.5rem', 
                            borderRadius: 4, 
                            fontSize: '0.7rem', 
                            fontWeight: 500,
                            background: getColorForAwareness(day.awareness),
                            color: '#fff'
                          }}>
                            {day.awareness}
                          </span>
                          {day.highReach && (
                            <span style={{ 
                              padding: '0.2rem 0.5rem', 
                              borderRadius: 4, 
                              fontSize: '0.7rem', 
                              fontWeight: 500,
                              background: 'rgba(210, 153, 34, 0.2)',
                              color: '#d29922'
                            }}>
                              High Reach
                            </span>
                          )}
                        </div>
                        <p style={{ fontWeight: 500, color: '#f0f6fc', fontSize: '0.875rem' }}>{day.type}</p>
                        <p style={{ fontSize: '0.8rem', color: '#8b949e' }}>{day.example}</p>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b949e" strokeWidth="2" style={{ flexShrink: 0 }}>
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ background: '#161b22', borderRadius: 8, border: '1px solid #30363d', padding: '1rem', marginTop: 16 }}>
              <h3 style={{ fontWeight: 600, color: '#f0f6fc', marginBottom: 12, fontSize: '0.9rem' }}>Growth Mode Strategy (Under 500 Followers)</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: '0.8rem' }}>
                <p style={{ color: '#c9d1d9' }}><span style={{ color: '#3fb950' }}>✓</span> 4x meme/relatable reels</p>
                <p style={{ color: '#c9d1d9' }}><span style={{ color: '#3fb950' }}>✓</span> Zero CTA content</p>
                <p style={{ color: '#c9d1d9' }}><span style={{ color: '#3fb950' }}>✓</span> Reach over conversion</p>
                <p style={{ color: '#c9d1d9' }}><span style={{ color: '#3fb950' }}>✓</span> Stories 3-5x daily</p>
                <p style={{ color: '#c9d1d9' }}><span style={{ color: '#3fb950' }}>✓</span> Comment on 20 posts/day</p>
                <p style={{ color: '#c9d1d9' }}><span style={{ color: '#3fb950' }}>✓</span> Engage 15min after post</p>
              </div>
            </div>
            
            <div style={{ background: 'rgba(248, 81, 73, 0.1)', border: '1px solid rgba(248, 81, 73, 0.3)', borderRadius: 8, padding: '1rem', marginTop: 12 }}>
              <p style={{ fontSize: '0.8rem', color: '#f85149', fontWeight: 500, marginBottom: 4 }}>Do NOT post yet:</p>
              <p style={{ fontSize: '0.75rem', color: '#c9d1d9' }}>Product Aware or Most Aware content (coaching offers, CTAs). Save these until you hit 500+ followers.</p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #30363d', marginTop: 32 }}>
        <div style={{ maxWidth: 896, margin: '0 auto', padding: '1rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.7rem', color: '#8b949e', marginBottom: 4 }}>Brand Truth</p>
          <p style={{ color: '#c9d1d9', fontStyle: 'italic', fontSize: '0.8rem' }}>"This brand exists to help people train with confidence, consistency, and longevity."</p>
        </div>
      </footer>
    </div>
  )
}

export default App
// Cache bust 1769784136
