import Link from "next/link";
import { WrenchIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <WrenchIcon className="h-6 w-6" style={{ color: "#0caadc" }} />
              <span className="font-bold text-xl">Plano Plumbers</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Professional plumbing services in Plano, Texas. Available 24/7 for all your plumbing needs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/emergency-plumbing" className="text-muted-foreground hover:text-foreground">
                  Emergency Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/residential-plumbing" className="text-muted-foreground hover:text-foreground">
                  Residential Services
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-plumbing" className="text-muted-foreground hover:text-foreground">
                  Commercial Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-foreground">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">123 Main Street</li>
              <li className="text-muted-foreground">Plano, TX 75023</li>
              <li>
                <Link href="tel:+1234567890" className="text-[#0caadc] hover:text-[#1481ba]">
                  (123) 456-7890
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Plano Plumbers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}