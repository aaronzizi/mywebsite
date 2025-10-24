import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Contact et accès — Ostéopathe D.O. à Pantin"
        description="Adresse, téléphone, horaires et prise de rendez-vous Doctolib. Cabinet au 11 Rue Etienne Marcel, Pantin."
        path="/contact"
      />
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/20 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contacter et trouver
              <br />
              <span className="text-primary">votre ostéopathe à Pantin</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Je suis à votre écoute pour toute question ou prise de rendez-vous
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                      <p className="text-muted-foreground">11 Rue Etienne Marcel<br />93500 Pantin</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                      <a href="tel:0148458808" className="text-primary hover:underline text-lg">
                        01 48 45 88 08
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <a href="mailto:contact@zitoun-osteopathe-pantin.fr" className="text-primary hover:underline">
                         aaronzitoun12@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lundi, Mercredi et Jeudi</p>
                        <p>9h00 - 19h30</p>
                        <p className="text-sm italic mt-2">Sur rendez-vous uniquement</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Prise de Rendez-vous</h3>
                  <p className="mb-6 opacity-90">
                    Réservez votre consultation en ligne 24h/24 via Doctolib
                  </p>
                  <a href="https://www.doctolib.fr/osteopathe/pantin/aaron-zitoun" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="secondary" className="w-full">
                      Prendre RDV en ligne
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <p className="mt-4 text-sm opacity-75">
                    Vous pouvez également nous appeler directement
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Accès & Transports</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>🚇 <strong>Métro :</strong> Hoche (ligne 5)</p>
                    <p>🚌 <strong>Bus :</strong> Ligne 330 - Etienne Marcel - Cornet</p>
                    <p>🚗 <strong>Voiture :</strong> Stationnement possible à proximité</p>
                    <p>♿️ <strong>Handicaper :</strong> Entrée accessible PMR</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.0957!2d2.4042!3d48.8959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66c4f!2s11+Rue+Etienne+Marcel%2C+93500+Pantin!5e0!3m2!1sen!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
