import { ServiceHero } from "@/components/ServiceHero";
import { Card } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <ServiceHero
        title="Privacy Policy"
        description="How we collect, use, and protect your information"
      />

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <Card className="p-8">
            <div className="prose prose-neutral max-w-none">
              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul>
                <li>Name and contact information</li>
                <li>Service address and billing information</li>
                <li>Service history and preferences</li>
                <li>Communications with our team</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and improve our plumbing services</li>
                <li>Communicate with you about appointments and services</li>
                <li>Send important updates and maintenance reminders</li>
                <li>Process payments and maintain records</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Information Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>Sharing Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our business, as long as they agree to keep this information confidential.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul>
                <li>Email: privacy@planoplumbers.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Main Street, Plano, TX 75023</li>
              </ul>

              <h2>Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
              </p>
              
              <p className="text-sm text-muted-foreground mt-8">
                Last Updated: March 20, 2024
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}