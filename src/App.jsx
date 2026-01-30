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
        name: "Relatable Gym Meme",
        inspoLink: "https://www.instagram.com/reel/example1",
        hook: "Why are you always training arms",
        bio: "For the casual gym-goer who knows they do this"
      },
      { 
        id: 2, 
        name: "POV Training Moment",
        inspoLink: "https://www.instagram.com/reel/example2",
        hook: "POV: You finally stopped guessing in the gym",
        bio: "Show the feeling of purposeful training"
      },
      { 
        id: 3, 
        name: "Identity Story",
        inspoLink: "https://www.instagram.com/reel/example3",
        hook: "This is what training should feel like",
        bio: "Aspirational identity content"
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
        name: "Pain Point Call-Out",
        inspoLink: "https://www.instagram.com/reel/example4",
        hook: "This is why your shoulder pain keeps coming back",
        bio: "Name the problem they feel but can't explain"
      },
      { 
        id: 2, 
        name: "Training Inconsistency",
        inspoLink: "https://www.instagram.com/reel/example5",
        hook: "You're not inconsistent — your training is",
        bio: "Reframe blame from person to system"
      },
      { 
        id: 3, 
        name: "Common Mistake",
        inspoLink: "https://www.instagram.com/reel/example6",
        hook: "Most people with shoulder issues skip this warm-up",
        bio: "Highlight overlooked fundamentals"
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
        name: "Warm-Up Tutorial",
        inspoLink: "https://www.instagram.com/reel/example7",
        hook: "This warm-up matters more than your top set",
        bio: "Educational content with clear reasoning"
      },
      { 
        id: 2, 
        name: "Exercise Essentials",
        inspoLink: "https://www.instagram.com/reel/example8",
        hook: "Stop wasting your time in the gym if you can't do these 5 exercises",
        bio: "List format with authority"
      },
      { 
        id: 3, 
        name: "Movement Demo",
        inspoLink: "https://www.instagram.com/reel/example9",
        hook: "Go to exercises for quad growth",
        bio: "Clean demonstration with explanation"
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
    templates: [
      { 
        id: 1, 
        name: "Programming Logic",
        inspoLink: "https://www.instagram.com/reel/example10",
        hook: "This is how I program around shoulder pain",
        bio: "Show your thinking and methodology"
      },
      { 
        id: 2, 
        name: "Client Check-In",
        inspoLink: "https://www.instagram.com/reel/example11",
        hook: "This is how I adjust a program mid-week",
        bio: "Behind-the-scenes of real coaching"
      },
      { 
        id: 3, 
        name: "Process Breakdown",
        inspoLink: "https://www.instagram.com/reel/example12",
        hook: "This is why we do this before loading",
        bio: "Explain the why behind your methods"
      }
    ]
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
        name: "Spots Open",
        inspoLink: "https://www.instagram.com/reel/example13",
        hook: "Spots open for online coaching — tailored training & weekly check-ins",
        bio: "Direct offer with clear value"
      },
      { 
        id: 2, 
        name: "Simple CTA",
        inspoLink: "https://www.instagram.com/reel/example14",
        hook: "DM 'COACH' to get started",
        bio: "Minimal friction call-to-action"
      },
      { 
        id: 3, 
        name: "Urgency Nudge",
        inspoLink: "https://www.instagram.com/reel/example15",
        hook: "If this sounds familiar, it's worth acting now",
        bio: "Subtle urgency without pressure"
      }
    ]
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
        {/* Header */}
        <header style={{ 
          borderBottom: '1px solid #30363d', 
          background: '#161b22',
          position: 'sticky',
          top: 0,
          zIndex: 50
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
          <h2 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#8b949e', marginBottom: 12 }}>Templates</h2>
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

                  {/* Content (placeholder) */}
                  <div>
                    <label style={{ 
                      fontSize: '0.7rem', 
                      fontWeight: 600, 
                      color: '#8b949e', 
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      display: 'block',
                      marginBottom: 6
                    }}>Content</label>
                    <div style={{ 
                      background: '#0d1117', 
                      border: '1px dashed #30363d', 
                      borderRadius: 6,
                      padding: '2rem',
                      color: '#8b949e',
                      fontSize: '0.875rem',
                      textAlign: 'center'
                    }}>
                      Content to be added...
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Main View
  return (
    <div style={{ background: '#0d1117', color: '#c9d1d9', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ 
        borderBottom: '1px solid #30363d', 
        background: '#161b22',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ maxWidth: 896, margin: '0 auto', padding: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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
                <h1 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#f0f6fc' }}>eddytrains</h1>
                <p style={{ fontSize: '0.75rem', color: '#8b949e' }}>Content Strategy Planner</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '0.65rem', color: '#8b949e' }}>Followers</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f0f6fc' }}>152</p>
              </div>
              <div style={{ 
                background: '#238636', 
                padding: '0.35rem 0.75rem', 
                borderRadius: 16, 
                fontSize: '0.7rem', 
                fontWeight: 500,
                color: '#fff'
              }}>Early Stage</div>
            </div>
          </div>
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
              {weeklySchedule.map((day, i) => (
                <div 
                  key={i} 
                  style={{ 
                    background: '#161b22', 
                    borderRadius: 8, 
                    border: day.highReach ? '1px solid rgba(210, 153, 34, 0.5)' : '1px solid #30363d',
                    padding: '1rem'
                  }}
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
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#161b22', borderRadius: 8, border: '1px solid #30363d', padding: '1rem', marginTop: 16 }}>
              <h3 style={{ fontWeight: 600, color: '#f0f6fc', marginBottom: 12, fontSize: '0.9rem' }}>Strategy Notes</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: '0.8rem' }}>
                <p style={{ color: '#c9d1d9' }}><span style={{ color: '#3fb950' }}>✓</span> Post 5-7 reels/week</p>
                <p style={{ color: '#c9d1d9' }}><span style={{ color: '#3fb950' }}>✓</span> Soft CTAs only</p>
                <p style={{ color: '#c9d1d9' }}><span style={{ color: '#3fb950' }}>✓</span> Meme content 2x/week</p>
                <p style={{ color: '#c9d1d9' }}><span style={{ color: '#3fb950' }}>✓</span> Stories daily</p>
                <p style={{ color: '#c9d1d9' }}><span style={{ color: '#3fb950' }}>✓</span> Educational = trust</p>
                <p style={{ color: '#c9d1d9' }}><span style={{ color: '#3fb950' }}>✓</span> Engage 15min after</p>
              </div>
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
