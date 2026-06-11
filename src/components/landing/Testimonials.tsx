import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "GreenMind didn't just show me my carbon footprint; it gamified my reduction. I've cut my emissions by 30% and it feels like playing a game.",
    author: "Sarah J.",
    role: "Product Designer"
  },
  {
    quote: "The AI receipt scanner is pure magic. I just snap a photo of my grocery bill and my Carbon Twin updates instantly. Incredible tech.",
    author: "Michael T.",
    role: "Software Engineer"
  },
  {
    quote: "The Future Simulator convinced me to buy an e-bike. Seeing the projected 5-year carbon and cost savings visualized made the decision easy.",
    author: "Elena R.",
    role: "Startup Founder"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Loved by Eco-Warriors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-full relative"
            >
              <div className="text-greenmind-primary/20 text-6xl absolute top-4 left-4 font-serif">"</div>
              <p className="text-gray-300 relative z-10 text-lg mb-8 pt-4">
                {test.quote}
              </p>
              <div>
                <p className="text-white font-semibold">{test.author}</p>
                <p className="text-greenmind-primary text-sm">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
