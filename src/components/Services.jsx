export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies",
      icon: "🚀"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces",
      icon: "🎨"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications",
      icon: "📱"
    }
  ]

  return (
    <div className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
