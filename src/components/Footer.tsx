import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoAZ from "@/assets/logo-az.png";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logoAZ} alt="Aaron Zitoun Ostéopathe" className="h-16 w-auto" />
            <p className="text-sm text-muted-foreground">
              Votre ostéopathe D.O. à Pantin pour soulager vos douleurs et retrouver un équilibre durable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/parcours" className="text-muted-foreground hover:text-primary transition-colors">
                  Mon Parcours
                </Link>
              </li>
              <li>
                <Link to="/osteopathie" className="text-muted-foreground hover:text-primary transition-colors">
                  L'Ostéopathie
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="text-muted-foreground hover:text-primary transition-colors">
                  Tarifs & Mutuelle
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=11+Rue+Etienne+Marcel,+93500+Pantin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  11 Rue Etienne Marcel<br />
                  93500 Pantin
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:0148458808" className="text-muted-foreground hover:text-primary transition-colors">
                  01 48 45 88 08
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:contact@zitoun-osteopathe-pantin.fr" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@zitoun-osteopathe-pantin.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Horaires</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p className="font-medium text-foreground mb-2">Sur rendez-vous</p>
                  <p>Lundi - Vendredi</p>
                  <p>9h00 - 19h00</p>
                  <p className="mt-2">Samedi</p>
                  <p>9h00 - 13h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aaron Zitoun - Ostéopathe D.O. à Pantin. Tous droits réservés.</p>
          <p className="mt-2">
            <Link to="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
