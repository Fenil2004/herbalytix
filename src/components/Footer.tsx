import { MessageCircle, Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-background/80 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start max-w-sm mx-auto md:mx-0">
            <h3 className="font-serif text-2xl font-bold text-background mb-4">Herbalytix</h3>
            <p className="text-sm leading-relaxed">
              Premium herbal hair care crafted with nature's finest ingredients for beautiful, healthy hair.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg font-semibold text-background mb-4">Contact</h4>
            <div className="space-y-4 md:space-y-3 text-sm flex flex-col items-center md:items-start">
              <a href="mailto:herbalytix@gmail.com" className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail className="w-4 h-4 shrink-0" /> herbalytix@gmail.com
              </a>
              <a href="tel:+918200969154" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> +91 82009 69154
              </a>
              <a href="https://wa.me/918200969154" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-background transition-colors">
                <MessageCircle className="w-4 h-4 shrink-0" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg font-semibold text-background mb-4">Follow Us</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/__herbalytix__?igsh=bXg2amI0MWFocHEz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://www.facebook.com/share/1R1TfWDUdn/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-background/50 text-sm">
          <p className="text-center md:text-left w-full md:w-auto">© {new Date().getFullYear()} Herbalytix. All rights reserved.</p>
          <div className="flex flex-col items-center md:items-end gap-3 text-background/60 bg-background/5 md:bg-transparent p-5 md:p-0 rounded-2xl md:rounded-none w-full md:w-auto">
            <div className="flex items-center gap-2 hover:text-background transition-colors cursor-default">
              <Globe className="w-4 h-4 shrink-0" />
              <span>Created by Fenil Patel</span>
            </div>
            <a href="mailto:goalgettersguide@gmail.com" className="flex items-start md:items-center gap-2 hover:text-background transition-colors group">
              <Mail className="w-4 h-4 shrink-0 mt-0.5 md:mt-0" />
              <span className="text-xs sm:text-sm text-center md:text-right leading-relaxed">
                To make your website like this contact: <br className="md:hidden" />
                <span className="font-medium text-background/80 group-hover:text-background transition-colors block md:inline mt-1 md:mt-0">goalgettersguide@gmail.com</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
