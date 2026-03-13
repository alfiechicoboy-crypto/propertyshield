import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewsPage() {
  const reviews = [
    { name: "James T.", loc: "Darlington", service: "Emergency Repair", quote: "PropertyShield came out on a Sunday to fix a major leak. Professional, honest pricing, and exceptional work. Highly recommended." },
    { name: "Sarah M.", loc: "Newton Aycliffe", service: "Full Re-Roof", quote: "Had our entire roof replaced. The team was punctual, tidy, and the finished roof looks absolutely incredible. A truly premium service from start to finish." },
    { name: "David R.", loc: "Stockton", service: "Chimney Repointing", quote: "Excellent chimney repointing job. They communicated clearly throughout the process and left the site immaculate." },
    { name: "Eleanor P.", loc: "Darlington", service: "Flat Roof Replacement", quote: "We had a persistent leak on our garage flat roof. PropertyShield installed a new EPDM system and it's been perfect through heavy storms." },
    { name: "Michael W.", loc: "Spennymoor", service: "Fascias & Guttering", quote: "Transformed the look of our house with new UPVC fascias. The lads were polite and worked incredibly hard." },
    { name: "Claire H.", loc: "Bishop Auckland", service: "Roof Cleaning", quote: "Our roof was covered in thick moss. They cleaned it safely without pressure washing, and it looks brand new again. Superb service." },
  ];

  return (
    <div>
      <PageHeader 
        title="Customer Testimonials" 
        subtitle="Don't just take our word for it. See what our clients have to say about our roofing services."
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <div className="flex gap-2 mb-4">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-8 h-8 fill-primary text-primary" />)}
            </div>
            <h2 className="text-2xl font-bold text-foreground">5.0 Average Rating</h2>
            <p className="text-muted-foreground">Based on verified customer reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
              >
                <Card className="bg-card border-border h-full flex flex-col">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="flex gap-1 mb-6">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-primary text-primary" />)}
                    </div>
                    <p className="text-muted-foreground text-lg mb-8 italic flex-1">"{review.quote}"</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-bold text-foreground">{review.name}</p>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-primary">{review.loc}</span>
                        <span className="text-muted-foreground">{review.service}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
