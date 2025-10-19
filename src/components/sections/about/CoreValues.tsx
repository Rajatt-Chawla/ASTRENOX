export default function CoreValues() {
  const values = [
    {
      title: "Client-First Approach",
      description: "Every solution is tailored to deliver measurable value and ROI for our clients.",
      icon: "💼"
    },
    {
      title: "Technical Excellence",
      description: "We maintain the highest standards in AI development and engineering practices.",
      icon: "⚡"
    },
    {
      title: "Continuous Learning",
      description: "We stay at the forefront of AI innovation through constant research and development.",
      icon: "📚"
    },
    {
      title: "Collaborative Spirit",
      description: "We believe the best solutions emerge from true partnerships and open communication.",
      icon: "🤝"
    },
    {
      title: "Ethical AI",
      description: "We're committed to developing AI responsibly, with fairness and transparency.",
      icon: "⚖️"
    },
    {
      title: "Results-Driven",
      description: "We measure success by the tangible impact we create for our clients' businesses.",
      icon: "🎯"
    }
  ]

  return (
    <section className="py-20 bg-bg-base">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 text-center">
            Core Values
          </h2>
          <p className="text-xl text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-bg-dark p-8 rounded-xl border border-border-subtle hover:border-accent-blue transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

