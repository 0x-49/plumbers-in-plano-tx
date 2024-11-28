"use client";

import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { ServiceProcess } from "@/components/ServiceProcess";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { WaterTestingParameters } from "@/components/WaterTestingParameters";
import { 
  Flask,
  Beaker,
  ClipboardCheck,
  FileText,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: <Flask className="w-8 h-8 text-[#0caadc]" />,
    title: "Comprehensive Testing",
    description: "Analysis of all key water quality parameters"
  },
  {
    icon: <Beaker className="w-8 h-8 text-[#0caadc]" />,
    title: "Lab Analysis",
    description: "Professional laboratory testing and certification"
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-[#0caadc]" />,
    title: "Detailed Reports",
    description: "Clear explanation of test results and recommendations"
  },
  {
    icon: <FileText className="w-8 h-8 text-[#0caadc]" />,
    title: "Treatment Plans",
    description: "Customized solutions based on test results"
  }
];

const processSteps = [
  {
    title: "Sample Collection",
    description: "Professional collection of water samples from key points in your plumbing system."
  },
  {
    title: "Laboratory Analysis",
    description: "Comprehensive testing of samples in our certified laboratory."
  },
  {
    title: "Results Review",
    description: "Detailed analysis of test results by our water quality experts."
  },
  {
    title: "Recommendations",
    description: "Custom treatment recommendations based on your specific water quality issues."
  },
  {
    title: "Solution Implementation",
    description: "Professional installation of recommended water treatment systems."
  }
];

const faqItems = [
  {
    question: "What does water quality testing include?",
    answer: "Our comprehensive testing includes analysis of pH levels, hardness, chlorine, bacteria, minerals, contaminants, and other key parameters that affect water quality."
  },
  {
    question: "How long does testing take?",
    answer: "Basic on-site testing takes about 30 minutes. Laboratory analysis typically takes 3-5 business days for complete results."
  },
  {
    question: "How often should I test my water?",
    answer: "We recommend annual testing for most households. However, more frequent testing may be needed if you notice changes in water taste, odor, or color."
  },
  {
    question: "Is testing necessary if I have city water?",
    answer: "Yes, while municipal water is treated, issues can arise in your home's plumbing system. Testing helps identify problems specific to your property."
  },
  {
    question: "What happens if issues are found?",
    answer: "We provide detailed recommendations for water treatment solutions based on the test results, along with cost estimates for implementing these solutions."
  }
];

export default function WaterQualityTestingPage() {
  return (
    <div>
      <ServiceHero
        title="Water Quality Testing"
        description="Professional water testing and analysis services in Plano, TX"
        image="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80"
      />

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Professional Water Testing Services</h2>
              <p className="text-muted-foreground mb-8">
                Our comprehensive water quality testing services help identify potential issues and 
                ensure your water is safe and healthy. We use advanced testing methods and provide 
                detailed analysis of results.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>

              <Card className="p-6 mb-12">
                <h3 className="text-xl font-bold mb-6">Testing Parameters</h3>
                <WaterTestingParameters />
              </Card>

              <ServiceProcess
                title="Our Testing Process"
                description="We follow a systematic approach to analyze your water quality."
                steps={processSteps}
              />

              <div className="mt-12">
                <ServiceFAQ
                  title="Water Testing FAQ"
                  description="Common questions about water quality testing"
                  faqs={faqItems}
                />
              </div>
            </div>

            <div>
              <Card className="p-6 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Schedule Testing</h3>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}